"use client";

import { useActionState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { submitContact, type ContactState } from "./actions";
import styles from "./page.module.css";

const initialState: ContactState = { status: "idle", message: "" };

const serviceOptions = [
  ["product-engineering", "Product engineering & hardware design"],
  ["electronics-manufacturing", "Electronics manufacturing"],
  ["iot", "IoT & smart devices"],
  ["ai-vision", "AI vision"],
  ["cloud-applications", "Cloud applications"],
  ["network-security", "SD-WAN & network security"],
];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <CheckCircle2 aria-hidden="true" size={38} strokeWidth={1.5} />
        <h3>Inquiry received</h3>
        <p>{state.message}</p>
        <a className={styles.textLink} href="mailto:info@gauranitaitech.com">Email us directly</a>
      </div>
    );
  }

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.formTopline}>
        <h3>Tell us what you&apos;re building</h3>
        <p>Fields marked with <span aria-hidden="true">*</span> are required.</p>
      </div>

      {state.status === "error" && (
        <div className={styles.formAlert} role="alert" aria-live="polite">{state.message}</div>
      )}

      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label htmlFor="name">Full name <span aria-hidden="true">*</span></label>
          <input id="name" name="name" autoComplete="name" maxLength={120} required aria-invalid={Boolean(state.fieldErrors?.name)} aria-describedby={state.fieldErrors?.name ? "name-error" : undefined} />
          {state.fieldErrors?.name && <p className={styles.fieldError} id="name-error">{state.fieldErrors.name}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Work email <span aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={254} required aria-invalid={Boolean(state.fieldErrors?.email)} aria-describedby={state.fieldErrors?.email ? "email-error" : undefined} />
          {state.fieldErrors?.email && <p className={styles.fieldError} id="email-error">{state.fieldErrors.email}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={40} aria-invalid={Boolean(state.fieldErrors?.phone)} aria-describedby={state.fieldErrors?.phone ? "phone-error" : undefined} />
          {state.fieldErrors?.phone && <p className={styles.fieldError} id="phone-error">{state.fieldErrors.phone}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="service">Area of interest <span aria-hidden="true">*</span></label>
          <select id="service" name="service" defaultValue="" required aria-invalid={Boolean(state.fieldErrors?.service)} aria-describedby={state.fieldErrors?.service ? "service-error" : undefined}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          {state.fieldErrors?.service && <p className={styles.fieldError} id="service-error">{state.fieldErrors.service}</p>}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="brief">Project brief <span aria-hidden="true">*</span></label>
        <textarea id="brief" name="brief" rows={5} maxLength={4000} minLength={20} placeholder="Share your goals, constraints, timelines or production needs." required aria-invalid={Boolean(state.fieldErrors?.brief)} aria-describedby={state.fieldErrors?.brief ? "brief-error" : undefined} />
        {state.fieldErrors?.brief && <p className={styles.fieldError} id="brief-error">{state.fieldErrors.brief}</p>}
      </div>

      <div className={styles.consent}>
        <input id="nda" name="nda" type="checkbox" required aria-invalid={Boolean(state.fieldErrors?.nda)} aria-describedby={state.fieldErrors?.nda ? "nda-error" : undefined} />
        <label htmlFor="nda">I understand that sensitive project details should only be shared after an NDA is in place. <span aria-hidden="true">*</span></label>
      </div>
      {state.fieldErrors?.nda && <p className={styles.fieldError} id="nda-error">{state.fieldErrors.nda}</p>}

      <div className={styles.formActions}>
        <button className={styles.submitButton} type="submit" disabled={pending}>
          {pending ? "Sending inquiry…" : "Send inquiry"}
          <ArrowRight aria-hidden="true" size={17} />
        </button>
        <p>Your information is used only to respond to this inquiry.</p>
      </div>
    </form>
  );
}
