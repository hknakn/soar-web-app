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