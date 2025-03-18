"use client";

import { Config } from "@/app/annotate-playground/page";
import React from "react";
import { Switch } from "@headlessui/react";

export default function ConfigInputs({
  config,
  handleConfigChange,
}: {
  config: Config;
  handleConfigChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}) {
  // Add a new handler for toggling switch components
  const handleToggleChange = (name: string, checked: boolean) => {
    const event = {
      target: {
        type: "checkbox",
        name,
        checked,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleConfigChange(event);
  };

  return (
    <section className="flex flex-col gap-4 rounded-lg bg-dark-800">
      <h2 className="text-xl font-semibold text-green">Configuration</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Type selector */}
        <div className="flex flex-col gap-1">
          <label htmlFor="type" className="text-default text-sm">
            Annotation Type
          </label>
          <select
            id="type"
            name="type"
            value={config.type}
            onChange={handleConfigChange}
            className="bg-dark border border-default rounded px-2 py-1"
          >
            <option value="underline">Underline</option>
            <option value="box">Box</option>
            <option value="circle">Circle</option>
            <option value="highlight">Highlight</option>
            <option value="strike-through">Strike Through</option>
            <option value="crossed-off">Crossed Off</option>
            <option value="bracket">Bracket</option>
          </select>
        </div>

        {/* Color pickers grouped together */}
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col">
              <label htmlFor="color" className="text-sm text-gray-400 mb-1">
                Primary
              </label>
              <input
                type="color"
                id="color"
                name="color"
                value={config.color}
                onChange={handleConfigChange}
                className="w-full bg-dark border border-default rounded p-0 h-8"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label
                htmlFor="hoverColor"
                className="text-sm text-gray-400 mb-1"
              >
                Hover
              </label>
              <input
                type="color"
                id="hoverColor"
                name="hoverColor"
                value={config.hoverColor}
                onChange={handleConfigChange}
                className="w-full bg-dark border border-default rounded p-0 h-8"
              />
            </div>
          </div>
        </div>

        {/* Animation settings row */}
        <div className="flex gap-2">
          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="animationDuration" className="text-default text-sm">
              Duration (ms)
            </label>
            <input
              type="number"
              id="animationDuration"
              name="animationDuration"
              value={config.animationDuration}
              onChange={handleConfigChange}
              min="100"
              max="2000"
              step="100"
              className="bg-dark border border-default rounded p-1"
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="iterations" className="text-default text-sm">
              Iterations
            </label>
            <input
              type="number"
              id="iterations"
              name="iterations"
              value={config.iterations}
              onChange={handleConfigChange}
              min="1"
              max="10"
              className="bg-dark border border-default rounded p-1"
            />
          </div>
        </div>

        {/* Size settings row */}
        <div className="flex gap-2">
          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="strokeWidth" className="text-default text-sm">
              Stroke Width
            </label>
            <input
              type="number"
              id="strokeWidth"
              name="strokeWidth"
              value={config.strokeWidth}
              onChange={handleConfigChange}
              min="1"
              max="5"
              className="bg-dark border border-default rounded p-1"
            />
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label htmlFor="padding" className="text-default text-sm">
              Padding
            </label>
            <input
              type="number"
              id="padding"
              name="padding"
              value={config.padding}
              onChange={handleConfigChange}
              min="0"
              max="20"
              className="bg-dark border border-default rounded p-1"
            />
          </div>
        </div>

        {/* Boolean options */}
        <div className="md:col-span-2 grid grid-cols-2 gap-3 mt-1">
          <div className="flex items-center justify-between gap-2 py-2 rounded bg-dark-700">
            <label htmlFor="animate" className="text-default text-sm">
              Animate
            </label>
            <Switch
              checked={config.animate}
              onChange={(checked) => handleToggleChange("animate", checked)}
              className={`${
                config.animate ? "bg-green" : "bg-b5"
              } relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span className="sr-only">Enable animation</span>
              <span
                className={`${
                  config.animate ? "translate-x-[22px]" : "translate-x-1"
                } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          <div className="flex items-center justify-between gap-2 py-2 rounded bg-dark-700">
            <label htmlFor="multiline" className="text-default text-sm">
              Multiline
            </label>
            <Switch
              checked={config.multiline}
              onChange={(checked) => handleToggleChange("multiline", checked)}
              className={`${
                config.multiline ? "bg-green" : "bg-b5"
              } relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span className="sr-only">Enable multiline</span>
              <span
                className={`${
                  config.multiline ? "translate-x-[22px]" : "translate-x-1"
                } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          <div className="flex items-center justify-between gap-2 py-2 rounded bg-dark-700">
            <label htmlFor="showOnLoad" className="text-default text-sm">
              Show on Load
            </label>
            <Switch
              checked={config.showOnLoad}
              onChange={(checked) => handleToggleChange("showOnLoad", checked)}
              className={`${
                config.showOnLoad ? "bg-green" : "bg-b5"
              } relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span className="sr-only">Show on load</span>
              <span
                className={`${
                  config.showOnLoad ? "translate-x-[22px]" : "translate-x-1"
                } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>

          <div className="flex items-center justify-between gap-2 py-2 rounded bg-dark-700">
            <label htmlFor="showOnHover" className="text-default text-sm">
              Show on Hover
            </label>
            <Switch
              checked={config.showOnHover}
              onChange={(checked) => handleToggleChange("showOnHover", checked)}
              className={`${
                config.showOnHover ? "bg-green" : "bg-b5"
              } relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none`}
            >
              <span className="sr-only">Show on hover</span>
              <span
                className={`${
                  config.showOnHover ? "translate-x-[22px]" : "translate-x-1"
                } inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}
