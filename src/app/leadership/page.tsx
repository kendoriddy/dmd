"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const sections = [
  { id: "summary", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "focus", label: "Focus areas" },
  { id: "vision", label: "Vision" },
];

const milestones = [
  {
    region: "Africa, Europe & Asia",
    text: "Extensive leadership across three continents—cross-cultural business development and global market dynamics.",
  },
  {
    region: "International trade specialist",
    text: "Expertise in trade development, technology transfer, and strategic investment facilitation.",
  },
  {
    region: "Asia–Nigeria corridor",
    text: "Architecting long-term investment partnerships and industrial modernization between Tokyo, broader Asia, and Abuja.",
  },
];

function AnimatedInt({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1100;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setN(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [inView, value]);

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="font-display text-4xl font-bold text-growth-light md:text-5xl"
      >
        {n}
      </span>
      <p className="mt-1 font-body text-xs uppercase tracking-widest text-silver-500">
        {label}
      </p>
    </div>
  );
}

export default function LeadershipPage() {
  const { t } = useLanguage();
  const [active, setActive] = useState("summary");

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-16">
        <aside className="lg:w-48 lg:shrink-0">
          <nav className="sticky top-24 space-y-1 rounded-xl border border-black/10 bg-white/85 p-3 backdrop-blur-sm">
            <p className="px-2 pb-2 font-display text-[10px] font-semibold uppercase tracking-widest text-silver-500">
              On this page
            </p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActive(s.id)}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === s.id
                    ? "bg-white/10 text-silver-50"
                    : "text-silver-500 hover:text-silver-200"
                }`}
              >
                {s.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="mt-3 block rounded-lg bg-growth px-3 py-2 text-center font-display text-xs font-semibold text-charcoal-deep hover:bg-growth-light"
            >
              {t.cta.partner}
            </Link>
          </nav>
        </aside>

        <div className="min-w-0 flex-1 space-y-20">
          <section id="summary" className="scroll-mt-28">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(31,138,101,0.12),transparent_40%,rgba(226,230,236,0.06))]" />
              <div className="relative grid gap-8 p-8 md:grid-cols-[1fr_200px] md:items-center md:p-12">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-growth-light">
                    President &amp; CEO
                  </p>
                  <h1 className="mt-3 font-display text-4xl font-bold text-silver-50 md:text-5xl">
                    Leading the vision for a connected Africa
                  </h1>
                  <p className="mt-2 font-display text-lg text-silver-400">
                    Mohammed Sanni Dantoro
                  </p>
                  <p className="mt-6 max-w-xl font-body text-silver-400 leading-relaxed">
                    Building a trusted platform for{" "}
                    <strong className="text-silver-200">
                      responsible investment
                    </strong>
                    ,{" "}
                    <strong className="text-silver-200">
                      industrial development
                    </strong>
                    , and{" "}
                    <strong className="text-silver-200">
                      sustainable economic growth
                    </strong>
                    .
                  </p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="relative mx-auto flex aspect-3/4 w-full max-w-[200px] items-center justify-center overflow-hidden rounded-xl border border-growth/25 bg-white md:max-w-none"
                >
                  <Image
                    src="/leadership/mohammed-sanni-dantoro.jpeg"
                    alt="Mohammed Sanni Dantoro, President & CEO"
                    fill
                    priority
                    sizes="(min-width: 768px) 200px, 60vw"
                    className="object-cover"
                  />

                  {/* Subtle overlay to keep legibility on bright images */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />

                  {/* Silverline trace around the portrait frame */}
                  <motion.svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 100 140"
                    fill="none"
                    aria-hidden
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35, duration: 0.35 }}
                  >
                    <defs>
                      <linearGradient
                        id="portraitSilverline"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop
                          offset="0"
                          stopColor="#0ea5a3"
                          stopOpacity="0.7"
                        />
                        <stop
                          offset="0.5"
                          stopColor="#111827"
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="1"
                          stopColor="#0f766e"
                          stopOpacity="0.55"
                        />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 10 8 H 90 Q 94 8 94 12 V 128 Q 94 132 90 132 H 10 Q 6 132 6 128 V 12 Q 6 8 10 8 Z"
                      stroke="url(#portraitSilverline)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.8,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.45,
                      }}
                    />
                    <motion.path
                      d="M 10 8 H 90 Q 94 8 94 12 V 128 Q 94 132 90 132 H 10 Q 6 132 6 128 V 12 Q 6 8 10 8 Z"
                      stroke="#0ea5a3"
                      strokeOpacity="0.25"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2.1,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.4,
                      }}
                    />
                  </motion.svg>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-black/10 bg-white px-8 py-8 md:px-12">
                <AnimatedInt value={3} label="Continents" />
                <AnimatedInt value={6} label="Core sectors" />
              </div>
            </motion.div>
          </section>

          <section id="experience" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-bold text-silver-100">
              The global executive
            </h2>
            <p className="mt-2 font-body text-silver-500">
              Scroll-driven milestones reflecting breadth of leadership.
            </p>
            <div className="relative mt-10 space-y-0 border-l border-black/10 pl-8">
              {milestones.map((m, i) => (
                <motion.article
                  key={m.region}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08 }}
                  className="relative pb-14 last:pb-0"
                >
                  <span className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-growth bg-white" />
                  <h3 className="font-display text-lg font-semibold text-growth-light">
                    {m.region}
                  </h3>
                  <p className="mt-2 max-w-2xl font-body text-silver-400 leading-relaxed">
                    {m.text}
                  </p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="focus" className="scroll-mt-28">
            <h2 className="font-display text-2xl font-bold text-silver-100">
              Key focus areas &amp; expertise
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Africa–Asia partnerships: high-potential trade and investment.",
                "Agricultural tech: modernization and adoption across the continent.",
                "Energy & infrastructure: power development and major projects.",
                "Investment advisory: project development and strategic trade facilitation.",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-black/10 bg-white p-4 font-body text-sm text-silver-400 leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="vision" className="scroll-mt-28">
            <blockquote className="rounded-2xl border border-growth/25 bg-growth-muted/20 p-8 md:p-10">
              <p className="font-body text-xl leading-relaxed text-silver-200 md:text-2xl">
                &ldquo;Through DMD SILVERLINE, our mission is to connect global
                partners with Africa&apos;s most promising opportunities while
                promoting{" "}
                <strong className="text-growth-light">
                  sustainable development
                </strong>{" "}
                and{" "}
                <strong className="text-growth-light">
                  technology transfer
                </strong>{" "}
                that benefits future generations.&rdquo;
              </p>
              <footer className="mt-6 font-display text-sm font-semibold text-silver-400">
                — Mohammed Sanni Dantoro
              </footer>
            </blockquote>
          </section>
        </div>
      </div>
    </main>
  );
}
