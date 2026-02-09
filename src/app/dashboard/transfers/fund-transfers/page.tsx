"use client";

import React from "react";
import { FileSearch2Icon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AllAccountsTopBar } from "../../all-accounts/_components/all-accounts-top-bar";

export default function FundTransfers() {
  const [selectedAccount, setSelectedAccount] = React.useState<string | null>(
    "XXXXXX3077"
  );

  return (
    <div className="p-10 space-y-6">
      <AllAccountsTopBar label="Funds Transfer" />

      <div className="bg-neutral-100 rounded-xl border flex min-h-[650px]">
        {/* LEFT COLUMN */}
        <Column>
          <ColumnHeader title="Choose Account" />
          <PillGroup
            items={["Internal", "External"]}
            defaultActive="Internal"
          />
          <Separator className="mb-3" />

          <PillGroup items={["ALL", "USD", "GBP"]} defaultActive="ALL" small />

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
        </Column>

        {/* MIDDLE COLUMN */}
        <Column>
          <ColumnHeader title="Choose Payee Account" />
          <PillGroup
            items={["Payee Account", "Favorites"]}
            defaultActive="Payee Account"
          />
          <Separator className="mb-3" />
          <PillGroup items={["ALL", "USD", "GBP"]} defaultActive="ALL" small />

          <EmptyState />
        </Column>

        {/* RIGHT COLUMN */}
        <Column border={false}>
          <h3 className="font-semibold mb-4">Enter Amount</h3>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">
                Currency *
              </label>
              <div className="flex gap-2">
                <Button variant="outline" className="w-24">
                  USD
                </Button>
                <Input placeholder="0.00" />
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground">Memo</label>
              <Input placeholder="Enter Memo" />
            </div>

            <ToggleGroup
              label="Do you wish to Transfer?"
              options={["NOW", "LATER"]}
              defaultValue="NOW"
            />

            <ToggleGroup
              label="Is this a Recurring Transfer?"
              options={["NO", "YES"]}
              defaultValue="NO"
            />
          </div>

          <div className="mt-auto flex gap-4 pt-10">
            <Button variant="secondary" className="flex-1">
              Cancel
            </Button>
            <Button className="flex-1 bg-red-600 hover:bg-red-700">Next</Button>
          </div>
        </Column>
      </div>
    </div>
  );
}

export const Column = ({
  children,
  border = true,
}: {
  children: React.ReactNode;
  border?: boolean;
}) => (
  <div className={cn("w-full p-6 flex flex-col", border && "border-r")}>
    {children}
  </div>
);

export const ColumnHeader = ({ title }: { title: string }) => {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between mb-4 h-8 border-b pb-3">
      {!searchOpen ? (
        <>
          <h3 className="font-semibold">{title}</h3>
          <button onClick={() => setSearchOpen(true)}>
            <SearchIcon className="w-4 h-4 text-muted-foreground" />
          </button>
        </>
      ) : (
        <Input
          autoFocus
          placeholder={`Search ${title.toLowerCase()}`}
          onBlur={() => setSearchOpen(false)}
        />
      )}
    </div>
  );
};
export const PillGroup = ({
  items,
  defaultActive,
  small,
}: {
  items: string[];
  defaultActive: string;
  small?: boolean;
}) => {
  const [active, setActive] = React.useState(defaultActive);

  return (
    <div className="flex gap-2 mb-4">
      {items.map((item) => {
        const isActive = active === item;

        return (
          <Button
            key={item}
            variant={isActive ? "default" : "outline"}
            onClick={() => setActive(item)}
            className={cn(
              isActive && "bg-red-600 hover:bg-red-700",
              small && "h-8 px-4 text-xs"
            )}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
};

export const AccountItem = ({
  id,
  title,
  account,
  amount,
  selected,
  onSelect,
}: {
  id: string;
  title: string;
  account: string;
  amount: string;
  selected: boolean;
  onSelect: (id: string) => void;
}) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      className={cn(
        "relative w-full text-left rounded-lg p-4 mb-3 transition-all",
        selected ? "bg-white border shadow-sm" : "hover:bg-muted"
      )}
    >
      {/* Red selection bar */}
      {selected && (
        <span className="absolute left-0 top-0 h-full w-1 bg-red-600 rounded-l-lg" />
      )}

      <p className="font-medium">{title}</p>
      <p className="text-sm text-muted-foreground">| {account}</p>
      <p className="text-sm mt-1">{amount}</p>
    </button>
  );
};

export const EmptyState = () => (
  <div className="flex flex-col items-center justify-center flex-1 text-center">
    <FileSearch2Icon className="w-14 h-14 bg-muted mb-4" />
    <p className="text-red-600 font-semibold">No Accounts Found</p>
  </div>
);

export const ToggleGroup = ({
  label,
  options,
  defaultValue,
}: {
  label: string;
  options: string[];
  defaultValue: string;
}) => {
  const [active, setActive] = React.useState(defaultValue);

  return (
    <div>
      <p className="text-sm text-muted-foreground mb-2">{label}</p>

      <div className="inline-flex rounded-lg border bg-white overflow-hidden">
        {options.map((option) => {
          const isActive = active === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setActive(option)}
              className={cn(
                "px-6 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-red-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};
