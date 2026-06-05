// GrainGradientBg.tsx
// Drop this into your Next.js project and wrap any page with it.
// Requires Tailwind CSS.

import { ReactNode, CSSProperties } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BlobConfig {
  /** Primary color of the blob (center of radial gradient) */
  color: string;
  /** Secondary color blended outward. Defaults to color if omitted */
  colorTo?: string;

  // Size
  /** Width in px. Default: 500 */
  width?: number;
  /** Height in px. Default: 500 */
  height?: number;

  // Position — use CSS strings e.g. "10%", "-80px", "0"
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;

  /** Blur radius in px. Default: 120 */
  blur?: number;
  /** Opacity (0–1). Default: 0.5 */
  opacity?: number;
  /** Animation duration in seconds. Default: 12 */
  duration?: number;
  /** Animation phase offset (0–3) to vary motion pattern. Default: auto index */
  animPhase?: 0 | 1 | 2 | 3;
}

interface GrainGradientBgProps {
  children: ReactNode;
  /** Array of blob configs that define the gradient orbs */
  blobs?: BlobConfig[];
  /** Base background color. Default: "#060608" */
  baseColor?: string;
  /** Grain overlay opacity (0–1). Default: 0.18 */
  grainOpacity?: number;
  /** Show vignette edge darkening. Default: true */
  vignette?: boolean;
  /** Extra className on the root element */
  className?: string;
}

// ─── Defaults ────────────────────────────────────────────────────────────────

const DEFAULT_BLOBS: BlobConfig[] = [
  {
    color: "#6d28d9",
    colorTo: "#4f46e5",
    width: 600,
    height: 600,
    top: "-100px",
    left: "-80px",
    blur: 120,
    opacity: 0.6,
    duration: 12,
  },
  {
    color: "#f43f5e",
    colorTo: "#ec4899",
    width: 500,
    height: 500,
    top: "10%",
    right: "-60px",
    blur: 140,
    opacity: 0.5,
    duration: 14,
  },
  {
    color: "#06b6d4",
    colorTo: "#0d9488",
    width: 550,
    height: 550,
    bottom: "-80px",
    left: "30%",
    blur: 130,
    opacity: 0.4,
    duration: 16,
  },
  {
    color: "#f59e0b",
    colorTo: "#ef4444",
    width: 350,
    height: 350,
    bottom: "15%",
    right: "10%",
    blur: 100,
    opacity: 0.35,
    duration: 10,
  },
];

// 4 float keyframe names — each blob gets one based on its index / animPhase
const ANIM_NAMES = [
  "grainFloatA",
  "grainFloatB",
  "grainFloatC",
  "grainFloatD",
] as const;

const KEYFRAMES = `
  @keyframes grainFloatA {
    0%,100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(40px,30px) scale(1.05); }
    66%      { transform: translate(-20px,50px) scale(0.97); }
  }
  @keyframes grainFloatB {
    0%,100% { transform: translate(0,0) scale(1); }
    40%      { transform: translate(-50px,20px) scale(1.08); }
    70%      { transform: translate(20px,-30px) scale(0.95); }
  }
  @keyframes grainFloatC {
    0%,100% { transform: translate(0,0) scale(1); }
    30%      { transform: translate(30px,-40px) scale(1.06); }
    60%      { transform: translate(-40px,20px) scale(0.98); }
  }
  @keyframes grainFloatD {
    0%,100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(-30px,-25px) scale(1.1); }
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────

export default function GrainGradientBg({
  children,
  blobs = DEFAULT_BLOBS,
  baseColor = "#060608",
  grainOpacity = 0.18,
  vignette = true,
  className = "",
}: GrainGradientBgProps) {
  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
      style={{ backgroundColor: baseColor }}
    >
      {/* SVG grain filter definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="grain-filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.62"
              numOctaves={4}
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </defs>
      </svg>

      {/* Render blobs */}
      {blobs.map((blob, i) => {
        const {
          color,
          colorTo = color,
          width = 500,
          height = 500,
          top,
          bottom,
          left,
          right,
          blur = 120,
          opacity = 0.5,
          duration = 12,
          animPhase,
        } = blob;

        const animName = ANIM_NAMES[(animPhase ?? i) % 4];

        const style: CSSProperties = {
          position: "absolute",
          borderRadius: "9999px",
          width: `${width}px`,
          height: `${height}px`,
          filter: `blur(${blur}px)`,
          opacity,
          background: `radial-gradient(circle at center, ${color}, ${colorTo} 60%, transparent 100%)`,
          animation: `${animName} ${duration}s ease-in-out infinite`,
          ...(top !== undefined && { top }),
          ...(bottom !== undefined && { bottom }),
          ...(left !== undefined && { left }),
          ...(right !== undefined && { right }),
        };

        return <div key={i} style={style} aria-hidden="true" />;
      })}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          opacity: grainOpacity,
          filter: "url(#grain-filter)",
          mixBlendMode: "overlay",
        }}
      />

      {/* Vignette */}
      {vignette && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style>{KEYFRAMES}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// USAGE EXAMPLES
// ─────────────────────────────────────────────────────────────────────────────

// 1. Default (Cosmic preset):
/* 
 <GrainGradientBg>
   <main>...</main>
 </GrainGradientBg>
*/

// 2. Fully custom blobs:
/*
 <GrainGradientBg
   baseColor="#05080f"
   grainOpacity={0.2}
   blobs={[
     { color: "#10b981", colorTo: "#059669", width: 700, height: 700, top: "-120px", left: "-100px", blur: 140, opacity: 0.55, duration: 14 },
     { color: "#6366f1", colorTo: "#8b5cf6", width: 500, height: 500, top: "5%",    right: "-60px",  blur: 130, opacity: 0.45, duration: 12 },
     { color: "#f43f5e", colorTo: "#fb7185", width: 400, height: 400, bottom: "-60px", left: "25%",  blur: 110, opacity: 0.4,  duration: 16 },
   ]}
 >
   <main>...</main>
 </GrainGradientBg>
*/

// 3. Single spotlight blob:
/* 
 <GrainGradientBg
   baseColor="#000"
   blobs={[
    { color: "#a855f7", colorTo: "#7c3aed", width: 800, height: 800, top: "-200px", left: "50%", blur: 160, opacity: 0.7, duration: 20 },
    ]}
 >
  <main>...</main>
 </GrainGradientBg>
*/
