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
  ChartData,
  ScriptableContext,
} from "chart.js";
import Image from "next/image";
import { SendIcon } from "../icons";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const balanceHistoryData = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      fill: true,
      data: [120, 320, 250, 450, 750, 250, 550],
      borderColor: "#1814F3",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
        gradient.addColorStop(1, "rgba(45, 96, 255, 0)");
        return gradient;
      },
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const balanceHistoryOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#232323',
      titleFont: {
        size: 14,
        family: 'Inter',
        weight: '500'
      },
      bodyFont: {
        size: 14,
        family: 'Inter',
        weight: '500'
      },
      padding: 12,
      displayColors: false,
      callbacks: {
        title: () => '',
        label: (context: any) => `$${context.parsed.y}`,
      },
      intersect: false,
      mode: 'index'
    },
  },
  hover: {
    mode: 'index',
    intersect: false
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 14,
          family: "Inter",
        },
        color: "#94A3B8",
      },
    },
    y: {
      grid: {
        color: "#F3F3F5",
        drawBorder: false,
      },
      border: {
        dash: [5, 5],
      },
      ticks: {
        stepSize: 200,
        font: {
          size: 14,
          family: "Inter",
        },
        color: "#94A3B8",
      },
      min: 0,
      max: 800,
    },
  },
};

const quickTransferUsers = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    image: "/second-user.png",
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    image: "/third-user.png",
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    image: "/fourth-user.png",
  },
  {
    id: 4,
    name: "Workman",
    role: "Designer",
    image: "/fifth-user.png",
  },
  {
    id: 5,
    name: "Workman",
    role: "Designer",
    image: "/sixth-user.png",
  },
];

export function TransferAndHistory() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const visibleUsers = quickTransferUsers.slice(startIndex, startIndex + (startIndex === 0 ? 3 : 2));
  const hasMoreUsers = startIndex === 0 ? quickTransferUsers.length > 3 : false;
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
                <Line options={balanceHistoryOptions} data={balanceHistoryData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
