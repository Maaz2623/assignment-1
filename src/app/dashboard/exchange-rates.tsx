import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftRightIcon, EuroIcon, PoundSterlingIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { Separator } from "@/components/ui/separator";

export default function ExchangeRates() {
  const data = [
    {
      icon: EuroIcon,
      label: "Euro",
      price: "0.871",
      symbol: "EUR",
    },
    {
      icon: PoundSterlingIcon,
      label: "Pound Sterling",
      price: "0.735294",
      symbol: "GBP",
    },
  ];

  return (
    <div className="w-full rounded-xl bg-gray-100 shadow h-full">
      <div className="rounded-t-xl border-b px-4 sm:px-8 py-3 sm:py-4">
        <h2 className="text-base sm:text-lg font-medium">Exchange Rates</h2>
      </div>

      <div className="px-4 sm:px-8 my-4 sm:my-5 flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:justify-between">
        <div className="flex gap-x-3 sm:gap-x-4 w-full sm:w-[400px]">
          <Button
            variant={`outline`}
            size={`lg`}
            className="h-10 sm:h-full px-3 sm:px-4 gap-x-2 cursor-pointer bg-white"
          >
            USD
          </Button>
          <Input
            placeholder="Enter amount"
            className="w-full sm:w-[50%] h-10"
          />
        </div>

        <Tabs defaultValue="conversion" className="w-full sm:w-[400px] h-10">
          <TabsList className="h-10 bg-white border w-full">
            <TabsTrigger className="h-10 w-full" value="conversion">
              Conversion
            </TabsTrigger>
            <TabsTrigger className="h-10 w-full" value="reconversion">
              Reconversion
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <ScrollArea className="w-full h-36 sm:h-40">
        <div className="p-4 px-4 sm:px-8 flex flex-col gap-y-6 sm:gap-y-8">
          <h4 className="mb-2 sm:mb-4 text-xs sm:text-sm leading-none font-medium">
            Tags
          </h4>

          {data.map((item) => (
            <div
              key={item.symbol}
              className="w-full flex justify-between text-sm sm:text-base"
            >
              <div className="flex gap-x-4 sm:gap-x-10 items-center">
                <div>
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>{item.label}</div>
              </div>
              <div className="flex gap-x-4 sm:gap-x-10">
                <div>{item.price}</div>
                <div>{item.symbol}</div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
