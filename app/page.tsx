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
          width: 500,
          height: 700,
          top: "-120px",
          left: "-100px",
          blur: 150,
          opacity: 0.7,
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
          opacity: 0.5,
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
          opacity: 0.6,
          duration: 4,
        },
      ]}
    >
      <Landing />
    </GrainGradientBg>
  );
}
