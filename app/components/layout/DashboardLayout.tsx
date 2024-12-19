"use client";

import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { PageTransition } from "./PageTransition";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      <Sidebar />
      <div className="lg:pl-56">
        <TopNav />
        <PageTransition>
          <div className="p-4">
            {children}
          </div>
        </PageTransition>
      </div>
    </div>
  );
} 