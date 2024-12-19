"use client";

import {
  SearchIcon,
  BellIcon,
  SettingsOutlineIcon,
  MenuIcon,
  LogoIcon,
} from "../icons";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "./Sidebar";
import { useRouter } from "next/navigation";

const getPageTitle = (pathname: string) => {
  // Remove trailing slash if exists
  const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  // Special case for root path
  if (path === '') return 'Overview';
  
  // Find matching navigation item
  const navItem = navigation.find(item => item.href === pathname);
  if (navItem) return navItem.name;
  
  // Fallback: Capitalize the last segment of the path
  const segment = path.split('/').pop() || '';
  return segment.charAt(0).toUpperCase() + segment.slice(1);
};

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const pageTitle = getPageTitle(pathname);

  return (
    <>
      <div className="sticky top-0 z-40 flex flex-col bg-white">
        <div className="flex h-14 lg:h-20 items-center justify-between border-b border-b-[#E6EFF5] px-4 lg:px-6">
          {/* Left side - Menu button (mobile only) */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>

          {/* Center - Title (mobile) / Left - Title (desktop) */}
          <h1 className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 text-lg lg:text-2xl font-semibold text-[#343C6A]">
            {pageTitle}
          </h1>

          {/* Right side - Search and Actions */}
          <div className="flex items-center gap-x-4">
            {/* Desktop Search */}
            <div className="hidden lg:block relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon className="h-5 w-5 text-[#718EBF]" />
              </div>
              <input
                type="text"
                placeholder="Search for something"
                className="w-[255px] h-10 rounded-full bg-[#F5F7FA] pl-11 pr-4 text-[15px] text-[#343C6A] placeholder-[#8BA3CB] focus:outline-none"
              />
            </div>

            {/* Settings - Desktop only */}
            <button
              type="button"
              className="rounded-full bg-[#F5F7FA] h-10 w-10 transition-colors hover:bg-[#E6EFF5] items-center justify-center hidden lg:flex"
              onClick={() => router.push("/settings")}
            >
              <SettingsOutlineIcon className="h-[25px] w-[25px] text-[#718EBF] transition-colors hover:text-[#396AFF]" />
            </button>

            {/* Notifications - Desktop only */}
            <button
              type="button"
              className="rounded-full bg-[#F5F7F9] h-10 w-10 transition-colors hover:bg-[#E6EFF5] items-center justify-center hidden lg:flex"
            >
              <BellIcon className="h-[25px] w-[25px] text-[#396AFF] transition-colors hover:text-[#718EBF]" />
            </button>

            {/* Profile */}
            <div className="flex items-center">
              <button
                className="h-9 w-9 lg:h-11 lg:w-11 overflow-hidden rounded-full"
                onClick={() => router.push("/settings")}
              >
                <Image
                  src="/main-user.png"
                  alt="User avatar"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search - Below header */}
        <div className="p-4 border-b border-b-[#E6EFF5] lg:hidden">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <SearchIcon className="h-5 w-5 text-[#718EBF]" />
            </div>
            <input
              type="text"
              placeholder="Search for something"
              className="w-full h-10 rounded-full bg-[#F5F7FA] pl-11 pr-4 text-[15px] text-[#343C6A] placeholder-[#8BA3CB] focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 w-[280px] bg-white transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between h-14 px-4 border-b border-b-[#E6EFF5]">
              <div className="flex items-center gap-x-3">
                <LogoIcon className="h-8 w-8" />
                <span className="text-[22px] font-semibold text-[#343C6A]">
                  Soar Task
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-[#F5F7FA] rounded-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#718EBF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="px-2 pt-4">
              <ul className="flex flex-col gap-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name} className="relative">
                      {isActive && (
                        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#232323] rounded-r-full" />
                      )}
                      <Link
                        href={item.href}
                        className={`group flex items-center gap-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          isActive
                            ? "text-[#232323] bg-[#F5F7FA]"
                            : "text-[#B1B1B1] hover:text-[#232323] hover:bg-[#F5F7FA]"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon
                          className={`h-[22px] w-[22px] shrink-0 transition-colors ${
                            isActive
                              ? "text-[#232323]"
                              : "text-[#B1B1B1] group-hover:text-[#232323]"
                          }`}
                        />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
