import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (per IP, max 5 requests per 10 minutes)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

function formatFieldName(key: string): string {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function buildEmailHtml(formName: string, fields: Record<string, string>): string {
  const submittedAt = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  // Categorize fields
  const travellerFields = ['name', 'fullName', 'email', 'emailAddress', 'phone', 'phoneNumber', 'mobile', 'mobileNumber', 'whatsapp', 'whatsappNumber'];
  const tripFields = ['destination', 'departureCity', 'travelDate', 'returnDate', 'nights', 'numberOfNights', 'adults', 'children', 'infants', 'pax', 'guests', 'budget', 'hotelCategory', 'packageName', 'travelType', 'tripType', 'date'];
  const messageFields = ['message', 'additionalRequirements', 'specialRequests', 'notes', 'comments'];

  const travellerRows: string[] = [];
  const tripRows: string[] = [];
  const messageRows: string[] = [];
  const otherRows: string[] = [];

  for (const [key, value] of Object.entries(fields)) {
    if (!value || value.toString().trim() === '') continue;
    const label = formatFieldName(key);
    const val = value.toString().trim();
    const row = `<tr><td style="padding:8px 12px;color:#6b7280;font-size:14px;width:40%;vertical-align:top;">${label}</td><td style="padding:8px 12px;color:#111827;font-size:14px;font-weight:500;">${val}</td></tr>`;

    const lk = key.toLowerCase();
    if (travellerFields.some((f) => lk === f.toLowerCase())) {
      travellerRows.push(row);
    } else if (tripFields.some((f) => lk === f.toLowerCase())) {
      tripRows.push(row);
    } else if (messageFields.some((f) => lk === f.toLowerCase())) {
      messageRows.push(row);
    } else {
      otherRows.push(row);
    }
  }

  const section = (title: string, rows: string[]) =>
    rows.length === 0
      ? ''
      : `
    <div style="margin-bottom:24px;">
      <h3 style="margin:0 0 10px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#0B8A8F;border-bottom:2px solid #e5f7f7;padding-bottom:6px;">${title}</h3>
      <table style="width:100%;border-collapse:collapse;background:#f9fafb;border-radius:8px;overflow:hidden;">
        <tbody>${rows.join('')}</tbody>
      </table>
    </div>`;

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>New Travel Inquiry</title></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0B8A8F,#0ABBC2);padding:32px 32px 24px;text-align:center;">
            <div style="font-size:28px;margin-bottom:8px;">✈️</div>
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">New Travel Inquiry</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Vibrant Holidays — vibrantholidayspune.com</p>
          </td>
        </tr>
        <!-- Meta info -->
        <tr>
          <td style="padding:20px 32px;background:#f0fafa;border-bottom:1px solid #e5f7f7;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:13px;color:#6b7280;">Form Name</td>
                <td style="font-size:13px;color:#0B8A8F;font-weight:700;text-align:right;">${formName}</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#6b7280;padding-top:6px;">Submitted At</td>
                <td style="font-size:13px;color:#111827;font-weight:500;text-align:right;padding-top:6px;">${submittedAt} IST</td>
              </tr>
              <tr>
                <td style="font-size:13px;color:#6b7280;padding-top:6px;">Website</td>
                <td style="font-size:13px;padding-top:6px;text-align:right;"><a href="https://www.vibrantholidayspune.com" style="color:#0B8A8F;text-decoration:none;">vibrantholidayspune.com</a></td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:28px 32px;">
            ${section('Traveller Details', travellerRows)}
            ${section('Trip Details', tripRows)}
            ${section('Other Details', otherRows)}
            ${messageRows.length > 0 ? `
            <div style="margin-bottom:24px;">
              <h3 style="margin:0 0 10px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#0B8A8F;border-bottom:2px solid #e5f7f7;padding-bottom:6px;">Additional Message</h3>
              <div style="background:#f9fafb;border-radius:8px;padding:14px 16px;font-size:14px;color:#374151;line-height:1.6;">${messageRows.map((r) => {
                const match = r.match(/<td[^>]*>([^<]*)<\/td>\s*<td[^>]*>([^<]*)<\/td>/);
                return match ? match[2] : '';
              }).join('<br>')}</div>
            </div>` : ''}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">This email was sent automatically from the Vibrant Holidays website inquiry form.</p>
            <p style="margin:6px 0 0;font-size:12px;color:#9ca3af;">Reply directly to this email to respond to the customer.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? req.headers.get('x-real-ip') ?? 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    // Parse body
    let body: Record<string, unknown>;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const { formName, ...fields } = body as { formName?: string; [key: string]: unknown };

    // Server-side validation
    const resolvedFormName = (formName ?? 'General Inquiry').toString().trim();
    const stringFields: Record<string, string> = {};
    for (const [k, v] of Object.entries(fields)) {
      if (v !== null && v !== undefined && v !== '') {
        stringFields[k] = String(v).trim();
      }
    }

    // Require at least a name or phone
    const hasName = stringFields.name || stringFields.fullName;
    const hasPhone = stringFields.phone || stringFields.phoneNumber || stringFields.mobile || stringFields.mobileNumber;
    if (!hasName && !hasPhone) {
      return NextResponse.json({ error: 'Please provide at least your name or phone number.' }, { status: 400 });
    }

    // Build subject
    const subject = `New Inquiry: ${resolvedFormName} — Vibrant Holidays`;

    // Build reply-to from submitted email if available
    const replyTo = stringFields.email || stringFields.emailAddress || undefined;

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Vibrant Holidays <onboarding@resend.dev>',
      to: ['info@vibrantholidayspune.com'],
      subject,
      html: buildEmailHtml(resolvedFormName, stringFields),
      ...(replyTo ? { replyTo } : {}),
    });

    if (error) {
      console.error('[/api/contact] Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email. Please try again or contact us on WhatsApp.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Enquiry sent successfully!' }, { status: 200 });
  } catch (err) {
    console.error('[/api/contact] Unexpected error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred. Please try again.' }, { status: 500 });
  }
}
