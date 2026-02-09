import React from "react";
import { AllAccountsTopBar } from "../../all-accounts/_components/all-accounts-top-bar";
import { Trash2, Search } from "lucide-react";
import { PillGroup } from "../fund-transfers/page";

const Favourites = () => {
  return (
    <div className="p-10 space-y-6">
      <AllAccountsTopBar label="View Favourites" />

      {/* Filters */}
      <div className="flex items-center justify-between">
        <PillGroup items={["All", "USD", "GBP"]} defaultActive="All" />

        <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>

      {/* Table */}
      <div className="border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="text-left px-6 py-4 font-medium">
                TRANSACTION TYPE
              </th>
              <th className="text-left px-6 py-4 font-medium">
                BENEFICIARY NAME
              </th>
              <th className="text-left px-6 py-4 font-medium">FROM ACCOUNT</th>
              <th className="text-left px-6 py-4 font-medium">TO ACCOUNT</th>
              <th className="text-left px-6 py-4 font-medium">AMOUNT</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr>
              <td className="px-6 py-4 text-gray-500">Internal</td>
              <td className="px-6 py-4">Personal Savings</td>
              <td className="px-6 py-4 text-gray-500">
                Non-Interest Checking Accts
                <br />| XXXXX3077
              </td>
              <td className="px-6 py-4 text-gray-500">XXXXX9613</td>
              <td className="px-6 py-4">$ 0.52</td>
              <td className="px-6 py-4">
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer" />
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 text-gray-500">Internal</td>
              <td className="px-6 py-4">Personal Savings</td>
              <td className="px-6 py-4 text-gray-500">
                Non-Interest Checking Accts
                <br />| XXXXX3077
              </td>
              <td className="px-6 py-4 text-gray-500">XXXXX9613</td>
              <td className="px-6 py-4">$ 988.00</td>
              <td className="px-6 py-4">
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer" />
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 text-gray-500">Internal</td>
              <td className="px-6 py-4">Non-Interest Checking Ac…</td>
              <td className="px-6 py-4 text-gray-500">
                Personal Savings
                <br />| XXXXX9613
              </td>
              <td className="px-6 py-4 text-gray-500">XXXXX3077</td>
              <td className="px-6 py-4">$ 0.56</td>
              <td className="px-6 py-4">
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer" />
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 text-gray-500">External</td>
              <td className="px-6 py-4">Test External</td>
              <td className="px-6 py-4 text-gray-500">
                Non-Interest Checking Accts
                <br />| XXXXX3077
              </td>
              <td className="px-6 py-4 text-gray-500">XXXXX6789</td>
              <td className="px-6 py-4">$ 122.00</td>
              <td className="px-6 py-4">
                <Trash2 className="w-4 h-4 text-gray-400 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favourites;
