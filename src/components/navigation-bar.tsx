"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { motion } from "motion/react";
import VerticalNavigationBar from "./vertical-navigation";

export default function NavigationBar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(pathname);
  const tabs = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/contact", label: "Contact" },
  ];
  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);
  return pathname.includes("annotate") ? (
    <VerticalNavigationBar />
  ) : (
    <section className="w-min m-auto mt-4 py-2 px-3 lg:px-16 bg-soft rounded-[40px] fixed left-0 right-0 bottom-5 lg:bottom-10 z-50 font-sans">
      <div className="w-full h-full">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                router?.push(tab?.id);
              }}
              className={`${
                activeTab === tab.id ? "" : "hover:text-purple"
              } relative rounded-full px-3 py-1.5 text-sm md:text-base lg:text-lg font-medium text-dark transition focus-visible:outline-2 cursor-pointer`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="navigation-underline"
                  className="absolute inset-0 z-10 bg-soft mix-blend-exclusion"
                  style={{ borderRadius: 9999 }}
                  transition={{
                    type: "spring",
                    bounce: 0.2,
                    duration: 0.6,
                    stiffness: 350,
                    damping: 30,
                  }}
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
