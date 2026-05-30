import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const resendEndpoint = "https://api.resend.com/emails";

export async function POST(request: Request) {
  const formData = await request.formData();
  const values = Object.fromEntries(formData.entries());
  const name = text(values.name);
  const email = text(values.email);
  const phone = text(values.phone);
  const location = text(values.location);
  const message = text(values.message);
  const type = text(values.type) || "Website Inquiry";
  const puppy = text(values.puppy);
  const timeline = text(values.timeline);
  const deliveryPreference = text(values.deliveryPreference);

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please include your name, email, and message." },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ||
    `Crown Puppy Boutique <hello@${site.domain}>`;
  const apiKey = process.env.RESEND_API_KEY;

  const textBody = [
    `Type: ${type}`,
    puppy ? `Puppy: ${puppy}` : "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    location ? `Location: ${location}` : "",
    timeline ? `Preferred timing: ${timeline}` : "",
    deliveryPreference ? `Pickup or delivery: ${deliveryPreference}` : "",
    "",
    message
  ]
    .filter(Boolean)
    .join("\n");

  if (!apiKey) {
    const isProduction = process.env.NODE_ENV === "production";

    return NextResponse.json(
      {
        message: isProduction
          ? "Email delivery is not configured yet. Please email info@crownpuppyboutique.com directly."
          : "Preview received. Add RESEND_API_KEY before launch so this sends to info@crownpuppyboutique.com."
      },
      { status: isProduction ? 503 : 200 }
    );
  }

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `[Crown Puppy Boutique] ${puppy || type}`,
      html: htmlEmail({
        type,
        puppy,
        name,
        email,
        phone,
        location,
        timeline,
        deliveryPreference,
        message
      }),
      text: textBody
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      {
        message:
          "The form could not send right now. Please email info@crownpuppyboutique.com directly."
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message:
      "Thank you. Your inquiry was sent to info@crownpuppyboutique.com."
  });
}

function text(value: FormDataEntryValue | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}

function htmlEmail(fields: Record<string, string>) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#171a1d">
      <h1 style="font-size:22px">New Crown Puppy Boutique inquiry</h1>
      <p><strong>Type:</strong> ${escapeHtml(fields.type)}</p>
      ${fields.puppy ? `<p><strong>Puppy:</strong> ${escapeHtml(fields.puppy)}</p>` : ""}
      <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
      ${fields.phone ? `<p><strong>Phone:</strong> ${escapeHtml(fields.phone)}</p>` : ""}
      ${fields.location ? `<p><strong>Location:</strong> ${escapeHtml(fields.location)}</p>` : ""}
      ${fields.timeline ? `<p><strong>Preferred timing:</strong> ${escapeHtml(fields.timeline)}</p>` : ""}
      ${fields.deliveryPreference ? `<p><strong>Pickup or delivery:</strong> ${escapeHtml(fields.deliveryPreference)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(fields.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
