"use client";

import { useEffect, useState } from "react";
import { fetchCardsAndTransactions, type CardProps, type Transaction } from "@/app/lib/mock/cardsAndTransactions";
import { CreditCard } from "./cards/CreditCard";
import { CardSkeleton, TransactionSkeleton } from "./cards/Skeletons";
import { Transaction as TransactionItem } from "./cards/Transaction";

export function CardsAndTransactions() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCardsAndTransactions();
        setCards(data.cards);
        setTransactions(data.transactions);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

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
                  {/* Mobile View */}
                  <div className="inline-flex pl-8 pr-8 gap-5 lg:hidden">
                    {isLoading ? (
                      <>
                        <div className="min-w-[300px] flex-shrink-0 h-[200px]">
                          <CardSkeleton />
                        </div>
                        <div className="min-w-[300px] flex-shrink-0 h-[200px]">
                          <CardSkeleton />
                        </div>
                      </>
                    ) : (
                      cards.map((card, index) => (
                        <div
                          key={index}
                          className="min-w-[300px] flex-shrink-0 h-[200px]"
                        >
                          <CreditCard {...card} />
                        </div>
                      ))
                    )}
                  </div>

                  {/* Desktop View */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 w-full">
                    {isLoading ? (
                      <>
                        <div className="h-[250px]">
                          <CardSkeleton />
                        </div>
                        <div className="h-[250px]">
                          <CardSkeleton />
                        </div>
                      </>
                    ) : (
                      cards.map((card, index) => (
                        <div key={index} className="h-[250px]">
                          <CreditCard {...card} />
                        </div>
                      ))
                    )}
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
                  {isLoading
                    ? Array(3)
                        .fill(0)
                        .map((_, index) => (
                          <TransactionSkeleton key={index} />
                        ))
                    : transactions.map((transaction) => (
                        <TransactionItem
                          key={transaction.id}
                          transaction={transaction}
                        />
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
