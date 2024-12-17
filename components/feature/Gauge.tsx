"use client";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

import { Arc } from "react-gauge-component";

export default function Gauge() {
  const number_of_subarcs = 15;
  const sub_arcs = Array.from({ length: number_of_subarcs }, (_, i) => {
    const value = (i * 100) / number_of_subarcs; // Gradual progression
    return {
      value: value,
      color: `hsl(${value}, 20%, ${30 + value / 2}%)`, // Muted tones
      width: 0.1,
      showTick: true,
    };
  });

  return (
    <div>
      <h1>Radial Gauge</h1>
      <GaugeComponent
        className="w-96"
        value={80}
        type="radial"
        labels={{
          tickLabels: {
            type: "inner",
            defaultTickLineConfig: {
              color: "black",
              width: 1,
            },
            ticks: [],
            defaultTickValueConfig: {},
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
    </div>
  );
}
