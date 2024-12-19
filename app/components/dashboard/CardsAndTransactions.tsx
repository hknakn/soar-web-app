"use client";

import { CardTypeLogoDark, CardTypeLogoLight } from "../icons";
import { CardDepositIcon, PaypalIcon, UserPaymentIcon } from "../icons";

interface CardProps {
  variant: "dark" | "light";
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
}

function CreditCard({
  variant,
  balance,
  cardHolder,
  cardNumber,
  validThru,
}: CardProps) {
  return (
    <div
      className={`relative h-full w-full rounded-[25px] p-6 font-lato ${
        variant === "dark"
          ? "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white"
          : "bg-white border border-[#DFEAF2]"
      }`}
    >
      {/* Top Row - Balance */}
      <div>
        <p
          className={`text-xs leading-[14.4px] ${
            variant === "light" ? "text-[#4D5B7C]" : "text-white"
          }`}
        >
          Balance
        </p>
        <p
          className={`text-xl leading-[24px] font-semibold ${
            variant === "light" ? "text-[#232323]" : "text-white"
          }`}
        >
          ${balance.toLocaleString()}
        </p>
      </div>

      {/* Middle Section - Card Holder and Valid Thru */}
      <div className="mt-4 flex justify-between">
        <div>
          <p
            className={`text-xs leading-[14.4px] uppercase ${
              variant === "light" ? "text-[#4D5B7C]" : "text-white"
            } opacity-70`}
          >
            Card Holder
          </p>
          <p
            className={`text-[15px] leading-[18px] font-semibold mt-1 ${
              variant === "light" ? "text-[#232323]" : "text-white"
            }`}
          >
            {cardHolder}
          </p>
        </div>
        <div>
          <p
            className={`text-xs leading-[14.4px] uppercase ${
              variant === "light" ? "text-[#4D5B7C]" : "text-white"
            } opacity-70`}
          >
            Valid Thru
          </p>
          <p
            className={`text-[15px] leading-[18px] font-semibold mt-1 ${
              variant === "light" ? "text-[#232323]" : "text-white"
            }`}
          >
            {validThru}
          </p>
        </div>
      </div>

      {/* Bottom Section - Card Number and Mastercard */}
      <div className="absolute bottom-0 left-0 right-0">
        <div
          className={`border-t ${
            variant === "light" ? "border-[#DFEAF2]" : "border-white/10"
          }`}
        />
        <div className="h-20 flex items-center justify-between px-6">
          <p
            className={`text-[22px] leading-[26.4px] font-semibold ${
              variant === "light" ? "text-[#232323]" : "text-white"
            }`}
          >
            {cardNumber}
          </p>
          <div className="flex -space-x-3">
            {variant === "dark" ? (
              <CardTypeLogoDark className="h-[30px] w-11" />
            ) : (
              <CardTypeLogoLight className="h-[30px] w-11" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const transactions = [
  {
    id: 1,
    title: "Deposit from my",
    date: "28 January 2021",
    amount: -850,
    icon: CardDepositIcon,
    iconBg: "bg-[#FFF6E9]",
  },
  {
    id: 2,
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: PaypalIcon,
    iconBg: "bg-[#EDF0FF]",
  },
  {
    id: 3,
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: UserPaymentIcon,
    iconBg: "bg-[#E7EDFF]",
  },
];

export function CardsAndTransactions() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12">
        <div className="flex flex-col space-y-6">
          {/* Desktop Titles Row */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 px-8 lg:px-0">
            <div className="col-span-8 flex items-center justify-between">
              <h2 className="text-[22px] font-bold text-[#232323]">My Cards</h2>
              <button className="text-base font-bold text-[#232323] hover:text-[#4D5B7C] transition-colors hover:underline">
                See All
              </button>
            </div>
            <div className="col-span-4">
              <h2 className="text-[22px] font-bold text-[#232323]">
                Recent Transaction
              </h2>
            </div>
          </div>

          {/* Mobile Title for My Cards */}
          <div className="flex lg:hidden items-center justify-between px-8">
            <h2 className="text-[22px] font-bold text-[#232323]">My Cards</h2>
            <button className="text-base font-bold text-[#232323] hover:text-[#4D5B7C] transition-colors">
              See All
            </button>
          </div>

          {/* Content Row */}
          <div className="grid grid-cols-12 gap-6">
            {/* My Cards Section */}
            <div className="col-span-12 lg:col-span-8">
              {/* Cards Container - Mobile Scrollable */}
              <div className="relative h-[200px] lg:h-[250px]">
                <div className="absolute inset-0 flex overflow-x-auto hide-scrollbar">
                  <div className="inline-flex pl-8 pr-8 gap-5 lg:hidden">
                    <div className="min-w-[300px] flex-shrink-0">
                      <div className="h-[200px]">
                        <CreditCard
                          variant="dark"
                          balance={5756}
                          cardHolder="Eddy Cusuma"
                          cardNumber="3778 **** **** 1234"
                          validThru="12/22"
                        />
                      </div>
                    </div>
                    <div className="min-w-[300px] flex-shrink-0">
                      <div className="h-[200px]">
                        <CreditCard
                          variant="light"
                          balance={5756}
                          cardHolder="Eddy Cusuma"
                          cardNumber="3778 **** **** 1234"
                          validThru="12/22"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 w-full">
                    <div className="h-[250px]">
                      <CreditCard
                        variant="dark"
                        balance={5756}
                        cardHolder="Eddy Cusuma"
                        cardNumber="3778 **** **** 1234"
                        validThru="12/22"
                      />
                    </div>
                    <div className="h-[250px]">
                      <CreditCard
                        variant="light"
                        balance={5756}
                        cardHolder="Eddy Cusuma"
                        cardNumber="3778 **** **** 1234"
                        validThru="12/22"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions Section */}
            <div className="col-span-12 lg:col-span-4">
              {/* Mobile Title for Recent Transaction */}
              <div className="lg:hidden px-8 mb-6">
                <h2 className="text-[22px] font-bold text-[#232323]">
                  Recent Transaction
                </h2>
              </div>

              <div className="lg:bg-white lg:rounded-[25px] lg:p-6 lg:h-[250px] px-8 lg:px-6">
                <div className="flex flex-col gap-6">
                  {transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between"
                    >
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
                          <p className="text-sm text-[#718EBF]">
                            {transaction.date}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`text-base font-bold ${
                          transaction.amount < 0
                            ? "text-[#F3735E]"
                            : "text-[#60C589]"
                        }`}
                      >
                        {transaction.amount < 0 ? "-" : "+"}$
                        {Math.abs(transaction.amount).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
