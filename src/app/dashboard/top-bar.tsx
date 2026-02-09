import { AlertsDropdown } from "@/components/alerts-dropdown";
import { SettingsDropdown } from "@/components/settings-dropdown";
import { Button } from "@/components/ui/button";
import { BellIcon, LogOutIcon, MailIcon, SettingsIcon } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded gap-y-4 sm:gap-y-0">
      <div>
        <p className="text-lg text-gray-800">Hi, KATELYN CABADA</p>
        <p className="text-xs text-gray-500">Last Login - 02/03/2026 3:20 PM</p>
      </div>

      <div className="flex items-center gap-x-4 sm:gap-x-10 self-end sm:self-auto">
        <Button variant={`ghost`} size={`icon`} className="relative">
          <MailIcon className="size-6 sm:size-7" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
            16
          </span>
        </Button>
        <AlertsDropdown>
          <Button variant={`ghost`} size={`icon-lg`} className="relative w-5">
            <BellIcon className="size-6 sm:size-7" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-xs text-white rounded-full px-1">
              27
            </span>
          </Button>
        </AlertsDropdown>
        <SettingsDropdown>
          <Button variant={`ghost`} size={`icon-lg`}>
            <SettingsIcon className="size-6 sm:size-7" />
          </Button>
        </SettingsDropdown>
        <Button variant={`ghost`} size={`icon-lg`}>
          <LogOutIcon className="size-6 sm:size-7" />
        </Button>
      </div>
    </header>
  );
}
