"use client";

import React, { useState } from "react";
import { AllAccountsTopBar } from "../../all-accounts/_components/all-accounts-top-bar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const frequencies = [
  "DAILY",
  "WEEKLY",
  "BI-WEEKLY",
  "MONTHLY",
  "QUARTERLY",
  "HALF YEARLY",
  "YEARLY",
];

export default function PayBillsPage() {
  const [payWhen, setPayWhen] = useState<"NOW" | "LATER">("NOW");
  const [recurring, setRecurring] = useState<"NO" | "YES">("NO");
  const [openRecurringDialog, setOpenRecurringDialog] = useState(false);

  const handleRecurringClick = (value: "NO" | "YES") => {
    setRecurring(value);
    if (value === "YES") setOpenRecurringDialog(true);
  };

  return (
    <div className="p-10 space-y-8">
      <AllAccountsTopBar label="Pay Bills" />

      {/* MAIN CARD */}
      <div className="grid grid-cols-3 rounded-2xl border bg-muted/20 overflow-hidden">
        {/* LEFT */}
        <div className="p-8 space-y-6 border-r bg-background">
          <h2 className="text-sm font-semibold text-muted-foreground">
            Category
          </h2>

          <Card className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />
            <CardContent className="py-1 pl-6">
              <p className="font-medium">Euro</p>
            </CardContent>
          </Card>
        </div>

        {/* MIDDLE */}
        <div className="p-8 space-y-6 border-r bg-background">
          <h2 className="text-sm font-semibold text-muted-foreground">
            Choose Account
          </h2>

          <Card className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />
            <CardContent className="py-1 pl-6 space-y-1">
              <p className="font-medium text-sm">
                Non-Interest Checking Accts | XXXXXXX3077
              </p>
              <p className="text-xs text-muted-foreground">$ 279.01</p>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT */}
        <div className="p-8 space-y-6 bg-background">
          <h2 className="text-sm font-semibold text-muted-foreground">
            Enter Bill Details
          </h2>

          {/* Payee */}
          <div className="space-y-2">
            <Label>Choose Payee *</Label>
            <Select>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Choose Payee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electricity">Electricity</SelectItem>
                <SelectItem value="water">Water</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Daily Limit */}
          <div className="rounded-md bg-muted px-4 py-3 text-xs text-center text-muted-foreground">
            Available Daily Limit €8,709.99
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <Label>Amount *</Label>
            <div className="flex gap-3">
              <Button variant="outline" className="w-24 h-11 font-medium">
                EUR
              </Button>
              <Input type="number" placeholder="0.00" className="h-11" />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground pt-1">
              <span>USD 1.00 = EUR 0.8710</span>
              <span>Estimated Debit Amount is 0.00</span>
            </div>
          </div>

          {/* Reference */}
          <div className="space-y-2">
            <Label>Reference *</Label>
            <Input placeholder="Enter Reference" className="h-11" />
          </div>

          {/* Pay When */}
          <div className="space-y-3">
            <Label>Do you wish to Pay?</Label>
            <div className="flex gap-x-3">
              <Button
                onClick={() => setPayWhen("NOW")}
                className={`h-11 w-20! ${
                  payWhen === "NOW"
                    ? "bg-red-600 text-white w-20 hover:bg-red-700"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                NOW
              </Button>

              <Button
                onClick={() => setPayWhen("LATER")}
                className={`h-11 w-20! ${
                  payWhen === "LATER"
                    ? "bg-red-600 text-white w-20 hover:bg-red-700"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                LATER
              </Button>
            </div>
          </div>

          {/* Recurring */}
          <div className="space-y-3">
            <Label>Is this a Recurring Payment?</Label>
            <div className="flex gap-x-3">
              <Button
                onClick={() => handleRecurringClick("NO")}
                className={`h-11 w-20! ${
                  recurring === "NO"
                    ? "bg-red-600 text-white w-20 hover:bg-red-700"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                NO
              </Button>

              <Button
                onClick={() => handleRecurringClick("YES")}
                className={`h-11 w-20! ${
                  recurring === "YES"
                    ? "bg-red-600 text-white  hover:bg-red-700"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                YES
              </Button>
            </div>
          </div>

          <Separator />

          {/* Footer */}
          <div className="flex justify-start gap-x-4 pt-4">
            <Button variant="secondary" className="h-11 px-10">
              CANCEL
            </Button>
            <Button className="h-11 px-10 bg-red-600 hover:bg-red-700 text-white">
              NEXT
            </Button>
          </div>
        </div>
      </div>

      <RecurringDialog
        open={openRecurringDialog}
        onOpenChange={setOpenRecurringDialog}
      />
    </div>
  );
}

/* ================= DIALOG ================= */

interface RecurringDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RecurringDialog = ({ open, onOpenChange }: RecurringDialogProps) => {
  const [selectedFrequency, setSelectedFrequency] = useState<string | null>(
    null
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl rounded-2xl p-8">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-lg font-semibold">
            Recurring Payments
          </DialogTitle>
        </DialogHeader>

        <Separator />

        <div className="space-y-8 pt-6">
          {/* Frequency */}
          <div className="space-y-4">
            <Label>Frequency</Label>
            <div className="grid grid-cols-3 gap-4">
              {frequencies.map((freq) => (
                <Button
                  key={freq}
                  onClick={() => setSelectedFrequency(freq)}
                  disabled={
                    selectedFrequency !== null && selectedFrequency !== freq
                  }
                  className={`h-11 ${
                    selectedFrequency === freq
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {freq}
                </Button>
              ))}
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input type="date" className="h-11" />
            </div>

            <div className="space-y-2">
              <Label>Number of installments</Label>
              <Input placeholder="Enter Installments" className="h-11" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox id="no-end" />
            <Label htmlFor="no-end">Recurring, no end date</Label>
          </div>

          <div className="flex justify-between pt-6">
            <Button
              variant="secondary"
              className="h-11 px-12"
              onClick={() => onOpenChange(false)}
            >
              CANCEL
            </Button>

            <Button className="h-11 px-12 bg-red-600 hover:bg-red-700 text-white">
              SUBMIT
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
