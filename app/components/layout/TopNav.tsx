import { SearchIcon, BellIcon, SettingsOutlineIcon } from "../icons";
import Image from "next/image";

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 flex h-20 items-center justify-between gap-x-4 border-b border-b-[#E6EFF5] bg-[#FFFFFF] px-6">
      {/* Left side - Title */}
      <h1 className="text-2xl font-semibold text-[#343C6A]">Overview</h1>

      {/* Right side - Search and Actions */}
      <div className="flex items-center gap-x-4">
        {/* Search */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <SearchIcon className="h-5 w-5 text-[#718EBF]" />
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="h-10 w-[255px] rounded-full bg-[#F5F7FA] pl-11 pr-4 text-[15px] text-[#343C6A] placeholder-[#8BA3CB] focus:outline-none"
          />
        </div>

        {/* Settings */}
        <button
          type="button"
          className="rounded-full bg-[#F5F7FA] h-10 w-10 transition-colors hover:bg-[#E6EFF5] flex items-center justify-center"
        >
          <SettingsOutlineIcon className="h-[25px] w-[25px] text-[#718EBF] transition-colors hover:text-[#396AFF]" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="rounded-full bg-[#F5F7F9] h-10 w-10 transition-colors hover:bg-[#E6EFF5] flex items-center justify-center"
        >
          <BellIcon className="h-[25px] w-[25px] text-[#396AFF] transition-colors hover:text-[#718EBF]" />
        </button>

        {/* Profile */}
        <div className="flex items-center">
          <div className="h-11 w-11 overflow-hidden rounded-full">
            <Image
              src="/main-user.png"
              alt="User avatar"
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
