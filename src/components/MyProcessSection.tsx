import React from "react";
import { PhoneCall, Lightbulb, Code2, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "Understanding your business needs and automation goals",
    Icon: PhoneCall,
  },
  {
    num: "02",
    title: "Solution Design",
    desc: "Creating a custom automation strategy with clear deliverables",
    Icon: Lightbulb,
  },
  {
    num: "03",
    title: "Development Sprint",
    desc: "Building your solution with regular progress updates",
    Icon: Code2,
  },
  {
    num: "04",
    title: "Testing & Refinement",
    desc: "Ensuring 99.9% reliability before deployment",
    Icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "Smooth deployment with ongoing maintenance options",
    Icon: Rocket,
  },
];

const MyProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto mb-12 animate-enter">
          <h2 className="text-5xl font-bold text-gradient mb-4">My Process</h2>
          <p className="text-gray-300 text-lg">
            From idea to deployment, here's how I deliver results
          </p>
        </header>

        {/* Subtle gradient beam behind cards */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-3xl"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 relative">
          {steps.map(({ num, title, desc, Icon }, i) => (
            <article
              key={num}
              className="glass-effect rounded-2xl p-6 nebula-glow animate-enter hover-scale relative overflow-hidden"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Watermark step number */}
              <span className="absolute -top-2 -right-2 text-7xl font-black text-white/5 select-none">
                {num}
              </span>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-white/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>

              <p className="text-gray-300 leading-relaxed">{desc}</p>

              {/* Orbiting glow */}
              <div className="pointer-events-none absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-blue-500/10 blur-2xl"></div>
              <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProcessSection;
