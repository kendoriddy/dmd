"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectors = [
  {
    id: "agriculture",
    title: "Agriculture & Agri-Technology",
    text: "Driving agricultural modernization through mechanization, irrigation, and global partnerships.",
    imageSrc: "/visuals/agriculture_irrigation.jpg",
    imageAlt: "Agricultural irrigation and field work",
  },
  {
    id: "energy",
    title: "Energy",
    text: "Supporting renewable energy and infrastructure development across emerging markets.",
    imageSrc: "/visuals/solar_farm.jpeg",
    imageAlt: "Solar farm renewable energy infrastructure",
  },
  {
    id: "trade",
    title: "Trade",
    text: "Facilitating international trade between Africa and global markets.",
    imageSrc: "/visuals/cargo_port.jpeg",
    imageAlt: "Cargo port and international logistics",
  },
  {
    id: "automobile",
    title: "Automobile & Equipment",
    text: "Supplying vehicles and industrial equipment to support economic growth.",
    imageSrc: "/visuals/fleet_of_cars_beside_water_body.jpeg",
    imageAlt: "Fleet vehicles and equipment supply",
  },
  {
    id: "oilgas",
    title: "Oil & Gas",
    text: "Advisory and investment facilitation across upstream, midstream, and downstream sectors.",
    imageSrc: "/visuals/oil_offshore_forcados.webp",
    imageAlt: "Offshore oil and gas operations",
  },
  {
    id: "consultancy",
    title: "Strategic Consultancy",
    text: "Providing market entry, partnership development, and project advisory services.",
    imageSrc: "/visuals/meeting_serious_people.jpeg",
    imageAlt: "Executive meeting and strategic advisory",
  },
];

export default function ServicesPage() {
  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-growth-light">
          Services
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold text-silver-50 md:text-5xl">
          Explore Our Sectors
        </h1>
        <p className="mt-4 max-w-3xl font-body text-silver-400 leading-relaxed">
          Our work spans six core sectors. Use the sections below to review each
          focus area.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {sectors.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
              <div className="relative aspect-video bg-charcoal">
                <Image
                  src={s.imageSrc}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-silver-50">
                  {s.title}
                </h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-silver-500">
                  {s.text}
                </p>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
