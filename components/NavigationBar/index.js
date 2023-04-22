/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function NavigationBar() {
  const router = useRouter();
  let [activeTab, setActiveTab] = useState(router?.pathname);
  let tabs = [
    { id: "/home", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/contact", label: "Contact" },
  ];

  console.log(activeTab);
  return (
    <section className="w-min m-auto mt-4 py-2 lg:py-4 px-3 lg:px-16 bg-soft rounded-[40px] fixed left-0 right-0 bottom-5 lg:bottom-10 z-50">
      <div className="w-full h-full">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => router?.push(tab?.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-purple"
              } relative rounded-full px-3 py-1.5 text-lg font-medium text-dark transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-soft mix-blend-exclusion"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab?.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
