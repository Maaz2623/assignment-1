"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Poppins, Roboto } from "next/font/google";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    redirect(`/dashboard`);
  };

  return (
    <Card className={`w-[80%] px-8 py-10 relative ${poppins.className}`}>
      <CardHeader>
        <CardTitle
          className={`${poppins.className} text-3xl font-black text-neutral-800`}
        >
          Good Morning!
        </CardTitle>
        <CardDescription className="text-md text-muted-foreground">
          If you are a new user{" "}
          <Link
            href={`/enrollment`}
            className="text-neutral-800 cursor-pointer"
          >
            CLICK HERE TO ENROLL
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-3">
          <Label className="text-neutral-700">
            Username <span className="text-red-600">*</span>
          </Label>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="h-12 bg-neutral-100"
          />
        </div>
        <div className="flex flex-col gap-y-3 relative">
          <Label className="text-neutral-700">
            Password <span className="text-red-600">*</span>
          </Label>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 bg-neutral-100"
          />
          <Button
            onClick={() => setShowPassword(!showPassword)}
            variant={`ghost`}
            className="absolute top-7 right-2"
          >
            {showPassword ? (
              <EyeOffIcon className="size-5" />
            ) : (
              <EyeIcon className="size-5" />
            )}
          </Button>
        </div>
        <div className="w-full flex justify-start items-center gap-x-3 h-4">
          <Checkbox
            onCheckedChange={(e) => setRememberMe(!rememberMe)}
            className="size-5 rounded-xs"
          />
          <p className="text-neutral-800">Remember Username</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-y-5">
        <Button
          onClick={handleSubmit}
          disabled={
            username.length === 0 || password.length === 0 || !rememberMe
          }
          className="h-14 w-full text-lg bg-[#E31837] hover:bg-red-500"
        >
          Login
        </Button>
        <div className="flex flex-col sm:flex-row text-neutral-700 justify-center sm:justify-between items-center w-full">
          <Link href={`/recovery-username`}>FORGOT USERNAME?</Link>
          <Link href={`/recovery-password`}>FORGOT PASSWORD?</Link>
        </div>
      </CardFooter>
      <div className="absolute w-full left-0 -bottom-12">
        <Button className={`bg-blue-600 hover:bg-blue-500 rounded-xl w-full `}>
          Visit our website
        </Button>
      </div>
    </Card>
  );
}
