import { Resend } from "resend";

// Lazy init — never throws at import time. Throws only when key missing at send time.
let _client: Resend | null = null;

export function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  if (!_client) {
    _client = new Resend(key);
  }
  return _client;
}

export const CONTACT_TO = "robelblemma@gmail.com";
// Resend's verified sandbox sender — works without domain verification.
// To send from a custom domain, verify at resend.com/domains and change this.
export const CONTACT_FROM = "Robel Lemma Site <onboarding@resend.dev>";
