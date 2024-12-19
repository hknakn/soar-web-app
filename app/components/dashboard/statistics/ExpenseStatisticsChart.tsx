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