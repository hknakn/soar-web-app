import { MyCards } from "./components/dashboard/MyCards";
import { RecentTransactions } from "./components/dashboard/RecentTransactions";
import { Statistics } from "./components/dashboard/Statistics";
import { TransferAndHistory } from "./components/dashboard/TransferAndHistory";

export default function Home() {
  return (
    <div className="flex-1 bg-[#F5F7FA] p-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Left side content */}
        <div className="col-span-8 flex flex-col">
          <div className="flex-1">
            <MyCards />
          </div>
        </div>

        {/* Right side content */}
        <div className="col-span-4 flex flex-col">
          <div className="flex-1">
            <RecentTransactions />
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <Statistics />
      
      {/* Transfer and History Section */}
      <TransferAndHistory />
    </div>
  );
}
