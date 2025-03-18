'use client'

import React, { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  atomDark,
  vscDarkPlus,
} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Copy } from 'lucide-react'
import { installationExamples, usageExample, fullComponentCode } from './codes'

export default function Implementation() {
  const [copied, setCopied] = useState(false)
  const [currentCodeTab, setCurrentCodeTab] = useState('fullCode')

  const copyToClipboard = (codeString: string) => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tabs = [
    { id: 'pnpm', title: 'pnpm', code: installationExamples.pnpm },
    { id: 'npm', title: 'npm', code: installationExamples.npm },
    { id: 'yarn', title: 'yarn', code: installationExamples.yarn },
  ]

  const codeTabs = [
    {
      id: 'fullCode',
      title: 'Full Component',
      code: fullComponentCode,
    },
    {
      id: 'usage',
      title: 'Usage Example',
      code: usageExample,
    },
  ]

  return (
    <section className="mt-4 rounded-lg bg-dark-800 pt-6 pb-24">
      <h2 className="text-2xl text-green mb-6">How to Implement</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl text-default mb-2">
            1. Install the required package
          </h3>

          <div className="w-full">
            <TabGroup className="w-full">
              <TabList className="flex space-x-4 rounded-xl bg-dark-700 p-1 mb-2">
                {tabs.map(tab => (
                  <Tab
                    key={tab.id}
                    className={({ selected }) =>
                      selected
                        ? 'border-b-2 border-purple focus:outline-none focus:ring-0'
                        : 'border-b-2 border-transparent cursor-pointer focus:outline-none focus:ring-0'
                    }
                  >
                    {tab.title}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-2">
                {tabs.map(tab => (
                  <TabPanel key={tab.id} className="rounded-xl bg-dark ">
                    <div className="relative">
                      <button
                        onClick={() => copyToClipboard(tab.code)}
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
                          background: 'oklch(18.22% 0 0)',
                          borderRadius: '0.5rem',
                          padding: '1rem',
                          margin: '0',
                        }}
                      >
                        {tab.code}
                      </SyntaxHighlighter>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-default mb-2">
            2. Create a new component named{' '}
            <code className="text-purple">Annotate</code>
          </h3>
          <p className="text-default mb-2">
            This component will be used to render the annotation.
          </p>
          <div className="flex justify-between items-center mb-2">
            <TabGroup
              onChange={index => setCurrentCodeTab(codeTabs[index].id)}
            >
              <TabList className="flex space-x-4 rounded-xl bg-dark-700 p-1">
                {codeTabs.map(tab => (
                  <Tab
                    key={tab.id}
                    className={({ selected }) =>
                      selected
                        ? 'border-b-2 border-purple focus:outline-none focus:ring-0 px-4 py-2'
                        : 'border-b-2 border-transparent cursor-pointer focus:outline-none focus:ring-0 px-4 py-2'
                    }
                  >
                    {tab.title}
                  </Tab>
                ))}
              </TabList>
            </TabGroup>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  copyToClipboard(
                    codeTabs.find(tab => tab.id === currentCodeTab)?.code || ''
                  )
                }
                className="p-2 rounded hover:bg-dark-700 transition-colors cursor-pointer"
                aria-label="Copy code"
              >
                <Copy size={16} />
                {copied && (
                  <span className="absolute mt-1 mr-2 bg-green text-white text-xs py-1 px-2 rounded">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="max-h-96 overflow-y-auto">
              <SyntaxHighlighter
                language="tsx"
                style={vscDarkPlus}
                showLineNumbers
                wrapLines
                customStyle={{
                  background: 'oklch(18.22% 0 0)',
                  borderRadius: '0.5rem',
                  padding: '1rem',
                  margin: '0',
                }}
              >
                {codeTabs.find(tab => tab.id === currentCodeTab)?.code || ''}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
