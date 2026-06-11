import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const web3FormsEndpoint = "https://api.web3forms.com/submit";
const fallbackAccessKey = "74404394-155f-445b-a923-8f1bd2e64264";

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

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY || fallbackAccessKey;

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

  let response: Response;

  try {
    const payload = new URLSearchParams({
      access_key: accessKey,
      from_name: site.name,
      subject: `[Crown Puppy Boutique] ${puppy || type}`,
      name,
      email,
      phone,
      location,
      type,
      puppy,
      timeline,
      deliveryPreference,
      message: textBody,
      replyto: email,
      botcheck: ""
    });

    response = await fetch(web3FormsEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: payload
    });
  } catch {
    return NextResponse.json(
      {
        message:
          `The form could not send right now. Please call or text ${site.phoneDisplay}.`
      },
      { status: 502 }
    );
  }

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null;

  if (!response.ok || result?.success === false) {
    return NextResponse.json(
      {
        message:
          `The form could not send right now. Please call or text ${site.phoneDisplay}.`
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message:
      `Thank you. Your inquiry was sent to ${site.email}.`
  });
}

function text(value: FormDataEntryValue | undefined): string {
  return typeof value === "string" ? value.trim() : "";
}
