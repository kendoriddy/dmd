"use client";

import { motion } from "framer-motion";

export function GlobalMapNodes({ compact = false }: { compact?: boolean }) {
  const h = compact ? 200 : 320;
  const w = compact ? "100%" : "min(100%, 720px)";

  return (
    <div
      className="relative mx-auto overflow-hidden rounded-2xl border border-black/10 bg-white"
      style={{ maxWidth: w, height: h }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(31,138,101,0.15),transparent_50%),radial-gradient(ellipse_at_75%_35%,rgba(226,230,236,0.08),transparent_45%)]" />
      <svg
        viewBox="0 0 900 320"
        className="h-full w-full opacity-40"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="mapLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1f8a65" />
            <stop offset="50%" stopColor="#e2e6ec" />
            <stop offset="100%" stopColor="#3ecf9a" />
          </linearGradient>
        </defs>
        {/* Stylized simplified arcs — not geographic */}
        <path
          d="M 120 200 Q 380 80 520 140 T 780 100"
          stroke="url(#mapLine)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 6"
          opacity={0.6}
        />
        <motion.path
          d="M 120 200 Q 380 80 520 140 T 780 100"
          stroke="#3ecf9a"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        {/* Abuja approx left-lower */}
        <g transform="translate(380, 175)">
          <circle r="14" fill="#1f8a65" opacity={0.35} />
          <motion.circle
            r="8"
            fill="#3ecf9a"
            animate={{ scale: [1, 1.25, 1], opacity: [0.9, 0.6, 0.9] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </g>
        {/* Tokyo approx right-upper */}
        <g transform="translate(720, 95)">
          <circle r="14" fill="#e2e6ec" opacity={0.2} />
          <motion.circle
            r="8"
            fill="#e2e6ec"
            animate={{ scale: [1, 1.2, 1], opacity: [0.85, 0.55, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
          />
        </g>
      </svg>
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-black/50 px-3 py-2 text-xs text-silver-300 backdrop-blur-sm">
        <span className="text-growth-light">●</span> Abuja — HQ
      </div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-lg bg-black/50 px-3 py-2 text-xs text-silver-300 backdrop-blur-sm">
        <span className="text-silver-200">●</span> Tokyo — Partnerships
      </div>
    </div>
  );
}
