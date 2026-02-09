"use client";
import React, { useState } from "react";
import { AllAccountsTopBar } from "../../all-accounts/_components/all-accounts-top-bar";
import { Switch } from "@/components/ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

const NotificationAlerts = () => {
  const [activeTab, setActiveTab] = useState<"account" | "general">("account");

  const [channels, setChannels] = useState({
    inApp: true,
    sms: true,
    email: true,
  });

  return (
    <div className="p-10 space-y-6">
      <AllAccountsTopBar label="Notification Alerts" />

      <div className="bg-white border pb-10 rounded-lg flex overflow-hidden">
        {/* LEFT COLUMN */}
        <div className="w-1/3 p-6 border-r space-y-6">
          <h3 className="font-semibold text-gray-800">
            Set Notifications Alerts
          </h3>

          {/* Channel Toggles */}
          {[
            { key: "inApp", label: "In-App" },
            { key: "sms", label: "SMS Alert" },
            { key: "email", label: "Email Alert" },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{label}</span>
              <Switch
                //   @ts-ignore
                checked={channels[key]}
                className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200
              "
                onCheckedChange={(val) =>
                  setChannels((prev) => ({ ...prev, [key]: val }))
                }
              />
            </div>
          ))}

          <div className="flex gap-4 pt-4">
            <Button variant="secondary">CANCEL</Button>
            <Button className="bg-red-600 hover:bg-red-700">UPDATE</Button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-2/3 p-6 space-y-6">
          {/* Tabs */}
          <div className="flex gap-4">
            <Button
              onClick={() => setActiveTab("account")}
              className={cn(
                "px-6",
                activeTab === "account"
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-white hover:bg-white/80 border text-gray-700"
              )}
            >
              Account Specific Alerts
            </Button>

            <Button
              onClick={() => setActiveTab("general")}
              className={cn(
                "px-6",
                activeTab === "general"
                  ? "bg-red-600 hover:bg-red-700 text-white"
                  : "bg-white hover:bg-white/80 border text-gray-700"
              )}
            >
              General Alerts
            </Button>
          </div>

          {/* ACCOUNT SPECIFIC */}
          {activeTab === "account" && (
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem
                value="low-balance"
                className="border rounded-lg px-4"
              >
                <AccordionTrigger className="font-semibold">
                  Low Balance
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-sm text-gray-600">
                    This alert automatically notifies you when your account
                    balance is below a minimum threshold.
                  </p>

                  {[
                    "Non-Interest Checking Accts | XXXXX3077",
                    "Personal Savings | XXXXX9613",
                  ].map((acct) => (
                    <div
                      key={acct}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center gap-2 text-sm">
                        <Checkbox
                          className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                        />
                        {acct}
                      </label>

                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500">Amount</span>
                        <input
                          type="text"
                          defaultValue="0.00"
                          className="border rounded-md px-3 py-1 text-sm w-36"
                        />
                      </div>
                    </div>
                  ))}

                  <p className="text-xs text-red-500">
                    Click update to save changes.
                  </p>

                  <div className="flex gap-4">
                    <Button variant="secondary">CANCEL</Button>
                    <Button className="bg-red-600 hover:bg-red-700">
                      UPDATE
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {[
                "Balance Summary",
                "Large Post Item",
                "Direct Deposit",
                "Insufficient Funds",
              ].map((item) => (
                <AccordionItem
                  key={item}
                  value={item}
                  className="rounded-lg border px-4"
                >
                  <AccordionTrigger>{item}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600">
                    {item === "Balance Summary" && (
                      <div className="flex flex-col gap-y-3">
                        <p className="font-semibold">
                          This alert automatically notifies you of your
                          available balance.
                        </p>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Non-Interest Checking Accts | XXXXXX3077</p>
                        </div>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Personal Savings|XXXXXX9613</p>
                        </div>
                        <p className="text-red-600 text-sm">
                          Click update to save changes
                        </p>
                        <div className="flex gap-x-3">
                          <Button variant={`outline`}>Cancel</Button>
                          <Button variant={`default`} className="bg-red-600">
                            Update
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "Large Post Item" && (
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600">
                          This alert automatically notifies you when a debit is
                          posted to your account greater than your threshold.
                        </p>

                        {[
                          "Non-Interest Checking Accts | XXXXX3077",
                          "Personal Savings | XXXXX9613",
                        ].map((acct) => (
                          <div
                            key={acct}
                            className="flex items-center justify-between"
                          >
                            <label className="flex items-center gap-2 text-sm">
                              <Checkbox
                                className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                              />
                              {acct}
                            </label>

                            <div className="flex flex-col gap-1">
                              <span className="text-xs text-gray-500">
                                Amount
                              </span>
                              <input
                                type="text"
                                defaultValue="0.00"
                                className="border rounded-md px-3 py-1 text-sm w-36"
                              />
                            </div>
                          </div>
                        ))}

                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>

                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "Direct Deposit" && (
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600">
                          This alert automatically notifies you when a debit is
                          posted to your account greater than your threshold.
                        </p>

                        {[
                          "Non-Interest Checking Accts | XXXXX3077",
                          "Personal Savings | XXXXX9613",
                        ].map((acct) => (
                          <div
                            key={acct}
                            className="flex items-center justify-between"
                          >
                            <label className="flex items-center gap-2 text-sm">
                              <Checkbox
                                className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                              />
                              {acct}
                            </label>

                            <div className="flex flex-col gap-1">
                              <span className="text-xs text-gray-500">
                                Amount
                              </span>
                              <input
                                type="text"
                                defaultValue="0.00"
                                className="border rounded-md px-3 py-1 text-sm w-36"
                              />
                            </div>
                          </div>
                        ))}

                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>

                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "Insufficient Funds" && (
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600">
                          This alert automatically notifies you when you have
                          insufficient funds to cover a debit
                        </p>

                        {["Non-Interest Checking Accts | XXXXX3077"].map(
                          (acct) => (
                            <div
                              key={acct}
                              className="flex items-center justify-between"
                            >
                              <label className="flex items-center gap-2 text-sm">
                                <Checkbox
                                  className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                                />
                                {acct}
                              </label>
                            </div>
                          )
                        )}

                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>

                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}

          {/* GENERAL ALERTS */}
          {activeTab === "general" && (
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="unread" className="border rounded-lg px-4">
                <AccordionTrigger>Unread Bank Messages</AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600">
                  This alert notifies you daily that you have unread messages in
                  your Message Center.
                </AccordionContent>
              </AccordionItem>

              {[
                "Bank Inquiry Response",
                "Password Change",
                "Online Banking Lockout",
                "External Transfer Alert",
                "External Transfer Executed Alert",
                "Euro Payee Alert",
                "Euro Payment Executed Alert",
                "Sterling Payee Alert",
                "Sterling Payment Executed Alert",
                "Phone or Email Change",
              ].map((item) => (
                <AccordionItem
                  key={item}
                  value={item}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger>{item}</AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600">
                    {item === "Bank Inquiry Response" && (
                      <div className="flex flex-col gap-y-3">
                        <p>
                          This alert notifies you immediately when your Message
                          Center contains a bank response to one of your
                          inquiries.
                        </p>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Enable / Disable this alert.</p>
                        </div>
                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "Password Change" && (
                      <p className="text-neutral-700">
                        This alert notifies you immediately when your password
                        has changed.
                      </p>
                    )}
                    {item === "Online Banking Lockout" && (
                      <div className="flex flex-col gap-y-3">
                        <p>
                          This alert automatically notifies you when your Online
                          Banking sign in is locked due to too many failed login
                          attempts.
                        </p>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Enable / Disable this alert.</p>
                        </div>
                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "External Transfer Alert" && (
                      <div className="flex flex-col gap-y-3">
                        <p>
                          This alert automatically notifies you when a new
                          external transfer account is added to your online
                          banking profile.
                        </p>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Enable / Disable this alert.</p>
                        </div>
                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "External Transfer Executed Alert" && (
                      <div className="flex flex-col gap-y-3">
                        <p>
                          This alert automatically notifies you when an external
                          transfer is successfully executed.
                        </p>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Enable / Disable this alert.</p>
                        </div>
                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "Euro Payee Alert" && (
                      <div className="flex flex-col gap-y-3">
                        <p>
                          This alert automatically notifies you when a Euro
                          payee is added to your online banking profile.
                        </p>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Enable / Disable this alert.</p>
                        </div>
                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "Euro Payment Executed Alert" && (
                      <p className="text-neutral-700">
                        This alert automatically notifies you when a Euro
                        payment is successfully executed.
                      </p>
                    )}
                    {item === "Sterling Payee Alert" && (
                      <div className="flex flex-col gap-y-3">
                        <p>
                          This alert automatically notifies you when a Sterling
                          payee is added to your online banking profile.
                        </p>
                        <div className="flex items-center justify-start gap-x-2">
                          <Checkbox
                            className="
                data-[state=checked]:bg-[#E31837]
                data-[state=checked]:hover:bg-red-500
                data-[state=unchecked]:bg-gray-200 size-5 border
              "
                          />
                          <p>Enable / Disable this alert.</p>
                        </div>
                        <p className="text-xs text-red-500">
                          Click update to save changes.
                        </p>
                        <div className="flex gap-4">
                          <Button variant="secondary">CANCEL</Button>
                          <Button className="bg-red-600 hover:bg-red-700">
                            UPDATE
                          </Button>
                        </div>
                      </div>
                    )}
                    {item === "Sterling Payment Executed Alert" && (
                      <p className="text-neutral-700">
                        This alert automatically notifies you when a Sterling
                        payment is successfully executed.
                      </p>
                    )}
                    {item === "Phone or Email Change" && (
                      <p className="text-neutral-700">
                        This alert automatically notifies you when your contact
                        information has changed.
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationAlerts;
