"use client";
import React from "react";
import { AllAccountsTopBar } from "../../all-accounts/_components/all-accounts-top-bar";
import { Search, Trash2, Pencil, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const ExternalTranfers = () => {
  const router = useRouter();
  ("use client");
  return (
    <div className="p-10 space-y-6">
      <AllAccountsTopBar label="Manage External Transfer Accounts" />

      {/* Card */}
      <div className="w-full rounded-xl border border-gray-200 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-semibold text-sm text-gray-900">
            External Transfer Accounts
          </h3>
          <Search className="h-4 w-4 text-gray-500" />
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-5 px-6 py-3 text-xs font-semibold text-gray-500 border-b">
          <div className="flex items-center gap-1">NICKNAME</div>
          <div>FINANCIAL INSTITUTION</div>
          <div>ACCOUNT NUMBER</div>
          <div>ACCOUNT TYPE</div>
          <div className="text-right">ACTIONS</div>
        </div>

        {/* Table Row */}
        <div className="grid grid-cols-5 items-center px-6 py-4 text-sm border-b">
          {/* Nickname */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold">
              M
            </div>
            <span className="text-red-500 font-medium">Morgan</span>
          </div>

          {/* Institution */}
          <div className="text-gray-600">Kyle Miller</div>

          {/* Account Number */}
          <div className="text-gray-400">XXXXX4321</div>

          {/* Account Type */}
          <div className="text-gray-400">Checking</div>

          {/* Actions */}
          <div className="flex justify-end gap-4 text-gray-500">
            <Trash2 className="h-5 w-5 cursor-pointer" />
            <Pencil className="h-5 w-5 cursor-pointer" />
          </div>
        </div>

        {/* Add Account */}
        <div className="px-6 py-8">
          <Button
            onClick={() =>
              router.push(
                `/dashboard/transfers/manage-external-transfers-account/add-external-transfer-account`
              )
            }
            variant={`outline`}
            className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 py-4 text-sm font-semibold text-gray-700 w-full h-10 bg-neutral-100"
          >
            <Plus className="h-4 w-4" />
            ADD ACCOUNT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExternalTranfers;
