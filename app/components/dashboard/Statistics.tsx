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

interface StatisticsData {
  // Add specific types based on your data structure
  value: number;
  label: string;
  percentage: number;
  trend: "up" | "down";
}

export function Statistics() {
  const [statisticsData, setStatisticsData] = useState<StatisticsData[]>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchStatisticsData();
        setStatisticsData(data);
      } catch (error) {
        console.error("Error loading statistics:", error);
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
