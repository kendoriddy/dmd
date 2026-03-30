"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sprout,
  SunMedium,
  Globe,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SectorIllustration } from "@/components/sectors/SectorIllustration";

const impactCards = [
  {
    title: "Opportunity identification",
    body: "Pinpointing high-value projects in agriculture, energy, trade, and strategic industries.",
  },
  {
    title: "Local partnership facilitation",
    body: "Connecting international entities with reliable local stakeholders and execution partners.",
  },
  {
    title: "Market entry advisory",
    body: "Navigating regulatory environments, licensing, and complex business landscapes with clarity.",
  },
  {
    title: "Government engagement",
    body: "Bridging private investors and public institutions to align incentives and delivery.",
  },
];

const supportSectors = [
  {
    sector: "International trade",
    focus:
      "Commodities, industrial equipment, and strategic resources between Africa and global markets.",
  },
  {
    sector: "Automobile & equipment",
    focus:
      "Vehicles and machinery essential for industrial and agricultural productivity.",
  },
  {
    sector: "Oil & gas",
    focus:
      "Upstream, midstream, and downstream advisory promoting responsible resource development.",
  },
  {
    sector: "Strategic consultancy",
    focus:
      "Market entry, government engagement, and project development at the highest level.",
  },
];

export default function SectorsPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-growth-light">
            Core sectors & services
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-silver-50 md:text-5xl">
            Driving sustainable impact
          </h1>
          <p className="mt-4 font-body text-lg text-silver-400 leading-relaxed">
            Technical depth across six pillars—each tied to{" "}
            <strong className="text-silver-200">economic impact</strong>,{" "}
            <strong className="text-silver-200">infrastructure growth</strong>,
            and <strong className="text-silver-200">technology transfer</strong>
            .
          </p>
        </header>

        <div ref={ref} className="relative mt-20 space-y-24">
          <motion.div
            className="absolute left-4 top-0 hidden h-full w-px origin-top bg-black/10 md:block lg:left-0"
            style={{ scaleY: lineScale }}
          />

          <SectorBlock
            icon={Sprout}
            title="Agriculture & agri-technology"
            intro="DMD SILVERLINE acts as a catalyst for modernization of the African food system through advanced global partnerships."
            bullets={[
              "Modernization & mechanization: high-efficiency mechanization and modern irrigation.",
              "Agri-tech partnerships: technology transfer linking producers with global providers.",
              "Supply chain development: food security through stronger supply chain partnerships.",
              "Asia–Africa synergy: advanced agricultural innovation applied to West African soil.",
            ]}
            illustration={
              <SectorIllustration
                variant="agriculture"
                className="h-full w-full"
              />
            }
          />
          <SectorBlock
            icon={SunMedium}
            title="Energy & renewable solutions"
            intro="As Africa’s energy transition accelerates, we facilitate infrastructure for a sustainable future."
            bullets={[
              "Renewable energy projects: solar and sustainable power generation across emerging markets.",
              "Infrastructure growth: critical power infrastructure to expand energy access.",
              "Strategic investment: structuring high-potential opportunities with global investors.",
              "Technology integration: advanced energy technology adapted to local markets.",
            ]}
            illustration={
              <SectorIllustration variant="energy" className="h-full w-full" />
            }
          />
        </div>

        <section className="mt-24">
          <h2 className="font-display text-2xl font-bold text-silver-100">
            Support sectors
          </h2>
          <p className="mt-2 max-w-3xl font-body text-sm text-silver-500">
            Visual summaries for quick scanning, followed by a detailed table
            for institutional review.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <SupportCard
              title="International trade"
              focus="Commodities, industrial equipment, and strategic resources between Africa and global markets."
              variant="trade"
            />
            <SupportCard
              title="Automobile & equipment"
              focus="Supply and trade of vehicles and machinery essential for industrial and agricultural productivity."
              variant="automobile"
            />
            <SupportCard
              title="Oil & gas"
              focus="Upstream, midstream, and downstream advisory promoting responsible resource development."
              variant="oilgas"
            />
            <SupportCard
              title="Strategic consultancy"
              focus="Market entry, government engagement, and project development at the highest level."
              variant="consultancy"
            />
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-black/10 bg-white">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black/10 bg-charcoal/80">
                  <th className="px-4 py-3 font-display font-semibold text-growth-light md:px-6">
                    Sector
                  </th>
                  <th className="px-4 py-3 font-display font-semibold text-silver-200 md:px-6">
                    Focus &amp; impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {supportSectors.map((row) => (
                  <tr
                    key={row.sector}
                    className="border-b border-black/5 last:border-0"
                  >
                    <td className="px-4 py-4 font-medium text-silver-200 md:px-6">
                      {row.sector}
                    </td>
                    <td className="px-4 py-4 font-body text-silver-500 md:px-6">
                      {row.focus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-24">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-silver-100">
                Impact carousel
              </h2>
              <p className="mt-2 max-w-xl font-body text-sm text-silver-500">
                Scroll horizontally to explore how we operationalize the bridge
                between global capital and local execution.
              </p>
            </div>
          </div>
          <ImpactCarousel cards={impactCards} />
        </section>

        <div className="mt-16 flex flex-wrap gap-3 text-silver-500">
          <Globe className="inline text-growth-light" size={18} />
          <span className="font-body text-sm">
            Icons represent sector focus—designed for executive scannability.
          </span>
        </div>
      </div>
    </main>
  );
}

function SectorBlock({
  icon: Icon,
  title,
  intro,
  bullets,
  illustration,
}: {
  icon: typeof Sprout;
  title: string;
  intro: string;
  bullets: string[];
  illustration: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative md:pl-14 lg:pl-16"
    >
      <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-growth/40 bg-charcoal-deep md:flex">
        <Icon className="text-growth-light" size={20} />
      </div>
      <div className="grid gap-6 rounded-2xl border border-black/10 bg-white p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
        <div>
          <div className="flex items-center gap-3 md:hidden">
            <Icon className="text-growth-light" size={22} />
            <h2 className="font-display text-xl font-bold text-silver-50">
              {title}
            </h2>
          </div>
          <h2 className="hidden font-display text-2xl font-bold text-silver-50 md:block">
            {title}
          </h2>
          <p className="mt-4 font-body text-silver-400 leading-relaxed">
            {intro}
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 font-body text-sm text-silver-500 leading-relaxed"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-growth" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl">{illustration}</div>
      </div>
    </motion.article>
  );
}

function ImpactCarousel({
  cards,
}: {
  cards: { title: string; body: string }[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="relative mt-8">
      <button
        type="button"
        onClick={() => scrollBy(-1)}
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-black/15 bg-white p-2 text-silver-50 shadow-lg hover:border-growth md:block"
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-black/15 bg-white p-2 text-silver-50 shadow-lg hover:border-growth md:block"
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 scrollbar-thin md:px-10"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="min-w-[280px] max-w-[300px] shrink-0 snap-start rounded-2xl border border-black/10 bg-white p-6 shadow-[0_0_40px_rgba(2,6,23,0.06)]"
          >
            <Briefcase className="text-growth-light opacity-80" size={22} />
            <h3 className="mt-4 font-display text-lg font-semibold text-silver-100">
              {card.title}
            </h3>
            <p className="mt-2 font-body text-sm text-silver-500 leading-relaxed">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SupportCard({
  title,
  focus,
  variant,
}: Readonly<{
  title: string;
  focus: string;
  variant: Parameters<typeof SectorIllustration>[0]["variant"];
}>) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-black/10 bg-white p-6"
    >
      <div className="grid gap-5 md:grid-cols-[1fr_220px] md:items-center">
        <div>
          <h3 className="font-display text-lg font-semibold text-silver-50">
            {title}
          </h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-silver-500">
            {focus}
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <SectorIllustration variant={variant} className="h-[140px] w-full" />
        </div>
      </div>
    </motion.article>
  );
}
