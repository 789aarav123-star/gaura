import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CircuitBoard,
  Cloud,
  Eye,
  Factory,
  Globe2,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  Star,
} from "lucide-react";
import { ContactForm } from "./contact-form";
import styles from "./page.module.css";

const capabilities = [
  {
    index: "01 / Product engineering",
    title: "Product engineering & hardware design",
    description: "From early architecture and PCB design through embedded firmware, we turn complex requirements into dependable products.",
    note: "Hardware, firmware, validation",
    Icon: CircuitBoard,
  },
  {
    index: "02 / Electronics manufacturing",
    title: "Electronics manufacturing",
    description: "A connected path from prototype to production, with disciplined sourcing, assembly and testing at every stage.",
    note: "PCB assembly to box build",
    Icon: Factory,
  },
  {
    index: "03 / Connected devices",
    title: "IoT solutions",
    description: "Secure connected products that bring devices, edge systems and cloud services together in the field.",
    note: "Embedded, edge, telemetry",
    Icon: RadioTower,
  },
  {
    index: "04 / Machine perception",
    title: "AI vision",
    description: "Practical computer-vision systems for inspection, recognition and operational insight at the edge.",
    note: "Vision, inference, automation",
    Icon: Eye,
  },
  {
    index: "05 / Digital platforms",
    title: "Cloud applications",
    description: "Scalable applications and cloud platforms designed to support connected products and growing operations.",
    note: "Applications, data, integration",
    Icon: Cloud,
  },
];

const reviews = [
  {
    sector: "Industrial automation",
    quote: "The team brought design and production together. We reached a reliable pilot faster, with fewer hand-offs and clearer decisions along the way.",
    role: "Engineering leadership",
    region: "European manufacturing group",
  },
  {
    sector: "Electronics development",
    quote: "Their attention to detail through board design and validation gave us confidence as we moved from an early build toward production.",
    role: "Product development team",
    region: "Technology business",
  },
  {
    sector: "Connected systems",
    quote: "Gaura Nitai understood the device and the wider platform it needed to work with. That end-to-end perspective made a real difference.",
    role: "Operations leadership",
    region: "Connected products company",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={footer ? styles.footerBrandLogo : styles.brand} href="/" aria-label="Gaura Nitai Technologies home">
      <Image src="/gaura_logo.webp" alt="Gaura Nitai Technologies logo" width={160} height={120} priority={!footer} className={footer ? styles.footerLogo : styles.logo} />
      <span className={styles.brandCopy}>
        <span className={footer ? styles.footerBrandName : styles.brandName}>Gaura Nitai Technologies</span>
        {!footer && <span className={styles.brandLine}>Engineering with purpose</span>}
      </span>
    </Link>
  );
}

function CircuitDrawing() {
  return (
    <svg className={styles.circuit} viewBox="0 0 420 210" role="img" aria-label="Circuit board schematic illustration">
      <g fill="none" stroke="#1B365D" strokeWidth="1.5">
        <path d="M25 52h78l24 24h48M25 158h72l22-22h56M395 52h-70l-26 26h-48M395 158h-70l-24-23h-50" />
        <path d="M88 22v30m242-30v30M88 188v-30m242 30v-30M155 22v54m110-54v54M155 188v-52m110 52v-52" />
        <rect x="152" y="72" width="116" height="66" />
        <path d="M164 84h92v42h-92zM185 92h50m-50 12h50m-50 12h32" stroke="#9A7B38" />
      </g>
      <g fill="#9A7B38">
        <circle cx="25" cy="52" r="4" /><circle cx="25" cy="158" r="4" /><circle cx="395" cy="52" r="4" /><circle cx="395" cy="158" r="4" />
        <circle cx="88" cy="22" r="3" /><circle cx="330" cy="22" r="3" /><circle cx="88" cy="188" r="3" /><circle cx="330" cy="188" r="3" />
      </g>
      <text x="210" y="110" textAnchor="middle" fill="#161616" fontFamily="var(--sans)" fontSize="10" fontWeight="600" letterSpacing="1.4">GNT / SYSTEMS</text>
    </svg>
  );
}

export default function Home() {
  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.nav} aria-label="Main navigation">
            <a href="#expertise">Expertise</a>
            <a href="#impact">Our impact</a>
            <a href="#reviews">Partners</a>
            <a href="#office">Office</a>
          </nav>
          <a className={styles.headerCta} href="#contact">Start a conversation <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`${styles.container} ${styles.heroTop}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>Bengaluru · Engineering for a connected world</p>
            <h1 className={styles.heroTitle} id="hero-title">Engineering Excellence for Tomorrow&apos;s <span>Technology</span></h1>
            <p className={styles.heroDescription}>We bring product engineering, electronics manufacturing and digital platforms together to move ambitious ideas into dependable solutions.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">Discuss your project <ArrowRight size={16} aria-hidden="true" /></a>
              <a className={styles.secondaryButton} href="#expertise">Explore our expertise <ArrowDownRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
          <aside className={styles.heroSpec} aria-label="Engineering system illustration">
            <div className={styles.specHead}>
              <span>Connected engineering</span>
              <span className={styles.specStatus}>Designed to deliver</span>
            </div>
            <CircuitDrawing />
            <div className={styles.specRows}>
              <div className={styles.specRow}><span>Approach</span><strong>End-to-end development</strong></div>
              <div className={styles.specRow}><span>Capabilities</span><strong>Hardware + software</strong></div>
              <div className={styles.specRow}><span>Based in</span><strong>Bengaluru, India</strong></div>
            </div>
          </aside>
        </div>
        <div className={styles.container}>
          <div className={styles.metrics} aria-label="Company experience">
            <div className={styles.metric}><span className={styles.metricNumber}>500+</span><span className={styles.metricLabel}>Projects delivered</span><span className={styles.metricNote}>Across engineering and technology</span></div>
            <div className={styles.metric}><span className={styles.metricNumber}>50+</span><span className={styles.metricLabel}>Global clients</span><span className={styles.metricNote}>Long-term collaboration worldwide</span></div>
            <div className={styles.metric}><span className={styles.metricNumber}>15+</span><span className={styles.metricLabel}>Countries served</span><span className={styles.metricNote}>Solutions reaching global markets</span></div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="expertise" aria-labelledby="expertise-title">
        <div className={styles.container}>
          <div className={styles.expertiseHead}>
            <div><p className={styles.eyebrow}>Expertise</p><h2 className={styles.sectionTitle} id="expertise-title">One partner, from first sketch to scale</h2></div>
            <p>We combine specialist disciplines into a practical engineering partnership—so every part of your product works together.</p>
          </div>
          <div className={styles.serviceGrid}>
            {capabilities.map(({ index, title, description, note, Icon }) => (
              <article className={styles.service} key={index}>
                <Icon className={styles.serviceIcon} size={26} strokeWidth={1.5} aria-hidden="true" />
                <span className={styles.serviceIndex}>{index}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.serviceFooter}><span>{note}</span><ArrowUpRight size={16} aria-hidden="true" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.container} id="impact" aria-label="Global impact">
        <div className={styles.benchmarks}>
          <div><p className={styles.eyebrow}>Built around outcomes</p><h2 className={styles.benchmarkTitle}>Precision at every stage.</h2><p className={styles.benchmarkIntro}>A clear focus on craft, communication and dependable delivery—from early decisions through production and beyond.</p></div>
          <div className={styles.benchmarkStats}>
            <div className={styles.benchmarkStat}><span className={styles.benchmarkValue}>500+</span><span className={styles.benchmarkLabel}>Projects delivered</span><span className={styles.benchmarkText}>Experience across product lifecycles.</span></div>
            <div className={styles.benchmarkStat}><span className={styles.benchmarkValue}>50+</span><span className={styles.benchmarkLabel}>Global clients</span><span className={styles.benchmarkText}>Relationships built through collaboration.</span></div>
            <div className={styles.benchmarkStat}><span className={styles.benchmarkValue}>15+</span><span className={styles.benchmarkLabel}>Countries served</span><span className={styles.benchmarkText}>An international outlook, rooted in India.</span></div>
            <div className={styles.benchmarkStat}><span className={styles.benchmarkValue}><Globe2 size={31} strokeWidth={1.4} aria-hidden="true" /></span><span className={styles.benchmarkLabel}>Global delivery</span><span className={styles.benchmarkText}>Engineering support across markets.</span></div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="reviews" aria-labelledby="reviews-title">
        <div className={styles.container}>
          <div className={styles.testimonialsHead}>
            <div><p className={styles.eyebrow}>Partner perspectives</p><h2 className={styles.sectionTitle} id="reviews-title">Good engineering is felt in the details</h2></div>
            <p className={styles.reviewNote}>Representative B2B feedback examples for layout demonstration. Replace with approved client testimonials before publishing as endorsements.</p>
          </div>
          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <article className={styles.review} key={review.sector}>
                <div className={styles.reviewMeta}><span>{review.sector}</span><span className={styles.reviewStars} aria-label="Five out of five stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={12} fill="currentColor" aria-hidden="true" />)}</span></div>
                <blockquote>“{review.quote}”</blockquote>
                <div className={styles.reviewByline}><p className={styles.reviewRole}>{review.role}</p><p className={styles.reviewOrg}>{review.region}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.rule}`} id="office" aria-labelledby="office-title">
        <div className={styles.container}>
          <div className={styles.locationHead}>
            <div><p className={styles.eyebrow}>Visit our Bengaluru office</p><h2 className={styles.sectionTitle} id="office-title">Rooted in Bengaluru. Connected everywhere.</h2></div>
            <p className={styles.coordinates}>12.9410701° N, 77.6191046° E</p>
          </div>
          <div className={styles.locationGrid}>
            <div className={styles.locationInfo}>
              <p className={styles.locationLabel}><MapPin size={15} aria-hidden="true" /> Gaura Nitai Technologies</p>
              <h3>Let&apos;s meet where ideas take shape.</h3>
              <p className={styles.address}>4th Floor, INFINIX STRUCTURES,<br />41, Adugodi Main Rd, Koramangala 8th Block,<br />Adugodi, Bengaluru, Karnataka 560095, India</p>
              <div className={styles.locationFacts}>
                <div className={styles.locationFact}><span>Plus code</span><strong>WJR9+CJ</strong></div>
                <div className={styles.locationFact}><span>City</span><strong>Bengaluru, India</strong></div>
              </div>
              <div className={styles.locationContact}>
                <a href="tel:+917550238142"><Phone size={16} aria-hidden="true" /> +91 755 023 8142</a>
                <a href="mailto:info@gauranitaitech.com"><Mail size={16} aria-hidden="true" /> info@gauranitaitech.com</a>
              </div>
            </div>
            <iframe className={styles.mapFrame} src="https://maps.google.com/maps?q=12.9410701,77.6191046&amp;hl=en&amp;z=15&amp;output=embed" title="Map showing the Gaura Nitai Technologies Bengaluru office" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.contactSection}`} id="contact" aria-labelledby="contact-title">
        <div className={styles.container}>
          <div className={styles.contactHead}>
            <div><p className={styles.eyebrow}>Start a conversation</p><h2 className={styles.sectionTitle} id="contact-title">Bring us the challenge.</h2></div>
            <p>Tell us what you are working on. Our team will review your note and get back to you about the right next step.</p>
          </div>
          <div className={styles.contactLayout}>
            <aside className={styles.contactAside}>
              <h3>Good work begins with a clear brief.</h3>
              <p>Share a little about your product, your goals and what you need to solve. We will take it from there.</p>
              <a className={styles.contactAsideLink} href="mailto:info@gauranitaitech.com"><Mail size={16} aria-hidden="true" /> info@gauranitaitech.com <ArrowUpRight size={15} aria-hidden="true" /></a>
              <p className={styles.contactAsideMark}>We respect your work. Please avoid sending confidential drawings or files until an NDA is in place.</p>
            </aside>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <Brand footer />
              <p className={styles.footerDescription}>Product engineering, manufacturing and digital solutions shaped by a commitment to thoughtful work and dependable outcomes.</p>
            </div>
            <div className={styles.footerCol}><h3>Explore</h3><nav className={styles.footerLinks} aria-label="Footer navigation"><a href="#expertise">Expertise</a><a href="#impact">Our impact</a><a href="#reviews">Partner perspectives</a><a href="#office">Bengaluru office</a></nav></div>
            <div className={styles.footerCol}><h3>Get in touch</h3><div className={styles.footerLinks}><a href="mailto:info@gauranitaitech.com">info@gauranitaitech.com</a><a href="tel:+917550238142">+91 755 023 8142</a><a href="https://maps.google.com/?q=12.9410701,77.6191046" target="_blank" rel="noreferrer">Find us in Bengaluru <ArrowUpRight size={13} aria-hidden="true" /></a></div></div>
          </div>
          <div className={styles.footerBottom}><span>© 2026 Gaura Nitai Technologies Private Limited</span><nav aria-label="Legal links"><Link href="/privacy-policy">Privacy policy</Link></nav></div>
        </div>
      </footer>
    </main>
  );
}
