"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeDollarSignIcon,
  CalendarClockIcon,
  ChevronLeftIcon,
  HistoryIcon,
  Repeat2Icon,
  UserRoundCheckIcon,
  UsersIcon,
  UserStarIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TransfersDropdown = ({ children }: Props) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent
        side="right"
        align="center"
        sideOffset={12}
        className="relative bg-white shadow-lg px-4 py-3"
      >
        {/* Arrow */}
        <span
          className="
            absolute
            -left-2
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            rotate-45
            bg-white
            shadow-md
          "
        />

        <DropdownMenuGroup className="flex flex-col gap-y-3">
          <DropdownMenuLabel>Transfers</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/transfers/fund-transfers`)}
            className="w-full h-10 hover:bg-rose-600! hover:text-white!"
          >
            {" "}
            <UserRoundCheckIcon className="hover:text-white" /> Fund Transfers
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(`/dashboard/transfers/usd-wire-transfers`)
            }
            className="w-full h-10  hover:bg-rose-600! hover:text-white!"
          >
            {" "}
            <BadgeDollarSignIcon className="hover:text-white" /> USD Wire
            Transfers
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(
                `/dashboard/transfers/manage-external-transfers-account`
              )
            }
            className="w-full h-10 hover:bg-rose-600! hover:text-white!"
          >
            {" "}
            <UsersIcon className="hover:text-white" /> Manage External Tranfers
            Accounts
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/transfers/scheduled`)}
            className="w-full h-10 hover:bg-rose-600! hover:text-white!"
          >
            {" "}
            <CalendarClockIcon className="hover:text-white" /> Scheduled
            Tranfers
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/transfers/favourites`)}
            className="w-full h-10 hover:bg-rose-600! hover:text-white!"
          >
            {" "}
            <UserStarIcon className="hover:text-white" /> View Favourites
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              router.push(
                `/dashboard/transfers/recent`
              )
            }
            className="w-full h-10 hover:bg-rose-600! hover:text-white!"
          >
            <HistoryIcon className="hover:text-white" />
            Recent Tranfers
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
