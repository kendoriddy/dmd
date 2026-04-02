"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Car,
  Fuel,
  Leaf,
  Ship,
  Zap,
} from "lucide-react";
import { GlobalMapNodes } from "@/components/bridge/GlobalMapNodes";
import { SimpleContactForm } from "@/components/forms/SimpleContactForm";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: easeOut },
  };

  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO SECTION (Top of Homepage) */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home-hero.svg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: easeOut }}
            className="max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Driving Strategic Investment and Development Across Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: easeOut }}
            className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-white/85 md:text-xl"
          >
            DMD SILVERLINE is an international business and advisory company
            connecting African opportunities with global partners across energy,
            agriculture, trade, and infrastructure. We facilitate investment,
            technology transfer, and sustainable development between Africa and
            international markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55, ease: easeOut }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-display text-sm font-semibold text-silver-50 transition hover:bg-white/90"
            >
              Explore Our Sectors
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-3.5 font-display text-sm font-semibold text-white transition hover:border-white/60"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. POSITIONING SECTION (Immediately after Hero) */}
      <section className="border-t border-black/10 px-4 py-20 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-bold text-silver-50 md:text-4xl">
              Bridging Africa and Global Markets
            </h2>
            <p className="mt-4 font-body text-silver-400 leading-relaxed">
              DMD SILVERLINE operates at the intersection of African opportunity
              and global expertise. With a presence in Nigeria and international
              connections across Asia and Europe, the company facilitates
              cross-border partnerships, particularly between Africa and Japan.
              We support investors, governments, and private sector partners in
              navigating high-growth opportunities.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.06 }}
          >
            <GlobalMapNodes />
          </motion.div>
        </div>
      </section>

      {/* 3. LEADERSHIP SECTION */}
      <section className="border-t border-black/10 bg-charcoal px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl font-bold text-silver-50"
          >
            Leadership
          </motion.h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div {...fadeUp}>
              <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_70px_rgba(2,6,23,0.06)]">
                <Image
                  src="/leadership/mohammed-sanni-dantoro.jpeg"
                  alt="Mohammed Sanni Dantoro"
                  fill
                  sizes="(min-width: 768px) 520px, 90vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.06 }}
            >
              <p className="font-display text-lg font-semibold text-silver-50">
                Mohammed Sanni Dantoro
              </p>
              <p className="mt-1 font-display text-sm font-semibold text-silver-500">
                President &amp; Chief Executive Officer
              </p>
              <p className="mt-5 font-body text-silver-400 leading-relaxed">
                An international business executive with experience across
                Africa, Europe, and Asia, Mohammed Sanni Dantoro specializes in
                trade development, investment facilitation, and strategic
                partnerships. He leads DMD SILVERLINE’s mission to connect
                global partners with Africa’s most promising opportunities, with
                a strong focus on Japan–Africa collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CORE SECTORS SECTION */}
      <section className="border-t border-black/10 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl font-bold text-silver-50 md:text-4xl"
          >
            Our Core Sectors
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <SectorCard
              href="/services#agriculture"
              icon={Leaf}
              title="Agriculture & Agri-Technology"
              text="Driving agricultural modernization through mechanization, irrigation, and global partnerships."
            />
            <SectorCard
              href="/services#energy"
              icon={Zap}
              title="Energy"
              text="Supporting renewable energy and infrastructure development across emerging markets."
            />
            <SectorCard
              href="/services#trade"
              icon={Ship}
              title="Trade"
              text="Facilitating international trade between Africa and global markets."
            />
            <SectorCard
              href="/services#automobile"
              icon={Car}
              title="Automobile & Equipment"
              text="Supplying vehicles and industrial equipment to support economic growth."
            />
            <SectorCard
              href="/services#oilgas"
              icon={Fuel}
              title="Oil & Gas"
              text="Advisory and investment facilitation across upstream, midstream, and downstream sectors."
            />
            <SectorCard
              href="/services#consultancy"
              icon={Briefcase}
              title="Strategic Consultancy"
              text="Providing market entry, partnership development, and project advisory services."
            />
          </div>
        </div>
      </section>

      {/* 5. INVESTMENT SECTION */}
      <section className="border-t border-black/10 bg-growth-muted px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl font-bold text-silver-50 md:text-4xl"
          >
            Strategic Investment Opportunities in Africa
          </motion.h2>
          <motion.p
            {...fadeUp}
            className="mt-4 max-w-4xl font-body text-silver-400 leading-relaxed"
          >
            Africa presents one of the world’s most dynamic growth markets, with
            significant opportunities in agriculture, energy, infrastructure,
            and natural resources. DMD SILVERLINE works with international
            partners to identify, structure, and support viable investment
            opportunities.
          </motion.p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Agriculture and food systems",
              "Energy and infrastructure",
              "Natural resources",
              "Industrial development",
            ].map((b) => (
              <li
                key={b}
                className="rounded-xl border border-black/10 bg-white px-5 py-4 font-body text-sm text-silver-500"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. OUR APPROACH SECTION */}
      <section className="border-t border-black/10 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl font-bold text-silver-50 md:text-4xl"
          >
            Our Approach
          </motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ApproachCard
              title="Partnership-Driven"
              text="We believe sustainable development is achieved through strong international collaboration."
            />
            <ApproachCard
              title="Local Expertise"
              text="Deep understanding of African markets ensures efficient execution and risk management."
            />
            <ApproachCard
              title="Long-Term Value"
              text="We focus on projects that create lasting economic impact and sustainable growth."
            />
          </div>
        </div>
      </section>

      {/* 7. PARTNERS & COLLABORATION */}
      <section className="border-t border-black/10 bg-charcoal px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl font-bold text-silver-50 md:text-4xl"
          >
            Partnerships &amp; Collaboration
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 font-body text-silver-400">
            We work with:
          </motion.p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "International investors",
              "Government institutions",
              "Engineering and technical partners",
              "Development organizations",
              "Private sector stakeholders",
            ].map((b) => (
              <li
                key={b}
                className="rounded-xl border border-black/10 bg-white px-5 py-4 font-body text-sm text-silver-500"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section className="border-t border-black/10 px-4 py-20 md:px-6">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl font-bold text-silver-50 md:text-4xl"
          >
            Partner With Us
          </motion.h2>
          <motion.p {...fadeUp} className="mt-4 font-body text-silver-400">
            For investment opportunities, partnerships, or project
            collaboration:
          </motion.p>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <p className="font-display text-sm font-semibold text-silver-50">
                DMD SILVERLINE
              </p>
              <p className="mt-2 font-body text-sm text-silver-500">
                Abuja, Nigeria
              </p>
              <p className="mt-4 font-body text-sm text-silver-500">
                Email:{" "}
                <span className="text-silver-50">info@dmdsilverline.net</span>
              </p>
              <p className="mt-2 font-body text-sm text-silver-500">
                Website:{" "}
                <span className="text-silver-50">dmdsilverline.net</span>
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-growth hover:underline"
                >
                  Open full contact page
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-8">
              <p className="font-display text-sm font-semibold text-silver-50">
                Contact form
              </p>
              <SimpleContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectorCard({
  href,
  icon: Icon,
  title,
  text,
}: Readonly<{
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  text: string;
}>) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:border-growth hover:shadow-[0_24px_70px_rgba(2,6,23,0.08)]"
    >
      <div className="inline-flex rounded-xl bg-growth/10 p-2.5 text-growth">
        <Icon size={22} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-silver-50">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-silver-500">
        {text}
      </p>
      <p className="mt-4 font-display text-xs font-semibold text-growth">
        View sector
      </p>
    </Link>
  );
}

function ApproachCard({
  title,
  text,
}: Readonly<{
  title: string;
  text: string;
}>) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6">
      <h3 className="font-display text-lg font-semibold text-silver-50">
        {title}
      </h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-silver-500">
        {text}
      </p>
    </div>
  );
}
