"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = "edit" | "preferences" | "security";

interface TabIndicatorProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export function TabIndicator({ activeTab, setActiveTab }: TabIndicatorProps) {
  return (
    <div className="border-b border-[#F1F5F9] mb-8 lg:mb-12 overflow-x-auto scrollbar-none">
      <div className="flex gap-6 lg:gap-8 relative min-w-[300px]">
        <button
          onClick={() => setActiveTab("edit")}
          className={cn(
            "pb-4 text-[15px] font-medium transition-colors whitespace-nowrap",
            activeTab === "edit" ? "text-[#232323]" : "text-[#718EBF] hover:text-[#232323]/70"
          )}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setActiveTab("preferences")}
          className={cn(
            "pb-4 text-[15px] font-medium transition-colors whitespace-nowrap",
            activeTab === "preferences" ? "text-[#232323]" : "text-[#718EBF] hover:text-[#232323]/70"
          )}
        >
          Preferences
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={cn(
            "pb-4 text-[15px] font-medium transition-colors whitespace-nowrap",
            activeTab === "security" ? "text-[#232323]" : "text-[#718EBF] hover:text-[#232323]/70"
          )}
        >
          Security
        </button>
        <motion.div
          className="absolute bottom-0 h-1 bg-[#232323] rounded-t-full"
          animate={{
            width: activeTab === "edit" 
              ? "82px" 
              : activeTab === "preferences" 
                ? "92px" 
                : "65px",
            left: activeTab === "edit"
              ? "0"
              : activeTab === "preferences"
                ? "calc(82px + 24px)"
                : "calc(82px + 92px + 48px)",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </div>
    </div>
  );
} 