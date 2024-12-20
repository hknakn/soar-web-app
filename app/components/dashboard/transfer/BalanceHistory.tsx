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
  data: ChartData<"line">;
}

function BalanceHistory({ data }: BalanceHistoryProps) {
  return (
    <Line options={balanceHistoryOptions} data={data} />
  );
}

export default BalanceHistory;
