"use client";

import { CardTypeLogoDark, CardTypeLogoLight } from "../../icons";
import { type CardProps } from "@/app/lib/mock/cardsAndTransactions";

export function CreditCard({
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