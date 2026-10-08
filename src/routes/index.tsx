import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  MapPin,
  Users,
  Leaf,
  FileText,
  CreditCard,
  BookOpen,
  FlaskConical,
  ArrowRight,
  Globe,
} from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";
import mujLogo from "@/assets/muj-logo.png";
import sdgBadges from "@/assets/sdg-badges.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ICETBLS-2026 | International Conference on Emerging Trends in Biotechnology, Life Sciences and Sustainability" },
      {
        name: "description",
        content:
          "ICETBLS-2026 — International Conference on Emerging Trends in Biotechnology, Life Sciences and Sustainability. 15–16 December 2026, Manipal University Jaipur, Rajasthan, India. Hybrid mode. Organized by the Department of Biosciences, FoSTA.",
      },
      {
        property: "og:title",
        content: "ICETBLS-2026 | Manipal University Jaipur",
      },
      {
        property: "og:description",
        content:
          "Join ICETBLS-2026: Frontiers in Biotechnology, Life Sciences and Sustainable Innovation. 15–16 December 2026, Manipal University Jaipur (Hybrid).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ABSTRACT_URL = "https://forms.gle/KovdWQ3YggboTnk8A";
const PAYMENT_URL =
  "https://formbuilder.ccavenue.com/live/ccavenue/manipal-university-jaipur-2/icetbls-2026020";

const themes = [
  "Molecular Biology, Genetics and Genomics",
  "Microbiology and Microbial Biotechnology",
  "Plant and Agricultural Biotechnology",
  "Environmental Biotechnology and Sustainability",
  "Medical, Pharmaceutical and Healthcare Biotechnology",
  "Food Biotechnology, Nutrition and Food Security",
  "Industrial Biotechnology and Bioprocess Engineering",
  "Bioinformatics, Computational Biology and Artificial Intelligence",
  "Nanobiotechnology, Biomaterials and Biosensors",
  "Biodiversity, Ecology and Conservation Biology",
  "Climate Change, Circular Bioeconomy and Resource Recovery",
  "Emerging Trends in Life Sciences and Sustainable Innovation",
];

const fees = [
  { category: "UG/PG Students", fee: "₹ 1,500" },
  { category: "Research Scholars", fee: "₹ 3,000" },
  { category: "Faculty / Academicians", fee: "₹ 5,000" },
  { category: "Industry Participants", fee: "₹ 10,000" },
  { category: "International Participants", fee: "USD 200" },
];

const dates = [
  { label: "Abstract Submission Deadline", date: "20 October 2026" },
  { label: "Full Paper Submission Deadline", date: "15 November 2026" },
  { label: "Review Period", date: "16 – 30 November 2026" },
  { label: "Acceptance Notification", date: "5 December 2026" },
];

const leadership = [
  {
    role: "Chief Patron",
    people: [
      {
        name: "Lt. Gen. (Dr.) M. D. Venkatesh",
        title: "Chairman, Manipal University Jaipur",
      },
    ],
  },
  {
    role: "Patron",
    people: [
      {
        name: "Prof. (Dr.) Niti Nipun Sharma",
        title: "President, Manipal University Jaipur",
      },
    ],
  },
  {
    role: "Co-Patrons",
    people: [
      { name: "Cmd. (Dr.) Anil Rana", title: "Pro-President, Manipal University Jaipur" },
      { name: "Prof. (Dr.) Amit Soni", title: "Registrar, Manipal University Jaipur" },
      { name: "Prof. (Dr.) Nitu Bhatnagar", title: "Provost, Manipal University Jaipur" },
    ],
  },
  {
    role: "Conference Chairs",
    people: [
      { name: "Prof. (Dr.) Kuldip Singh Sangwan", title: "Dean, FoSTA, Manipal University Jaipur" },
      {
        name: "Prof. (Dr.) Ashima Bagaria",
        title: "Associate Dean, School of Physical and Biological Sciences, Manipal University Jaipur",
      },
      {
        name: "Dr. Kamakhya Prakash Misra",
        title: "Associate Professor & HoD (I/C), Department of Biosciences, Manipal University Jaipur",
      },
    ],
  },
  {
    role: "Conveners",
    people: [
      { name: "Dr. Arun Kumar", title: "Department of Biosciences, Manipal University Jaipur" },
      { name: "Dr. Veer Singh", title: "Department of Biosciences, Manipal University Jaipur" },
      { name: "Dr. Inderesh Kumar Maurya", title: "Department of Biosciences, Manipal University Jaipur" },
    ],
  },
];

const sdgs = [
  { n: 3, label: "Good Health and Well-being" },
  { n: 4, label: "Quality Education" },
  { n: 9, label: "Industry, Innovation and Infrastructure" },
  { n: 12, label: "Responsible Consumption and Production" },
  { n: 13, label: "Climate Action" },
  { n: 17, label: "Partnerships for the Goals" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#themes", label: "Themes" },
  { href: "#dates", label: "Dates" },
  { href: "#fees", label: "Registration" },
  { href: "#leadership", label: "Leadership" },
  { href: "#venue", label: "Venue" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src="/favicon.png" alt="MUJ" className="size-9" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-xs font-bold tracking-wide">ICETBLS-2026</span>
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                Manipal University Jaipur
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-underline transition-colors hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-anim rounded-full bg-accent px-4 py-2 text-xs font-bold tracking-wide text-accent-foreground uppercase hover:opacity-90"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
        <img
          src={campusHero}
          alt="Manipal University Jaipur campus"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary" />
        <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 rounded-xl bg-card p-4 shadow-lg sm:flex-row sm:items-center">
            <img src={mujLogo} alt="Manipal University Jaipur" className="h-12 w-auto sm:h-14" />
            <div className="text-card-foreground">
              <p className="mb-1.5 text-[11px] font-semibold tracking-wide">
                Contributing to the Sustainable Development Goals
              </p>
              <img src={sdgBadges} alt="UN Sustainable Development Goals 3, 4, 9, 12, 13 and 17" className="h-10 w-auto sm:h-12" />
            </div>
          </div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase">
            <Globe className="size-3.5" /> International Conference · Hybrid Mode
          </p>
          <h1 className="max-w-4xl font-display text-4xl leading-[1.08] font-semibold text-balance sm:text-6xl">
            Emerging Trends in Biotechnology, Life Sciences and Sustainability
          </h1>
          <p className="mt-4 font-display text-2xl font-medium text-accent sm:text-3xl">
            ICETBLS-2026
          </p>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80 italic">
            Theme: Frontiers in Biotechnology, Life Sciences and Sustainable Innovation
          </p>

          <div className="mt-12 grid max-w-3xl grid-cols-1 gap-6 border-t border-primary-foreground/20 pt-8 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <CalendarDays className="mt-0.5 size-5 text-accent" />
              <div>
                <p className="text-[10px] font-bold tracking-widest text-primary-foreground/60 uppercase">Date</p>
                <p className="font-semibold">15 – 16 December 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 text-accent" />
              <div>
                <p className="text-[10px] font-bold tracking-widest text-primary-foreground/60 uppercase">Venue</p>
                <p className="font-semibold">Manipal University Jaipur, Rajasthan, India</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-0.5 size-5 text-accent" />
              <div>
                <p className="text-[10px] font-bold tracking-widest text-primary-foreground/60 uppercase">Mode</p>
                <p className="font-semibold">Hybrid (In-person + Online)</p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={ABSTRACT_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-anim group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground hover:opacity-90"
            >
              Submit Your Abstract{" "}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-anim group inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-foreground/15"
            >
              Registration & Payment
            </a>
          </div>
        </div>
      </section>

      {/* SDG strip */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-5 sm:px-6">
          <span className="text-[11px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
            Contributing to the UN Sustainable Development Goals
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {sdgs.map((s) => (
              <span
                key={s.n}
                title={s.label}
                className="grid size-9 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground"
              >
                {s.n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="section-label">About the Conference</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-balance sm:text-4xl">
              A platform for frontiers in biotechnology and sustainable innovation
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              The International Conference on Emerging Trends in Biotechnology, Life Sciences and
              Sustainability (ICETBLS-2026) is organized by the{" "}
              <strong className="text-foreground">Department of Biosciences</strong>, School of
              Physical and Biological Sciences, Faculty of Science, Technology and Architecture
              (FoSTA), Manipal University Jaipur.
            </p>
            <p>
              The conference brings together researchers, academicians, industry professionals and
              students to exchange ideas on the latest advances across the life sciences — from
              genomics and microbial biotechnology to climate change, circular bioeconomy and
              sustainable innovation.
            </p>
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
              <BookOpen className="mt-1 size-6 shrink-0 text-accent" />
              <p className="text-sm">
                Selected high-quality papers will be considered for publication in a{" "}
                <strong className="text-accent">Scopus-indexed journal or book series</strong>,
                subject to peer review, editorial evaluation, scope and publisher policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section id="themes" className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-12 flex items-center gap-4">
            <FlaskConical className="size-7 text-accent" />
            <div>
              <p className="section-label">Call for Papers</p>
              <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">
                Scientific Themes
              </h2>
            </div>
          </div>
          <ol className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((t, i) => (
              <li key={t} className="flex gap-4 border-l-2 border-accent/40 pl-4">
                <span className="font-display text-lg font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug font-medium">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Dates + Fees */}
      <section className="mx-auto grid max-w-6xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <div id="dates">
          <p className="section-label">Mark Your Calendar</p>
          <h2 className="mt-1 mb-10 font-display text-3xl font-semibold sm:text-4xl">
            Important Dates
          </h2>
          <div className="space-y-0">
            {dates.map((d, i) => (
              <div
                key={d.label}
                className={`relative border-l-2 pb-8 pl-8 ${
                  i === dates.length - 1 ? "border-transparent" : "border-accent/30"
                }`}
              >
                <span className="absolute top-1 -left-[7px] size-3 rounded-full bg-accent ring-4 ring-background" />
                <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  {d.date}
                </p>
                <p className="mt-1 font-semibold">{d.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="fees">
          <p className="section-label">Join Us</p>
          <h2 className="mt-1 mb-10 font-display text-3xl font-semibold sm:text-4xl">
            Registration Fees
          </h2>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-5 py-3 text-left font-semibold">Category</th>
                  <th className="px-5 py-3 text-right font-semibold">Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fees.map((f) => (
                  <tr key={f.category} className="transition-colors hover:bg-secondary">
                    <td className="px-5 py-4 font-medium">{f.category}</td>
                    <td className="px-5 py-4 text-right font-bold text-primary">{f.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground italic">
            * Registration fees do not include accommodation.
          </p>
          <a
            href={PAYMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-anim group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-sm font-bold text-accent-foreground hover:opacity-90"
          >
            <CreditCard className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            Proceed to Registration & Payment
          </a>
        </div>
      </section>

      {/* Submission CTA */}
      <section className="border-y border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div className="flex items-start gap-5">
            <FileText className="mt-1 size-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-display text-2xl font-semibold">Submit Your Abstract</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Share your research with an international audience. Abstract submission is open
                until 20 October 2026.
              </p>
              <a
                href={ABSTRACT_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-anim group mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-accent-foreground uppercase tracking-wide hover:opacity-90"
              >
                Submit Abstract{" "}
                <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <Leaf className="mt-1 size-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-display text-2xl font-semibold">Publication Opportunity</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">
                Selected high-quality papers will be considered for publication in a Scopus-indexed
                journal or book series, subject to peer review and publisher policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-14 text-center">
          <p className="section-label">Organized By</p>
          <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">
            Conference Leadership
          </h2>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {leadership.map((group) => (
            <div key={group.role}>
              <h3 className="mb-5 border-b-2 border-accent pb-2 text-center text-xs font-bold tracking-[0.18em] text-accent uppercase">
                {group.role}
              </h3>
              <div className="space-y-6">
                {group.people.map((p) => (
                  <div key={p.name} className="text-center">
                    <p className="text-sm font-bold">{p.name}</p>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{p.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-12 flex items-center gap-4">
            <MapPin className="size-7 text-accent" />
            <div>
              <p className="section-label">Getting Here</p>
              <h2 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">
                Conference Venue
              </h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Map */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <iframe
                title="Manipal University Jaipur campus location map"
                src="https://maps.google.com/maps?q=Manipal%20University%20Jaipur&z=14&output=embed"
                className="min-h-72 w-full flex-1 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex flex-wrap items-center justify-between gap-3 p-5">
                <div className="min-w-0">
                  <p className="text-sm font-bold">Manipal University Jaipur</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    Dehmi Kalan, Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007, India
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps?q=Manipal+University+Jaipur"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-anim rounded-full bg-primary px-4 py-2 text-xs font-bold whitespace-nowrap text-primary-foreground hover:opacity-90"
                >
                  Get Directions
                </a>
              </div>
            </div>
            {/* Video */}
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              <video
                src="/venue-tour.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="h-72 w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-semibold">Department of Biosciences</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              School of Physical and Biological Sciences
              <br />
              Faculty of Science, Technology and Architecture (FoSTA)
              <br />
              Manipal University Jaipur, Dehmi Kalan, Jaipur-Ajmer Expressway, Jaipur, Rajasthan
              303007, India
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              Conference Secretariat
            </h4>
            <p className="mt-3 text-sm text-primary-foreground/75">
              For queries regarding abstract submission, registration and accommodation, reach out
              to the conveners at the Department of Biosciences, Manipal University Jaipur.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={ABSTRACT_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-anim rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-accent-foreground uppercase tracking-wide hover:opacity-90"
              >
                Submit Abstract
              </a>
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-anim rounded-full border border-primary-foreground/40 px-5 py-2.5 text-xs font-bold uppercase tracking-wide hover:bg-primary-foreground/15"
              >
                Register & Pay
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-[11px] tracking-wide text-primary-foreground/50 sm:flex-row sm:px-6">
            <p>© 2026 ICETBLS — Manipal University Jaipur. All rights reserved.</p>
            <p>15 – 16 December 2026 · Hybrid Mode</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
