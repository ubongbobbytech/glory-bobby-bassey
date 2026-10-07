import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, ArrowUpRight, ArrowRight, Check, X, Star, Workflow, Bot, Filter, Share2, Sparkles } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

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
import realEstateImage from "@/assets/real-estate-frame.jpg";
import projectOnboarding from "@/assets/project-onboarding.jpg";
import coachWendyPoster from "@/assets/coach-wendy-poster.jpg";
import gloryNewAsset from "@/assets/glory-bassey-new.jpg.asset.json";

import coachWendyAsset from "@/assets/coach-wendy-sales-funnel.mp4.asset.json";

// The asset path is served by Lovable, not by external hosts such as Netlify.
const portraitUrl = new URL(gloryAsset.url, "https://glory-bobby-bassey.lovable.app").href;
const coachWendyVideo = coachWendyAsset.url;
const realEstateDriveId = "1to928aVZaW2lt9mIWxINrKd4TCN9nMwc";
const realEstateLink = `https://drive.google.com/file/d/${realEstateDriveId}/view`;
const leadSegmentationLink = "https://drive.google.com/file/d/1WxUpzoAilg-xQ-qBhM09OnpHl6jjmaW9/view";
const airtableTaskLink = "https://drive.google.com/file/d/1nqkrdUbx-9mx9DQktPdBmx2lpciSlSn6/view";
const conversationAiLink = "https://drive.google.com/file/d/13y6NF7OHD8uMXas_vGvBDgXMI76rO-kP/view";
const drivePreview = (link: string) => link.replace(/\/view$/, "/preview");

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
    title: "Real Estate Sales Funnel",
    description:
      "A GoHighLevel sales funnel for the real estate industry, shown in a project walkthrough.",
    image: realEstateImage,
    alt: "Screenshot from the real estate sales funnel walkthrough",
    overview:
      "A walkthrough of a real estate sales funnel in GoHighLevel. Watch the video to see the project in context.",
    highlights: [
      "Real estate sales funnel walkthrough",
      "Built in GoHighLevel",
    ],
    results: [],
    tools: ["GoHighLevel"],
  },
  {
    title: "Lead Segmentation in Make.com",
    description: "A lead segmentation automation created in Make.com, shown in a project walkthrough.",
    image: projectMessaging,
    alt: "Automation workflow illustration for the lead segmentation project",
    overview: "A walkthrough of a lead segmentation project created in Make.com. Watch the video to see the automation in context.",
    highlights: ["Lead segmentation workflow", "Created in Make.com"],
    results: [],
    tools: ["Make.com"],
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
  { icon: Sparkles, title: "Smart AI Agents", text: "Custom AI agents that answer leads, qualify enquiries and book calls on autopilot." },
];

// TODO: replace with real case study numbers
const caseStudies = [
  { image: projectDashboard, title: "Lead Capture System", problem: "Lead flow was unpredictable and hard to track.", solution: "Built a GoHighLevel funnel with qualification questions and instant follow-up.", results: ["2x more qualified leads", "Follow-ups fully automated", "One dashboard for every source"] },
  { image: projectVideo, title: "Email Reactivation", problem: "A large list of past leads was never followed up.", solution: "Wrote a segmented win-back sequence with clear calls to action.", results: ["Warm leads recovered", "Healthy open rates", "No extra ad spend"] },
  { image: realEstateImage, title: "Real Estate Sales Funnel", problem: "", solution: "A GoHighLevel sales funnel for the real estate industry, shown in the video walkthrough.", results: [], videoLink: realEstateLink },
  { image: projectMessaging, title: "Lead Segmentation in Make.com", problem: "", solution: "A lead segmentation automation created in Make.com, shown in the video walkthrough.", results: [], videoLink: leadSegmentationLink },
  { image: projectOnboarding, title: "Task Management in Airtable", problem: "", solution: "A task management system created in Airtable, demonstrated in the video walkthrough.", results: [], videoLink: airtableTaskLink },
  { image: projectMessaging, title: "Conversation AI & Lead Scoring", problem: "", solution: "A chatbot in GoHighLevel that converses with leads, scores them and sends the appropriate links.", results: [], videoLink: conversationAiLink },
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
];


const techStack = ["GoHighLevel", "Zapier", "Make", "HubSpot", "Slack", "Airtable", "Monday.com", "Trello", "Google Workspace", "Claude", "ChatGPT", "Lovable", "SendGrid"];

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
    <Button asChild size="lg" className="glow-primary h-12 rounded-sm px-7 font-medium"><a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children} <ArrowRight className="size-4" /></a></Button>
  );
}

function Index() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm bg-espresso font-bold text-espresso-foreground">GB</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
          <Button asChild variant="outline" className="rounded-sm border-foreground bg-background px-5 font-medium"><a href="#projects">See My Systems <ArrowUpRight className="size-4" /></a></Button>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="bg-background">
        <div className="mx-auto grid max-w-7xl items-stretch px-6 md:min-h-[620px] md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center py-16 pr-0 md:py-20 md:pr-12">
            <span className="text-xs font-semibold uppercase text-accent">Available for Projects</span>
            <h1 className="mt-8 max-w-xl text-5xl font-bold leading-[1.06] md:text-6xl lg:text-7xl">Glory Bobby <span className="text-accent">Bassey.</span></h1>
            <p className="mt-6 max-w-xl text-2xl font-semibold text-foreground md:text-3xl">GHL & Marketing Automation Specialist</p>
            <p className="mt-6 max-w-lg text-lg text-foreground/85">I build automated marketing systems that capture leads, follow up instantly and help your brand grow without extra manual work.</p>
            <p className="mt-4 max-w-lg text-muted-foreground">From funnels to CRM pipelines, I turn scattered processes into one smooth, predictable machine.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Reveal><CtaButton>Let's Work Together</CtaButton></Reveal>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-sm border-foreground bg-background px-7 font-medium"><a href="#projects">See My Work <ArrowUpRight className="size-4" /></a></Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">Usually responds within 24 hours</p>
          </div>
          <div className="relative min-h-[430px] overflow-hidden bg-espresso md:min-h-[620px]">
            <img src={portraitUrl} alt="Portrait of Glory Bobby Bassey" className="absolute inset-0 h-full w-full object-cover object-top" />
          </div>
        </div>
      </header>

      <section aria-label="Marketing automation process" className="bg-espresso py-8 text-espresso-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-3 px-6 text-center text-sm font-semibold uppercase sm:text-base">
          {["Lead capture", "CRM", "Automation", "Follow-up"].map((step, i) => <span key={step} className="flex items-center gap-4">{i > 0 && <ArrowRight aria-hidden="true" className="size-4 text-accent" />}{step}</span>)}
        </div>
      </section>

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
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article key={p.title} className="group flex flex-col overflow-hidden rounded-md bg-espresso text-espresso-foreground transition-transform hover:-translate-y-1">
                <div className="overflow-hidden bg-espresso">
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
                    <img src={p.image} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-espresso-foreground/75">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tools.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-sm border border-espresso-foreground/30 px-3 py-1 text-xs text-espresso-foreground/80">{t}</span>
                    ))}
                  </div>
                  <Reveal delay={i * 120} className="mt-5">
                    <Button variant="link" onClick={() => setActiveProject(p)} className="h-auto justify-start p-0 text-sm font-medium text-espresso-foreground hover:text-accent">
                      See more <ArrowUpRight className="size-4" />
                    </Button>
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
              <article key={c.title} className="overflow-hidden rounded-md bg-espresso text-espresso-foreground">
                 {"videoLink" in c && c.videoLink ? (
                   <iframe src={drivePreview(c.videoLink)} title={`${c.title} video walkthrough`} loading="lazy" allow="autoplay; fullscreen" allowFullScreen className="aspect-video w-full border-0" />
                 ) : (
                   <img src={c.image} alt={c.title} className="aspect-[16/8] w-full object-cover" />
                 )}
                <div className="space-y-4 p-7">
                  <h3 className="text-2xl font-semibold">{c.title}</h3>
                   {c.problem && <div><p className="text-xs font-semibold tracking-[0.2em] text-accent">PROBLEM</p><p className="mt-1 text-espresso-foreground/75">{c.problem}</p></div>}
                  <div><p className="text-xs font-semibold tracking-[0.2em] text-accent">SOLUTION</p><p className="mt-1 text-espresso-foreground/75">{c.solution}</p></div>
                   {c.results.length > 0 && <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-accent">RESULTS</p>
                    <ul className="mt-2 space-y-1.5">
                      {c.results.map((r) => (
                        <li key={r} className="flex items-center gap-2 text-sm"><Check className="size-4 text-accent" />{r}</li>
                      ))}
                    </ul>
                   </div>}
                   {"videoLink" in c && c.videoLink && (
                     <Button asChild variant="link" className="h-auto p-0 text-espresso-foreground underline underline-offset-4 hover:text-accent">
                       <a href={c.videoLink} target="_blank" rel="noopener noreferrer">Watch walkthrough <ArrowUpRight className="size-4" /></a>
                     </Button>
                   )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden bg-espresso p-10 text-center text-espresso-foreground md:p-16">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Build smart systems that grow your business on <span className="text-primary">autopilot</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-espresso-foreground/75">Stop losing hours to manual tasks and missed leads. Let's turn your processes into a predictable, automated engine.</p>
          <div className="mt-8"><Button asChild variant="secondary" size="lg" className="h-12 rounded-sm px-7"><a href="#contact">Let's Grow Together <ArrowRight className="size-4" /></a></Button></div>
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
          <div className="grid gap-6 md:grid-cols-2">
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
          <Reveal><CtaButton href="https://calendly.com/glorybobbybassey/30min">Let's talk</CtaButton></Reveal>
        </div>
      </section>

      <footer className="border-t border-border/50 bg-espresso py-10 text-espresso-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-sm text-espresso-foreground/70">© {new Date().getFullYear()} Glory Bobby Bassey</p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-espresso-foreground/75 hover:text-espresso-foreground"><Mail className="size-4" />{EMAIL}</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-espresso-foreground/75 hover:text-espresso-foreground"><Linkedin className="size-5" /></a>
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
              <div className="relative bg-espresso">
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
                {!activeProject.video && !("embed" in activeProject && activeProject.embed) && (
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

                {activeProject.results.length > 0 && <div>
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
                </div>}

                {activeProject.tools.length > 0 && <div>
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
                </div>}


                <Button asChild><a href={`mailto:${EMAIL}`}><Mail className="size-4" />Ask me about this project</a></Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
