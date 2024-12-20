"use client";

import { CardsAndTransactions } from "./components/dashboard/CardsAndTransactions";
import { Statistics } from "./components/dashboard/Statistics";
import TransferAndHistory from "./components/dashboard/TransferAndHistory";

export default function Home() {
  return (
    <div className="flex-1 bg-[#F5F7FA] px-0 lg:px-8 py-8">
      <div className="space-y-6">
        <CardsAndTransactions />

        <div className="grid grid-cols-12 gap-6 px-8 lg:px-0">
          <div className="col-span-12">
            <Statistics />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 px-8 lg:px-0">
          <div className="col-span-12">
            <TransferAndHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
