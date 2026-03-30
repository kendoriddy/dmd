"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal-deep">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-silver-100">
              DMD SILVERLINE
            </p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-silver-500">
              <strong className="text-silver-300">
                Responsible investment
              </strong>{" "}
              and strategic facilitation between global partners and{" "}
              <strong className="text-growth-light">high-potential</strong>{" "}
              African markets.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-silver-500">
              {t.nav.home}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-silver-400">
              <li>
                <Link href="/about" className="hover:text-silver-100">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-silver-100">
                  {t.nav.partnership}
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="hover:text-silver-100">
                  {t.nav.sectors}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-silver-500">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm text-silver-400">
              <li>
                <Link href="/leadership" className="hover:text-silver-100">
                  {t.nav.leadership}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-silver-100">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href="https://dmdsilverline.net/"
                  className="hover:text-silver-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dmdsilverline.net/
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-silver-500">
              Trust & compliance
            </p>
            <p className="mt-3 text-sm leading-relaxed text-silver-500">
              <strong className="text-silver-300">Secure access</strong> for
              investors and institutional partners. We emphasize transparency
              and <strong className="text-silver-300">risk-aware</strong>{" "}
              advisory.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-silver-400 transition-colors hover:border-growth hover:text-growth-light"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-silver-600">
          © {year} DMD SILVERLINE. {t.common.headquarters}: Abuja, Nigeria ·{" "}
          {t.common.representation}: Tokyo, Japan
        </p>
      </div>
    </footer>
  );
}
