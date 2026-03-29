"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/lib/i18n";

const links = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/partnership", key: "partnership" as const },
  { href: "/sectors", key: "sectors" as const },
  { href: "/leadership", key: "leadership" as const },
  { href: "/contact", key: "contact" as const },
];

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-growth"
        >
          <Image
            src="/logo.jpeg"
            alt=""
            width={200}
            height={56}
            priority
            className="h-9 w-auto max-h-10 shrink-0 object-contain md:h-10 md:max-h-11"
          />
          <span className="flex items-baseline gap-1">
            <span className="font-display text-lg font-bold tracking-tight text-silver-100 md:text-xl">
              DMD
            </span>
            <span className="font-display text-lg font-light tracking-[0.2em] text-growth md:text-xl">
              SILVERLINE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map(({ href, key }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-silver-50"
                    : "text-silver-400 hover:text-silver-100"
                }`}
              >
                {t.nav[key]}
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-md bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* <div className="flex rounded-full border border-white/15 bg-black/30 p-0.5 text-xs font-semibold">
            {(["en", "ja"] as Locale[]).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === code
                    ? "bg-growth text-charcoal"
                    : "text-silver-400 hover:text-silver-200"
                }`}
                aria-pressed={locale === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div> */}

          <button
            type="button"
            className="rounded-lg p-2 text-silver-200 lg:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0 }}
          className="border-t border-white/10 bg-charcoal lg:hidden"
        >
          <nav className="flex flex-col px-4 py-3">
            {links.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm ${
                  pathname === href
                    ? "bg-white/10 text-white"
                    : "text-silver-300"
                }`}
              >
                {t.nav[key]}
              </Link>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
