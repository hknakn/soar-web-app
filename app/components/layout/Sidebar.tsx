"use client";

import Link from "next/link";
import {
  LogoIcon,
  HomeIcon,
  CreditCardIcon,
  BanknotesIcon,
  UserIcon,
  ChartBarIcon,
  WrenchIcon,
  SettingsIcon,
  BuildingIcon,
  GroupIcon,
} from "../icons";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Transactions", href: "/transactions", icon: BanknotesIcon },
  { name: "Accounts", href: "/accounts", icon: UserIcon },
  { name: "Investments", href: "/investments", icon: ChartBarIcon },
  { name: "Credit Cards", href: "/credit-cards", icon: CreditCardIcon },
  { name: "Loans", href: "/loans", icon: BuildingIcon },
  { name: "Services", href: "/services", icon: WrenchIcon },
  { name: "My Privileges", href: "/privileges", icon: GroupIcon },
  { name: "Settings", href: "/settings", icon: SettingsIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 z-50 hidden w-56 lg:flex bg-[#E6EFF5]">
      <div className="flex w-full flex-col border-r border-r-[#E6EFF5] bg-white">
        {/* Logo section */}
        <div className="flex h-20 shrink-0 items-center gap-x-3 px-6">
          <LogoIcon className="h-8 w-8" />
          <span className="text-[25px] font-semibold text-[#343C6A]">
            Soar Task
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col mt-6">
          <ul role="list" className="flex flex-1 flex-col gap-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 h-full w-[6px] bg-[#232323] rounded-r-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                  <Link
                    href={item.href}
                    className={`group flex items-center gap-x-3 px-6 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-[#232323]"
                        : "text-[#B1B1B1] hover:text-[#232323]"
                    }`}
                  >
                    <item.icon
                      className={`h-[25px] w-[25px] shrink-0 transition-colors ${
                        isActive
                          ? "text-[#232323]"
                          : "text-[#B1B1B1] group-hover:text-[#232323] group-hover:fill-[#232323]"
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
  );
}
