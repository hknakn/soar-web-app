import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F7F9]">
      <Sidebar />
      <div className="lg:pl-56">
        <TopNav />
        {children}
      </div>
    </div>
  );
} 