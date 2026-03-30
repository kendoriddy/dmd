"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Globe2, Handshake } from "lucide-react";
import { SilverlineArc } from "@/components/bridge/SilverlineArc";
import { useLanguage } from "@/context/LanguageContext";

const easeOut = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Handshake,
    title: "Partnership driven",
    body: "Long-term strategic partnership—not transactional outreach. We bridge investors, technology partners, and local stakeholders with clarity and governance.",
  },
  {
    icon: Building2,
    title: "Local knowledge",
    body: "Deep understanding of West African market intricacies paired with fluency in international standards and compliance expectations.",
  },
  {
    icon: Globe2,
    title: "Long-term value",
    body: "Every mandate links to sustainable economic growth, infrastructure development, and measurable industrial impact.",
  },
];

const headline =
  "Bridging African Resources with Global Technology and Investment";

export default function HomePage() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const heroWords = headline.split(" ");

  const heroContainer = reduceMotion
    ? undefined
    : ({
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.045,
            delayChildren: 0.12,
          },
        },
      } as const);

  const heroWord = reduceMotion
    ? undefined
    : ({
        hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.55, ease: easeOut },
        },
      } as const);

  const fadeUp = {
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-72px" },
    transition: {
      duration: reduceMotion ? 0.25 : 0.65,
      ease: easeOut,
    },
  };

  const cardReveal = (i: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-48px" },
    transition: {
      duration: 0.55,
      delay: reduceMotion ? 0 : i * 0.12,
      ease: easeOut,
    },
  });

  return (
    <main className="overflow-x-hidden">
      <section className="hero-gradient relative min-h-[88vh] overflow-hidden px-4 pb-20 pt-16 md:px-6 md:pt-24">
        <div className="noise-overlay absolute inset-0" />

        {!reduceMotion ? (
          <>
            <motion.div
              className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-growth/15 blur-[100px]"
              animate={{ x: [0, 24, 0], y: [0, -16, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-silver-400/10 blur-[90px]"
              animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="pointer-events-none absolute bottom-1/4 left-1/3 h-56 w-56 rounded-full bg-growth-muted/30 blur-[80px]"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        ) : null}

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="flex items-center gap-3"
          >
            <motion.span
              aria-hidden
              className="h-px w-8 bg-growth-light md:w-12"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
            />
            <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-growth-light">
              The Bridge
            </p>
          </motion.div>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.12] tracking-tight text-silver-50 md:text-5xl lg:text-6xl">
            {reduceMotion ? (
              <span className="metallic-text">{headline}</span>
            ) : (
              <motion.span
                className="flex flex-wrap gap-x-[0.28em] gap-y-1"
                variants={heroContainer}
                initial="hidden"
                animate="visible"
              >
                {heroWords.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    variants={heroWord}
                    className="metallic-text inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduceMotion ? 0 : 0.55,
              duration: 0.6,
              ease: easeOut,
            }}
            className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-silver-400 md:text-xl"
          >
            DMD SILVERLINE is a trusted platform for{" "}
            <strong className="font-semibold text-silver-200">
              responsible investment
            </strong>
            ,{" "}
            <strong className="font-semibold text-silver-200">
              technology transfer
            </strong>
            , and{" "}
            <strong className="font-semibold text-silver-200">
              strategic partnership
            </strong>{" "}
            across <strong className="text-growth-light">high-potential</strong>{" "}
            markets in Nigeria and West Africa.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduceMotion ? 0 : 0.72,
              duration: 0.55,
              ease: easeOut,
            }}
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.02, y: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-growth px-8 py-3.5 font-display text-sm font-semibold text-charcoal-deep shadow-[0_0_40px_rgba(31,138,101,0.35)] transition-colors hover:bg-growth-light"
              >
                {t.cta.explore}
                <motion.span
                  animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.02, y: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/partnership"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 font-display text-sm font-semibold text-silver-100 transition-colors hover:border-growth hover:text-growth-light"
              >
                {t.cta.partner}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16 md:mt-20"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: reduceMotion ? 0 : 0.85,
              duration: 0.7,
              ease: easeOut,
            }}
          >
            <SilverlineArc className="w-full max-w-3xl" />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-charcoal px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <motion.h2
              className="font-display text-3xl font-bold text-silver-50 md:text-4xl"
              initial={false}
            >
              Global-Local Synergy
            </motion.h2>
            <p className="mt-4 max-w-3xl font-body text-silver-400 leading-relaxed">
              An interactive representation of how we{" "}
              <strong className="text-silver-200">connect</strong>,{" "}
              <strong className="text-silver-200">facilitate</strong>, and{" "}
              <strong className="text-silver-200">strengthen</strong> ties
              between international capital, Japanese innovation, and African
              industrial development.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                {...cardReveal(i)}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        borderColor: "rgba(62, 207, 154, 0.35)",
                        boxShadow: "0 24px 48px rgba(0,0,0,0.35)",
                      }
                }
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="rounded-2xl border border-white/10 bg-charcoal-deep/80 p-6 backdrop-blur-sm"
              >
                <motion.div
                  whileHover={
                    reduceMotion ? undefined : { scale: 1.08, rotate: -3 }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="inline-flex rounded-xl bg-growth/10 p-2.5"
                >
                  <item.icon className="text-growth-light" size={28} />
                </motion.div>
                <h3 className="mt-4 font-display text-lg font-semibold text-silver-100">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-silver-500">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            <h2 className="font-display text-3xl font-bold text-silver-50">
              Sector excellence
            </h2>
            <p className="mt-4 font-body text-silver-400 leading-relaxed">
              From <strong className="text-silver-200">agriculture</strong> and{" "}
              <strong className="text-silver-200">energy</strong> to{" "}
              <strong className="text-silver-200">trade</strong>,{" "}
              <strong className="text-silver-200">automotive</strong>,{" "}
              <strong className="text-silver-200">oil & gas</strong>, and{" "}
              <strong className="text-silver-200">strategic consultancy</strong>
              —we demonstrate technical depth where investors and governments
              expect precision.
            </p>
            <motion.div
              className="mt-6 inline-flex"
              whileHover={reduceMotion ? undefined : { x: 4 }}
            >
              <Link
                href="/sectors"
                className="inline-flex items-center gap-2 font-display text-sm font-semibold text-growth-light hover:underline"
              >
                {t.cta.learnMore}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.08,
              ease: easeOut,
            }}
            whileHover={
              reduceMotion
                ? undefined
                : {
                    borderColor: "rgba(62, 207, 154, 0.25)",
                    boxShadow: "0 0 0 1px rgba(62, 207, 154, 0.15)",
                  }
            }
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-growth-muted/40 to-charcoal-deep p-8 transition-colors"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-growth-light">
              Asia–Africa corridor
            </p>
            <p className="mt-4 font-body text-silver-300 leading-relaxed">
              Tokyo and Abuja anchor our network:{" "}
              <strong className="text-white">technology transfer </strong> flows
              alongside trade facilitation, aligning Japanese expertise with
              Nigeria&apos;s industrial and agri-modernization agenda.
            </p>
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="mt-6 inline-block"
            >
              <Link
                href="/partnership"
                className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-display font-semibold text-silver-100 transition-colors hover:border-growth"
              >
                Explore the corridor
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-charcoal-deep px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl font-bold text-silver-50 md:text-4xl"
          >
            Investment &amp; projects
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{
              ...fadeUp.transition,
              delay: reduceMotion ? 0 : 0.08,
            }}
            className="mx-auto mt-4 max-w-2xl font-body text-silver-400"
          >
            <strong className="text-silver-200">Economic impact</strong> through
            opportunity identification, local partnership facilitation, project
            development support, market entry advisory, and government
            engagement.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: reduceMotion ? 0 : 0.15,
              duration: 0.5,
              ease: easeOut,
            }}
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-block rounded-full bg-growth px-8 py-3.5 font-display text-sm font-semibold text-charcoal-deep shadow-[0_0_32px_rgba(31,138,101,0.25)] transition-colors hover:bg-growth-light"
              >
                {t.cta.explore}
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                href="/leadership"
                className="inline-block rounded-full border border-white/20 px-8 py-3.5 font-display text-sm font-semibold text-silver-100 transition-colors hover:border-growth"
              >
                Leadership insight
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
