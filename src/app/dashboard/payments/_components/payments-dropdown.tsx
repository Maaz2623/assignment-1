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
  CurrencyIcon,
  FileExclamationPoint,
  History,
  HistoryIcon,
  Repeat2Icon,
  TextSelectIcon,
  UserRoundCheckIcon,
  UsersIcon,
  UserStarIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PaymentsDropdown = ({ children }: Props) => {
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
          <DropdownMenuLabel>Payments</DropdownMenuLabel>
          <DropdownMenuItem className="w-full h-10 hover:bg-rose-600! hover:text-white!">
            {" "}
            <TextSelectIcon className="hover:text-white" /> Payment Summary
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/payments/pay-bills`)}
            className="w-full h-10  hover:bg-rose-600! hover:text-white!"
          >
            {" "}
            <CurrencyIcon className="hover:text-white" /> Pay Bills
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full h-10 hover:bg-rose-600! hover:text-white!">
            {" "}
            <UsersIcon className="hover:text-white" />
            Manage Payees
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full h-10 hover:bg-rose-600! hover:text-white!">
            {" "}
            <HistoryIcon className="hover:text-white" /> Recent Payments
          </DropdownMenuItem>
          <DropdownMenuItem className="w-full h-10 hover:bg-rose-600! hover:text-white!">
            {" "}
            <FileExclamationPoint className="hover:text-white" /> Pending
            Payments
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
