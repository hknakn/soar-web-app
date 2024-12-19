"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import Image from "next/image";
import { SendIcon } from "../icons";
import { useEffect, useState } from "react";
import { 
  balanceHistoryOptions, 
  fetchTransferAndHistoryData, 
  type QuickTransferUser 
} from "@/app/lib/mock/transferAndHistory";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

function QuickTransferSkeleton() {
  return (
    <div className="flex items-center justify-center gap-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-center text-center space-y-2">
          <div className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-gray-200" />
          <div className="space-y-1">
            <div className="h-4 w-20 bg-gray-200 rounded" />
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function BalanceHistorySkeleton() {
  return (
    <div className="h-[250px] lg:h-[300px] bg-gray-100 rounded-lg animate-pulse" />
  );
}

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

  const visibleUsers = data?.quickTransferUsers.slice(startIndex, startIndex + (startIndex === 0 ? 3 : 2)) ?? [];
  const hasMoreUsers = startIndex === 0 ? (data?.quickTransferUsers.length ?? 0) > 3 : false;
  const showPrevious = startIndex > 0;

  const handleNext = () => {
    if (hasMoreUsers) {
      setStartIndex(3);
    }
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
                <div className="h-full flex flex-col lg:justify-between">
                  {isLoading ? (
                    <QuickTransferSkeleton />
                  ) : (
                    <div className="flex items-center justify-center gap-4">
                      {showPrevious && (
                        <button
                          onClick={handlePrevious}
                          className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-white shadow-[0px_4px_25px_0px_rgba(76,103,100,0.10)] hover:bg-[#F8FAFC] transition-colors duration-200 flex items-center justify-center rotate-180"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
                              stroke="#718EBF"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}

                      {visibleUsers.map((user) => (
                        <button
                          key={user.id}
                          onClick={() => handleUserClick(user.id)}
                          className="flex flex-col items-center text-center space-y-2 transition-all duration-200"
                        >
                          <div className="relative w-[60px] h-[60px] lg:w-[72px] lg:h-[72px]">
                            <Image
                              src={user.image}
                              alt={user.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h3
                              className={`text-[14px] lg:text-[15px] ${
                                selectedUserId === user.id ? "font-bold" : "font-semibold"
                              } text-[#232323]`}
                            >
                              {user.name}
                            </h3>
                            <p
                              className={`text-[13px] lg:text-[14px] ${
                                selectedUserId === user.id ? "font-semibold" : "font-normal"
                              } text-[#94A3B8]`}
                            >
                              {user.role}
                            </p>
                          </div>
                        </button>
                      ))}

                      {hasMoreUsers && (
                        <button
                          onClick={handleNext}
                          className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-white shadow-[0px_4px_25px_0px_rgba(76,103,100,0.10)] hover:bg-[#F8FAFC] transition-colors duration-200 flex items-center justify-center"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
                              stroke="#718EBF"
                              strokeWidth="2"
                              strokeMiterlimit="10"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  )}
                  <div className="mt-3 lg:mt-8">
                    <div className="relative flex items-center gap-2 lg:gap-3">
                      <span className="text-[#718EBF] text-[13px] lg:text-[15px] font-medium whitespace-nowrap">
                        Write Amount
                      </span>
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="525.50"
                          className="w-full bg-[#EDF1F7] border-none text-[14px] lg:text-[15px] text-[#232323] font-medium pl-4 pr-[100px] lg:px-6 h-[48px] lg:h-[56px] rounded-full focus:outline-none"
                        />
                        <button className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-4 lg:px-8 bg-[#232323] hover:bg-[#232323]/90 rounded-full text-[14px] lg:text-[15px] font-medium text-white flex items-center gap-1 lg:gap-3 transition-colors duration-200">
                          Send
                          <SendIcon className="w-[18px] h-[16px] lg:w-[26px] lg:h-[22px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <Line options={balanceHistoryOptions} data={data.balanceHistory} />
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
