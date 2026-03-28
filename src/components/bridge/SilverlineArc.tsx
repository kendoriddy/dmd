"use client";

import { motion, useReducedMotion } from "framer-motion";

const pathD = "M 40 180 Q 200 20 400 100 T 760 60";

export function SilverlineArc({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <svg
        className={className}
        viewBox="0 0 800 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="silverGradStatic"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#3ecf9a" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#e2e6ec" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1f8a65" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <path
          d={pathD}
          stroke="url(#silverGradStatic)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity={0.95}
        />
        <circle cx="40" cy="180" r="6" fill="#3ecf9a" opacity={0.9} />
        <circle cx="760" cy="60" r="6" fill="#e2e6ec" opacity={0.9} />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 800 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3ecf9a" stopOpacity="0.9" />
          <stop offset="35%" stopColor="#e2e6ec" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1f8a65" stopOpacity="0.85" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d={pathD}
        stroke="#3ecf9a"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity={0.22}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      />
      <motion.path
        d={pathD}
        stroke="url(#silverGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.95 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      />
      <motion.circle
        cx="40"
        cy="180"
        r="6"
        fill="#3ecf9a"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{
          delay: 0.35,
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
      />
      <motion.circle
        cx="760"
        cy="60"
        r="6"
        fill="#e2e6ec"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{
          delay: 2.15,
          type: "spring",
          stiffness: 220,
          damping: 16,
        }}
      />
      <motion.circle
        cx="40"
        cy="180"
        r="14"
        fill="#3ecf9a"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0.15, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="760"
        cy="60"
        r="14"
        fill="#e2e6ec"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0.08, 0.2] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />
    </svg>
  );
}
