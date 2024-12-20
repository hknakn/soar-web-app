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
        weight: 500,
      },
      bodyFont: {
        size: 14,
        family: 'Inter',
        weight: 500,
      },
      padding: 12,
      displayColors: false,
      callbacks: {
        title: () => '',
        label: (context: { parsed: { y: number } }) => `$${context.parsed.y}`,
      },
      intersect: false,
      mode: 'index' as const,
    },
  },
  hover: {
    mode: 'index' as const,
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