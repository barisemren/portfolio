"use client";

import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Config } from "@/app/annotate-playground/page";
import Annotate from "../annotate";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Copy } from "lucide-react";

export default function AnnotatePreview({ config }: { config: Config }) {
  const [copied, setCopied] = useState(false);

  const generateCodeString = () => {
    // Create array of properties
    const properties = [
      `type="${config.type}"`,
      `color="${config.color}"`,
      config.showOnHover !== false ? `hoverColor="${config.hoverColor}"` : "",
      config.animationDuration !== 800
        ? `animationDuration={${config.animationDuration}}`
        : "",
      config.iterations !== 2 ? `iterations={${config.iterations}}` : "",
      config.strokeWidth !== 1 ? `strokeWidth={${config.strokeWidth}}` : "",
      config.padding !== 5 ? `padding={${config.padding}}` : "",
      config.multiline !== true ? `multiline={${config.multiline}}` : "",
      config.showOnLoad !== true ? `showOnLoad={${config.showOnLoad}}` : "",
      config.showOnHover !== false ? `showOnHover={${config.showOnHover}}` : "",
    ];

    // Filter out empty properties and join with proper indentation
    const propsString = properties
      .filter((prop) => prop !== "")
      .map((prop) => `  ${prop}`)
      .join("\n");

    return `<Annotate
${propsString}
>
  This text is being annotated
</Annotate>`;
  };

  const codeString = generateCodeString();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TabGroup as="section" className="flex flex-col gap-6 rounded-lg bg-dark-800 min-h-[300px]">
      <TabList className="flex justify-start gap-4">
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-purple focus:outline-none focus:ring-0"
              : "border-b-2 border-transparent cursor-pointer focus:outline-none focus:ring-0"
          }
        >
          Preview
        </Tab>
        <Tab
          className={({ selected }) =>
            selected
              ? "border-b-2 border-purple focus:outline-none focus:ring-0"
              : "border-b-2 border-transparent cursor-pointer focus:outline-none focus:ring-0"
          }
        >
          Code
        </Tab>
      </TabList>
      <TabPanels className="size-full">
        <TabPanel className="size-full">
          <div className="bg-[#121212] flex size-full items-center justify-center text-2xl rounded-lg">
            <Annotate
              type={config.type as any}
              color={config.color}
              hoverColor={config.showOnHover ? config.hoverColor : undefined}
              animationDuration={config.animationDuration}
              iterations={config.iterations}
              strokeWidth={config.strokeWidth}
              padding={config.padding}
              animate={config.animate}
              multiline={config.multiline}
              showOnLoad={config.showOnLoad}
              showOnHover={config.showOnHover}
            >
              This text is being annotated
            </Annotate>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative">
            <button
              onClick={copyToClipboard}
              className="absolute top-3 right-3 p-2 rounded hover:bg-dark-700 transition-colors cursor-pointer"
              aria-label="Copy code"
            >
              <Copy size={16} />
              {copied && (
                <span className="absolute -top-8 right-0 bg-green-500 text-white text-xs py-1 px-2 rounded">
                  Copied!
                </span>
              )}
            </button>
            <SyntaxHighlighter
              language="tsx"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "0.5rem",
                padding: "1.5rem",
                fontSize: "0.875rem",
                lineHeight: "1.5",
                background: "oklch(18.22% 0 0)",
                marginTop: "0",
                marginBottom: "0",
                overflow: "auto",
              }}
              wrapLines={true}
              showLineNumbers={true}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
