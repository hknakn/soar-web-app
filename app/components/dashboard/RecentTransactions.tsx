import { CardDepositIcon, PaypalIcon, UserPaymentIcon } from "../icons";

interface Transaction {
  id: string;
  type: "deposit" | "payment";
  title: string;
  date: string;
  amount: number;
  Icon: React.ComponentType<{ className?: string }>;
  iconBgColor: string;
}

const transactions: Transaction[] = [
  {
    id: "1",
    type: "deposit",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    Icon: CardDepositIcon,
    iconBgColor: "bg-[#FFF5D9]",
  },
  {
    id: "2",
    type: "payment",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    Icon: PaypalIcon,
    iconBgColor: "bg-[#E7EDFF]",
  },
  {
    id: "3",
    type: "payment",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    Icon: UserPaymentIcon,
    iconBgColor: "bg-[#DCFAF8]",
  },
];

export function RecentTransactions() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] leading-[26.63px] font-semibold text-[#232323]">
          Recent Transaction
        </h2>
      </div>

      <div className="flex-1 rounded-2xl bg-white p-6">
        <div className="space-y-6">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-x-4">
                <div
                  className={`flex h-[55px] w-[55px] items-center justify-center rounded-full ${transaction.iconBgColor}`}
                >
                  <transaction.Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-[16px] leading-[19.36px] font-medium text-[#232323]">
                    {transaction.title}
                  </h3>
                  <p className="text-[15px] leading-[18.15px] font-normal text-[#718EBF]">
                    {transaction.date}
                  </p>
                </div>
              </div>
              <span
                className={`text-[16px] font-medium ${
                  transaction.amount > 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]"
                }`}
              >
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
