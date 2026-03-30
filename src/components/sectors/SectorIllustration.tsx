"use client";

type Variant =
  | "agriculture"
  | "energy"
  | "trade"
  | "automobile"
  | "oilgas"
  | "consultancy";

export function SectorIllustration({
  variant,
  className = "",
}: Readonly<{ variant: Variant; className?: string }>) {
  const common =
    "absolute inset-0 h-full w-full rounded-2xl border border-black/10 bg-white";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={common} />
      <svg
        viewBox="0 0 720 360"
        className="relative h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0ea5a3" stopOpacity="0.28" />
            <stop offset="0.55" stopColor="#0f766e" stopOpacity="0.14" />
            <stop offset="1" stopColor="#111827" stopOpacity="0.06" />
          </linearGradient>
          <radialGradient id="r" cx="30%" cy="35%" r="70%">
            <stop offset="0" stopColor="#0ea5a3" stopOpacity="0.24" />
            <stop offset="1" stopColor="#0ea5a3" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="#111827"
              strokeOpacity="0.06"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect x="0" y="0" width="720" height="360" fill="url(#grid)" />
        <rect x="0" y="0" width="720" height="360" fill="url(#r)" />

        {/* Silverline arc motif */}
        <path
          d="M 40 280 Q 210 80 365 175 T 680 90"
          fill="none"
          stroke="#0ea5a3"
          strokeOpacity="0.55"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="8 10"
        />
        <path
          d="M 40 280 Q 210 80 365 175 T 680 90"
          fill="none"
          stroke="url(#g)"
          strokeOpacity="0.9"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {variant === "agriculture" ? (
          <>
            {/* Field rows */}
            <g opacity="0.9">
              {Array.from({ length: 7 }).map((_, i) => (
                <path
                  key={i}
                  d={`M ${60 + i * 18} 330 Q ${180 + i * 14} 230 ${
                    320 + i * 10
                  } 220 T ${680 + i * 4} 210`}
                  stroke="#0f766e"
                  strokeOpacity="0.16"
                  strokeWidth={2}
                  fill="none"
                />
              ))}
            </g>
            {/* Minimal “leaf” */}
            <path
              d="M 520 250 C 520 210 552 190 588 192 C 582 232 560 258 520 250 Z"
              fill="#0ea5a3"
              fillOpacity="0.22"
              stroke="#0f766e"
              strokeOpacity="0.35"
            />
          </>
        ) : variant === "energy" ? (
          <>
            {/* Solar panels */}
            <g transform="translate(120 210) skewX(-10)">
              {Array.from({ length: 3 }).map((_, i) => (
                <g key={i} transform={`translate(${i * 110} ${i * 10})`}>
                  <rect
                    x="0"
                    y="0"
                    width="160"
                    height="70"
                    rx="10"
                    fill="#111827"
                    fillOpacity="0.06"
                    stroke="#111827"
                    strokeOpacity="0.12"
                  />
                  {Array.from({ length: 6 }).map((__, j) => (
                    <path
                      key={j}
                      d={`M ${10 + j * 24} 8 V 62`}
                      stroke="#0f766e"
                      strokeOpacity="0.18"
                    />
                  ))}
                  {Array.from({ length: 3 }).map((__, j) => (
                    <path
                      key={`h-${j}`}
                      d={`M 10 ${18 + j * 18} H 150`}
                      stroke="#0f766e"
                      strokeOpacity="0.14"
                    />
                  ))}
                </g>
              ))}
            </g>
            {/* Sun */}
            <circle
              cx="585"
              cy="95"
              r="42"
              fill="#0ea5a3"
              fillOpacity="0.16"
              stroke="#0f766e"
              strokeOpacity="0.28"
            />
          </>
        ) : variant === "trade" ? (
          <>
            {/* Container blocks */}
            <g transform="translate(120 190)">
              {Array.from({ length: 6 }).map((_, i) => (
                <rect
                  key={i}
                  x={(i % 3) * 140}
                  y={Math.floor(i / 3) * 80}
                  width="120"
                  height="60"
                  rx="10"
                  fill="#0ea5a3"
                  fillOpacity="0.12"
                  stroke="#111827"
                  strokeOpacity="0.12"
                />
              ))}
            </g>
            {/* Direction arrow */}
            <path
              d="M 140 120 H 520"
              stroke="#0f766e"
              strokeOpacity="0.35"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M 520 120 L 498 106 M 520 120 L 498 134"
              stroke="#0f766e"
              strokeOpacity="0.35"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        ) : variant === "automobile" ? (
          <>
            {/* Stylized chassis */}
            <path
              d="M 170 240 C 190 210 240 190 300 190 H 420 C 480 190 530 210 550 240 L 585 240 C 600 240 612 252 612 267 V 282 H 160 V 267 C 160 252 172 240 187 240 Z"
              fill="#111827"
              fillOpacity="0.06"
              stroke="#111827"
              strokeOpacity="0.14"
            />
            <circle
              cx="250"
              cy="285"
              r="20"
              fill="#0ea5a3"
              fillOpacity="0.16"
              stroke="#0f766e"
              strokeOpacity="0.3"
            />
            <circle
              cx="520"
              cy="285"
              r="20"
              fill="#0ea5a3"
              fillOpacity="0.16"
              stroke="#0f766e"
              strokeOpacity="0.3"
            />
          </>
        ) : variant === "oilgas" ? (
          <>
            {/* Pipeline + droplet */}
            <rect
              x="150"
              y="232"
              width="420"
              height="36"
              rx="18"
              fill="#111827"
              fillOpacity="0.06"
              stroke="#111827"
              strokeOpacity="0.12"
            />
            <path
              d="M 520 165 C 520 130 548 112 548 92 C 548 112 576 130 576 165 C 576 196 554 212 548 212 C 542 212 520 196 520 165 Z"
              fill="#0ea5a3"
              fillOpacity="0.16"
              stroke="#0f766e"
              strokeOpacity="0.3"
            />
          </>
        ) : (
          <>
            {/* Consultancy: “framework” */}
            <g transform="translate(150 120)">
              <rect
                x="0"
                y="0"
                width="420"
                height="200"
                rx="18"
                fill="#111827"
                fillOpacity="0.05"
                stroke="#111827"
                strokeOpacity="0.12"
              />
              <path
                d="M 28 60 H 392"
                stroke="#0f766e"
                strokeOpacity="0.18"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 28 100 H 320"
                stroke="#0f766e"
                strokeOpacity="0.14"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 28 140 H 360"
                stroke="#0f766e"
                strokeOpacity="0.14"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="54" cy="30" r="8" fill="#0ea5a3" fillOpacity="0.22" />
              <circle cx="88" cy="30" r="8" fill="#0ea5a3" fillOpacity="0.14" />
              <circle
                cx="122"
                cy="30"
                r="8"
                fill="#0ea5a3"
                fillOpacity="0.09"
              />
            </g>
          </>
        )}
      </svg>
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_0_1px_rgba(15,23,42,0.05),0_20px_70px_rgba(2,6,23,0.06)]" />
    </div>
  );
}
