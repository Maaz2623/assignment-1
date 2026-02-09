import React from "react";
import { AllAccountsTopBar } from "../../all-accounts/_components/all-accounts-top-bar";

const transfers = [
  {
    date: "12/09/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX9613",
    ref: "0000981809176525652",
    description: "",
    amount: "$0.11",
  },
  {
    date: "12/09/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX4321",
    ref: "0000981809176521634",
    description: "",
    amount: "$0.43",
  },
  {
    date: "12/09/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX9613",
    ref: "0000981809176525972",
    description: "",
    amount: "$0.23",
  },
  {
    date: "12/08/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX9613",
    ref: "0000981809176517758",
    description: "",
    amount: "$0.12",
  },
  {
    date: "11/04/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX9613",
    ref: "00009818091762277251",
    description: "check1",
    amount: "$2.00",
  },
  {
    date: "10/23/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX9613",
    ref: "0000981809176124502",
    description: "CHECK2",
    amount: "$2.00",
  },
  {
    date: "10/23/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX9613",
    ref: "0000981809176124429",
    description: "CHECK1",
    amount: "$1.00",
  },
  {
    date: "09/30/2025",
    from: "Non-Interest Checking Accts | XXXXX3077",
    to: "XXXXX9613",
    ref: "00009818091759202134",
    description: "",
    amount: "$5.00",
  },
];

const RecentTransfers = () => {
  return (
    <div className="p-10 space-y-6">
      <AllAccountsTopBar label="Recent Transfers" />

      <div className="bg-white border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr className="text-left text-gray-600 font-medium">
              <th className="px-4 py-3">DATE</th>
              <th className="px-4 py-3">FROM ACCOUNT</th>
              <th className="px-4 py-3">TO ACCOUNT</th>
              <th className="px-4 py-3">REF NO.</th>
              <th className="px-4 py-3">DESCRIPTION</th>
              <th className="px-4 py-3 text-right">AMOUNT</th>
            </tr>
          </thead>

          <tbody>
            {transfers.map((t, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="px-4 py-3 text-gray-500">{t.date}</td>

                <td className="px-4 py-3 text-gray-500">{t.from}</td>

                <td className="px-4 py-3 text-gray-500">{t.to}</td>

                <td className="px-4 py-3 text-red-500 font-medium">{t.ref}</td>

                <td className="px-4 py-3 text-gray-500">
                  {t.description || "-"}
                </td>

                <td className="px-4 py-3 text-right text-gray-700">
                  {t.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransfers;
