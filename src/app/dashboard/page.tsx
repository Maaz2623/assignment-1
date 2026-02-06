import { Button } from "@/components/ui/button";
import AccountCard from "./account-card";
import Announcements from "./announcements";
import ExchangeRates from "./exchange-rates";
import TopBar from "./top-bar";
import {
  ArrowLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  NotepadTextIcon,
  SquarePenIcon,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen p-10 relative pb-40">
      <main className="flex-1">
        <TopBar />

        <section className="mt-6 grid gap-4 w-full px-4 sm:px-10 md:px-14 md:grid-cols-3 relative">
          <Button
            className="hidden md:flex w-10 h-full absolute right-0 top-0 bg-gray-100"
            variant={`outline`}
            disabled
          >
            <ChevronRightIcon />
          </Button>

          <Button
            className="hidden md:flex w-10 h-full absolute left-0 top-0 bg-gray-100"
            variant={`outline`}
            disabled
          >
            <ChevronLeftIcon />
          </Button>

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

        <section className="mt-4 flex flex-col sm:flex-row gap-3 h-auto sm:h-14">
          <Button
            variant={`outline`}
            size={`lg`}
            className="h-12 sm:h-full px-4 gap-x-2 cursor-pointer bg-gray-100"
          >
            <ArrowLeftRightIcon />
            TRANSFERS
          </Button>

          <Button
            variant={`outline`}
            size={`lg`}
            className="h-12 sm:h-full px-4 cursor-pointer bg-gray-100"
          >
            <NotepadTextIcon />
            PAYMENTS
          </Button>

          <Button
            variant={`outline`}
            size={`lg`}
            className="h-12 sm:h-full sm:ml-auto px-4 cursor-pointer bg-gray-100"
          >
            <SquarePenIcon />
            CUSTOMIZE HOME
          </Button>
        </section>

        <div className="w-full h-0.5 my-6 bg-gray-100" />

        <section className="grid gap-4 md:grid-cols-2">
          <ExchangeRates />
          <Announcements />
        </section>
      </main>
    </div>
  );
}
