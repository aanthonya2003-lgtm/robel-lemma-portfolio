import { NextResponse } from "next/server";
import { getResend, CONTACT_TO, CONTACT_FROM } from "@/lib/resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim() || "New inquiry from robellemma.com";
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (name.length > 200 || email.length > 200 || subject.length > 300 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Input too long." },
      { status: 400 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const html = `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#0a0a0a;color:#f5f0e8;font-family:system-ui,-apple-system,sans-serif;">
        <div style="max-width:600px;margin:0 auto;padding:32px;">
          <div style="border-bottom:1px solid #c8a96e;padding-bottom:16px;margin-bottom:24px;">
            <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#c8a96e;margin-bottom:4px;">New Contact Form Submission</div>
            <div style="font-size:20px;font-weight:700;color:#f5f0e8;">robellemma.com</div>
          </div>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#888880;font-size:12px;text-transform:uppercase;letter-spacing:0.18em;width:90px;">Name</td><td style="padding:8px 0;color:#f5f0e8;font-size:16px;">${safeName}</td></tr>
            <tr><td style="padding:8px 0;color:#888880;font-size:12px;text-transform:uppercase;letter-spacing:0.18em;">Email</td><td style="padding:8px 0;color:#f5f0e8;font-size:16px;"><a href="mailto:${safeEmail}" style="color:#c8a96e;text-decoration:none;">${safeEmail}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888880;font-size:12px;text-transform:uppercase;letter-spacing:0.18em;">Subject</td><td style="padding:8px 0;color:#f5f0e8;font-size:16px;">${safeSubject}</td></tr>
          </table>
          <div style="background:#111111;border-left:3px solid #c8a96e;padding:20px;border-radius:4px;">
            <div style="font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#888880;margin-bottom:12px;">Message</div>
            <div style="color:#f5f0e8;font-size:15px;line-height:1.6;">${safeMessage}</div>
          </div>
          <div style="margin-top:32px;padding-top:16px;border-top:1px solid #222;font-size:11px;color:#888880;text-align:center;letter-spacing:0.1em;">
            Sent from robellemma.com · ${new Date().toUTCString()}
          </div>
        </div>
      </body>
    </html>
  `;

  const text = `New inquiry from robellemma.com

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent: ${new Date().toUTCString()}
`;

  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: email,
      subject: `[robellemma.com] ${subject}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Email delivery failed. Please try again or call directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    const msg =
      err instanceof Error && err.message.includes("RESEND_API_KEY")
        ? "Mail service not yet configured. Please call (858) 342-0231 or email robelblemma@gmail.com directly."
        : "Something went wrong sending your message.";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
