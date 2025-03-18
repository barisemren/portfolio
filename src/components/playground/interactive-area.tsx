"use client";

import { useState } from "react";
import { Config } from "@/app/annotate-playground/page";
import ConfigInputs from "@/components/playground/inputs";
import AnnotatePreview from "@/components/playground/preview";

export default function InteractiveArea() {
  const [config, setConfig] = useState({
    type: "underline" as const,
    color: "#FFC107",
    hoverColor: "#FF5722",
    animate: true,
    animationDuration: 800,
    iterations: 2,
    strokeWidth: 1,
    padding: 5,
    multiline: true,
    showOnLoad: true,
    showOnHover: false,
  });

  const handleConfigChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setConfig({
      ...config,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
          ? Number(value)
          : value,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
      {/* Preview section */}
      <AnnotatePreview config={config} />

      {/* Controls section */}
      <ConfigInputs
        config={config}
        handleConfigChange={handleConfigChange}
      />
    </div>
  );
} 