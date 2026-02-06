"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";
export const AllAccountsTopBar = () => {
  return (
    <div className="h-10 flex justify-between items-center w-full ">
      <div className="flex gap-x-3 justify-start items-center">
        <Button
          onClick={() => redirect(`/dashboard`)}
          variant={`outline`}
          size={`icon`}
        >
          <ArrowLeftIcon />
        </Button>
        <h3 className="text-lg font-medium">All Accounts</h3>
      </div>
      <div>
        <Button variant={`outline`} size={`icon`} className="text-rose-600">
          <LogOutIcon />
        </Button>
      </div>
    </div>
  );
};
