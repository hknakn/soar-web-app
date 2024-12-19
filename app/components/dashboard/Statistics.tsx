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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const weeklyActivityData = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Withdraw",
      data: [450, 320, 300, 450, 150, 380, 380],
      backgroundColor: "#232323",
      borderRadius: 20,
      barThickness: ({ chart }) => {
        // Return different thickness based on screen width
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
        // Return different thickness based on screen width
        return chart.width < 500 ? 15 : 25;
      },
      borderSkipped: false,
      borderColor: "transparent",
      borderWidth: 5,
    },
  ],
};

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

const expenseData = {
  labels: ["Entertainment", "Bill Expense", "Investment", "Others"],
  datasets: [
    {
      data: [30, 15, 20, 35],
      backgroundColor: ["#232D4B", "#FF784B", "#3B82F6", "#1C1C1C"],
      borderWidth: 0,
    },
  ],
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

    // Function to calculate position for text
    function getPosition(percentage: number, radius: number, angle: number) {
      const x = centerX + Math.cos(angle) * radius * 0.7;
      const y = centerY + Math.sin(angle) * radius * 0.7;
      return { x, y };
    }

    // Draw text for each segment
    const total = data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
    let currentAngle = -Math.PI / 2 - Math.PI / 4; // Start from top-right (-45 degrees)

    data.datasets[0].data.forEach((value: number, i: number) => {
      const percentage = (value / total) * 100;
      const angle = (Math.PI * 2 * value) / total;
      const middleAngle = currentAngle + angle / 2;
      const pos = getPosition(percentage, radius, middleAngle);

      // Set text styles
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFFFFF';

      // Draw percentage
      ctx.font = '700 16px Inter';
      ctx.fillText(`${percentage}%`, pos.x, pos.y - 9);

      // Draw label
      ctx.font = '700 16px Inter';
      ctx.fillText(data.labels[i], pos.x, pos.y + 9);

      currentAngle += angle;
    });
  }
};

function WeeklyActivityChart() {
  return (
    <div className="h-[200px] lg:h-[300px] w-full">
      <Bar options={weeklyActivityOptions} data={weeklyActivityData} />
    </div>
  );
}

function ExpenseStatisticsChart() {
  return (
    <div className="h-[250px] lg:h-[300px] w-full flex items-center justify-center">
      <Pie options={expenseOptions} data={expenseData} plugins={[textCenter]} />
    </div>
  );
}

export function Statistics() {
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
                <WeeklyActivityChart />
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
                <ExpenseStatisticsChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
