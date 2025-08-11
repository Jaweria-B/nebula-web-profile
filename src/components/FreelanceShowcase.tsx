import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

const items = [
  {
    title: "Voice Assistant Pro",
    subtitle: "Smart desktop voice automation using LiveKit & GPT-4",
    challenge: "Client needed a software voice agent to automate common computer tasks (not a mobile app).",
    solution:
      "Desktop voice assistant built with LiveKit for real-time audio, GPT-4 for intent parsing/agent orchestration, and streaming TTS to perform system actions (volume, brightness, open apps, shortcuts).",
    impact: "Automated routine computer tasks and sped up hands-free workflows.",
    tech: [
      "Python",
      "OpenAI (GPT-4)",
      "LiveKit",
      "Streaming TTS",
      "SCT",
      "Agent frameworks",
    ],
    client: "Product / Software Client",
  },
  {
    title: "XBot Automation",
    subtitle: "EdgePower-driven Twitter/X automation with AI",
    challenge:
      "Teams managing many accounts needed reliable automation for posting and engagement.",
    solution:
      "Multi-account automation using EdgePower plus Python automation libraries; Gemini/LLM for content/reply generation; scheduling, safe rate handling and browser fallback for edge cases.",
    impact:
      "Fully automated engagement flows (liking, retweeting, following, replies) and hashtag/profile engagement.",
    tech: [
      "EdgePower",
      "Python automation libs",
      "Gemini",
      "Playwright fallback",
      "MongoDB",
      "Docker",
    ],
    client: "Digital Marketing / Growth Teams",
  },
  {
    title: "Email Automation",
    subtitle: "AI-powered email generation and sending pipeline",
    challenge:
      "Sales teams struggled with personalised outreach and campaign delivery.",
    solution:
      "React editor + Node.js backend pipeline that uses OpenAI/Gemini/DeepSeek for generation and SMTP APIs for sending and tracking.",
    impact:
      "Automated email creation, personalization and sending workflows.",
    tech: ["React", "OpenAI/GPT-4", "Gemini", "DeepSeek", "Node.js", "SMTP APIs"],
    client: "B2B Sales / Outreach Teams",
  },
  {
    title: "DataHarvest Bot",
    subtitle: "Robust web scraping & data automation",
    challenge:
      "Need recurring structured data collection from many sources including JS-heavy sites while avoiding blocks.",
    solution:
      "Modular scrapers using Selenium/Playwright + BeautifulSoup, proxy rotation, adaptive selectors, dedupe and exports to DB/S3 with monitoring.",
    impact:
      "Automated large-scale data collection and export pipelines for analytics/reporting.",
    tech: [
      "Selenium",
      "Playwright",
      "BeautifulSoup",
      "Proxy rotation",
      "AWS (S3/EC2/Lambda)",
      "Postgres",
      "Docker",
    ],
    client: "Data & Analytics Teams",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const FreelanceShowcase: React.FC = () => {
  return (
    <section id="freelance" className="relative py-24">
      <div className="container mx-auto px-6">
        <header className="mb-12 text-center">
          <div className="relative inline-block">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-transparent blur-2xl" aria-hidden />
            <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Freelance Showcase
            </h2>
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Selected client projects delivering real impact.
          </p>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {items.map((card, idx) => (
            <motion.article
              key={card.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl p-[1px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent shadow-[var(--shadow-elegant,_0_10px_30px_-10px_hsl(var(--primary)/0.3))]"
            >
              {/* Shimmer sweep */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-md transform-gpu will-change-transform animate-[shimmer_2s_linear_infinite]" />
              </span>

              <div className="relative rounded-2xl bg-card text-card-foreground p-6 md:p-7 backdrop-blur supports-[backdrop-filter]:bg-card/90">
                {/* Heading */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{card.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground mt-1">{card.subtitle}</p>
                  </div>
                  <Badge variant="secondary" className="shrink-0">Client</Badge>
                </div>

                {/* Body */}
                <div className="mt-5 space-y-3 text-sm md:text-[15px] leading-relaxed">
                  <p><span className="font-semibold">Challenge:</span> {card.challenge}</p>
                  <p><span className="font-semibold">Solution:</span> {card.solution}</p>
                  <p><span className="font-semibold">Impact:</span> {card.impact}</p>

                  <div className="pt-2">
                    <p className="font-semibold mb-2">Tech:</p>
                    <div className="flex flex-wrap gap-2">
                      {card.tech.map((t) => (
                        <Badge key={t} variant="outline" className="bg-background/40">{t}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="font-semibold">Client Type:</p>
                    <p className="text-muted-foreground">{card.client}</p>
                  </div>
                </div>

                {/* Accent beam */}
                <div className="pointer-events-none absolute -top-8 right-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-gradient-to-tr from-accent/20 to-primary/10 blur-2xl" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer { from { transform: translateX(-20%); } to { transform: translateX(120%); } }
      `}</style>
    </section>
  );
};

export default FreelanceShowcase;
