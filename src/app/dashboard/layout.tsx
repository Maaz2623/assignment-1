import React from "react";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen text-gray-900">
      <Sidebar />
      <div className="flex-1 relative pl-[12%]">
        <div className="min-h-screen py-5 px-4">{children}</div>

        <div className="fixed bottom-0 right-0 w-full sm:w-[88%] bg-green-500">
          <Footer />
        </div>
      </div>
    </div>
  );
}
