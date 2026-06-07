import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import GrainGradientBg from "./components/ui/bg/GrainGradientBg";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flaw | AI-Powered Bug Tracking for Modern Development Teams",
  description:
    "Analyze issues faster, simplify bug reporting, and generate automated release notes with AI. Flaw helps development teams track, prioritize, and resolve bugs efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GrainGradientBg
          baseColor="#660606"
          grainOpacity={1}
          blobs={[
            {
              color: "#dc2626",
              colorTo: "#ef4444",
              width: 500,
              height: 700,
              top: "-120px",
              left: "-100px",
              blur: 150,
              opacity: 0.4,
              duration: 5,
            },
            {
              color: "#f97316",
              colorTo: "#fb923c",
              width: 900,
              height: 400,
              top: "10%",
              right: "-150px",
              blur: 140,
              opacity: 0.4,
              duration: 4,
            },
            {
              color: "#f59e0b",
              colorTo: "#fbbf24",
              width: 350,
              height: 600,
              bottom: "-200px",
              left: "25%",
              blur: 120,
              opacity: 0.4,
              duration: 4,
            },
          ]}
        >
          {children}
        </GrainGradientBg>
      </body>
    </html>
  );
}
