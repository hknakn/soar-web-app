import { DashboardLayout } from "./components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Overview Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Overview</h1>
        </div>

        {/* My Cards Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">My Cards</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
              See All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card components will go here */}
          </div>
        </div>

        {/* Weekly Activity and Expense Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Activity</h2>
            {/* Weekly Activity Chart will go here */}
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Expense Statistics</h2>
            {/* Expense Statistics Chart will go here */}
          </div>
        </div>

        {/* Quick Transfer and Balance History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Transfer</h2>
            {/* Quick Transfer component will go here */}
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Balance History</h2>
            {/* Balance History Chart will go here */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
