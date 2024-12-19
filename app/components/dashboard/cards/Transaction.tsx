import { type Transaction as TransactionType } from "@/app/lib/mock/cardsAndTransactions";

export function Transaction({ transaction }: { transaction: TransactionType }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div
          className={`w-[50px] h-[50px] rounded-full ${transaction.iconBg} flex items-center justify-center`}
        >
          <transaction.icon />
        </div>
        <div>
          <p className="text-[15px] font-bold text-[#232323]">
            {transaction.title}
          </p>
          <p className="text-sm text-[#718EBF]">{transaction.date}</p>
        </div>
      </div>
      <p
        className={`text-base font-bold ${
          transaction.amount < 0 ? "text-[#F3735E]" : "text-[#60C589]"
        }`}
      >
        {transaction.amount < 0 ? "-" : "+"}$
        {Math.abs(transaction.amount).toLocaleString()}
      </p>
    </div>
  );
} 