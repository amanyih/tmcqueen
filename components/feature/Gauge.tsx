"use client";
import dynamic from "next/dynamic";

const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export default function Gauge() {
  const number_of_subarcs = 15;

  // Adjust colors to Lightning McQueen theme (Red -> Yellow)
  const sub_arcs = Array.from({ length: number_of_subarcs }, (_, i) => {
    const progress = (i * 100) / number_of_subarcs;

    // Color transition from Red to Yellow (using HSL for smooth gradient)
    const hue = 12 + (progress / 100) * 28; // Red (12) to Yellow (40)
    const lightness = 45 + (progress / 100) * 10; // Slightly brighter as progress increases

    return {
      value: progress,
      color: `hsl(${hue}, 85%, ${lightness}%)`, // Red to Yellow progression
      width: 0.1,
      showTick: true,
    };
  });

  return (
    <GaugeComponent
      className="w-64 "
      value={80}
      type="radial"
      labels={{
        tickLabels: {
          type: "outer",
          defaultTickLineConfig: {
            width: 1,
          },
          ticks: [],
          defaultTickValueConfig: {
            hide: true,
          },
        },
      }}
      arc={{
        subArcs: sub_arcs,
        padding: 0.02,
        width: 0.3,
      }}
      pointer={{
        elastic: true,
        animationDelay: 0,
      }}
    />
  );
}
