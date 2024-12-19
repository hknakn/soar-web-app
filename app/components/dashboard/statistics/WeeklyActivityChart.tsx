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