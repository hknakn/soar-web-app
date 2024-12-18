import { SearchIcon, BellIcon, SettingsIcon } from "../icons";
import Image from "next/image";

export function TopNav() {
  return (
    <div className="sticky top-0 z-40 flex h-20 items-center justify-between gap-x-4 border-b border-gray-100 bg-white px-6">
      {/* Left side - Title */}
      <h1 className="text-2xl font-semibold text-[#343C6A]">Overview</h1>

      {/* Right side - Search and Actions */}
      <div className="flex items-center gap-x-4">
        {/* Search */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <SearchIcon className="h-5 w-5 text-[#B1B1B1]" />
          </div>
          <input
            type="text"
            placeholder="Search for something"
            className="h-11 w-[280px] rounded-full bg-[#F5F7F9] pl-11 pr-4 text-sm text-[#343C6A] placeholder-[#B1B1B1] focus:outline-none focus:ring-1 focus:ring-[#4F46E5]"
          />
        </div>

        {/* Settings */}
        <button
          type="button"
          className="rounded-full bg-[#F5F7F9] p-3"
        >
          <SettingsIcon className="h-5 w-5 text-[#B1B1B1]" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="rounded-full bg-[#F5F7F9] p-3"
        >
          <BellIcon className="h-5 w-5 text-[#B1B1B1]" />
        </button>

        {/* Profile */}
        <div className="flex items-center">
          <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#4F46E5]">
            <Image
              src="/placeholder-avatar.svg"
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