"use client";

import { LayoutDashboard, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={15} />,
  },
  { label: "Teams", href: "/teams", icon: <Users size={15} /> },
];

export default function AppNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-40 flex items-center justify-between p-5 shadow-2xl backdrop-blur-sm transition-all duration-500 bg-black/50">
      <div className="flex w-full justify-end gap-8">
        {NAV_LINKS.map((l) => {
          const isActive = pathname === l.href;

          return (
            <Link
              key={l.label}
              href={l.href}
              className={`${
                isActive ? "text-amber-500" : "text-white/40"
              } font-sans flex gap-2 items-center justify-center text-md font-medium hover:text-white transition-all duration-300`}
            >
              {l.icon}
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
