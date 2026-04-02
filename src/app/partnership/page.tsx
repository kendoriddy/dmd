"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Zap, Factory, Ship } from "lucide-react";
import { SilverlineArc } from "@/components/bridge/SilverlineArc";
import { useLanguage } from "@/context/LanguageContext";

const cards = [
  {
    icon: Leaf,
    title: "Agricultural modernization",
    body: "Advanced agri-technology, mechanization, and irrigation systems to raise productivity on West African soil.",
  },
  {
    icon: Zap,
    title: "Energy & infrastructure",
    body: "Renewable energy development and power infrastructure advisory for sustainable access and grid growth.",
  },
  {
    icon: Factory,
    title: "Industrial development",
    body: "Vehicles, agricultural machinery, and industrial equipment aligned with emerging market industrialization.",
  },
  {
    icon: Ship,
    title: "Trade facilitation",
    body: "Streamlined exchange of commodities, equipment, and industrial products between Asia and Africa.",
  },
];

export default function PartnershipPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="hero-gradient relative overflow-hidden px-4 py-20 md:px-6 md:py-28">
        <div className="noise-overlay absolute inset-0 opacity-[0.03]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-growth-light">
            Asia–Africa partnership
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-silver-50 md:text-5xl">
            Bridging global expertise with African opportunity
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-silver-400 leading-relaxed">
            Empowering the{" "}
            <strong className="text-silver-200">Asia–Nigeria corridor</strong>{" "}
            through{" "}
            <strong className="text-silver-200">sustainable investment</strong>,{" "}
            <strong className="text-silver-200">industrial growth</strong>, and
            advanced{" "}
            <strong className="text-silver-200">technology transfer</strong>.
          </p>
          <div className="mt-12 max-w-2xl">
            <SilverlineArc />
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-silver-50">
              Our vision for collaboration
            </h2>
            <p className="mt-4 max-w-3xl font-body text-silver-400 leading-relaxed">
              DMD SILVERLINE serves as a trusted platform that facilitates{" "}
              <strong className="text-silver-200">
                responsible investment
              </strong>{" "}
              and promotes{" "}
              <strong className="text-silver-200">
                industrial development
              </strong>{" "}
              across the continent. We specialize in connecting international
              partners with{" "}
              <strong className="text-growth-light">
                high-potential markets
              </strong>
              , with emphasis on economic ties between Asia and Africa.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Technology transfer",
                  text: "World-class technology applied to African resources to drive local productivity.",
                },
                {
                  title: "Strategic partnerships",
                  text: "Long-term, mutually beneficial relationships between Asian investors and Nigerian stakeholders.",
                },
                {
                  title: "Sustainable growth",
                  text: "Projects that support job creation, infrastructure, and durable economic impact.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-black/10 bg-white p-5"
                >
                  <p className="font-display text-sm font-semibold text-growth-light">
                    {item.title}
                  </p>
                  <p className="mt-2 font-body text-sm text-silver-500 leading-relaxed">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <h2 className="mt-20 font-display text-2xl font-bold text-silver-100">
            Key focus areas
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {cards.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -4, borderColor: "rgba(62, 207, 154, 0.35)" }}
                className="rounded-2xl border border-black/10 bg-white p-6 transition-colors"
              >
                <c.icon className="text-growth-light" size={26} />
                <h3 className="mt-4 font-display text-lg font-semibold text-silver-100">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-sm text-silver-500 leading-relaxed">
                  {c.body}
                </p>
              </motion.article>
            ))}
          </div>

          <blockquote className="mt-20 border-l-4 border-growth pl-6">
            <p className="font-body text-xl italic leading-relaxed text-silver-400 md:text-2xl">
              &ldquo;Our vision is to build a trusted platform that facilitates
              responsible investment, promotes industrial development, and
              supports economic growth across Africa by bridging the gap between
              global expertise and local potential.&rdquo;
            </p>
            <footer className="mt-4 font-display text-sm font-semibold text-growth-light">
              — Mohammed Sanni Dantoro, President &amp; CEO
            </footer>
          </blockquote>

          <div className="mt-16 rounded-2xl border border-black/10 bg-white p-8 md:p-10">
            <h2 className="font-display text-xl font-semibold text-silver-100">
              Regional presence
            </h2>
            <ul className="mt-4 space-y-3 font-body text-silver-400">
              <li>
                <strong className="text-silver-200">Headquarters:</strong>{" "}
                Abuja, Nigeria — regional operations and government relations.
              </li>
              <li>
                <strong className="text-silver-200">
                  International representation:
                </strong>{" "}
                Asia — global partnerships and technology transfer.
              </li>
              <li>
                <strong className="text-silver-200">Strategic reach:</strong>{" "}
                Deep local market knowledge in West Africa with global market
                fluency.
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-growth px-6 py-3 font-display text-sm font-semibold text-charcoal-deep hover:bg-growth-light"
              >
                {t.cta.explore}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black/15 px-6 py-3 font-display text-sm font-semibold text-silver-50 hover:border-growth"
              >
                {t.cta.partner}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
