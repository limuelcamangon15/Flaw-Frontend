import GrainGradientBg from "./components/ui/GrainGradientBg";
import Landing from "./components/landing/Landing";

export default function Home() {
  return (
    <GrainGradientBg
      baseColor="#660606"
      grainOpacity={1}
      blobs={[
        {
          color: "#dc2626",
          colorTo: "#ef4444",
          width: 700,
          height: 700,
          top: "-120px",
          left: "-100px",
          blur: 150,
          opacity: 0.6,
          duration: 16,
        },
        {
          color: "#f97316",
          colorTo: "#fb923c",
          width: 500,
          height: 500,
          top: "10%",
          right: "-80px",
          blur: 140,
          opacity: 0.45,
          duration: 12,
        },
        {
          color: "#f59e0b",
          colorTo: "#fbbf24",
          width: 450,
          height: 450,
          bottom: "-100px",
          left: "30%",
          blur: 120,
          opacity: 0.35,
          duration: 18,
        },
      ]}
    >
      <Landing />
    </GrainGradientBg>
  );
}
