import { RecentTransactions } from "./components/dashboard/RecentTransactions";

export default function Home() {
  return (
    <div className="flex-1 bg-[#F5F7FA] p-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left side content */}
        <div className="col-span-8 space-y-6">
          {/* Cards section will go here */}
        </div>

        {/* Right side content */}
        <div className="col-span-4 space-y-6">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}
