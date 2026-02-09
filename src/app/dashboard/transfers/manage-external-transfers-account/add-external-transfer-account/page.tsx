import { AllAccountsTopBar } from "@/app/dashboard/all-accounts/_components/all-accounts-top-bar";
import { Button } from "@/components/ui/button";
import React from "react";

const AddExernalTransferAccount = () => {
  return (
    <div className="p-10 flex flex-col gap-y-1.50">
      <AllAccountsTopBar label="Add External Transfer Account" />
      <div className="px-8 py-6 flex flex-col gap-y-1.50 text-sm">
        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {/* Nickname */}
          <div className="flex flex-col gap-y-1.5">
            <label className="text-xs font-medium">
              Nickname <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter Nickname"
            />
          </div>

          {/* Account Owner Name */}
          <div className="flex flex-col gap-y-1.5">
            <label className="text-xs font-medium">
              Account Owner Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter Account Owner Name"
            />
          </div>

          {/* Account Number */}
          <div className="flex flex-col gap-y-1.5">
            <label className="text-xs font-medium">
              Account Number <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter Account Number"
            />
          </div>

          {/* Re-enter Account Number */}
          <div className="flex flex-col gap-y-1.5">
            <label className="text-xs font-medium">
              Re-Enter Account Number <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Re-enter Account Number"
            />
          </div>

          {/* Financial Institution */}
          <div className="flex flex-col gap-y-1.5">
            <label className="text-xs font-medium">
              Financial Institution <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter Financial Institution Name"
            />
          </div>

          {/* Routing Number */}
          <div className="flex flex-col gap-y-1.5">
            <label className="text-xs font-medium">
              Routing Number <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="Enter Routing number"
            />
          </div>

          {/* Account Type */}
          <div className="flex flex-col gap-y-1.5">
            <label className="text-xs font-medium">
              Account Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full rounded-md border px-3 py-2">
              <option>Please select</option>
            </select>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-4 text-xs text-gray-700 leading-relaxed">
          <p className="font-semibold">
            External Transfers (Dollar Accounts Only)
          </p>

          <p>
            To have an external transfer processed on the same business day, we
            must receive your instructions before the appropriate transfer
            cut-off time (4 p.m. U.S. Central Time, Monday through Friday for
            the European Theatre, including Guantanamo Bay, excluding U.S. bank
            holidays; 4 a.m. U.S. Central Time, Monday through Friday for the
            Pacific Theatre, including Kwajalein and Diego Garcia, excluding
            U.S. bank holidays).
          </p>

          <p>
            If you schedule a transfer for a future or recurring date, we will
            fulfill the transaction request at the start of business on that
            date in the country in which your account was opened.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Dollar transfers are the only currency authorized.</li>
            <li>
              External transfers can be submitted in any amount between $0.01
              and $10,000.00 per day.
            </li>
            <li>
              Transfers are only available to U.S.-based financial institutions
              capable of processing ACH transactions.
            </li>
            <li>
              You are responsible for ensuring all account information is
              correct. The Bank is not liable for funds sent to an incorrect
              party.
            </li>
            <li>
              External transfers should not be used for bill payments. Please
              use your online banking bill pay feature instead.
            </li>
          </ul>
        </div>
      </div>
      {/* Footer */}
      <div className="flex gap-4 border-t px-8 py-6">
        <Button className="rounded-md bg-gray-800 px-8 py-2 text-xs font-semibold text-white">
          CANCEL
        </Button>
        <Button className="rounded-md bg-red-600 hover:bg-red-700 px-10 py-2 text-xs font-semibold text-white">
          NEXT
        </Button>
      </div>
    </div>
  );
};

export default AddExernalTransferAccount;
