import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

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
import gloryAsset from "@/assets/glory-bassey.jpg.asset.json";

const portraitUrl = gloryAsset.url;

/* --- Update these when you have the final details ---------------------- */
const EMAIL = "hello@glorybobby.com"; // TODO: replace with your real email
const LINKEDIN_URL = "https://www.linkedin.com/"; // TODO: replace with your profile URL
/* ------------------------------------------------------------------------ */

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  // TODO: replace with your real roles, companies, dates and achievements
  {
    role: "Marketing & Automation Specialist",
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

const skillGroups = [
  // TODO: adjust to your real stack
  {
    title: "Marketing Automation",
    items: ["HubSpot", "Mailchimp", "Klaviyo", "ActiveCampaign", "Zapier", "Make"],
  },
  {
    title: "CRM & Data",
    items: ["Salesforce", "HubSpot CRM", "Airtable", "Notion", "Google Sheets", "SQL"],
  },
  {
    title: "Analytics",
    items: ["Google Analytics 4", "Looker Studio", "Meta Ads Manager", "Hotjar", "A/B Testing"],
  },
  {
    title: "Content & Creative",
    items: ["Adobe Premiere Pro", "CapCut", "Figma", "Canva", "Screenshot & Video Tutorials"],
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
    title: "B2B Lead Nurture Architecture",
    description:
      "Custom CRM integration and automated messaging sequences that reduced manual data entry by 70%.",
    image: projectMessaging,
    alt: "Automated messaging flows shown on two phones",
    overview:
      "A custom CRM integration connecting form captures, enrichment and scoring to automated nurture sequences — so leads move without anyone touching a spreadsheet.",
    highlights: [
      "Built a bidirectional sync between web forms, CRM and email platform",
      "Designed lead scoring that routes hot prospects to sales in real time",
      "Automated a 6-step nurture sequence tailored to industry and role",
    ],
    results: [
      { label: "Manual data entry", value: "-70%" },
      { label: "Lead response time", value: "-85%" },
      { label: "MQL to SQL", value: "+24%" },
    ],
    tools: ["HubSpot", "Zapier", "Salesforce", "Airtable"],
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
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Glory Bobby Bassey — Marketing & Automation Specialist",
      },
      {
        name: "description",
        content:
          "Portfolio of Glory Bobby Bassey, Marketing and Automation Specialist. Building automation frameworks that help brands communicate with precision at scale.",
      },
      {
        property: "og:title",
        content: "Glory Bobby Bassey — Marketing & Automation Specialist",
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

function Index() {
  const [activeProject, setActiveProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Site navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
          <a
            href="#top"
            className="font-display text-xl leading-none tracking-tight"
          >
            GB<span className="text-primary">.</span>
          </a>
          <div className="flex items-center gap-2 md:gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground md:px-4"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="relative flex h-screen w-full flex-col justify-end overflow-hidden p-6 md:p-12">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Sunlit minimalist workspace with a laptop on an oak desk"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <h1 className="mb-4 font-display text-5xl leading-none text-foreground text-balance md:text-8xl lg:text-9xl">
            Glory Bobby Bassey
          </h1>
          <p className="text-lg font-medium tracking-tight text-foreground/80 md:text-2xl">
            Marketing and Automation Specialist
          </p>
        </div>
      </header>

      {/* About */}
      <section id="about" className="bg-background px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <img
                src={portraitUrl}
                alt="Portrait of Glory Bobby Bassey"
                className="aspect-[4/5] w-full rounded-xl object-cover shadow-lg ring-1 ring-border"
              />
            </div>
            <div className="pt-4 lg:col-span-7">
              <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                About me
              </span>
              <h2 className="mb-8 font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
                Transforming systems into scalable growth engines.
              </h2>
              <div className="max-w-[56ch] space-y-6 text-lg leading-relaxed text-pretty text-muted-foreground">
                <p>
                  I'm Glory — a marketing and automation specialist who bridges
                  the gap between creative strategy and technical execution. I
                  build automation frameworks that allow brands to communicate
                  with precision at scale, turning complex funnels into seamless
                  customer journeys.
                </p>
                <p>
                  My approach combines data-driven insights with an editorial
                  sensibility, so every automated touchpoint feels personal and
                  high-value rather than mechanical. From email ecosystems to
                  CRM integrations and content pipelines, I design systems that
                  keep working while you sleep.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Work with me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-secondary px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Experience
          </span>
          <h2 className="mb-16 font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
            Where I've built and shipped.
          </h2>

          <ol className="relative space-y-0 border-l border-border">
            {experience.map((job) => (
              <li key={job.role} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
                <span className="absolute -left-[7px] top-2 size-3.5 rounded-full border-2 border-primary bg-background" />
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {job.period}
                </p>
                <h3 className="text-xl font-medium md:text-2xl">{job.role}</h3>
                <p className="mb-3 text-sm font-medium text-primary">{job.company}</p>
                <p className="max-w-[60ch] text-sm leading-relaxed text-pretty text-muted-foreground">
                  {job.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills & tools */}
      <section id="skills" className="bg-background px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Skills & tools
          </span>
          <h2 className="mb-16 font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
            The stack behind the systems.
          </h2>

          <div className="grid gap-10 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-secondary px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Projects
              </span>
              <h2 className="font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
                Selected Works
              </h2>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group flex flex-col">
                <div className="mb-6 overflow-hidden rounded-xl ring-1 ring-border">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={944}
                    height={704}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mb-2 text-xl font-medium">{project.title}</h3>
                <p className="mb-6 max-w-[48ch] text-sm text-pretty text-muted-foreground">
                  {project.description}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="mt-auto inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  View project
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary px-6 py-24 text-primary-foreground md:px-12 md:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <span className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Available for new projects
          </span>
          <h2 className="mb-12 font-display text-5xl leading-none text-balance md:text-7xl lg:text-8xl">
            Let's build something efficient.
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
          >
            <Mail className="size-4" />
            Send an inquiry
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-6 py-12 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {EMAIL}
          </a>
          <div className="flex items-center gap-6">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70">
            &copy; 2026 Glory Bobby Bassey
          </p>
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
              <div className="relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.alt}
                  width={944}
                  height={704}
                  className="aspect-[16/9] w-full rounded-t-xl object-cover"
                />
                <div className="absolute inset-0 rounded-t-xl bg-gradient-to-t from-card via-card/40 to-transparent" />
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
