"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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

const ROLE_COLORS: Record<string, string> = {
  QA: "rgba(239,68,68,0.15)",
  DEV: "rgba(249,115,22,0.15)",
  AI: "rgba(245,158,11,0.15)",
};

const ROLE_TEXT: Record<string, string> = {
  QA: "#ef4444",
  DEV: "#fb923c",
  AI: "#fbbf24",
};

export default function Landing() {
  return (
    <div className="relative z-10 text-white">
      <Navbar />

      {/* ── Hero ── */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 gap-7">
        <div
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase"
          style={{
            background: "rgba(220,38,38,0.1)",
            border: "0.5px solid rgba(220,38,38,0.25)",
            color: "#f97316",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          100% Free · No repo and No payment required
        </div>

        <h1
          className="font-heading font-black tracking-tight leading-none"
          style={{
            fontSize: "clamp(44px, 9vw, 88px)",
            letterSpacing: "-0.04em",
          }}
        >
          Track bugs.
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ship fixes.
          </span>
        </h1>

        <p
          className="font-sans text-white/45 max-w-lg leading-relaxed"
          style={{ fontSize: 17 }}
        >
          QA reports the bug. Dev gets AI-suggested fixes. Flaw closes the loop
          — with auto-generated release notes and improvement insights.
        </p>

        <div className="flex items-center gap-3 mt-2">
          <Link
            href="/signup"
            className="px-7 py-3 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #dc2626, #f97316)",
              boxShadow: "0 0 32px rgba(220,38,38,0.35)",
            }}
          >
            Start free
          </Link>
          <Link
            href="#how-it-works"
            className="px-7 py-3 rounded-full font-semibold text-sm text-white/60 hover:text-white transition-colors border-[0.5px] border-gray-400/20"
          >
            See how →
          </Link>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-5"
      >
        <p className="font-mono text-xs tracking-widest uppercase text-red-500/60">
          About
        </p>
        <h2
          className="font-heading font-black tracking-tight leading-tight"
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            letterSpacing: "-0.03em",
          }}
        >
          No repos. No setup.
          <br />
          Just better bug tracking.
        </h2>
        <p className="font-sans text-white/45 max-w-xl leading-relaxed text-base">
          Flaw is built for QA teams and developers who want structure without
          complexity. Report bugs in plain language, assign them to the right
          dev, and let AI handle the heavy lifting — from diagnosing root causes
          to writing release notes.
        </p>
      </section>

      {/* ── How it works ── */}
      <section
        id="how-it-works"
        className="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center gap-10 pb-32"
      >
        <div className="text-center flex flex-col gap-2">
          <p className="font-mono text-xs tracking-widest uppercase text-orange-500/60">
            How it works
          </p>
          <h2
            className="font-heading font-black tracking-tight"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              letterSpacing: "-0.03em",
            }}
          >
            From report to resolved.
          </h2>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {STEPS.map((s, i) => (
            <div
              key={s.num}
              className="flex items-start gap-5 p-5 rounded-2xl transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "0.5px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="font-heading font-black shrink-0 leading-none mt-0.5"
                style={{
                  fontSize: 28,
                  letterSpacing: "-0.04em",
                  background:
                    i < 2
                      ? "linear-gradient(135deg, #ef4444, #f97316)"
                      : i < 4
                      ? "linear-gradient(135deg, #f97316, #fbbf24)"
                      : "linear-gradient(135deg, #fbbf24, #fde68a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </span>
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-heading font-black text-white text-base tracking-tight">
                    {s.title}
                  </p>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-full"
                    style={{
                      background: ROLE_COLORS[s.role],
                      color: ROLE_TEXT[s.role],
                      border: `0.5px solid ${ROLE_TEXT[s.role]}30`,
                    }}
                  >
                    {s.role}
                  </span>
                </div>
                <p className="font-sans text-white/40 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4 mt-4 text-center">
          <p className="font-sans text-white/40 text-sm">
            Free for individuals and small teams.
          </p>
          <Link
            href="/signup"
            className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #dc2626, #f97316)",
              boxShadow: "0 0 32px rgba(220,38,38,0.3)",
            }}
          >
            Get started — it&apos;s free!
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
