"use client";
import React from "react";
import { AllAccountsTopBar } from "../../all-accounts/_components/all-accounts-top-bar";
import {
  Plus,
  Search,
  FileClock,
  UserCheck2Icon,
  SearchIcon,
} from "lucide-react";
import { PillGroup } from "../fund-transfers/page";
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
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

const ScheduledTransfers = () => {
  const router = useRouter();

  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <div className="p-10 space-y-6">
      <AllAccountsTopBar label="Scheduled Transfers" />

      {/* Card */}
      <div className="rounded-xl border bg-white">
        {/* Top Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          {/* Filters */}
          <PillGroup items={["ALL", "USD", "GBP"]} defaultActive="ALL" small />

          {/* Actions */}
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={`default`}
                  size={`icon-lg`}
                  className="flex h-8 hover:bg-red-700 w-8 items-center justify-center rounded-md bg-red-600 text-white"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Transfers</DropdownMenuLabel>
                  <DropdownMenuItem
                    onClick={() =>
                      router.push(`/dashboard/transfers/fund-transfers`)
                    }
                    className="flex text-neutral-700"
                  >
                    <UserCheck2Icon />
                    <p className="text-neutral-700">Funds Transfer</p>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="">
              {!searchOpen ? (
                <>
                  <Button
                    variant={`ghost`}
                    size={`icon`}
                    onClick={() => setSearchOpen(true)}
                  >
                    <SearchIcon className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </>
              ) : (
                <Input
                  autoFocus
                  placeholder={`Search Scheduled Transfers`}
                  onBlur={() => setSearchOpen(false)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="relative mb-4">
            <div className="absolute -top-2 -left-2 h-2 w-2 rounded-full bg-purple-400" />
            <div className="absolute -right-3 top-1 h-1.5 w-1.5 rounded-full bg-gray-400" />
            <div className="absolute bottom-0 -right-2 h-2 w-2 rounded-full bg-purple-300" />
            <div className="absolute -bottom-2 left-0 h-1.5 w-1.5 rounded-full bg-gray-300" />
            <FileClock className="h-12 w-12 text-gray-400" />
          </div>

          <p className="text-sm font-semibold text-gray-600">
            No Records Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduledTransfers;
