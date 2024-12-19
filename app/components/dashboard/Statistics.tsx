"use client";

import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { fetchStatisticsData } from "@/app/lib/mock/statistics";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const weeklyActivityOptions = {
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

const expenseOptions = {
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
const textCenter = {
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

function WeeklyActivityChart({ data }: { data: any }) {
  return (
    <div className="h-[200px] lg:h-[300px] w-full">
      <Bar options={weeklyActivityOptions} data={data} />
    </div>
  );
}

function ExpenseStatisticsChart({ data }: { data: any }) {
  return (
    <div className="h-[250px] lg:h-[300px] w-full flex items-center justify-center">
      <Pie options={expenseOptions} data={data} plugins={[textCenter]} />
    </div>
  );
}

function ChartSkeleton() {
  return (
    <div className="h-[200px] lg:h-[300px] w-full flex items-center justify-center bg-gray-100 animate-pulse rounded-lg" />
  );
}

export function Statistics() {
  const [statisticsData, setStatisticsData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
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
