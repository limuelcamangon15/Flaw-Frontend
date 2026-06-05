"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How it works", href: "#how-it-works" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-3 left-0 right-0 z-50 flex items-center justify-between px-1.5 py-2 mx-3 md:px-2.5 md:mx-10 rounded-full shadow-2xl backdrop-blur-sm transition-all duration-500 bg-amber-500/10">
      <Link href="/" className="flex items-center gap-2.5">
        <Image src="/flaw-logo.svg" alt="Flaw" width={32} height={32} />
        <span className="font-heading font-black text-white">FLAW</span>
      </Link>

      <div className="flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="hidden md:block text-sm font-medium text-white/40 hover:text-white transition-colors duration-200"
          >
            {l.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="text-sm font-medium text-white/50 hover:text-white transition-colors px-4 py-2"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #dc2626, #f97316)",
            boxShadow: "0 0 20px rgba(220,38,38,0.3)",
          }}
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}
