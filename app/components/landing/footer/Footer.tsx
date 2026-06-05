import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-gray-400/10">
      <div className="flex items-center gap-2">
        <Image src="/flaw-logo.svg" alt="Flaw" width={20} height={20} />
        <span className="font-heading font-black text-white/40 text-xs tracking-tight">
          FLAW
        </span>
      </div>
      <p className="font-mono text-xs text-white/20">
        © 2026 <span className="text-white/50">Flaw.</span> All rights reserved.
        Developed by{" "}
        <Link
          href="https://limuelcamangon.vercel.app"
          className="text-amber-500"
        >
          Limuel
        </Link>
      </p>
      <div className="flex gap-5">
        {["Privacy", "Terms"].map((l) => (
          <Link
            key={l}
            href="#"
            className="font-mono text-xs text-white/25 hover:text-white/50 transition-colors"
          >
            {l}
          </Link>
        ))}
      </div>
    </footer>
  );
}
