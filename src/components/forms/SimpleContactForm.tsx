"use client";

import { useState } from "react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function SimpleContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const canSubmit =
    name.trim().length > 1 &&
    email.trim().length > 3 &&
    message.trim().length > 10;

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || status === "sending") return;

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "DMD SILVERLINE — Website contact",
          from_name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      const data: { success?: boolean } = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-3">
      <div className="grid gap-3 md:grid-cols-2">
        <label className="space-y-1">
          <span className="font-display text-xs font-semibold text-silver-500">
            Name
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-body text-sm text-silver-50 placeholder:text-silver-600 focus:border-growth focus:outline-none"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="space-y-1">
          <span className="font-display text-xs font-semibold text-silver-500">
            Email
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-body text-sm text-silver-50 placeholder:text-silver-600 focus:border-growth focus:outline-none"
            placeholder="you@company.com"
            type="email"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="space-y-1">
        <span className="font-display text-xs font-semibold text-silver-500">
          Message
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 font-body text-sm text-silver-50 placeholder:text-silver-600 focus:border-growth focus:outline-none"
          placeholder="How can we support your investment or project goals?"
        />
      </label>

      {status === "error" ? (
        <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 font-body text-sm text-red-700">
          Could not send. Please try again or email info@dmdsilverline.net.
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="rounded-xl border border-growth/20 bg-growth-muted px-4 py-3 font-body text-sm text-silver-50">
          Sent. We’ll respond as soon as possible.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit || status === "sending" || status === "sent"}
        className="rounded-full bg-growth px-6 py-3 font-display text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40 hover:enabled:bg-growth-light"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
