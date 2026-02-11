"use client";
import { cn } from "@/lib/utils";
import {
  ArrowLeftRightIcon,
  ArrowRightLeftIcon,
  BanknoteArrowUpIcon,
  Calendar,
  FileSpreadsheetIcon,
  GlobeIcon,
  HomeIcon,
  LucideIcon,
  WrenchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Changa_One, Bebas_Neue } from "next/font/google";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TransfersDropdown } from "./transfers/_components/transfers-dropdown";
import { PaymentsDropdown } from "./payments/_components/payments-dropdown";

const changaOne = Changa_One({ subsets: ["latin"], weight: ["400"] });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function Sidebar() {
  const sidebarItems: {
    icon: LucideIcon;
    label: string;
    url: string;
  }[] = [
    { icon: HomeIcon, label: "Home", url: "/dashboard" },
    {
      icon: FileSpreadsheetIcon,
      label: "All Accounts",
      url: "/dashboard/all-accounts",
    },
    {
      icon: ArrowRightLeftIcon,
      label: "Transfers",
      url: "/dashboard/transfers",
    },
    {
      icon: BanknoteArrowUpIcon,
      label: "Payments",
      url: "/dashboard/payments",
    },
    {
      icon: WrenchIcon,
      label: "Service Request",
      url: "/dashboard/service-request",
    },
    {
      icon: Calendar,
      label: "Schedule an appointment",
      url: "/dashboard/schedule-appointment",
    },
  ];

  const pathname = usePathname();

  return (
    <aside className="flex w-16 h-screen sm:w-[12%] py-3 rounded-r-3xl shadow-lg bg-blue-700 text-white flex-col border-r border-neutral-200 my-1 max-h-screen fixed z-10 top-0 left-0">
      <div className="w-fit text-center mx-auto md:text-left p-2">
        <h1
          className={`${changaOne.className} tracking-normal text-sm sm:text-lg hidden sm:block`}
        >
          CommunityBank
        </h1>
        <div className="hidden sm:flex justify-center md:justify-between items-center gap-2">
          <p className="text-[8px] tracking-tight -mt-1">Operated by</p>
          <div className="flex items-center gap-x-0.5">
            <GlobeIcon className="w-2 -mt-1" />
            <p className={`${bebas.className} text-[9px]`}>
              NAVY FEDERAL CREDIT UNION.
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {sidebarItems.map((item) => {
          const isTranfer = item.url === "/dashboard/transfers";
          const isPayments = item.url === "/dashboard/payments";
          const isLink = !isTranfer && !isPayments;
          return (
            <div
              key={item.url}
              className={cn(
                "w-full cursor-pointer hover:bg-white hover:text-red-600 items-center flex-col h-[15%] text-center gap-y-1 sm:gap-y-2 justify-center flex px-1",
                pathname === item.url && "bg-white text-red-600"
              )}
            >
              {isPayments && (
                <PaymentsDropdown>
                  <div
                    key={item.url}
                    className={cn(
                      "w-full h-full justify-center items-center flex flex-col",
                      pathname.includes("/dashboard/payments") &&
                        "bg-white text-red-600"
                    )}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    Payments
                  </div>
                </PaymentsDropdown>
              )}
              {isTranfer && (
                <TransfersDropdown>
                  <div
                    key={item.url}
                    className={cn(
                      "w-full h-full justify-center items-center flex flex-col",
                      pathname.includes("/dashboard/transfers") &&
                        "bg-white text-red-600"
                    )}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    Transfers
                  </div>
                </TransfersDropdown>
              )}
              {isLink && (
                <Link
                  href={item.url}
                  key={item.url}
                  className="flex flex-col justify-center items-center"
                >
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <p className="hidden sm:block text-sm px-2">{item.label}</p>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
