"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, SearchIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { AllAccountsTopBar } from "./_components/all-accounts-top-bar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import AccountCard from "../account-card";

const AllAccountsPage = () => {
  const [currentFilter, setCurrentFilter] = useState<
    "all" | "usd" | "eur" | "gbp" | "krw"
  >("all");

  const filters: {
    name: string;
    type: "all" | "usd" | "eur" | "gbp" | "krw";
  }[] = [
    { name: "All", type: "all" },
    { name: "USD", type: "usd" },
    { name: "EUR", type: "eur" },
    { name: "GBP", type: "gbp" },
    { name: "KRW", type: "krw" },
  ];

  return (
    <div className="h-full p-10 gap-y-4 flex flex-col">
      <AllAccountsTopBar label="All Accounts" />
      <div className="flex-1 px-8 py-2 w-full border min-h-screen rounded-xl bg-gray-100 flex flex-col">
        <div className="h-20 border-b flex justify-end items-center w-full">
          <div className="w-1/3 relative">
            <SearchIcon className="size-4 absolute right-2 top-2" />
            <Input placeholder="Search accounts..." className="w-full" />
          </div>
        </div>
        <div className="my-6 flex gap-x-3">
          {filters.map((filter) => (
            <Button
              key={filter.name}
              onClick={() => setCurrentFilter(filter.type)}
              variant={`outline`}
              className={cn(
                "",
                filter.type === currentFilter && "border border-neutral-500"
              )}
              size={`lg`}
            >
              {filter.name}
            </Button>
          ))}
        </div>
        <section className=" grid gap-4 w-full md:grid-cols-3 relative">
          <AccountCard
            title="Non-Interest Checking Accts"
            number="XXXXXX3077"
            balance="$279.83"
          />
          <AccountCard
            title="New Automobile"
            number="XXXXXX6464"
            balance="$9,892.42"
          />
          <AccountCard
            title="Personal Savings"
            number="XXXXXX9613"
            balance="$405.79"
          />
        </section>
      </div>
    </div>
  );
};

export default AllAccountsPage;
