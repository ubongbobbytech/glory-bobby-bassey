import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, ArrowUpRight, ArrowRight, Check, X, Star, Workflow, Bot, Filter, Share2, Monitor } from "lucide-react";

import { Reveal } from "@/components/reveal";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import heroImg from "@/assets/workspace-hero.jpg";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectMessaging from "@/assets/project-messaging.jpg";
import projectVideo from "@/assets/project-video.jpg";
import projectOnboarding from "@/assets/project-onboarding.jpg";
import coachWendyPoster from "@/assets/coach-wendy-poster.jpg";
import gloryAsset from "@/assets/glory-bassey.jpg.asset.json";
import coachWendyAsset from "@/assets/coach-wendy-sales-funnel.mp4.asset.json";

const portraitUrl = gloryAsset.url;
const coachWendyVideo = coachWendyAsset.url;

/* --- Update these when you have the final details ---------------------- */
const EMAIL = "glorybobbybassey@gmail.com"; // TODO: replace with your real email
const LINKEDIN_URL = "https://www.linkedin.com/"; // TODO: replace with your profile URL
/* ------------------------------------------------------------------------ */

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Past Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  // TODO: replace with your real roles, companies, dates and achievements
  {
    role: "GHL & Marketing Automation Specialist",
    company: "Freelance / Contract",
    period: "2023 — Present",
    description:
      "Designing end-to-end marketing automation systems for brands — email ecosystems, CRM workflows and content pipelines that run on autopilot.",
  },
  {
    role: "Digital Marketing Specialist",
    company: "Placeholder Company",
    period: "2021 — 2023",
    description:
      "Owned campaign execution across email, social and paid channels, building reporting dashboards that connected spend to revenue.",
  },
  {
    role: "Marketing Coordinator",
    company: "Placeholder Company",
    period: "2019 — 2021",
    description:
      "Supported campaign operations and lead management, streamlining handoffs between creative, sales and analytics teams.",
  },
];

const projects = [
  {
    title: "E-commerce Flow Optimization",
    description:
      "End-to-end customer journey mapping and lifecycle automation for a high-growth retail brand.",
    image: projectDashboard,
    alt: "Marketing automation dashboard with performance charts",
    overview:
      "A complete overhaul of the customer journey for a fast-growing retail brand — from first-touch welcome series to post-purchase retention flows.",
    highlights: [
      "Mapped the full journey across email, SMS and on-site touchpoints",
      "Rebuilt abandoned-cart and win-back flows with dynamic product feeds",
      "Segmented the audience by purchase behavior and engagement score",
    ],
    results: [
      { label: "Open rate", value: "+38%" },
      { label: "Cart recovery", value: "2.4x" },
      { label: "Manual work", value: "-60%" },
    ],
    tools: ["Klaviyo", "Shopify", "GA4", "Looker Studio"],
  },
  {
    title: "Coach Wendy Sales Funnel",
    description:
      "A complete sales funnel for Coach Wendy — lead capture, booking and automated follow-up that turns enquiries into enrolled clients.",
    image: coachWendyPoster,
    alt: "Coach Wendy sales funnel walkthrough video",
    video: coachWendyVideo,
    overview:
      "A full sales funnel built for Coach Wendy: a high-converting opt-in page, automated email and SMS follow-up, and a booking flow that moves warm enquiries all the way through to a paid coaching client.",
    highlights: [
      "Built the opt-in and application pages around one clear offer",
      "Automated the follow-up sequence across email and SMS until every lead is booked",
      "Connected the calendar, CRM and pipeline so booked calls appear with no manual entry",
    ],
    results: [
      { label: "Sales on launch day", value: "10" },
      { label: "Follow-up speed", value: "<5 min" },
      { label: "Manual steps", value: "0" },
    ],
    tools: ["GoHighLevel"],
  },
  {
    title: "Automated Content Distribution",
    description:
      "Video-first content pipeline deploying campaigns across six platforms from a single workflow.",
    image: projectVideo,
    alt: "Video editing timeline on an ultrawide monitor",
    overview:
      "A video-first content engine that takes a single master asset and automatically versions, schedules and publishes it across six channels.",
    highlights: [
      "Single upload fans out to Instagram, TikTok, YouTube, LinkedIn and more",
      "Auto-generated captions, aspect ratios and thumbnails per platform",
      "Publishing calendar driven by a single no-code workflow",
    ],
    results: [
      { label: "Publishing time", value: "-80%" },
      { label: "Platforms covered", value: "6" },
      { label: "Content output", value: "3x" },
    ],
    tools: ["Make", "Adobe Premiere Pro", "CapCut", "Notion"],
  },
  {
    title: "Client Onboarding Automation",
    description:
      "A hands-free onboarding funnel in GoHighLevel that takes new leads from signup to kickoff without manual steps.",
    image: projectOnboarding,
    alt: "Client onboarding funnel and automation workflow on a laptop screen",
    overview:
      "A complete onboarding system built in GoHighLevel — new signups are captured, qualified and routed through an automated workflow that emails, creates deals and notifies the team before anyone lifts a finger.",
    highlights: [
      "Built a multi-stage onboarding funnel with automatic lead capture and tagging",
      "Automated welcome sequences, deal creation and team notifications",
      "Added follow-up reminders so no new client waits more than 24 hours",
    ],
    results: [
      { label: "Onboarding time", value: "-65%" },
      { label: "Follow-up speed", value: "<24h" },
      { label: "Manual steps", value: "0" },
    ],
    tools: ["GoHighLevel", "Zapier", "Calendly", "Google Sheets"],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Glory Bobby Bassey — GHL & Marketing Automation Specialist",
      },
      {
        name: "description",
        content:
          "Portfolio of Glory Bobby Bassey, Marketing and Automation Specialist. Building automation frameworks that help brands communicate with precision at scale.",
      },
      {
        property: "og:title",
        content: "Glory Bobby Bassey — GHL & Marketing Automation Specialist",
      },
      {
        property: "og:description",
        content:
          "Building automation frameworks that help brands communicate with precision at scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Workflow, title: "GoHighLevel Setup", text: "Pipelines, calendars, workflows and reporting configured so every lead has a clear next step." },
  { icon: Bot, title: "AI Automation", text: "Practical AI assistants and automations that remove repetitive tasks from your team's day." },
  { icon: Filter, title: "Funnels & Landing Pages", text: "Conversion-focused pages that move a visitor from first click to booked call." },
  { icon: Mail, title: "Email Marketing", text: "Segmented nurture, welcome and reactivation sequences that keep your list warm." },
  { icon: Share2, title: "Social Media", text: "Content planning and scheduling workflows that keep your brand consistently visible." },
  { icon: Monitor, title: "Website Builds", text: "Fast, responsive websites designed around your brand and your conversion goals." },
];

// TODO: replace with real case study numbers
const caseStudies = [
  { image: projectDashboard, title: "Lead Capture System", problem: "Lead flow was unpredictable and hard to track.", solution: "Built a GoHighLevel funnel with qualification questions and instant follow-up.", results: ["2x more qualified leads", "Follow-ups fully automated", "One dashboard for every source"] },
  { image: projectMessaging, title: "Appointment Booking Flow", problem: "Slow replies meant prospects went cold before booking.", solution: "Instant SMS/email replies, self-serve calendar booking and reminder sequences.", results: ["More booked calls in 30 days", "Fewer no-shows", "Hours saved each week"] },
  { image: projectOnboarding, title: "Pipeline Cleanup", problem: "Deals were scattered across spreadsheets and inboxes.", solution: "Consolidated everything into clean CRM stages with automatic task creation.", results: ["Clear stage visibility", "No lost deals", "Faster handoffs to sales"] },
  { image: projectVideo, title: "Email Reactivation", problem: "A large list of past leads was never followed up.", solution: "Wrote a segmented win-back sequence with clear calls to action.", results: ["Warm leads recovered", "Healthy open rates", "No extra ad spend"] },
];

const problems = [
  "Funnels that don't convert",
  "Leads slipping through the cracks",
  "No automated follow-up",
  "Hours lost to manual tasks",
  "Messy CRM and pipelines",
  "Too many disconnected tools",
];

const solutions = [
  "High-converting funnels and websites",
  "Automated SMS, email and workflow follow-ups",
  "Clean, organised CRM pipelines",
  "A smooth customer journey end to end",
  "Time back to focus on growth",
];

// TODO: replace with real client testimonials
const testimonials = [
  { quote: "Glory set up our whole CRM and now no lead goes without a follow-up. It genuinely runs while we sleep.", name: "Client Name", role: "Founder, Placeholder Co." },
  { quote: "Our booking funnel was rebuilt in weeks and the reminders alone cut our no-shows dramatically.", name: "Client Name", role: "Coach" },
  { quote: "Everything used to be manual. Now it's organised, automated and easy for the team to follow.", name: "Client Name", role: "CEO" },
  { quote: "Clear communication, fast delivery and systems that actually make sense. Highly recommended.", name: "Client Name", role: "Marketing Director" },
  { quote: "The video tutorials Glory produced made onboarding our customers so much easier.", name: "Client Name", role: "Operations Lead" },
  { quote: "Proactive, detail-oriented and always thinking about what drives results for the business.", name: "Client Name", role: "Business Owner" },
];

// Placeholder videos — swap for your own clips
const videos = [
  { src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", poster: projectVideo, title: "Product explainer" },
  { src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", poster: projectDashboard, title: "Dashboard walkthrough" },
  { src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", poster: projectMessaging, title: "Automation tutorial" },
  { src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", poster: projectOnboarding, title: "Short-form ad edit" },
];

const techStack = ["GoHighLevel", "Zapier", "Make", "HubSpot", "Mailchimp", "ClickUp", "Slack", "WordPress", "Canva", "Google Workspace", "Airtable"];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</span>
      <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

function CtaButton({ children, href = "#contact" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="glow-primary inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">
      {children} <ArrowRight className="size-4" />
    </a>
  );
}

function Index() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      {/* Nav */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/30">GB</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#projects" className="glow-primary rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
            See My Systems
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative flex min-h-screen items-center pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-4 py-1.5 text-sm text-foreground/90">
              <span className="size-2 animate-pulse rounded-full bg-accent" /> Available for Projects
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Glory Bobby Bassey
            </h1>
            <p className="mt-4 text-2xl font-semibold text-primary md:text-3xl">GHL & Marketing Automation Specialist</p>
            <p className="mt-6 max-w-lg text-lg text-foreground/85">
              I build automated marketing systems that capture leads, follow up instantly and help your brand grow without extra manual work.
            </p>
            <p className="mt-4 max-w-lg text-muted-foreground">From funnels to CRM pipelines, I turn scattered processes into one smooth, predictable machine.</p>
            <div className="mt-8">
              <Reveal>
                <CtaButton>Let's Work Together</CtaButton>
              </Reveal>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Usually responds within 24 hours</p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-primary/25 blur-3xl" />
            <img src={portraitUrl} alt="Portrait of Glory Bobby Bassey" className="aspect-[4/5] w-full rounded-[2rem] border border-border object-cover shadow-2xl" />
          </div>
        </div>
      </header>

      {/* Tools */}
      <section id="tools" className="border-y border-border/50 py-14">
        <p className="mb-8 text-center text-sm uppercase tracking-[0.25em] text-muted-foreground">Tools I work with</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex w-max gap-5">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="whitespace-nowrap rounded-2xl border border-border bg-card px-7 py-4 text-lg font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[2fr_3fr]">
          <img src={heroImg} alt="Workspace with laptop and marketing dashboards" className="aspect-square w-full rounded-3xl border border-border object-cover" />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">About me</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Systems that work while you sleep</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm Glory — a marketing and automation specialist focused on GoHighLevel, CRM workflows and content that explains clearly. I help business owners stop chasing leads by hand and start running on organised, automated systems.
            </p>
            <div className="mt-8"><Reveal><CtaButton>Contact Me</CtaButton></Reveal></div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Past Projects" title="Selected work" text="Automation systems and builds I've delivered across different industries." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => (
              <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/60">
                <div className="overflow-hidden bg-black">
                  {p.video ? (
                    <video
                      src={p.video}
                      poster={p.image}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : (
                    <img src={p.image} alt={p.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tools.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <Reveal delay={i * 120} className="mt-5">
                    <button onClick={() => setActiveProject(p)} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                      See more <ArrowUpRight className="size-4" />
                    </button>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/60 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Services" title="How I can help" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1">
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Case Studies" title="Problems solved, results delivered" />
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((c) => (
              <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={c.image} alt={c.title} className="aspect-[16/8] w-full object-cover" />
                <div className="space-y-4 p-7">
                  <h3 className="text-2xl font-semibold">{c.title}</h3>
                  <div><p className="text-xs font-semibold tracking-[0.2em] text-destructive">PROBLEM</p><p className="mt-1 text-muted-foreground">{c.problem}</p></div>
                  <div><p className="text-xs font-semibold tracking-[0.2em] text-accent">SOLUTION</p><p className="mt-1 text-muted-foreground">{c.solution}</p></div>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary">RESULTS</p>
                    <ul className="mt-2 space-y-1.5">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary" />{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/40 bg-gradient-to-br from-primary/30 via-card to-background p-10 text-center md:p-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Build smart systems that grow your business on <span className="text-primary">autopilot</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">Stop losing hours to manual tasks and missed leads. Let's turn your processes into a predictable, automated engine.</p>
          <div className="mt-8"><CtaButton>Let's Grow Together</CtaButton></div>
        </div>
      </section>

      {/* Problems / Solution */}
      <section className="py-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-destructive">The problem</span>
            <h3 className="mt-3 text-3xl font-bold">What holds businesses back</h3>
            <ul className="mt-6 space-y-3">
              {problems.map((p) => (<li key={p} className="flex items-center gap-3 text-muted-foreground"><X className="size-5 text-destructive" />{p}</li>))}
            </ul>
            <p className="mt-6 font-medium">You can't scale if everything depends on you doing it by hand.</p>
          </div>
          <div className="rounded-2xl border border-primary/50 bg-primary/10 p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">The solution</span>
            <h3 className="mt-3 text-3xl font-bold">Smart, automated systems</h3>
            <ul className="mt-6 space-y-3">
              {solutions.map((s) => (<li key={s} className="flex items-center gap-3"><Check className="size-5 text-primary" />{s}</li>))}
            </ul>
            <div className="mt-8"><CtaButton>Fix These Problems</CtaButton></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-secondary/60 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Client Wins" title="What clients say" text="Predictable systems, better conversions and more time back." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, s) => <Star key={s} className="size-4 fill-current" />)}</div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                <figcaption className="mt-6"><p className="font-semibold">{t.name}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">{t.role}</p></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow integration */}
      <section className="py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Integrations" title="Seamless workflow integration" text="Your business should keep running smoothly even when you're offline." />
          <div className="grid gap-6 md:grid-cols-2">
            {[{ name: "Zapier Automation", img: projectMessaging }, { name: "Make.com Automation", img: projectOnboarding }].map((w) => (
              <div key={w.name} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={w.img} alt={`${w.name} workflow placeholder`} className="aspect-video w-full object-cover" />
                <p className="p-6 text-xl font-semibold">{w.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><CtaButton>Automate My Business</CtaButton></div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="bg-secondary/60 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Video" title="Engaging video content that converts" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((v) => (
              <div key={v.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                <video src={v.src} poster={v.poster} controls muted playsInline preload="none" className="aspect-[9/16] w-full bg-muted object-cover" />
                <p className="p-4 text-sm font-medium">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-28">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="Experience" title="Where I've worked" />
          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.role + e.period} className="rounded-2xl border border-border bg-card p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <span className="text-sm text-accent">{e.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{e.company}</p>
                <p className="mt-3 text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionHeading eyebrow="Contact" title="Let's build your system" text="Tell me what's slowing your business down and I'll show you how to automate it." />
          <Reveal><CtaButton href={`mailto:${EMAIL}`}>Send an inquiry</CtaButton></Reveal>
        </div>
      </section>

      <footer className="border-t border-border/50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Glory Bobby Bassey</p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Mail className="size-4" />{EMAIL}</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="size-5" /></a>
          </div>
        </div>
      </footer>


      {/* Project detail modal */}
      <Dialog
        open={activeProject !== null}
        onOpenChange={(open) => {
          if (!open) setActiveProject(null);
        }}
      >
        <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto border-border bg-card p-0 sm:max-w-2xl">
          {activeProject && (
            <>
              <div className="relative bg-black">
                {activeProject.video ? (
                  <video
                    src={activeProject.video}
                    poster={activeProject.image}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="aspect-[16/9] w-full rounded-t-xl object-cover"
                  />
                ) : (
                  <img
                    src={activeProject.image}
                    alt={activeProject.alt}
                    width={944}
                    height={704}
                    className="aspect-[16/9] w-full rounded-t-xl object-cover"
                  />
                )}
                {!activeProject.video && (
                  <div className="absolute inset-0 rounded-t-xl bg-gradient-to-t from-card via-card/40 to-transparent" />
                )}
              </div>

              <div className="space-y-8 p-6 md:p-10">
                <DialogHeader className="space-y-3 text-left">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    Case study
                  </span>
                  <DialogTitle className="font-display text-3xl leading-tight md:text-4xl">
                    {activeProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                    {activeProject.overview}
                  </DialogDescription>
                </DialogHeader>

                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                    What it involved
                  </h4>
                  <ul className="space-y-3">
                    {activeProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {activeProject.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-lg border border-border bg-muted/50 p-4 text-center"
                      >
                        <p className="font-display text-2xl text-primary">
                          {result.value}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                          {result.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                    Tools used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-sm text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Mail className="mr-2 size-4" />
                  Ask me about this project
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
