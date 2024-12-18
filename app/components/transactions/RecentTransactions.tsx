interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal';
  description: string;
  amount: number;
  date: string;
  icon: React.ReactNode;
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export function RecentTransactions({ transactions }: RecentTransactionsProps) {
  const formatAmount = (amount: number) => {
    const isPositive = amount > 0;
    return (
      <span className={isPositive ? "text-green-600" : "text-red-600"}>
        {isPositive ? "+" : ""}
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount)}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Recent Transaction</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-6 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  {transaction.icon}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {transaction.description}
                </p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
            </div>
            <div className="text-sm font-medium">
              {formatAmount(transaction.amount)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 