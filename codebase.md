# .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js
.yarn/install-state.gz

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# app/accounts/page.tsx

```tsx
"use client";

import { UserIcon } from "../components/icons";

export default function Accounts() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 lg:p-8">
      <div className="bg-white rounded-[25px] min-h-[400px] p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-full mb-4">
            <UserIcon className="w-6 h-6 text-[#718EBF]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#232323] mb-2">Accounts</h2>
          <p className="text-[#718EBF]">This feature is coming soon...</p>
        </div>
      </div>
    </div>
  );
} 
```

# app/components/dashboard/cards/CreditCard.tsx

```tsx
"use client";

import { CardTypeLogoDark, CardTypeLogoLight } from "../../icons";
import { type CardProps } from "@/app/lib/mock/cardsAndTransactions";

export function CreditCard({
  variant,
  balance,
  cardHolder,
  cardNumber,
  validThru,
}: CardProps) {
  return (
    <div
      className={`relative h-full w-full rounded-[25px] p-6 font-lato ${
        variant === "dark"
          ? "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white"
          : "bg-white border border-[#DFEAF2]"
      }`}
    >
      {/* Top Row - Balance */}
      <div>
        <p
          className={`text-xs leading-[14.4px] ${
            variant === "light" ? "text-[#4D5B7C]" : "text-white"
          }`}
        >
          Balance
        </p>
        <p
          className={`text-xl leading-[24px] font-semibold ${
            variant === "light" ? "text-[#232323]" : "text-white"
          }`}
        >
          ${balance.toLocaleString()}
        </p>
      </div>

      {/* Middle Section - Card Holder and Valid Thru */}
      <div className="mt-4 flex justify-between">
        <div>
          <p
            className={`text-xs leading-[14.4px] uppercase ${
              variant === "light" ? "text-[#4D5B7C]" : "text-white"
            } opacity-70`}
          >
            Card Holder
          </p>
          <p
            className={`text-[15px] leading-[18px] font-semibold mt-1 ${
              variant === "light" ? "text-[#232323]" : "text-white"
            }`}
          >
            {cardHolder}
          </p>
        </div>
        <div>
          <p
            className={`text-xs leading-[14.4px] uppercase ${
              variant === "light" ? "text-[#4D5B7C]" : "text-white"
            } opacity-70`}
          >
            Valid Thru
          </p>
          <p
            className={`text-[15px] leading-[18px] font-semibold mt-1 ${
              variant === "light" ? "text-[#232323]" : "text-white"
            }`}
          >
            {validThru}
          </p>
        </div>
      </div>

      {/* Bottom Section - Card Number and Mastercard */}
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className={`border-t ${
            variant === "light" ? "border-[#DFEAF2]" : "border-white/10"
          }`}
        />
        <div className="h-20 flex items-center justify-between px-6">
          <p
            className={`text-[22px] leading-[26.4px] font-semibold ${
              variant === "light" ? "text-[#232323]" : "text-white"
            }`}
          >
            {cardNumber}
          </p>
          <div className="flex -space-x-3">
            {variant === "dark" ? (
              <CardTypeLogoDark className="h-[30px] w-11" />
            ) : (
              <CardTypeLogoLight className="h-[30px] w-11" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
```

# app/components/dashboard/cards/Skeletons.tsx

```tsx
export function CardSkeleton() {
  return (
    <div className="h-full w-full rounded-[25px] p-6 bg-white border border-[#DFEAF2] animate-pulse">
      <div className="space-y-3">
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <div className="h-6 w-24 bg-gray-200 rounded" />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="space-y-2">
          <div className="h-3 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-16 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="border-t border-[#DFEAF2]" />
        <div className="h-20 flex items-center justify-between px-6">
          <div className="h-6 w-48 bg-gray-200 rounded" />
          <div className="h-8 w-12 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}

export function TransactionSkeleton() {
  return (
    <div className="flex items-center justify-between animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-[50px] h-[50px] rounded-full bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-3 w-32 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="h-4 w-20 bg-gray-200 rounded" />
    </div>
  );
} 
```

# app/components/dashboard/cards/Transaction.tsx

```tsx
import { type Transaction as TransactionType } from "@/app/lib/mock/cardsAndTransactions";

export function Transaction({ transaction }: { transaction: TransactionType }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          className={`w-[50px] h-[50px] rounded-full ${transaction.iconBg} flex items-center justify-center`}
        >
          <transaction.icon />
        </div>
        <div>
          <p className="text-[15px] font-bold text-[#232323]">
            {transaction.title}
          </p>
          <p className="text-sm text-[#718EBF]">{transaction.date}</p>
        </div>
      </div>
      <p
        className={`text-base font-bold ${
          transaction.amount < 0 ? "text-[#F3735E]" : "text-[#60C589]"
        }`}
      >
        {transaction.amount < 0 ? "-" : "+"}$
        {Math.abs(transaction.amount).toLocaleString()}
      </p>
    </div>
  );
} 
```

# app/components/dashboard/CardsAndTransactions.tsx

```tsx
"use client";

import { useEffect, useState } from "react";
import { fetchCardsAndTransactions, type CardProps, type Transaction } from "@/app/lib/mock/cardsAndTransactions";
import { CreditCard } from "./cards/CreditCard";
import { CardSkeleton, TransactionSkeleton } from "./cards/Skeletons";
import { Transaction as TransactionItem } from "./cards/Transaction";

export function CardsAndTransactions() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCardsAndTransactions();
        setCards(data.cards);
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="flex flex-col space-y-6">
          {/* Desktop Titles Row */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 px-8 lg:px-0">
            <div className="col-span-8 flex items-center justify-between">
              <h2 className="text-[22px] font-bold text-[#232323]">My Cards</h2>
              <button className="text-base font-bold text-[#232323] hover:text-[#4D5B7C] transition-colors hover:underline">
                See All
              </button>
            </div>
            <div className="col-span-4">
              <h2 className="text-[22px] font-bold text-[#232323]">
                Recent Transaction
              </h2>
            </div>
          </div>

          {/* Mobile Title for My Cards */}
          <div className="flex lg:hidden items-center justify-between px-8">
            <h2 className="text-[22px] font-bold text-[#232323]">My Cards</h2>
            <button className="text-base font-bold text-[#232323] hover:text-[#4D5B7C] transition-colors">
              See All
            </button>
          </div>

          {/* Content Row */}
          <div className="grid grid-cols-12 gap-6">
            {/* My Cards Section */}
            <div className="col-span-12 lg:col-span-8">
              {/* Cards Container - Mobile Scrollable */}
              <div className="relative h-[200px] lg:h-[250px]">
                <div className="absolute inset-0 flex overflow-x-auto hide-scrollbar">
                  {/* Mobile View */}
                  <div className="inline-flex pl-8 pr-8 gap-5 lg:hidden">
                    {isLoading ? (
                      <>
                        <div className="min-w-[300px] flex-shrink-0 h-[200px]">
                          <CardSkeleton />
                        </div>
                        <div className="min-w-[300px] flex-shrink-0 h-[200px]">
                          <CardSkeleton />
                        </div>
                      </>
                    ) : (
                      cards.map((card, index) => (
                        <div
                          key={index}
                          className="min-w-[300px] flex-shrink-0 h-[200px]"
                        >
                          <CreditCard {...card} />
                        </div>
                      ))
                    )}
                  </div>

                  {/* Desktop View */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 w-full">
                    {isLoading ? (
                      <>
                        <div className="h-[250px]">
                          <CardSkeleton />
                        </div>
                        <div className="h-[250px]">
                          <CardSkeleton />
                        </div>
                      </>
                    ) : (
                      cards.map((card, index) => (
                        <div key={index} className="h-[250px]">
                          <CreditCard {...card} />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="col-span-12 lg:col-span-4">
              {/* Mobile Title for Recent Transaction */}
              <div className="lg:hidden px-8 mb-6">
                <h2 className="text-[22px] font-bold text-[#232323]">
                  Recent Transaction
                </h2>
              </div>

              <div className="lg:bg-white lg:rounded-[25px] lg:p-6 lg:h-[250px] px-8 lg:px-6">
                <div className="flex flex-col gap-6">
                  {isLoading
                    ? Array(3)
                        .fill(0)
                        .map((_, index) => (
                          <TransactionSkeleton key={index} />
                        ))
                    : transactions.map((transaction) => (
                        <TransactionItem
                          key={transaction.id}
                          transaction={transaction}
                        />
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

# app/components/dashboard/Statistics.tsx

```tsx
"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import { fetchStatisticsData } from "@/app/lib/mock/statistics";
import { WeeklyActivityChart } from "./statistics/WeeklyActivityChart";
import { ExpenseStatisticsChart } from "./statistics/ExpenseStatisticsChart";
import { ChartSkeleton } from "./statistics/Skeletons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

export function Statistics() {
  const [statisticsData, setStatisticsData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchStatisticsData();
        setStatisticsData(data);
      } catch (error) {
        console.error('Error loading statistics:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="flex flex-col space-y-4 lg:space-y-6">
          {/* Desktop Titles Row - Hidden on Mobile */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-8">
              <h2 className="text-[22px] font-bold text-[#232323]">
                Weekly Activity
              </h2>
            </div>
            <div className="lg:col-span-4">
              <h2 className="text-[22px] font-bold text-[#232323]">
                Expense Statistics
              </h2>
            </div>
          </div>

          {/* Charts Row */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
            {/* Weekly Activity Section */}
            <div className="col-span-12 lg:col-span-8">
              {/* Mobile Title */}
              <div className="lg:hidden mb-4">
                <h2 className="text-[22px] font-bold text-[#232323]">
                  Weekly Activity
                </h2>
              </div>
              <div className="lg:bg-white lg:rounded-[25px] lg:p-6 -mx-4 px-4 lg:mx-0">
                {isLoading ? (
                  <ChartSkeleton />
                ) : (
                  <WeeklyActivityChart data={statisticsData?.weeklyActivity} />
                )}
              </div>
            </div>

            {/* Expense Statistics Section */}
            <div className="col-span-12 lg:col-span-4 lg:mt-0">
              {/* Mobile Title */}
              <div className="lg:hidden mb-4">
                <h2 className="text-[22px] font-bold text-[#232323]">
                  Expense Statistics
                </h2>
              </div>
              <div className="lg:bg-white lg:rounded-[25px] lg:p-6 -mx-4 px-4 lg:mx-0">
                {isLoading ? (
                  <ChartSkeleton />
                ) : (
                  <ExpenseStatisticsChart data={statisticsData?.expenseStats} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```

# app/components/dashboard/statistics/ExpenseStatisticsChart.tsx

```tsx
"use client";

import { Pie } from "react-chartjs-2";
import { ChartData, ChartJS } from "chart.js";

interface ExpenseStatisticsChartProps {
  data: ChartData<"pie">;
}

export const expenseOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  elements: {
    arc: {
      borderWidth: 0,
    },
  },
  rotation: -45,
};

// Custom plugin to draw text inside pie segments
export const textCenter = {
  id: 'textCenter',
  afterDraw(chart: ChartJS) {
    const { ctx, data, chartArea } = chart;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const radius = chart.getDatasetMeta(0).data[0].outerRadius;

    function getPosition(percentage: number, radius: number, angle: number) {
      const x = centerX + Math.cos(angle) * radius * 0.7;
      const y = centerY + Math.sin(angle) * radius * 0.7;
      return { x, y };
    }

    const total = data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
    let currentAngle = -Math.PI / 2 - Math.PI / 4;

    data.datasets[0].data.forEach((value: number, i: number) => {
      const percentage = (value / total) * 100;
      const angle = (Math.PI * 2 * value) / total;
      const middleAngle = currentAngle + angle / 2;
      const pos = getPosition(percentage, radius, middleAngle);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFFFFF';

      ctx.font = '700 16px Inter';
      ctx.fillText(`${percentage}%`, pos.x, pos.y - 9);

      ctx.font = '700 16px Inter';
      ctx.fillText(data.labels[i], pos.x, pos.y + 9);

      currentAngle += angle;
    });
  }
};

export function ExpenseStatisticsChart({ data }: ExpenseStatisticsChartProps) {
  return (
    <div className="h-[250px] lg:h-[300px] w-full flex items-center justify-center">
      <Pie options={expenseOptions} data={data} plugins={[textCenter]} />
    </div>
  );
} 
```

# app/components/dashboard/statistics/Skeletons.tsx

```tsx
export function ChartSkeleton() {
  return (
    <div className="h-[200px] lg:h-[300px] w-full flex items-center justify-center bg-gray-100 animate-pulse rounded-lg" />
  );
} 
```

# app/components/dashboard/statistics/WeeklyActivityChart.tsx

```tsx
"use client";

import { Bar } from "react-chartjs-2";
import { ChartData } from "chart.js";

interface WeeklyActivityChartProps {
  data: ChartData<"bar">;
}

export const weeklyActivityOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        boxWidth: ({ chart }) => chart.width < 500 ? 8 : 15,
        boxHeight: ({ chart }) => chart.width < 500 ? 8 : 15,
        usePointStyle: true,
        pointStyle: "circle",
        font: {
          size: ({ chart }) => chart.width < 500 ? 12 : 15,
        },
        padding: ({ chart }) => chart.width < 500 ? 10 : 15,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#F3F3F5",
      },
      ticks: {
        stepSize: 100,
      },
      border: {
        dash: [5, 5],
      },
      min: 0,
      max: 500,
    },
  },
};

export function WeeklyActivityChart({ data }: WeeklyActivityChartProps) {
  return (
    <div className="h-[200px] lg:h-[300px] w-full">
      <Bar options={weeklyActivityOptions} data={data} />
    </div>
  );
} 
```

# app/components/dashboard/transfer/BalanceHistory.tsx

```tsx
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
import { balanceHistoryOptions } from "@/app/lib/mock/transferAndHistory";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

interface BalanceHistoryProps {
  data: any;
}

export function BalanceHistory({ data }: BalanceHistoryProps) {
  return (
    <Line options={balanceHistoryOptions} data={data} />
  );
} 
```

# app/components/dashboard/transfer/QuickTransfer.tsx

```tsx
"use client";

import Image from "next/image";
import { SendIcon } from "../../icons";
import { type QuickTransferUser } from "@/app/lib/mock/transferAndHistory";

interface QuickTransferProps {
  users: QuickTransferUser[];
  startIndex: number;
  selectedUserId: number | null;
  onUserClick: (userId: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function QuickTransfer({
  users,
  startIndex,
  selectedUserId,
  onUserClick,
  onNext,
  onPrevious,
}: QuickTransferProps) {
  const visibleUsers = users.slice(startIndex, startIndex + (startIndex === 0 ? 3 : 2));
  const hasMoreUsers = startIndex === 0 ? users.length > 3 : false;
  const showPrevious = startIndex > 0;

  return (
    <div className="h-full flex flex-col lg:justify-between">
      <div className="flex items-center justify-center gap-4">
        {showPrevious && (
          <button
            onClick={onPrevious}
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
            onClick={() => onUserClick(user.id)}
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
            onClick={onNext}
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
  );
} 
```

# app/components/dashboard/transfer/Skeletons.tsx

```tsx
export function QuickTransferSkeleton() {
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

export function BalanceHistorySkeleton() {
  return (
    <div className="h-[250px] lg:h-[300px] bg-gray-100 rounded-lg animate-pulse" />
  );
} 
```

# app/components/dashboard/TransferAndHistory.tsx

```tsx
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

```

# app/components/icons/index.tsx

```tsx
interface IconProps {
  className?: string;
}

export function EditIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="m14.587 4.163-1.35 1.35a.352.352 0 0 1-.499 0L9.486 2.263a.352.352 0 0 1 0-.498l1.351-1.35a1.41 1.41 0 0 1 1.99 0l1.76 1.76c.55.548.55 1.438 0 1.99Zm-6.26-1.24L.632 10.618l-.621 3.56a.704.704 0 0 0 .814.814l3.56-.624 7.693-7.693a.352.352 0 0 0 0-.498L8.827 2.924a.355.355 0 0 0-.5 0ZM3.635 9.959a.408.408 0 0 1 0-.58l4.512-4.512a.408.408 0 0 1 .58 0 .408.408 0 0 1 0 .58L4.216 9.958a.408.408 0 0 1-.58 0Zm-1.058 2.464h1.407v1.063l-1.89.332-.911-.912.33-1.89h1.064v1.407Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h15v15H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function LogoIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.875 2.917a2.916 2.916 0 0 1 2.526 1.458h1.849a2.916 2.916 0 0 1 2.917 2.917v17.5a7.292 7.292 0 0 1-7.292 7.291H8.75a2.917 2.917 0 0 1-2.917-2.916V7.292A2.917 2.917 0 0 1 8.75 4.375h1.85a2.917 2.917 0 0 1 2.525-1.458h8.75Zm-.257 10.76-6.186 6.188-2.063-2.063a1.458 1.458 0 0 0-2.063 2.062l2.99 2.991a1.604 1.604 0 0 0 2.27 0l7.116-7.115a1.458 1.458 0 1 0-2.064-2.062Zm-.472-7.844h-7.292a.729.729 0 0 0-.717.598l-.012.132V8.02a.73.73 0 0 0 .598.717l.131.012h7.292a.73.73 0 0 0 .717-.598l.012-.131V6.563a.729.729 0 0 0-.598-.718l-.131-.012Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function HomeIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="m24.326 10.874-.002-.002L14.126.674A2.286 2.286 0 0 0 12.498 0c-.614 0-1.192.24-1.627.674L.678 10.867l-.01.01a2.304 2.304 0 0 0 .004 3.25 2.288 2.288 0 0 0 1.598.675h.407v7.505A2.697 2.697 0 0 0 5.37 25h3.99a.732.732 0 0 0 .732-.732v-5.884a1.23 1.23 0 0 1 1.229-1.23h2.353a1.23 1.23 0 0 1 1.229 1.23v5.884c0 .404.328.732.732.732h3.99a2.697 2.697 0 0 0 2.694-2.693v-7.505h.377c.614 0 1.192-.24 1.627-.675a2.305 2.305 0 0 0 .002-3.253Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CreditCardIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M22.96 7.163v-.355a2.969 2.969 0 0 0-2.964-2.966H2.966A2.969 2.969 0 0 0 0 6.809v.355h22.96ZM13.565 16.702c0-1.538.495-3 1.408-4.205H0v4.136a2.969 2.969 0 0 0 2.965 2.965h11.226a6.958 6.958 0 0 1-.626-2.896Zm-2.085-.899H8.921V14.28h2.56v1.523ZM3.415 14.28h3.983v1.523H3.415V14.28ZM16.555 10.973a6.929 6.929 0 0 1 3.99-1.25 6.98 6.98 0 0 1 2.416.428V8.687H0v2.286h16.555ZM26 16.702a5.456 5.456 0 1 0-10.912 0 5.456 5.456 0 0 0 10.912 0Zm-4.72 2.914v.62h-1.524v-.615c-.46-.156-.837-.43-1.205-.7l.9-1.23c.494.362.747.536 1.093.536.196 0 .355-.093.415-.243.072-.182-.03-.35-.273-.448 0 0-1.089-.364-1.592-.877-.422-.43-.557-1.037-.422-1.614a1.78 1.78 0 0 1 1.084-1.263v-.615h1.524v.59c.386.107.714.266.902.368l-.726 1.339c-.482-.262-.926-.34-1.098-.281-.168.057-.193.166-.203.207-.013.059-.02.148.073.252.09.1 1.032.483 1.032.483 1.018.414 1.497 1.454 1.115 2.42a1.895 1.895 0 0 1-1.095 1.071Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h26v26H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function BanknotesIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        d="M5.208 22.917A2.086 2.086 0 0 0 7.292 25h10.416a2.086 2.086 0 0 0 2.084-2.083v-.912H5.208v.912ZM19.792 2.083A2.086 2.086 0 0 0 17.708 0H7.292a2.086 2.086 0 0 0-2.084 2.083v1.042h14.584V2.083ZM24.71 6.7l-3.125-3.255-1.503 1.443 1.307 1.362h-1.597v2.083h1.71l-1.39 1.332 1.442 1.504 3.125-2.995a1.041 1.041 0 0 0 .03-1.473Z"
      />
      <path
        fill="currentColor"
        d="M16.667 6.25h3.125V4.167H5.208v12.5h3.125v2.083H5.208v2.083h14.584v-12.5h-3.125V6.25Zm-1.042 4.167h-3.646a.521.521 0 0 0 0 1.041h1.042a2.603 2.603 0 0 1 .52 5.157v1.093h-2.083v-1.041H9.375v-2.084h3.646a.52.52 0 0 0 0-1.041h-1.042a2.604 2.604 0 0 1-.52-5.157V7.292h2.083v1.041h2.083v2.084ZM3.498 16.667l1.39-1.332-1.442-1.504L.32 16.826a1.042 1.042 0 0 0-.03 1.473l3.124 3.256 1.503-1.443-1.307-1.362h1.597v-2.083h-1.71Z"
      />
    </svg>
  );
}

export function UserIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M12.322 12.043c1.654 0 3.087-.594 4.257-1.764 1.17-1.171 1.764-2.603 1.764-4.258 0-1.654-.593-3.086-1.764-4.257C15.41.594 13.976 0 12.322 0c-1.655 0-3.087.593-4.258 1.764C6.894 2.934 6.3 4.367 6.3 6.02c0 1.655.594 3.087 1.765 4.258 1.17 1.17 2.603 1.764 4.257 1.764ZM22.858 19.224a14.892 14.892 0 0 0-.203-1.58c-.101-.565-.232-1.1-.388-1.588a7.848 7.848 0 0 0-.653-1.482 5.587 5.587 0 0 0-.985-1.283 4.341 4.341 0 0 0-1.414-.888 4.89 4.89 0 0 0-1.805-.327c-.256 0-.503.105-.98.415-.293.191-.636.413-1.019.657-.327.21-.77.405-1.319.582a5.239 5.239 0 0 1-1.613.26 5.243 5.243 0 0 1-1.614-.26c-.547-.177-.99-.373-1.318-.581-.38-.243-.722-.464-1.02-.658-.476-.31-.723-.415-.978-.415-.65 0-1.258.11-1.806.327a4.337 4.337 0 0 0-1.414.889 5.59 5.59 0 0 0-.984 1.283 7.86 7.86 0 0 0-.653 1.481 12.475 12.475 0 0 0-.389 1.588c-.1.56-.168 1.092-.202 1.58-.033.479-.05.975-.05 1.477 0 1.305.415 2.361 1.233 3.14.808.769 1.877 1.16 3.177 1.16h12.037c1.3 0 2.37-.39 3.177-1.16.819-.778 1.233-1.835 1.233-3.14 0-.504-.017-1.001-.05-1.477Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ChartBarIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M3.92 10.227H1.138c-.628 0-1.137.51-1.137 1.137v12.5C0 24.49.509 25 1.137 25H3.92c.627 0 1.136-.51 1.136-1.136v-12.5c0-.628-.509-1.137-1.136-1.137ZM10.569 13.636H7.785c-.629 0-1.137.509-1.137 1.136v9.09c0 .629.508 1.137 1.137 1.137h2.784c.627 0 1.136-.509 1.136-1.136v-9.09c0-.628-.509-1.137-1.136-1.137ZM17.215 13.636h-2.784c-.627 0-1.136.509-1.136 1.136v9.09c0 .629.509 1.137 1.136 1.137h2.784c.629 0 1.137-.509 1.137-1.136v-9.09c0-.628-.508-1.137-1.137-1.137ZM23.863 10.227H21.08c-.627 0-1.136.51-1.136 1.137v12.5c0 .627.509 1.136 1.136 1.136h2.784c.628 0 1.137-.51 1.137-1.136v-12.5c0-.628-.509-1.137-1.137-1.137ZM12.831 6.846v2.046c.62-.041 1.272-.332 1.272-1.013 0-.703-.715-.91-1.272-1.033ZM11.052 4.397c0 .517.385.816 1.16.972v-1.85c-.705.02-1.16.434-1.16.878Z" />
        <path d="M12.5 0a6.257 6.257 0 0 0-6.25 6.25 6.257 6.257 0 0 0 6.25 6.249 6.257 6.257 0 0 0 6.25-6.249A6.257 6.257 0 0 0 12.5 0Zm.331 9.946v.64c0 .176-.135.352-.311.352-.175 0-.308-.176-.308-.352v-.64c-1.747-.042-2.615-1.086-2.615-1.902 0-.413.25-.65.64-.65 1.157 0 .257 1.425 1.975 1.497v-2.16c-1.532-.278-2.46-.95-2.46-2.096 0-1.405 1.168-2.13 2.46-2.17v-.551c0-.176.133-.352.308-.352.176 0 .311.176.311.352v.55c.806.022 2.46.527 2.46 1.54 0 .403-.302.64-.653.64-.673 0-.663-1.104-1.807-1.125v1.963c1.364.29 2.572.692 2.572 2.284 0 1.384-1.033 2.086-2.572 2.18Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function WrenchIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M24.785 1.25 23.75.215a.733.733 0 0 0-.821-.15l-5.564 2.456a.733.733 0 0 0-.214 1.185l4.143 4.143a.733.733 0 0 0 1.185-.214l2.456-5.564a.733.733 0 0 0-.15-.82ZM4.731 16.125l-4.088 4.09a2.2 2.2 0 0 0 0 3.107l1.035 1.035a2.2 2.2 0 0 0 3.108 0l4.089-4.088-4.144-4.143Zm-.456 5.646a.732.732 0 1 1-1.036-1.036l2.017-2.017a.732.732 0 1 1 1.036 1.036L4.275 21.77ZM11.982 17.161l-4.143-4.143a1.467 1.467 0 0 0-2.072 0 1.467 1.467 0 0 0 0 2.072l4.143 4.143c.571.57 1.5.57 2.072 0 .571-.571.571-1.5 0-2.072ZM19.222 7.85l-2.071-2.072-5.687 5.686a1.465 1.465 0 0 0-2.072 0l-.517.518 4.143 4.143.518-.518c.572-.572.572-1.499 0-2.071l5.686-5.687ZM23.715 17.498c-1.19-1.19-2.62-1.445-4.26-1.152l-3.33-3.329-.795.795a2.924 2.924 0 0 1-.76 2.831l-.516.517 2.292 2.291c-.232 1.293-.21 2.39.593 3.58.927 1.372 2.549 2.153 4.248 1.919a.747.747 0 0 0 .426-1.268l-1.008-1.006v-2.071h2.074l1.002 1.002a.747.747 0 0 0 1.268-.43 4.378 4.378 0 0 0-1.234-3.68ZM8.644 5.532c.29-1.623.056-3.051-1.151-4.259A4.342 4.342 0 0 0 4.399 0c-.197 0-.393.013-.586.038a.747.747 0 0 0-.43 1.27l1.012 1v2.086H2.314L1.31 3.376a.747.747 0 0 0-1.269.427A4.392 4.392 0 0 0 1.96 8.05c1.194.804 2.297.824 3.58.593l2.301 2.304.517-.517a2.924 2.924 0 0 1 2.831-.76l.795-.794-3.339-3.343Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SettingsIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M22.698 9.414h-.53c-.173-.54-.39-1.064-.65-1.567l.375-.376c.912-.91.887-2.37 0-3.255l-1.108-1.11a2.301 2.301 0 0 0-3.256 0l-.376.377a10.105 10.105 0 0 0-1.567-.65V2.3A2.304 2.304 0 0 0 13.284 0h-1.569a2.304 2.304 0 0 0-2.3 2.301v.531c-.54.173-1.065.39-1.568.65l-.376-.375a2.301 2.301 0 0 0-3.255 0l-1.11 1.109a2.301 2.301 0 0 0 0 3.255l.377.376c-.26.503-.478 1.028-.65 1.567H2.3A2.304 2.304 0 0 0 0 11.716v1.569a2.304 2.304 0 0 0 2.301 2.3h.531c.173.54.39 1.065.65 1.568l-.375.376a2.301 2.301 0 0 0 0 3.255l1.109 1.11a2.301 2.301 0 0 0 3.255 0l.376-.377c.503.26 1.028.478 1.567.65v.532A2.304 2.304 0 0 0 11.716 25h1.569a2.304 2.304 0 0 0 2.301-2.301v-.531c.54-.173 1.064-.39 1.567-.65l.376.375c.909.91 2.368.889 3.255 0l1.11-1.109a2.302 2.302 0 0 0 0-3.255l-.377-.376c.26-.503.478-1.028.65-1.567h.532A2.304 2.304 0 0 0 25 13.284v-1.569a2.304 2.304 0 0 0-2.302-2.3ZM12.5 17.94c-3 0-5.44-2.44-5.44-5.439 0-3 2.44-5.44 5.44-5.44 3 0 5.44 2.44 5.44 5.44 0 3-2.44 5.44-5.44 5.44Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SettingsOutlineIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg className={className} width={25} height={25} fill="none">
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M13.284 25h-1.569a2.304 2.304 0 0 1-2.301-2.301v-.531c-.54-.173-1.064-.39-1.567-.65l-.376.375a2.301 2.301 0 0 1-3.256 0l-1.108-1.109a2.301 2.301 0 0 1 0-3.255l.376-.376a10.096 10.096 0 0 1-.65-1.567H2.3A2.304 2.304 0 0 1 0 13.284v-1.569a2.304 2.304 0 0 1 2.301-2.3h.531c.173-.54.39-1.065.65-1.568l-.375-.376a2.301 2.301 0 0 1 0-3.255l1.109-1.11a2.301 2.301 0 0 1 3.255 0l.376.377c.503-.26 1.028-.478 1.567-.65V2.3A2.304 2.304 0 0 1 11.716 0h1.569a2.304 2.304 0 0 1 2.3 2.301v.531c.54.173 1.065.39 1.568.65l.376-.375a2.302 2.302 0 0 1 3.256 0l1.108 1.109a2.301 2.301 0 0 1 0 3.255l-.376.376c.26.503.478 1.027.65 1.567h.531A2.304 2.304 0 0 1 25 11.716v1.569a2.304 2.304 0 0 1-2.302 2.3h-.53c-.173.54-.39 1.065-.65 1.568l.375.376c.912.91.887 2.37 0 3.256l-1.109 1.108a2.301 2.301 0 0 1-3.255 0l-.376-.376c-.503.26-1.028.479-1.567.65v.532A2.304 2.304 0 0 1 13.284 25Zm-5.192-5.021c.7.414 1.452.726 2.237.929.324.083.55.375.55.71v1.08c0 .462.375.837.837.837h1.569a.838.838 0 0 0 .836-.836v-1.082c0-.334.226-.626.55-.709a8.636 8.636 0 0 0 2.237-.929.732.732 0 0 1 .891.113l.766.766c.33.33.86.323 1.183 0l1.11-1.11a.837.837 0 0 0 0-1.183l-.766-.766a.732.732 0 0 1-.113-.89c.414-.7.726-1.453.929-2.238a.733.733 0 0 1 .71-.55h1.08a.838.838 0 0 0 .837-.836v-1.57a.837.837 0 0 0-.836-.836h-1.082a.733.733 0 0 1-.709-.55 8.633 8.633 0 0 0-.929-2.237.732.732 0 0 1 .113-.891l.766-.766a.836.836 0 0 0 0-1.183l-1.11-1.11a.836.836 0 0 0-1.183 0l-.766.767a.732.732 0 0 1-.89.112 8.631 8.631 0 0 0-2.238-.929.732.732 0 0 1-.55-.709V2.301a.838.838 0 0 0-.836-.836h-1.57a.838.838 0 0 0-.836.836v1.082a.732.732 0 0 1-.55.709 8.634 8.634 0 0 0-2.237.929.733.733 0 0 1-.891-.113l-.766-.766a.836.836 0 0 0-1.183 0l-1.11 1.11a.836.836 0 0 0 0 1.183l.766.766a.732.732 0 0 1 .113.89 8.632 8.632 0 0 0-.929 2.239.732.732 0 0 1-.71.549h-1.08a.838.838 0 0 0-.837.837v1.569c0 .46.375.836.836.836h1.082c.334 0 .626.226.709.55.203.785.515 1.538.929 2.237a.732.732 0 0 1-.113.891l-.766.766a.836.836 0 0 0 0 1.183l1.11 1.11a.836.836 0 0 0 1.183 0l.766-.767a.736.736 0 0 1 .89-.112Z" />
        <path d="M12.5 17.94c-3 0-5.44-2.44-5.44-5.44 0-3 2.44-5.44 5.44-5.44 3 0 5.44 2.44 5.44 5.44 0 3-2.44 5.44-5.44 5.44Zm0-9.415A3.98 3.98 0 0 0 8.525 12.5a3.98 3.98 0 0 0 3.975 3.975 3.98 3.98 0 0 0 3.975-3.975A3.979 3.979 0 0 0 12.5 8.525Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function GroupIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M4.811 16.668c.252.15.468.344.64.57h3.255V14.08l-1.544-.957a.732.732 0 1 1 .772-1.245l1.504.932 1.311-.813C8.134 8.413 8.735 3.332 12.216.465 6.482-1.456.468 2.814.44 8.945a8.933 8.933 0 0 0 4.37 7.723ZM5.909 18.702h6.933v1.66H5.909v-1.66ZM10.17 14.08v3.157h3.12c.166-.218.372-.406.613-.547a8.95 8.95 0 0 0 1.818-1.417 8.44 8.44 0 0 1-3.996-2.157l-1.554.965Z" />
        <path d="M17.578.002c-3.84 0-6.982 3.174-6.982 7.03 0 3.63 2.785 6.633 6.356 6.954 4.133.37 7.607-2.907 7.607-6.953 0-3.85-3.132-7.03-6.981-7.03Zm.733 10.205v.153a.732.732 0 1 1-1.465 0v-.07c-.337-.06-.645-.185-1.035-.44a.732.732 0 1 1 .802-1.226c.357.234.473.252.96.248.472-.003.66-.373.696-.59.033-.196-.004-.456-.367-.585-.608-.215-1.231-.461-1.673-.808-1.006-.789-.702-2.59.617-3.07v-.106a.732.732 0 0 1 1.465 0v.04c.36.102.651.287.851.49a.732.732 0 0 1-1.044 1.027c-.04-.04-.266-.228-.755-.08-.194.058-.247.26-.258.32-.024.127.01.212.028.227.276.216.79.414 1.257.58 1.93.682 1.695 3.249-.079 3.89ZM7.08 22.705A2.297 2.297 0 0 0 9.376 25a2.297 2.297 0 0 0 2.295-2.295v-.878H7.08v.878Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function BuildingIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <g fill="currentColor" clipPath="url(#a)">
        <path d="M14.492 15.337c4.195 0 7.608-3.44 7.608-7.668C22.1 3.44 18.687 0 14.492 0S6.885 3.44 6.885 7.669c0 4.228 3.412 7.668 7.607 7.668Zm-2.444-5.275a.732.732 0 0 1 1.013-.212c.493.322.679.352 1.33.347.634-.004 1.003-.477 1.076-.915.036-.213.05-.733-.595-.961-.756-.267-1.53-.573-2.068-.995-.539-.422-.785-1.151-.644-1.902.154-.815.722-1.463 1.483-1.692l.02-.006V3.45a.732.732 0 1 1 1.464 0v.231c.497.119.845.346.986.452a.732.732 0 1 1-.877 1.172c-.15-.112-.565-.353-1.171-.17-.354.107-.446.456-.466.56-.039.206.005.399.108.48.373.293 1.045.552 1.653.767 1.12.396 1.744 1.434 1.55 2.584a2.594 2.594 0 0 1-.798 1.473c-.286.263-.62.45-.985.558v.332a.732.732 0 0 1-1.464 0v-.259c-.473-.057-.87-.205-1.404-.554a.732.732 0 0 1-.211-1.013ZM2.774 17.797H1.105a.732.732 0 0 0-.732.732v5.738c0 .404.328.732.732.732h1.67v-7.202ZM24.412 17.746a3.523 3.523 0 0 0-4.976 0l-2.193 2.192-.899.9a1.937 1.937 0 0 1-1.37.566h-4.37a.747.747 0 0 1-.753-.697.733.733 0 0 1 .733-.769h4.442c.893 0 1.667-.636 1.82-1.515.036-.202.055-.41.055-.622a.733.733 0 0 0-.733-.734h-2.434c-.796 0-1.56-.36-2.368-.743-.849-.4-1.726-.815-2.751-.883a7.752 7.752 0 0 0-2.673.292A2.37 2.37 0 0 0 4.248 17.8h-.01v7.197L16.85 25c.867 0 1.683-.338 2.296-.95l5.267-5.268a.733.733 0 0 0 0-1.036Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SearchIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

export function BellIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      className={className}
    >
      <path
        fill="currentColor"
        d="M11.442 25a3.911 3.911 0 0 1-3.906-3.906.782.782 0 0 1 1.562 0 2.347 2.347 0 0 0 2.344 2.343 2.347 2.347 0 0 0 2.344-2.343.782.782 0 0 1 1.562 0A3.911 3.911 0 0 1 11.442 25Z"
      />
      <path
        fill="currentColor"
        d="M20.036 21.875H2.848a1.825 1.825 0 0 1-1.185-3.208.732.732 0 0 1 .083-.063 7 7 0 0 0 2.404-5.281v-2.906c0-4.021 3.272-7.292 7.292-7.292.167 0 .347.003.514.031a.781.781 0 1 1-.257 1.54c-.083-.013-.175-.008-.257-.008a5.736 5.736 0 0 0-5.73 5.729v2.906a8.567 8.567 0 0 1-3.023 6.532l-.046.036a.258.258 0 0 0-.055.161c0 .142.119.26.26.26h17.188c.141 0 .26-.118.26-.26a.249.249 0 0 0-.056-.161l-.045-.036a8.565 8.565 0 0 1-3.024-6.532v-1.135a.782.782 0 0 1 1.563 0v1.135c0 2.028.876 3.949 2.407 5.284a.77.77 0 0 1 .08.06 1.825 1.825 0 0 1-1.186 3.207Z"
      />
      <path
        fill="currentColor"
        d="M18.734 10.417a5.214 5.214 0 0 1-5.209-5.209A5.214 5.214 0 0 1 18.734 0a5.214 5.214 0 0 1 5.208 5.208 5.214 5.214 0 0 1-5.208 5.209Zm0-8.854a3.65 3.65 0 0 0-3.646 3.645 3.65 3.65 0 0 0 3.646 3.646 3.65 3.65 0 0 0 3.645-3.646 3.65 3.65 0 0 0-3.645-3.646Z"
      />
    </svg>
  );
}

export function CardDepositIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="#FFBB38"
        d="M18.645 24.61H5.68a2.62 2.62 0 0 1-2.617-2.618v-7.738a2.62 2.62 0 0 1 2.617-2.617h12.965a2.62 2.62 0 0 1 2.617 2.617v7.738a2.62 2.62 0 0 1-2.617 2.617ZM5.68 13.277a.978.978 0 0 0-.977.976v7.738a.978.978 0 0 0 .977.977h12.965a.978.978 0 0 0 .977-.977v-7.738a.978.978 0 0 0-.977-.976H5.68Z"
      />
      <path
        fill="#FFBB38"
        d="M22.321 20.192h-1.879a.82.82 0 1 1 0-1.64h1.88a.978.978 0 0 0 .975-.978V9.837a.978.978 0 0 0-.976-.978H9.356a.978.978 0 0 0-.977.977v2.62a.82.82 0 0 1-1.64 0v-2.62A2.62 2.62 0 0 1 9.356 7.22H22.32a2.62 2.62 0 0 1 2.616 2.618v7.737a2.62 2.62 0 0 1-2.616 2.618Z"
      />
      <path
        fill="#FFBB38"
        d="M20.442 18.746H3.882a.82.82 0 0 1-.82-.82v-2.755a.82.82 0 0 1 .82-.82h16.56a.82.82 0 0 1 .82.82v2.755a.82.82 0 0 1-.82.82Zm-15.739-1.64h14.919V15.99H4.703v1.115Z"
      />
    </svg>
  );
}

export function PaypalIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="#396AFF"
        d="M22.995 8.383a5.81 5.81 0 0 0-5.801-5.758H8.75a.875.875 0 0 0-.875.735L4.882 22.129a.875.875 0 0 0 .202.7.876.876 0 0 0 .665.315h3.613L9.17 24.36a.875.875 0 0 0 .875 1.015h4.069a.875.875 0 0 0 .875-.726l.875-5.347h2.756a6.527 6.527 0 0 0 6.501-6.518v-.245a5.136 5.136 0 0 0-2.126-4.156ZM9.494 4.375h7.7a4.06 4.06 0 0 1 3.946 3.159 4.97 4.97 0 0 0-1.155-.131h-7.297a.875.875 0 0 0-.876.735l-.516 3.237a.886.886 0 0 0 1.75.28l.403-2.52h6.554c.419.002.834.082 1.224.236a5.662 5.662 0 0 1-5.6 4.979h-4.06a.875.875 0 0 0-.874.726l-1.068 6.318H6.772L9.494 4.375Zm13.877 8.409a4.777 4.777 0 0 1-4.751 4.768h-3.5a.875.875 0 0 0-.875.727l-.875 5.346h-2.31l.192-1.216 1.05-6.291h3.308a7.403 7.403 0 0 0 7.14-5.53c.406.569.623 1.251.621 1.95v.246Z"
      />
    </svg>
  );
}

export function UserPaymentIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        fill="#16DBCC"
        d="M14 11.379c.496 0 .901.404.901.9a.82.82 0 0 0 1.64 0c0-1.112-.724-2.05-1.721-2.393V9.42a.821.821 0 0 0-1.64 0v.466a2.537 2.537 0 0 0-1.72 2.393A2.543 2.543 0 0 0 14 14.821c.496 0 .901.405.901.9a.902.902 0 0 1-1.801 0 .821.821 0 0 0-1.64 0c0 1.113.722 2.05 1.72 2.393v.465a.82.82 0 1 0 1.64 0v-.465a2.537 2.537 0 0 0 1.721-2.392 2.544 2.544 0 0 0-2.54-2.542.902.902 0 0 1 0-1.801Zm6.872 7.176a.82.82 0 0 0 1.108-.341A9.039 9.039 0 0 0 23.022 14c0-4.973-4.049-9.02-9.022-9.02C9.026 4.98 4.98 9.026 4.98 14c0 4.974 4.047 9.021 9.021 9.021a9.03 9.03 0 0 0 4.155-1.011.82.82 0 1 0-.758-1.456 7.27 7.27 0 0 1-3.397.828c-4.07 0-7.382-3.311-7.382-7.382 0-4.069 3.312-7.381 7.382-7.381S21.383 9.93 21.383 14a7.402 7.402 0 0 1-.852 3.446.819.819 0 0 0 .341 1.109ZM14 1.697c-2.376 0-4.683.68-6.67 1.965a.82.82 0 1 0 .89 1.377A10.625 10.625 0 0 1 14 3.34c5.88 0 10.662 4.782 10.662 10.661 0 5.88-4.782 10.663-10.662 10.663C8.12 24.663 3.337 19.88 3.337 14c0-2.04.578-4.022 1.673-5.733a.82.82 0 0 0-1.382-.885A12.265 12.265 0 0 0 1.698 14c0 6.785 5.517 12.303 12.302 12.303 6.784 0 12.303-5.518 12.303-12.303 0-6.783-5.519-12.303-12.303-12.303Z"
      />
    </svg>
  );
}

export function CardTypeLogoDark({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg width={44} height={30} fill="none" className={className}>
      <circle cx={15} cy={15} r={15} fill="#fff" fillOpacity={0.5} />
      <circle cx={29} cy={15} r={15} fill="#fff" fillOpacity={0.5} />
    </svg>
  );
}

export function CardTypeLogoLight({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg width={44} height={30} fill="none" className={className}>
      <circle cx={15} cy={15} r={15} fill="#9199AF" fillOpacity={0.5} />
      <circle cx={29} cy={15} r={15} fill="#9199AF" fillOpacity={0.5} />
    </svg>
  );
}

export function SendIcon({ className = "w-6 h-6" }: IconProps) {
  return (
    <svg width={26} height={23} fill="none" className={className}>
      <path
        fill="currentColor"
        d="M25.982.923a.762.762 0 0 0-1.016-.872L.49 9.395a.762.762 0 0 0-.003 1.422l6.876 2.656v8.364a.762.762 0 0 0 1.442.343l2.844-5.644 6.94 5.15a.762.762 0 0 0 1.182-.389C26.251.053 25.971.977 25.982.923ZM19.94 3.6 8.017 12.092l-5.13-1.981L19.94 3.6ZM8.887 13.343 19.28 5.94c-8.943 9.435-8.476 8.938-8.515 8.99-.058.079.1-.225-1.878 3.702v-5.29Zm9.742 6.477-6.108-4.534L23.566 3.634 18.629 19.82Z"
      />
    </svg>
  );
}

export function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={14}
      fill="none"
      {...props}
    >
      <path
        fill="#343C6A"
        fillRule="evenodd"
        d="M18 13c0 .552-.52 1-1.161 1H1.16C.52 14 0 13.552 0 13s.52-1 1.161-1H16.84c.641 0 1.161.448 1.161 1ZM18 7a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1ZM18 1c0 .552-.52 1-1.161 1H1.16C.52 2 0 1.552 0 1s.52-1 1.161-1H16.84C17.48 0 18 .448 18 1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

```

# app/components/layout/DashboardLayout.tsx

```tsx
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
```

# app/components/layout/PageTransition.tsx

```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const variants = {
  hidden: { opacity: 0, x: -20, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 20, y: 0 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative w-full min-h-[calc(100vh-64px)]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ 
            type: "tween",
            duration: 0.2,
            ease: "easeInOut"
          }}
          className="w-full h-full"
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

```

# app/components/layout/Sidebar.tsx

```tsx
"use client";

import Link from "next/link";
import {
  LogoIcon,
  HomeIcon,
  CreditCardIcon,
  BanknotesIcon,
  UserIcon,
  ChartBarIcon,
  WrenchIcon,
  SettingsIcon,
  BuildingIcon,
  GroupIcon,
} from "../icons";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Transactions", href: "/transactions", icon: BanknotesIcon },
  { name: "Accounts", href: "/accounts", icon: UserIcon },
  { name: "Investments", href: "/investments", icon: ChartBarIcon },
  { name: "Credit Cards", href: "/credit-cards", icon: CreditCardIcon },
  { name: "Loans", href: "/loans", icon: BuildingIcon },
  { name: "Services", href: "/services", icon: WrenchIcon },
  { name: "My Privileges", href: "/privileges", icon: GroupIcon },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-50 hidden w-56 lg:flex bg-[#E6EFF5]">
      <div className="flex w-full flex-col border-r border-r-[#E6EFF5] bg-white">
        {/* Logo section */}
        <div className="flex h-20 shrink-0 items-center gap-x-3 px-6">
          <LogoIcon className="h-8 w-8" />
          <span className="text-[25px] font-semibold text-[#343C6A]">
            Soar Task
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col mt-6">
          <ul role="list" className="flex flex-1 flex-col gap-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 h-full w-[6px] bg-[#232323] rounded-r-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-x-3 px-6 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#232323]"
                        : "text-[#B1B1B1] hover:text-[#232323]"
                    }`}
                  >
                    <item.icon
                      className={`h-[25px] w-[25px] shrink-0 transition-colors ${
                        isActive
                          ? "text-[#232323]"
                          : "text-[#B1B1B1] group-hover:text-[#232323] group-hover:fill-[#232323]"
                      }`}
                    />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

```

# app/components/layout/TopNav.tsx

```tsx
"use client";

import {
  SearchIcon,
  BellIcon,
  SettingsOutlineIcon,
  MenuIcon,
  LogoIcon,
} from "../icons";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./Sidebar";
import { useRouter } from "next/navigation";

const getPageTitle = (pathname: string) => {
  // Remove trailing slash if exists
  const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  // Special case for root path
  if (path === '') return 'Overview';
  
  // Find matching navigation item
  const navItem = navigation.find(item => item.href === pathname);
  if (navItem) return navItem.name;
  
  // Fallback: Capitalize the last segment of the path
  const segment = path.split('/').pop() || '';
  return segment.charAt(0).toUpperCase() + segment.slice(1);
};

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const pageTitle = getPageTitle(pathname);

  return (
    <>
      <div className="sticky top-0 z-40 flex flex-col bg-white">
        <div className="flex h-14 lg:h-20 items-center justify-between border-b border-b-[#E6EFF5] px-4 lg:px-6">
          {/* Left side - Menu button (mobile only) */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>

          {/* Center - Title (mobile) / Left - Title (desktop) */}
          <h1 className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 text-lg lg:text-2xl font-semibold text-[#343C6A]">
            {pageTitle}
          </h1>

          {/* Right side - Search and Actions */}
          <div className="flex items-center gap-x-4">
            {/* Desktop Search */}
            <div className="hidden lg:block relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon className="h-5 w-5 text-[#718EBF]" />
              </div>
              <input
                type="text"
                placeholder="Search for something"
                className="w-[255px] h-10 rounded-full bg-[#F5F7FA] pl-11 pr-4 text-[15px] text-[#343C6A] placeholder-[#8BA3CB] focus:outline-none"
              />
            </div>

            {/* Settings - Desktop only */}
            <button
              type="button"
              className="rounded-full bg-[#F5F7FA] h-10 w-10 transition-colors hover:bg-[#E6EFF5] items-center justify-center hidden lg:flex"
              onClick={() => router.push("/settings")}
            >
              <SettingsOutlineIcon className="h-[25px] w-[25px] text-[#718EBF] transition-colors hover:text-[#396AFF]" />
            </button>

            {/* Notifications - Desktop only */}
            <button
              type="button"
              className="rounded-full bg-[#F5F7F9] h-10 w-10 transition-colors hover:bg-[#E6EFF5] items-center justify-center hidden lg:flex"
            >
              <BellIcon className="h-[25px] w-[25px] text-[#396AFF] transition-colors hover:text-[#718EBF]" />
            </button>

            {/* Profile */}
            <div className="flex items-center">
              <button
                className="h-9 w-9 lg:h-11 lg:w-11 overflow-hidden rounded-full"
                onClick={() => router.push("/settings")}
              >
                <Image
                  src="/main-user.png"
                  alt="User avatar"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search - Below header */}
        <div className="p-4 border-b border-b-[#E6EFF5] lg:hidden">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <SearchIcon className="h-5 w-5 text-[#718EBF]" />
            </div>
            <input
              type="text"
              placeholder="Search for something"
              className="w-full h-10 rounded-full bg-[#F5F7FA] pl-11 pr-4 text-[15px] text-[#343C6A] placeholder-[#8BA3CB] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-[280px] bg-white transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between h-14 px-4 border-b border-b-[#E6EFF5]">
              <div className="flex items-center gap-x-3">
                <LogoIcon className="h-8 w-8" />
                <span className="text-[22px] font-semibold text-[#343C6A]">
                  Soar Task
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-[#F5F7FA] rounded-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#718EBF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="px-2 pt-4">
              <ul className="flex flex-col gap-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name} className="relative">
                      {isActive && (
                        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#232323] rounded-r-full" />
                      )}
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-[#232323] bg-[#F5F7FA]"
                            : "text-[#B1B1B1] hover:text-[#232323] hover:bg-[#F5F7FA]"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon
                          className={`h-[22px] w-[22px] shrink-0 transition-colors ${
                            isActive
                              ? "text-[#232323]"
                              : "text-[#B1B1B1] group-hover:text-[#232323]"
                          }`}
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

```

# app/components/settings/FormField.tsx

```tsx
"use client";

import { cn } from "@/lib/utils";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormValues } from "./types";

interface FormFieldProps {
  label: string;
  name: keyof FormValues;
  type?: string;
  register: UseFormRegister<FormValues>;
  error?: FieldError;
}

export function FormField({
  label,
  name,
  type = "text",
  register,
  error
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-base text-[#232323] leading-[19.36px]">
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        className={cn(
          "w-full h-[50px] bg-white border rounded-lg px-4 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]",
          error ? "border-red-500" : "border-[#DFEAF2]"
        )}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
} 
```

# app/components/settings/ProfileImage.tsx

```tsx
"use client";

import Image from "next/image";
import { EditIcon } from "../icons";
import { useRef } from "react";

interface ProfileImageProps {
  profileImage: string;
  setProfileImage: (image: string) => void;
}

export function ProfileImage({ profileImage, setProfileImage }: ProfileImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full lg:w-[200px] lg:shrink-0 flex justify-center lg:block mb-8 lg:mb-0">
      <div className="relative">
        <button
          type="button"
          onClick={handleImageClick}
          className="group relative w-[120px] h-[120px] rounded-full"
        >
          <div className="relative w-full h-full overflow-hidden rounded-full ring-4 ring-white transition-transform group-hover:scale-105">
            <Image
              src={profileImage}
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 -bottom-2 w-9 h-9 bg-[#232323] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <EditIcon className="w-4 h-4 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full bg-black/0 transition-colors group-hover:bg-black/10" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
} 
```

# app/components/settings/TabIndicator.tsx

```tsx
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
```

# app/components/settings/tabs/EditProfileTab.tsx

```tsx
"use client";

import { Controller, UseFormRegister, Control } from "react-hook-form";
import DatePicker from "react-datepicker";
import { cn } from "@/lib/utils";
import { FormField } from "../FormField";
import { ProfileImage } from "../ProfileImage";
import { FormValues } from "../types";

interface EditProfileTabProps {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
  errors: Record<string, any>;
  isDirty: boolean;
  profileImage: string;
  setProfileImage: (image: string) => void;
  onSubmit: () => void;
}

export function EditProfileTab({
  register,
  control,
  errors,
  isDirty,
  profileImage,
  setProfileImage,
  onSubmit
}: EditProfileTabProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-6">
      <ProfileImage 
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />

      {/* Right Column - Form Fields */}
      <div className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
          <FormField
            label="Your Name"
            name="name"
            register={register}
            error={errors.name}
          />
          <FormField
            label="User Name"
            name="username"
            register={register}
            error={errors.username}
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />

          <div className="space-y-2 w-full">
            <label className="text-base text-[#232323] leading-[19.36px]">
              Date of Birth
            </label>
            <div className="relative w-full">
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="dd MMMM yyyy"
                    className="w-full h-[50px] bg-white border border-[#DFEAF2] rounded-lg pl-4 pr-12 text-[15px] text-[#718EBF] focus:outline-none focus:border-[#232323]"
                    wrapperClassName="w-full"
                  />
                )}
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
                  stroke="#718EBF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <FormField
            label="Present Address"
            name="presentAddress"
            register={register}
            error={errors.presentAddress}
          />
          <FormField
            label="Permanent Address"
            name="permanentAddress"
            register={register}
            error={errors.permanentAddress}
          />
          <FormField
            label="City"
            name="city"
            register={register}
            error={errors.city}
          />
          <FormField
            label="Postal Code"
            name="postalCode"
            register={register}
            error={errors.postalCode}
          />
          <FormField
            label="Country"
            name="country"
            register={register}
            error={errors.country}
          />
        </div>

        {/* Save Button */}
        <div className="mt-8 lg:mt-12 flex justify-center lg:justify-end">
          <button
            type="submit"
            disabled={!isDirty}
            onClick={onSubmit}
            className={cn(
              "w-full lg:w-auto px-8 lg:px-24 h-[50px] text-white text-[18px] leading-[21.78px] font-medium rounded-[15px] transition-colors",
              isDirty
                ? "bg-[#232323] hover:bg-[#232323]/90"
                : "bg-[#232323]/50 cursor-not-allowed"
            )}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
} 
```

# app/components/settings/tabs/PreferencesTab.tsx

```tsx
"use client";

export function PreferencesTab() {
  return (
    <div className="min-h-[400px] flex items-center justify-center text-[#718EBF]">
      Preferences settings coming soon...
    </div>
  );
} 
```

# app/components/settings/tabs/SecurityTab.tsx

```tsx
"use client";

export function SecurityTab() {
  return (
    <div className="min-h-[400px] flex items-center justify-center text-[#718EBF]">
      Security settings coming soon...
    </div>
  );
} 
```

# app/components/settings/types.ts

```ts
import { z } from "zod";

export type Tab = "edit" | "preferences" | "security";

// Form validation schema
export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dateOfBirth: z.date(),
  presentAddress: z.string().min(1, "Present address is required"),
  permanentAddress: z.string().min(1, "Permanent address is required"),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

export type FormValues = z.infer<typeof formSchema>; 
```

# app/credit-cards/page.tsx

```tsx
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
```

# app/dashboard/page.tsx

```tsx
 
```

# app/favicon.ico

This is a binary file of the type: Binary

# app/fonts/GeistMonoVF.woff

This is a binary file of the type: Binary

# app/fonts/GeistVF.woff

This is a binary file of the type: Binary

# app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.hide-scrollbar {
  -ms-overflow-style: none;  /* Internet Explorer and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

body {
  font-family: Inter, sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 224 71.4% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 224 71.4% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71.4% 4.1%;
    --primary: 220.9 39.3% 11%;
    --primary-foreground: 210 20% 98%;
    --secondary: 220 14.3% 95.9%;
    --secondary-foreground: 220.9 39.3% 11%;
    --muted: 220 14.3% 95.9%;
    --muted-foreground: 220 8.9% 46.1%;
    --accent: 220 14.3% 95.9%;
    --accent-foreground: 220.9 39.3% 11%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 20% 98%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 224 71.4% 4.1%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 224 71.4% 4.1%;
    --foreground: 210 20% 98%;
    --card: 224 71.4% 4.1%;
    --card-foreground: 210 20% 98%;
    --popover: 224 71.4% 4.1%;
    --popover-foreground: 210 20% 98%;
    --primary: 210 20% 98%;
    --primary-foreground: 220.9 39.3% 11%;
    --secondary: 215 27.9% 16.9%;
    --secondary-foreground: 210 20% 98%;
    --muted: 215 27.9% 16.9%;
    --muted-foreground: 217.9 10.6% 64.9%;
    --accent: 215 27.9% 16.9%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 20% 98%;
    --border: 215 27.9% 16.9%;
    --input: 215 27.9% 16.9%;
    --ring: 216 12.2% 83.9%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```

# app/investments/page.tsx

```tsx
"use client";

import { ChartBarIcon } from "../components/icons";

export default function Investments() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 lg:p-8">
      <div className="bg-white rounded-[25px] min-h-[400px] p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-full mb-4">
            <ChartBarIcon className="w-6 h-6 text-[#718EBF]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#232323] mb-2">Investments</h2>
          <p className="text-[#718EBF]">This feature is coming soon...</p>
        </div>
      </div>
    </div>
  );
} 
```

# app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { DashboardLayout } from "./components/layout/DashboardLayout";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: "Soar Task",
  description: "Financial Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}

```

# app/lib/mock/cardsAndTransactions.ts

```ts
import { CardDepositIcon, PaypalIcon, UserPaymentIcon } from "../../components/icons";

export interface CardProps {
  variant: "dark" | "light";
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
}

export interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  icon: any;
  iconBg: string;
}

export const mockCards: CardProps[] = [
  {
    variant: "dark",
    balance: 5756,
    cardHolder: "Eddy Cusuma",
    cardNumber: "3778 **** **** 1234",
    validThru: "12/22",
  },
  {
    variant: "light",
    balance: 3405,
    cardHolder: "Eddy Cusuma",
    cardNumber: "4555 **** **** 9876",
    validThru: "11/24",
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: 1,
    title: "Deposit from my",
    date: "28 January 2021",
    amount: -850,
    icon: CardDepositIcon,
    iconBg: "bg-[#FFF6E9]",
  },
  {
    id: 2,
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: PaypalIcon,
    iconBg: "bg-[#EDF0FF]",
  },
  {
    id: 3,
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: UserPaymentIcon,
    iconBg: "bg-[#E7EDFF]",
  },
];

export async function fetchCardsAndTransactions() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    cards: mockCards,
    transactions: mockTransactions,
  };
} 
```

# app/lib/mock/statistics.ts

```ts
export const mockWeeklyActivityData = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Withdraw",
      data: [450, 320, 300, 450, 150, 380, 380],
      backgroundColor: "#232323",
      borderRadius: 20,
      barThickness: ({ chart }) => {
        return chart.width < 500 ? 15 : 25;
      },
      borderSkipped: false,
      borderColor: "transparent",
      borderWidth: 5,
    },
    {
      label: "Deposit",
      data: [240, 130, 250, 350, 240, 240, 320],
      backgroundColor: "#3B82F6",
      borderRadius: 20,
      barThickness: ({ chart }) => {
        return chart.width < 500 ? 15 : 25;
      },
      borderSkipped: false,
      borderColor: "transparent",
      borderWidth: 5,
    },
  ],
};

export const mockExpenseData = {
  labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
  datasets: [
    {
      data: [30, 15, 20, 35],
      backgroundColor: ["#232D4B", "#FF784B", "#3B82F6", "#1C1C1C"],
      borderWidth: 0,
    },
  ],
};

export async function fetchStatisticsData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    weeklyActivity: mockWeeklyActivityData,
    expenseStats: mockExpenseData,
  };
} 
```

# app/lib/mock/transferAndHistory.ts

```ts
import { ScriptableContext } from "chart.js";

export interface QuickTransferUser {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const mockQuickTransferUsers: QuickTransferUser[] = [
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

export const mockBalanceHistoryData = {
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

export const balanceHistoryOptions = {
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

export async function fetchTransferAndHistoryData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return {
    quickTransferUsers: mockQuickTransferUsers,
    balanceHistory: mockBalanceHistoryData,
  };
} 
```

# app/loans/page.tsx

```tsx
"use client";

import { BuildingIcon } from "../components/icons";

export default function Loans() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 lg:p-8">
      <div className="bg-white rounded-[25px] min-h-[400px] p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-full mb-4">
            <BuildingIcon className="w-6 h-6 text-[#718EBF]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#232323] mb-2">Loans</h2>
          <p className="text-[#718EBF]">This feature is coming soon...</p>
        </div>
      </div>
    </div>
  );
} 
```

# app/page.tsx

```tsx
import { CardsAndTransactions } from "./components/dashboard/CardsAndTransactions";
import { Statistics } from "./components/dashboard/Statistics";
import { TransferAndHistory } from "./components/dashboard/TransferAndHistory";

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

```

# app/privileges/page.tsx

```tsx
"use client";

import { GroupIcon } from "../components/icons";

export default function Privileges() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 lg:p-8">
      <div className="bg-white rounded-[25px] min-h-[400px] p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-full mb-4">
            <GroupIcon className="w-6 h-6 text-[#718EBF]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#232323] mb-2">My Privileges</h2>
          <p className="text-[#718EBF]">This feature is coming soon...</p>
        </div>
      </div>
    </div>
  );
} 
```

# app/services/page.tsx

```tsx
"use client";

import { WrenchIcon } from "../components/icons";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 lg:p-8">
      <div className="bg-white rounded-[25px] min-h-[400px] p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-full mb-4">
            <WrenchIcon className="w-6 h-6 text-[#718EBF]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#232323] mb-2">Services</h2>
          <p className="text-[#718EBF]">This feature is coming soon...</p>
        </div>
      </div>
    </div>
  );
} 
```

# app/settings/page.tsx

```tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-datepicker/dist/react-datepicker.css";
import { TabIndicator } from "../components/settings/TabIndicator";
import { EditProfileTab } from "../components/settings/tabs/EditProfileTab";
import { PreferencesTab } from "../components/settings/tabs/PreferencesTab";
import { SecurityTab } from "../components/settings/tabs/SecurityTab";
import { Tab, FormValues, formSchema } from "../components/settings/types";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("edit");
  const [profileImage, setProfileImage] = useState("/main-user.png");

  // Initial form values
  const defaultValues = {
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "**********",
    dateOfBirth: new Date("1990-01-25"),
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "edit":
        return (
          <EditProfileTab
            register={register}
            control={control}
            errors={errors}
            isDirty={isDirty}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            onSubmit={handleSubmit(onSubmit)}
          />
        );
      case "preferences":
        return <PreferencesTab />;
      case "security":
        return <SecurityTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-8">
      {/* Content */}
      <div className="px-4 lg:px-8 pt-6">
        {/* Profile Form */}
        <div className="bg-white rounded-[25px] p-4 lg:p-8">
          <TabIndicator activeTab={activeTab} setActiveTab={setActiveTab} />
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderTabContent()}
          </form>
        </div>
      </div>
    </div>
  );
}

```

# app/transactions/page.tsx

```tsx
"use client";

import { BanknotesIcon } from "../components/icons";

export default function Transactions() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 lg:p-8">
      <div className="bg-white rounded-[25px] min-h-[400px] p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F5F7FA] rounded-full mb-4">
            <BanknotesIcon className="w-6 h-6 text-[#718EBF]" />
          </div>
          <h2 className="text-2xl font-semibold text-[#232323] mb-2">Transactions</h2>
          <p className="text-[#718EBF]">This feature is coming soon...</p>
        </div>
      </div>
    </div>
  );
} 
```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "gray",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

# lib/utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/building-your-application/configuring/typescript for more information.

```

# next.config.mjs

```mjs
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

```

# package.json

```json
{
  "name": "soar-web-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.9.1",
    "@types/react-datepicker": "^7.0.0",
    "chart.js": "^4.4.7",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^11.15.0",
    "lucide-react": "^0.468.0",
    "next": "14.2.16",
    "react": "^18",
    "react-chartjs-2": "^5.2.0",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18",
    "react-hook-form": "^7.54.1",
    "tailwind-merge": "^2.5.5",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.16",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

```

# public/fifth-user.png

This is a binary file of the type: Image

# public/fourth-user.png

This is a binary file of the type: Image

# public/main-user.png

This is a binary file of the type: Image

# public/placeholder-avatar.svg

This is a file of the type: SVG Image

# public/second-user.png

This is a binary file of the type: Image

# public/sixth-user.png

This is a binary file of the type: Image

# public/third-user.png

This is a binary file of the type: Image

# README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

# tailwind.config.ts

```ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			lato: ['var(--font-lato)'],
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

