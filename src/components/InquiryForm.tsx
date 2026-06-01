"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type InquiryFormProps = {
  type?: "Contact" | "Puppy Inquiry" | "Reservation" | "Waitlist";
  puppyName?: string;
  compact?: boolean;
};

type FormState = "idle" | "sending" | "success" | "error";

export function InquiryForm({
  type = "Contact",
  puppyName,
  compact = false
}: InquiryFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Please try again.");
      }

      setState("success");
      setMessage(
        result.message ||
          "Thank you. Your inquiry has been received and our team will follow up shortly."
      );
      event.currentTarget.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : `Something went wrong. Please call or text ${site.phoneDisplay}.`
      );
    }
  }

  return (
    <form className={compact ? "inquiry-form inquiry-form--compact" : "inquiry-form"} onSubmit={onSubmit}>
      <input type="hidden" name="type" value={type} />
      {puppyName ? <input type="hidden" name="puppy" value={puppyName} /> : null}

      <div className="form-grid">
        <label>
          Full name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          City and state
          <input name="location" autoComplete="address-level2" />
        </label>
        <label>
          Preferred timing
          <select name="timeline" defaultValue="">
            <option value="">Select a timeframe</option>
            <option value="Ready as soon as approved">Ready as soon as approved</option>
            <option value="Within 1-2 weeks">Within 1-2 weeks</option>
            <option value="Within 30 days">Within 30 days</option>
            <option value="Still exploring">Still exploring</option>
          </select>
        </label>
        <label>
          Pickup or delivery
          <select name="deliveryPreference" defaultValue="">
            <option value="">Select preference</option>
            <option value="Pickup in Dallas">Pickup in Dallas</option>
            <option value="Delivery guidance needed">Delivery guidance needed</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <label>
        Message
        <textarea
          name="message"
          rows={compact ? 4 : 5}
          defaultValue={
            puppyName
              ? `I am interested in ${puppyName}. Please confirm availability and reservation details.`
              : ""
          }
          required
        />
      </label>

      <button className="button button--dark form-button" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send Inquiry"}
      </button>

      <p className="form-helper">
        Inquiries are delivered to {site.email}. You can also call or text {site.phoneDisplay}.
      </p>

      {message ? (
        <p className={state === "error" ? "form-note form-note--error" : "form-note"} aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}
