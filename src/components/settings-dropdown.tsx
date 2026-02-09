"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BellIcon,
  LockKeyholeIcon,
  MonitorCogIcon,
  UserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const SettingsDropdown = ({ children }: Props) => {

  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuGroup className="">
          <DropdownMenuLabel>Settings</DropdownMenuLabel>
          <DropdownMenuItem>
            <UserIcon /> <p className="text-neutral-700">Profile</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MonitorCogIcon />{" "}
            <p className="text-neutral-700">Manage Accounts</p>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => router.push(`/dashboard/settings/notification-alerts`)}>
            <BellIcon /> <p className="text-neutral-700">Notification Alerts</p>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <LockKeyholeIcon />{" "}
            <p className="text-neutral-700">Change Login Password</p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
