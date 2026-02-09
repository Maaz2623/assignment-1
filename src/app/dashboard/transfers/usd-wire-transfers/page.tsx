"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { AccountItem, ColumnHeader, PillGroup } from "../fund-transfers/page";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const UsdWireTransfers = () => {
  const [selectedAccount, setSelectedAccount] = React.useState<string | null>(
    "XXXXXX3077"
  );

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="p-10">
      <div className="min-h-screen bg-neutral-100 rounded-xl border flex">
        {/* LEFT PANEL */}
        <aside className="w-[360px] border-r px-6 py-6">
          <ColumnHeader title="Choose Account" />

          {/* Currency Tabs */}
          <div className="flex gap-2 mb-4">
            <PillGroup
              items={["ALL", "USD", "GBP"]}
              defaultActive="ALL"
              small
            />
          </div>

          {/* Account Cards */}
          <div className="space-y-3">
            <AccountItem
              id="XXXXXX3077"
              title="Non-Interest Checking Accts"
              account="XXXXXX3077"
              amount="$279.83"
              selected={selectedAccount === "XXXXXX3077"}
              onSelect={setSelectedAccount}
            />

            <AccountItem
              id="XXXXXX9613"
              title="Personal Savings"
              account="XXXXXX9613"
              amount="$405.79"
              selected={selectedAccount === "XXXXXX9613"}
              onSelect={setSelectedAccount}
            />
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <main className="flex-1 px-10 py-8">
          {/* Description */}
          <p className="text-sm text-gray-600 max-w-3xl mb-8">
            Use this form to request a wire transfer from one of your Community
            Bank accounts to your account at another bank. Your name must be on
            the beneficiary account at the receiving bank. Requests for same-day
            wire transfers must be submitted by 2 pm CT. There is a $15.00
            charge for domestic wires. To send a wire to a foreign institution,
            please visit your branch to make arrangements.
          </p>

          {/* Transfer Information */}
          <section className="mb-10">
            <h2 className="text-base font-medium mb-4">Transfer Information</h2>

            <div className="flex items-center gap-6">
              <div className="">
                <label className="block text-xs text-gray-600 mb-1">
                  Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-[360px] border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Maximum of $10,000 per day
              </p>
            </div>
          </section>

          {/* Originator Information */}
          <section className="mb-10">
            <h2 className="text-base font-medium mb-4">
              Originator's Information
            </h2>

            <div className="space-y-5 max-w-3xl">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Enter Name"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Address Line1 <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Enter Address Line 1"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>

                <p className="text-sm mt-4 text-gray-600 whitespace-nowrap">
                  No PO Box Except on Military Installation
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Address Line 2{" "}
                  </label>
                  <input
                    placeholder="Enter Address Line 1"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Address Line 3
                  </label>
                  <input
                    placeholder="Enter Address Line 1"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Address Line 4{" "}
                  </label>
                  <input
                    placeholder="Enter Address Line 1"
                    className="w-1/2 border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="Enter Address Line 1"
                    className="w-1/2 border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-base font-medium mb-4">
              Beneficiary's Information
            </h2>

            <div className="space-y-5 max-w-3xl">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Enter Name"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="flex-1 items-center">
                <label className="block text-xs text-gray-600 mb-1">
                  Address
                </label>
                <input
                  placeholder="Enter Address Line"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Enter City Name
                  </label>
                  <input
                    placeholder="Enter City Name"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    State
                  </label>
                  <Select>
                    <SelectTrigger className="w-1/2">
                      <SelectValue placeholder="Select a State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {indianStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="XXXXXXXXXX9584"
                    className="w-1/2 border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-base font-medium mb-4">
              Beneficiary's Financial Institution
            </h2>

            <div className="space-y-5 max-w-3xl">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Routing Number <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Enter Routing Number"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <input
                  placeholder="Enter Bank Name"
                  className="w-full border rounded-md px-3 py-2 text-sm"
                />
              </div>
              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Enter City Name
                  </label>
                  <input
                    placeholder="Enter City Name"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    State
                  </label>
                  <Select>
                    <SelectTrigger className="w-1/2">
                      <SelectValue placeholder="Select a State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {indianStates.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex-1 items-center">
                  <label className="block text-xs text-gray-600 mb-1">
                    Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    placeholder="XXXXXXXXXX9584"
                    className="w-1/2 border rounded-md px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-base font-medium mb-4">Special Instructions</h2>

            <div className="space-y-5 max-w-3xl">
              <Textarea
                className="min-h-40"
                placeholder="Enter special instructions"
              />
            </div>
          </section>

          <ScrollArea className="h-40 w-full rounded-md border p-4">
            <div className="flex flex-col w-full space-y-4">
              <h3 className="font-semibold">
                Funds Transfer Terms and Conditions
              </h3>

              <p>
                This is an Agreement between you, the Customer, and Community
                Bank and its subsidiary banks (“Bank”, “we”, “us”, etc.). By
                requesting the Bank to execute payment orders to transfer funds
                for you, you hereby agree to the following terms and conditions:
              </p>

              <p>
                <strong>1.</strong> The Bank will exercise reasonable efforts to
                execute all payment orders on the Business Day received, when
                received prior to our daily deadline, which we may establish and
                change from time to time. “Business Day” means that part of a
                day during which the Bank is open for the receipt and processing
                of payment orders. Saturdays, Sundays, and bank holidays are not
                considered Business Days.
              </p>

              <p>
                You agree that the Bank may handle payment orders received from
                you and other customers in any order selected by us, and that we
                may use any means or routes which we, in our sole discretion,
                consider suitable for the transmission of funds.
              </p>

              <p>
                The Bank shall be under no obligation to make any transfer
                unless you have sufficient available funds on deposit. However,
                the Bank may, in its sole discretion, execute a payment order
                that causes an overdraft, in which case you shall be liable for
                the overdraft, including applicable fees and interest, as
                governed by your Deposit Agreement.
              </p>

              <p>
                <strong>2.</strong> For all transfers of funds made out of Bank
                accounts, we will mail a confirmation to you at the address
                indicated in our records. You agree to review the confirmation
                promptly and notify us immediately of any discrepancy.
              </p>

              <p>
                The Bank shall not be liable for interest compensation unless
                notified of a discrepancy within 30 days from the date of your
                bank statement that includes the debit for the payment order in
                question.
              </p>

              <p>
                <strong>3.</strong> You agree to pay all fees determined by the
                Bank’s fee schedules for money transfers, which may change from
                time to time. You further agree to reimburse the Bank for any
                actual expenses incurred to effect or revoke a transfer at your
                request.
              </p>

              <p>
                <strong>4.</strong> The Bank shall be liable only for its
                negligent performance or non-performance of services under this
                Agreement and only to the extent of failure to exercise
                reasonable and ordinary care.
              </p>

              <p>
                The Bank shall not be liable for errors, delays, or failures
                caused by third parties or events beyond its reasonable control,
                including but not limited to natural disasters, strikes, power
                outages, or communication failures.
              </p>

              <p>
                In no event shall the Bank be liable for special, indirect, or
                consequential damages. Liability for delay or failure to
                transfer shall be limited to interest on the affected amount,
                and liability for erroneous transfers shall be limited to a
                refund plus interest for up to sixty days.
              </p>

              <p>
                <strong>5.</strong> This Agreement shall be governed by and
                construed in accordance with the laws of the state or
                commonwealth where the Bank’s main office is located, as well as
                applicable federal law.
              </p>

              <p>
                <strong>6.</strong> You acknowledge that if a payment order
                identifies a beneficiary inconsistently by name and account
                number, payment may be made based on the account number alone,
                even if it identifies a different person.
              </p>

              <p>
                <strong>7.</strong> The Bank may accept cancellations or
                amendments to payment orders at its discretion. You acknowledge
                that such changes require agreement from all involved financial
                institutions and that the Bank shall not be liable if
                cancellation or amendment is not completed.
              </p>

              <p>
                <strong>8.</strong> Any interest compensation payable shall be
                calculated based on the average Federal Funds rate at the
                Federal Reserve Bank of Richmond, computed on a 360-day year
                basis.
              </p>

              <p>
                <strong>9.</strong> Payment orders may be executed through
                Fedwire, CHIPS, or SWIFT and shall be governed by the applicable
                operating rules of those systems.
              </p>

              <p>
                <strong>10.</strong> The Bank will use best efforts to notify
                you of any rejection of a payment order on the execution date;
                however, failure to do so shall not result in liability for
                interest compensation.
              </p>
            </div>
          </ScrollArea>

          <section className="flex justify-start gap-x-4 items-center mt-10">
            <Checkbox className="size-5 border-neutral-800 -mt-1.5" />
            <label className="block mb-1">
              I Agree <span className="text-red-500">*</span>
            </label>
          </section>

          <section className="flex justify-start gap-x-4 items-center mt-10">
            <Button size={`lg`} variant={`outline`}>
              Cancel
            </Button>
            <Button
              size={`lg`}
              variant={`default`}
              className="bg-[#E31837] hover:bg-red-500"
            >
              Submit
            </Button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UsdWireTransfers;
