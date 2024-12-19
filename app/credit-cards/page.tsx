"use client";

import { CreditCardIcon } from "../components/icons";

export default function CreditCards() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 lg:p-8">
      <div className="bg-white rounded-[25px] min-h-[400px] p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-full mb-4">
            <CreditCardIcon className="w-6 h-6 text-[#718EBF]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#232323] mb-2">Credit Cards</h2>
          <p className="text-[#718EBF]">This feature is coming soon...</p>
        </div>
      </div>
    </div>
  );
} 