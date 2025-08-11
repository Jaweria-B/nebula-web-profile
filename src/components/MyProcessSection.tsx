import React from "react";
import { motion } from "framer-motion";
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

// Animation variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 16 },
  },
} as const;

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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 relative"
        >
          {steps.map(({ num, title, desc, Icon }, i) => (
            <motion.article
              key={num}
              variants={item}
              whileHover={{ y: -6, rotate: 0.5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 nebula-glow"
              style={{ willChange: "transform" }}
            >
              {/* shimmer sweep */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-1/2 group-hover:translate-x-1/2 transition-transform duration-700" />
              </div>

              <div className="glass-effect rounded-2xl p-6 relative overflow-hidden">
                {/* Accent beam */}
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-purple-500/0 origin-top scale-y-75 group-hover:scale-y-100 transition-transform duration-500" />

                {/* Watermark step number */}
                <span className="absolute -top-2 -right-2 text-7xl font-black text-white/5 select-none">
                  {num}
                </span>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-white/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-300 animate-spin-slow" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>

                <p className="text-gray-300 leading-relaxed">{desc}</p>

                {/* Orbiting glows */}
                <div className="pointer-events-none absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 rounded-full bg-purple-500/10 blur-2xl" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyProcessSection;
