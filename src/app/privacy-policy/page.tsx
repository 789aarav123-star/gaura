import Link from "next/link";
import styles from "../page.module.css";
import privacy from "./privacy.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "How Gaura Nitai Technologies handles website visitor and inquiry information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <main className={privacy.page}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Legal information</p>
        <h1 className={privacy.title}>Privacy policy</h1>
        <p className={privacy.lead}>This policy explains what information Gaura Nitai Technologies Private Limited collects through this website, why we use it, and the choices available to you.</p>
        <p className={privacy.updated}>Effective date: 28 October 2026</p>

        <section className={privacy.section}>
          <h2>Who we are</h2>
          <p>Gaura Nitai Technologies Private Limited (referred to as “Gaura Nitai”, “we”, “us” or “our”) provides engineering, electronics manufacturing and technology services. For privacy questions, contact <a href="mailto:info@gauranitaitech.com">info@gauranitaitech.com</a>.</p>
        </section>

        <section className={privacy.section}>
          <h2>Information we collect</h2>
          <p>When you contact us, we collect the information you choose to provide, such as your name, work email address, phone number, area of interest and project brief. Please do not submit confidential technical files or sensitive personal information through this public website.</p>
          <p>Our hosting provider may also process basic technical information needed to deliver and secure the website, such as IP address, request time, browser type, requested pages and error details.</p>
        </section>

        <section className={privacy.section}>
          <h2>How we use information</h2>
          <ul>
            <li>To respond to enquiries, discuss projects and provide requested information.</li>
            <li>To operate, maintain and protect the website, detect abuse and troubleshoot service issues.</li>
            <li>To meet legal obligations and establish or defend legal claims when necessary.</li>
          </ul>
          <p>We do not sell personal information or use enquiry details for unrelated advertising.</p>
        </section>

        <section className={privacy.section}>
          <h2>Cookies and trackers</h2>
          <p>This website is designed without advertising pixels or third-party analytics trackers. The website and its infrastructure may use strictly necessary technical storage, such as security or load-balancing cookies, to deliver the service. Embedded Google Maps is a third-party service; when it loads, Google may receive technical information and may set or read its own cookies according to its policies. You can avoid this request by not loading the map or by using browser privacy controls.</p>
        </section>

        <section className={privacy.section}>
          <h2>Sharing and service providers</h2>
          <p>We share information only with service providers who help operate the website or deliver your enquiry, and only as needed for those purposes. Providers are expected to protect information and act under appropriate contractual terms. We may also disclose information when required by applicable law or to protect rights and safety.</p>
        </section>

        <section className={privacy.section}>
          <h2>Retention and security</h2>
          <p>We retain enquiry information for as long as needed to respond, manage a business relationship and meet legal or record-keeping requirements. We apply reasonable technical and organizational safeguards, but no internet transmission or storage system can be guaranteed completely secure.</p>
        </section>

        <section className={privacy.section}>
          <h2>Your privacy rights</h2>
          <p>Depending on where you live and the laws that apply, you may have the right to request access to your personal information, correct inaccurate information, request deletion, restrict or object to certain processing, withdraw consent where processing relies on consent, or receive a portable copy. You may also complain to your local data-protection authority.</p>
          <p>To exercise a right, email <a href="mailto:info@gauranitaitech.com">info@gauranitaitech.com</a> with enough detail for us to understand and verify your request. We will respond within the period required by applicable law.</p>
        </section>

        <section className={privacy.section}>
          <h2>International and Indian privacy requirements</h2>
          <p>We aim to handle personal information in a manner consistent with applicable privacy obligations, including the EU General Data Protection Regulation (GDPR) where it applies and India’s Digital Personal Data Protection Act, 2023 (DPDP Act), together with implementing rules when applicable. Depending on the processing, our legal basis may be your consent, steps taken at your request, a legitimate business interest, or compliance with a legal obligation.</p>
          <p>If information is transferred internationally, we take steps required by applicable law to protect it.</p>
        </section>

        <section className={privacy.section}>
          <h2>Children and policy updates</h2>
          <p>This website and our services are intended for businesses and are not directed to children. We do not knowingly collect children’s personal information through this site. We may update this policy as our practices or legal requirements change; the effective date above shows when the current version took effect.</p>
        </section>

        <div className={privacy.back}><Link href="/">Return to Gaura Nitai Technologies</Link></div>
      </div>
    </main>
  );
}
