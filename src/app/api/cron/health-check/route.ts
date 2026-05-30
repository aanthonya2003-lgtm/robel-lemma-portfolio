import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TARGETS = [
  "https://lemmalimited.com",
  "https://robellemma.com/s/Resume-Robel-Lemma.pdf",
];

interface CheckResult {
  url: string;
  ok: boolean;
  status?: number;
  error?: string;
}

export async function GET(req: Request) {
  // Authorize Vercel cron + manual checks
  const auth = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const results: CheckResult[] = await Promise.all(
    TARGETS.map(async (url): Promise<CheckResult> => {
      try {
        const ctrl = new AbortController();
        const t = setTimeout(() => ctrl.abort(), 10_000);
        const res = await fetch(url, {
          method: "HEAD",
          redirect: "follow",
          signal: ctrl.signal,
        });
        clearTimeout(t);
        return { url, ok: res.ok, status: res.status };
      } catch (err) {
        return {
          url,
          ok: false,
          error: err instanceof Error ? err.message : "fetch failed",
        };
      }
    })
  );

  const allOk = results.every((r) => r.ok);
  return NextResponse.json(
    {
      ok: allOk,
      checkedAt: new Date().toISOString(),
      results,
    },
    { status: allOk ? 200 : 207 }
  );
}
