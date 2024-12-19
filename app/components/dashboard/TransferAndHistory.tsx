"use client";

import { useEffect, useState } from "react";
import { fetchTransferAndHistoryData, type QuickTransferUser } from "@/app/lib/mock/transferAndHistory";
import { QuickTransfer } from "./transfer/QuickTransfer";
import { BalanceHistory } from "./transfer/BalanceHistory";
import { QuickTransferSkeleton, BalanceHistorySkeleton } from "./transfer/Skeletons";

export function TransferAndHistory() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    quickTransferUsers: QuickTransferUser[];
    balanceHistory: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchTransferAndHistoryData();
        setData(result);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const handleNext = () => {
    setStartIndex(3);
  };

  const handlePrevious = () => {
    setStartIndex(0);
  };

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId === selectedUserId ? null : userId);
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="flex flex-col lg:space-y-6">
          {/* Desktop Titles Row - Hidden on Mobile */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-5">
              <h2 className="text-[22px] font-bold text-[#232323]">
                Quick Transfer
              </h2>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-[22px] font-bold text-[#232323]">
                Balance History
              </h2>
            </div>
          </div>

          {/* Content Row */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
            {/* Quick Transfer Section */}
            <div className="col-span-12 lg:col-span-5">
              {/* Mobile Title */}
              <div className="lg:hidden mb-4">
                <h2 className="text-[22px] font-bold text-[#232323]">
                  Quick Transfer
                </h2>
              </div>
              <div className="lg:bg-white lg:rounded-[25px] lg:p-6 h-[300px] px-4">
                {isLoading ? (
                  <QuickTransferSkeleton />
                ) : (
                  data?.quickTransferUsers && (
                    <QuickTransfer
                      users={data.quickTransferUsers}
                      startIndex={startIndex}
                      selectedUserId={selectedUserId}
                      onUserClick={handleUserClick}
                      onNext={handleNext}
                      onPrevious={handlePrevious}
                    />
                  )
                )}
              </div>
            </div>

            {/* Balance History Section */}
            <div className="col-span-12 lg:col-span-7 -mt-16 lg:mt-0">
              {/* Mobile Title */}
              <div className="lg:hidden mb-2">
                <h2 className="text-[22px] font-bold text-[#232323]">
                  Balance History
                </h2>
              </div>
              <div className="lg:bg-white lg:rounded-[25px] lg:p-6 h-[250px] lg:h-[300px] -mx-4 px-4 lg:mx-0">
                {isLoading ? (
                  <BalanceHistorySkeleton />
                ) : (
                  data?.balanceHistory && (
                    <BalanceHistory data={data.balanceHistory} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
