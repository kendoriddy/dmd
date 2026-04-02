"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlobalMapNodes } from "@/components/bridge/GlobalMapNodes";
import { useLanguage } from "@/context/LanguageContext";

const v = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div {...v} transition={{ duration: 0.5 }}>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-growth-light">
            About us — The Bridge
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-silver-50 md:text-5xl">
            Trusted global architect
          </h1>
          <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-silver-400">
            DMD SILVERLINE is an international business development and
            consultancy firm. We{" "}
            <strong className="text-silver-200">
              facilitate responsible investment
            </strong>
            , promote{" "}
            <strong className="text-silver-200">industrial development</strong>,
            and advance{" "}
            <strong className="text-silver-200">technology transfer</strong> by
            connecting global partners with{" "}
            <strong className="text-growth-light">high-potential</strong>{" "}
            African opportunities—always with transparency and disciplined risk
            framing.
          </p>
        </motion.div>

        <motion.div
          {...v}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold text-silver-100">
              Company profile
            </h2>
            <ul className="mt-6 space-y-4 font-body text-silver-400">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-growth" />
                <span>
                  <strong className="text-silver-200">
                    Strategic partnership
                  </strong>{" "}
                  is our primary operating model—we build durable relationships
                  between Asian investors, technology providers, and Nigerian
                  stakeholders.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-growth" />
                <span>
                  <strong className="text-silver-200">Sector excellence</strong>{" "}
                  across agriculture, energy, trade, automotive &amp; equipment,
                  oil &amp; gas, and high-level consultancy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-growth" />
                <span>
                  Advisory tone: authoritative yet accessible—speaking the
                  language of international capital while respecting local
                  complexity.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6">
            <h3 className="font-display text-lg font-semibold text-silver-100">
              International presence
            </h3>
            <GlobalMapNodes compact />
            <dl className="mt-6 space-y-3 text-sm text-silver-400">
              <div className="flex justify-between gap-4 border-t border-black/10 pt-3">
                <dt className="text-silver-500">{t.common.headquarters}</dt>
                <dd className="text-right text-silver-200">Abuja, Nigeria</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-black/10 pt-3">
                <dt className="text-silver-500">{t.common.representation}</dt>
                <dd className="text-right text-silver-200">Tokyo, Asia</dd>
              </div>
            </dl>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-growth px-5 py-2.5 font-display text-sm font-semibold text-charcoal-deep hover:bg-growth-light"
            >
              {t.cta.partner}
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
