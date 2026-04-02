"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalMapNodes } from "@/components/bridge/GlobalMapNodes";
import { useLanguage } from "@/context/LanguageContext";
import { Check, ChevronRight } from "lucide-react";

type Identity = "investor" | "government" | "technology" | "";
type Sector =
  | "agriculture"
  | "energy"
  | "trade"
  | "automobile"
  | "oilgas"
  | "consultancy"
  | "";

const identities: { id: Exclude<Identity, "">; label: string }[] = [
  { id: "investor", label: "Investor" },
  { id: "government", label: "Government representative" },
  { id: "technology", label: "Technology partner" },
];

const sectors: { id: Exclude<Sector, "">; label: string }[] = [
  { id: "agriculture", label: "Agriculture" },
  { id: "energy", label: "Energy" },
  { id: "trade", label: "Trade" },
  { id: "automobile", label: "Automobile & equipment" },
  { id: "oilgas", label: "Oil & gas" },
  { id: "consultancy", label: "Strategic consultancy" },
];

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function ContactPage() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [identity, setIdentity] = useState<Identity>("");
  const [sector, setSector] = useState<Sector>("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const canNext1 = identity !== "";
  const canNext2 = sector !== "";
  const canSubmit = message.trim().length > 20;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setSubmitError(
        "This form is not connected yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (see .env.example) or contact us by email.",
      );
      return;
    }

    const identityLabel =
      identities.find((i) => i.id === identity)?.label ?? identity;
    const sectorLabel = sectors.find((s) => s.id === sector)?.label ?? sector;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "DMD SILVERLINE — Investor gateway",
          from_name: `Inquiry: ${identityLabel}`,
          message: `Identity: ${identityLabel}\nSector: ${sectorLabel}\n\nMessage:\n${message.trim()}`,
        }),
      });

      let data: { success?: boolean; message?: string } = {};
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid response");
      }
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Submission rejected");
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        "We could not send your message. Please try again in a moment or reach out by email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-growth-light">
            Contact & global reach
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-silver-50 md:text-5xl">
            Connecting the world to Africa
          </h1>
          <p className="mt-4 font-body text-lg text-silver-400 leading-relaxed">
            Abuja and Asia anchor our operations. This page reflects DMD
            SILVERLINE&apos;s role as an international{" "}
            <strong className="text-silver-200">bridge</strong>—with secure,
            high-trust channels for investors and institutional partners.
          </p>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-lg font-semibold text-silver-200">
              Interactive positioning
            </h2>
            <p className="mt-2 font-body text-sm text-silver-500">
              Pulsing nodes:{" "}
              <strong className="text-growth-light">Abuja</strong> (HQ) and{" "}
              <strong className="text-silver-300">Asia</strong> (partnerships).
              The silver arc symbolizes active technology transfer and trade
              flow.
            </p>
            <div className="mt-6">
              <GlobalMapNodes />
            </div>
            <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 bg-charcoal/80">
                    <th className="px-4 py-3 font-display text-growth-light">
                      Location
                    </th>
                    <th className="px-4 py-3 font-display text-silver-200">
                      Focus
                    </th>
                    <th className="hidden px-4 py-3 font-display text-silver-200 md:table-cell">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-silver-500">
                  <tr className="border-b border-black/5">
                    <td className="px-4 py-3 font-medium text-silver-300">
                      Abuja HQ
                    </td>
                    <td className="px-4 py-3">
                      Regional ops &amp; govt. relations
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      High-potential projects and local stakeholders.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-silver-300">
                      Asia
                    </td>
                    <td className="px-4 py-3">
                      Global partnerships &amp; tech transfer
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      Asian expertise with African industrial development.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_0_80px_rgba(2,6,23,0.06)] md:p-8">
            <h2 className="font-display text-xl font-semibold text-silver-100">
              Investor gateway
            </h2>
            <p className="mt-2 font-body text-sm text-silver-500">
              Multi-step inquiry for high-level consultancy and investment
              dialogue.
            </p>

            <div className="mt-6 flex gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1 flex-1 rounded-full ${
                    s <= step ? "bg-growth" : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 flex flex-col items-center gap-4 py-8 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-growth/20 text-growth-light">
                  <Check size={28} />
                </div>
                <p className="font-display text-lg font-semibold text-silver-100">
                  Thank you
                </p>
                <p className="max-w-sm font-body text-sm text-silver-500">
                  Your inquiry has been captured for review. Our team will
                  respond through secure channels aligned with{" "}
                  <strong className="text-silver-300">
                    responsible investment
                  </strong>{" "}
                  standards.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      className="space-y-3"
                    >
                      <p className="font-display text-sm font-semibold text-silver-300">
                        Step 1 — Identity
                      </p>
                      <p className="font-body text-xs text-silver-500">
                        Are you an investor, government representative, or
                        technology partner?
                      </p>
                      <div className="flex flex-col gap-2">
                        {identities.map((opt) => (
                          <label
                            key={opt.id}
                            className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition-colors ${
                              identity === opt.id
                                ? "border-growth bg-growth/10"
                                : "border-black/10 hover:border-black/20"
                            }`}
                          >
                            <input
                              type="radio"
                              name="identity"
                              className="accent-growth"
                              checked={identity === opt.id}
                              onChange={() => setIdentity(opt.id)}
                            />
                            <span className="font-body text-sm text-silver-200">
                              {opt.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      className="space-y-3"
                    >
                      <p className="font-display text-sm font-semibold text-silver-300">
                        Step 2 — Sector of interest
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {sectors.map((opt) => (
                          <label
                            key={opt.id}
                            className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${
                              sector === opt.id
                                ? "border-growth bg-growth/10 text-silver-100"
                                : "border-black/10 text-silver-400 hover:border-black/20"
                            }`}
                          >
                            <input
                              type="radio"
                              name="sector"
                              className="accent-growth"
                              checked={sector === opt.id}
                              onChange={() => setSector(opt.id)}
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div
                      key="s3"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      className="space-y-3"
                    >
                      <p className="font-display text-sm font-semibold text-silver-300">
                        Step 3 — Message
                      </p>
                      <p className="font-body text-xs text-silver-500">
                        Project inquiry or partnership proposal (minimum 20
                        characters).
                      </p>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={6}
                        className="w-full resize-y rounded-xl border border-white/15 bg-charcoal-deep px-4 py-3 font-body text-sm text-silver-100 placeholder:text-silver-600 focus:border-growth focus:outline-none"
                        placeholder="Describe scope, timeline, and partnership intent…"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {submitError ? (
                  <p
                    role="alert"
                    className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 font-body text-sm text-red-200/90"
                  >
                    {submitError}
                  </p>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-3">
                  {step > 1 ? (
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setStep((s) => s - 1)}
                      className="rounded-full border border-black/15 px-5 py-2.5 font-display text-sm font-semibold text-silver-50 hover:border-silver-400 disabled:opacity-40"
                    >
                      Back
                    </button>
                  ) : null}
                  {step < 3 ? (
                    <button
                      type="button"
                      disabled={step === 1 ? !canNext1 : !canNext2}
                      onClick={() => setStep((s) => s + 1)}
                      className="inline-flex items-center gap-1 rounded-full bg-growth px-6 py-2.5 font-display text-sm font-semibold text-charcoal-deep disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:bg-growth-light"
                    >
                      Continue
                      <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="rounded-full bg-growth px-6 py-2.5 font-display text-sm font-semibold text-charcoal-deep disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:bg-growth-light"
                    >
                      {isSubmitting ? "Sending…" : t.cta.partner}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
