"use client";

import Link from "next/link";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const STEPS = [
  {
    num: "01",
    role: "QA",
    title: "Build your team",
    desc: "Create your team, add developers, and assign bugs directly. Everyone sees exactly what they own.",
  },
  {
    num: "02",
    role: "QA",
    title: "Report the bug",
    desc: "QA creates a bug report with context — steps to reproduce and severity. No repo access needed.",
  },
  {
    num: "03",
    role: "DEV",
    title: "Dev investigates",
    desc: "Developers see their assigned bugs with AI-suggested root causes and possible fixes — based purely on the report context.",
  },
  {
    num: "04",
    role: "AI",
    title: "AI assists the fix",
    desc: "Flaw's AI generates possible causes, suggested fixes, and drafts release notes the moment a bug is marked resolved.",
  },
  {
    num: "05",
    role: "QA",
    title: "Close the loop",
    desc: "QA verifies the fix and updates status from Open → Verified → Closed. Clean. Traceable. Done.",
  },
];

const ROLE_STYLES: Record<string, string> = {
  QA: "bg-red-500/10 text-red-400 border-red-400/30",
  DEV: "bg-orange-500/10 text-orange-400 border-orange-400/30",
  AI: "bg-amber-500/10 text-amber-300 border-amber-300/30",
};

export default function Landing() {
  return (
    <main className="text-white">
      <Navbar />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center gap-7 px-6 text-center">
        <div className="flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-orange-500">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
          100% Free · No repo and No payment required
        </div>

        <h1 className="font-heading text-[clamp(44px,9vw,88px)] font-black leading-none tracking-[-0.04em]">
          Track bugs.
          <br />
          <span className="bg-linear-to-r from-red-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            Ship fixes.
          </span>
        </h1>

        <p className="max-w-lg font-sans text-[17px] leading-relaxed text-white/45">
          QA reports the bug. Dev gets AI-suggested fixes. Flaw closes the loop
          — with auto-generated release notes and improvement insights.
        </p>

        <div className="mt-2 flex items-center gap-3">
          <Link
            href="/signup"
            className="rounded-full bg-linear-to-r from-red-600 to-orange-500 px-7 py-3 text-sm font-semibold shadow-[0_0_32px_rgba(220,38,38,0.35)] transition-all hover:opacity-90 active:scale-95"
          >
            Start free
          </Link>

          <Link
            href="#how-it-works"
            className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            See how →
          </Link>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-24 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-red-500/60">
          About
        </p>

        <h2 className="font-heading text-[clamp(28px,4vw,48px)] font-black leading-tight tracking-[-0.03em]">
          No repos. No setup.
          <br />
          Just better bug tracking.
        </h2>

        <p className="max-w-xl font-sans text-base leading-relaxed text-white/45">
          Flaw is built for QA teams and developers who want structure without
          complexity. Report bugs in plain language, assign them to the right
          dev, and let AI handle the heavy lifting — from diagnosing root causes
          to writing release notes.
        </p>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto flex max-w-2xl flex-col items-center gap-10 px-6 pb-32 pt-16"
      >
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-orange-500/60">
            How it works
          </p>

          <h2 className="font-heading text-[clamp(28px,4vw,44px)] font-black tracking-[-0.03em]">
            From report to resolved.
          </h2>
        </div>

        <div className="flex w-full flex-col gap-3">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-md transition-all duration-300"
            >
              <span
                className={`mt-0.5 shrink-0 bg-linear-to-r font-heading text-[28px] font-black leading-none tracking-[-0.04em] text-transparent bg-clip-text ${
                  i < 2
                    ? "from-red-500 to-orange-500"
                    : i < 4
                    ? "from-orange-500 to-amber-400"
                    : "from-amber-400 to-amber-200"
                }`}
              >
                {s.num}
              </span>

              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <p className="font-heading text-base font-black tracking-tight text-white">
                    {s.title}
                  </p>

                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-xs ${
                      ROLE_STYLES[s.role]
                    }`}
                  >
                    {s.role}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-white/40">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/40">
            Free for individuals and small teams.
          </p>

          <Link
            href="/signup"
            className="rounded-full bg-linear-to-r from-red-600 to-orange-500 px-8 py-3.5 text-sm font-semibold shadow-[0_0_32px_rgba(220,38,38,0.3)] transition-all hover:opacity-90 active:scale-95"
          >
            Get started — it&apos;s free!
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
