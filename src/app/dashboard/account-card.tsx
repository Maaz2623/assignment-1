import { ScrollTextIcon } from "lucide-react";

interface Props {
  title: string;
  number: string;
  balance: string;
}

export default function AccountCard({ title, number, balance }: Props) {
  return (
    <div className="bg-gray-50 rounded-xl shadow border p-3 sm:p-4 relative">
      <h3 className="text-sm sm:text-base font-medium">{title}</h3>
      <p className="text-xs text-gray-500">{number}</p>

      <p className="mt-2 sm:mt-3 text-xl sm:text-2xl font-medium">{balance}</p>

      <button className="mt-1 sm:mt-2 text-xs sm:text-sm text-red-500 hover:underline">
        e-Statements
      </button>

      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-red-500">
        <ScrollTextIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </span>
    </div>
  );
}
