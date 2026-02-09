"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2Icon } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

export const AlertsDropdown = ({ children }: Props) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>

      <PopoverContent className="w-96 p-2">
        <PopoverHeader className="border-b px-4 py-3">
          <PopoverTitle className="text-sm font-semibold tracking-wide">
            NOTIFICATION
          </PopoverTitle>
        </PopoverHeader>

        <ScrollArea className="h-screen px-3">
          <div className="divide-y">
            <Notification
              text="External transfer in the amount of 0.43 from account 3077 to account 4321 has been debited from your account."
              date="12/09/2025"
            />
            <Notification
              text="A new payee for Euro payments has been added."
              date="12/02/2025"
            />
            <Notification
              text="Your payment to veeresh has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
            <Notification
              text="Your payment to Rent123 has been processed for 0.1 at a rate of USD 1.00 = EUR 0.87. USD 0.11 has been debited from your account. A $1 fee will be assessed for this transaction."
              date="07/07/2025"
            />
          </div>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

type NotificationProps = {
  text: string;
  date: string;
};

const Notification = ({ text, date }: NotificationProps) => {
  return (
    <div className="flex items-start justify-between gap-3 px-4 py-3">
      <div className="flex-1">
        <p className="text-sm text-neutral-800 leading-snug">{text}</p>
        <span className="mt-1 block text-xs text-neutral-400">{date}</span>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="text-red-500 hover:text-red-600"
      >
        <Trash2Icon className="h-4 w-4" />
      </Button>
    </div>
  );
};
