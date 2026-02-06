import { ScrollTextIcon } from "lucide-react";

export default function Announcements() {
  return (
    <div className="w-full rounded-xl bg-gray-100 shadow h-full">
      <div className="rounded-t-xl border-b px-4 sm:px-8 py-3 sm:py-4">
        <h2 className="text-base sm:text-lg font-medium">Announcements</h2>
      </div>
      <div className="text-center h-full flex justify-center items-center flex-col text-gray-400">
        <ScrollTextIcon className="size-6 sm:size-8" />
        <p className="mt-1 sm:mt-2 text-sm sm:text-base">No Announcements</p>
      </div>
    </div>
  );
}
