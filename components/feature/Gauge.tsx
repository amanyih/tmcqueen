"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

export default function Gauge() {
  const number_of_subarcs = 15;
  const [subArcs, setSubArcs] = useState<
    { value: number; color: string; width: number; showTick: boolean }[]
  >([]);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const startHue = parseFloat(
      rootStyles.getPropertyValue("--primary").split(" ")[0]
    );
    const endHue = parseFloat(
      rootStyles.getPropertyValue("--secondary").split(" ")[0]
    );

    const newSubArcs = Array.from({ length: number_of_subarcs }, (_, i) => {
      const progress = (i * 100) / number_of_subarcs;

      const hue = startHue + (progress / 100) * (endHue - startHue);
      const lightness = 45 + (progress / 100) * 10;

      return {
        value: progress,
        color: `hsl(${hue}, 85%, ${lightness}%)`,
        width: 0.1,
        showTick: true,
      };
    });

    setSubArcs(newSubArcs);
  }, []);

  return (
    <GaugeComponent
      className="w-64"
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
        subArcs: subArcs,
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
