"use server";

import { Knock } from "@knocklabs/node";

export type ContactState = {
  status: "idle" | "error" | "success";
  message: string;
  fieldErrors?: Record<string, string>;
};

const initialResponse: ContactState = { status: "idle", message: "" };
const serviceOptions = new Set(["product-engineering", "electronics-manufacturing", "iot", "ai-vision", "cloud-applications", "network-security"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(data: FormData, name: string, maxLength: number): string {
  const value = data.get(name);
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, maxLength);
}

export async function submitContact(
  previousState: ContactState = initialResponse,
  formData: FormData,
): Promise<ContactState> {
  void previousState;
  const name = readField(formData, "name", 120);
  const email = readField(formData, "email", 254).toLowerCase();
  const phone = readField(formData, "phone", 40);
  const service = readField(formData, "service", 64);
  const brief = readField(formData, "brief", 4000);
  const ndaAccepted = formData.get("nda") === "on";
  const fieldErrors: Record<string, string> = {};

  if (name.length < 2) fieldErrors.name = "Enter your name (at least 2 characters).";
  if (!emailPattern.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (phone && !/^[+\d()\s.-]{7,40}$/.test(phone)) fieldErrors.phone = "Enter a valid phone number.";
  if (!serviceOptions.has(service)) fieldErrors.service = "Choose an area of interest.";
  if (brief.length < 20) fieldErrors.brief = "Please add a little more detail (at least 20 characters).";
  if (!ndaAccepted) fieldErrors.nda = "Please confirm before sharing project details.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Please review the highlighted fields.", fieldErrors };
  }

  const apiKey = process.env.KNOCK_API_KEY;
  const workflowKey = process.env.KNOCK_WORKFLOW_KEY;
  if (!apiKey || !workflowKey) {
    return {
      status: "error",
      message: "The inquiry service is not configured yet. Please email info@gauranitaitech.com directly.",
    };
  }

  try {
    const knock = new Knock({ apiKey, maxRetries: 1 });
    await knock.workflows.trigger(workflowKey, {
      recipients: [{ id: "gaura-inquiry-inbox", email: "info@gauranitaitech.com" }],
      data: { name, email, phone, service, brief },
    });
    return {
      status: "success",
      message: "Thank you. Your inquiry has been sent to our engineering team.",
    };
  } catch (error) {
    console.error("Contact workflow delivery failed", error);
    return {
      status: "error",
      message: "We could not send your inquiry right now. Please email info@gauranitaitech.com directly.",
    };
  }
}
