"use client";

import Image from "next/image";
import { SendIcon } from "../../icons";
import { type QuickTransferUser } from "@/app/lib/mock/transferAndHistory";

interface QuickTransferProps {
  users: QuickTransferUser[];
  startIndex: number;
  selectedUserId: number | null;
  onUserClick: (userId: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function QuickTransfer({
  users,
  startIndex,
  selectedUserId,
  onUserClick,
  onNext,
  onPrevious,
}: QuickTransferProps) {
  const visibleUsers = users.slice(startIndex, startIndex + (startIndex === 0 ? 3 : 2));
  const hasMoreUsers = startIndex === 0 ? users.length > 3 : false;
  const showPrevious = startIndex > 0;

  return (
    <div className="h-full flex flex-col lg:justify-between">
      <div className="flex items-center justify-center gap-4">
        {showPrevious && (
          <button
            onClick={onPrevious}
            className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-white shadow-[0px_4px_25px_0px_rgba(76,103,100,0.10)] hover:bg-[#F8FAFC] transition-colors duration-200 flex items-center justify-center rotate-180"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
                stroke="#718EBF"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {visibleUsers.map((user) => (
          <button
            key={user.id}
            onClick={() => onUserClick(user.id)}
            className="flex flex-col items-center text-center space-y-2 transition-all duration-200"
          >
            <div className="relative w-[60px] h-[60px] lg:w-[72px] lg:h-[72px]">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3
                className={`text-[14px] lg:text-[15px] ${
                  selectedUserId === user.id ? "font-bold" : "font-semibold"
                } text-[#232323]`}
              >
                {user.name}
              </h3>
              <p
                className={`text-[13px] lg:text-[14px] ${
                  selectedUserId === user.id ? "font-semibold" : "font-normal"
                } text-[#94A3B8]`}
              >
                {user.role}
              </p>
            </div>
          </button>
        ))}

        {hasMoreUsers && (
          <button
            onClick={onNext}
            className="w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full bg-white shadow-[0px_4px_25px_0px_rgba(76,103,100,0.10)] hover:bg-[#F8FAFC] transition-colors duration-200 flex items-center justify-center"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91016 19.92L15.4302 13.4C16.2002 12.63 16.2002 11.37 15.4302 10.6L8.91016 4.07999"
                stroke="#718EBF"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="mt-3 lg:mt-8">
        <div className="relative flex items-center gap-2 lg:gap-3">
          <span className="text-[#718EBF] text-[13px] lg:text-[15px] font-medium whitespace-nowrap">
            Write Amount
          </span>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="525.50"
              className="w-full bg-[#EDF1F7] border-none text-[14px] lg:text-[15px] text-[#232323] font-medium pl-4 pr-[100px] lg:px-6 h-[48px] lg:h-[56px] rounded-full focus:outline-none"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-4 lg:px-8 bg-[#232323] hover:bg-[#232323]/90 rounded-full text-[14px] lg:text-[15px] font-medium text-white flex items-center gap-1 lg:gap-3 transition-colors duration-200">
              Send
              <SendIcon className="w-[18px] h-[16px] lg:w-[26px] lg:h-[22px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 