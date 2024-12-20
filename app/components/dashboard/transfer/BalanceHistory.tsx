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

interface BalanceData {
  // Add specific types based on your data structure
  date: Date;
  amount: number;
}

interface BalanceHistoryProps {
  data: BalanceData[];
}

export function BalanceHistory({ data }: BalanceHistoryProps) {
  return (
    <Line options={balanceHistoryOptions} data={data} />
  );
} 