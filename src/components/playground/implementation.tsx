"use client";

import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Copy } from "lucide-react";

export default function Implementation() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (codeString: string) => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section className="mt-4 rounded-lg bg-dark-800 py-6">
      <h2 className="text-2xl text-green mb-6">How to Implement</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl text-default mb-2">
            1. Install the required package
          </h3>

          <div className="w-full">
            <TabGroup className="w-full">
              <TabList className="flex space-x-4 rounded-xl bg-dark-700 p-1 mb-2">
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "border-b-2 border-purple focus:outline-none focus:ring-0"
                      : "border-b-2 border-transparent cursor-pointer focus:outline-none focus:ring-0"
                  }
                >
                  pnpm
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "border-b-2 border-purple focus:outline-none focus:ring-0"
                      : "border-b-2 border-transparent cursor-pointer focus:outline-none focus:ring-0"
                  }
                >
                  npm
                </Tab>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? "border-b-2 border-purple focus:outline-none focus:ring-0"
                      : "border-b-2 border-transparent cursor-pointer focus:outline-none focus:ring-0"
                  }
                >
                  yarn
                </Tab>
              </TabList>
              <TabPanels className="mt-2">
                <TabPanel className="rounded-xl bg-dark ">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard("pnpm add rough-notation")}
                      className="absolute top-3 right-3 p-2 rounded hover:bg-dark-700 transition-colors cursor-pointer"
                      aria-label="Copy code"
                    >
                      <Copy size={16} />
                      {copied && (
                        <span className="absolute -top-7 right-2 bg-green text-white text-xs py-1 px-2 rounded">
                          Copied!
                        </span>
                      )}
                    </button>
                    <SyntaxHighlighter
                      language="bash"
                      style={atomDark}
                      customStyle={{
                        background: "oklch(18.22% 0 0)",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        margin: "0",
                      }}
                    >
                      {"pnpm add rough-notation"}
                    </SyntaxHighlighter>
                  </div>
                </TabPanel>
                <TabPanel className="rounded-xl bg-dark ">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard("npm install rough-notation")}
                      className="absolute top-3 right-3 p-2 rounded hover:bg-dark-700 transition-colors cursor-pointer"
                      aria-label="Copy code"
                    >
                      <Copy size={16} />
                      {copied && (
                        <span className="absolute -top-7 right-2 bg-green text-white text-xs py-1 px-2 rounded">
                          Copied!
                        </span>
                      )}
                    </button>
                    <SyntaxHighlighter
                      language="bash"
                      style={atomDark}
                      customStyle={{
                        background: "oklch(18.22% 0 0)",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        margin: "0",
                      }}
                    >
                      {"npm install rough-notation"}
                    </SyntaxHighlighter>
                  </div>
                </TabPanel>
                <TabPanel className="rounded-xl bg-dark ">
                  <div className="relative">
                    <button
                      onClick={() => copyToClipboard("yarn add rough-notation")}
                      className="absolute top-3 right-3 p-2 rounded hover:bg-dark-700 transition-colors cursor-pointer"
                      aria-label="Copy code"
                    >
                      <Copy size={16} />
                      {copied && (
                        <span className="absolute -top-7 right-2 bg-green text-white text-xs py-1 px-2 rounded">
                          Copied!
                        </span>
                      )}
                    </button>
                    <SyntaxHighlighter
                      language="bash"
                      style={atomDark}
                    customStyle={{
                      background: "oklch(18.22% 0 0)",
                      borderRadius: "0.5rem",
                      padding: "1rem",
                      margin: "0",
                      }}
                    >
                      {"yarn add rough-notation"}
                    </SyntaxHighlighter>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
