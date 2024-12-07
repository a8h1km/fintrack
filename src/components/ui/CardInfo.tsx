"use client";

import React, { useEffect, useState } from "react";
import formatNumber from "../ui/formatNumber";
import { PiggyBank, ReceiptText, Sparkles, Wallet } from "lucide-react";
import { fetchAIResponse } from "./genAIHelper"; // Assuming helper is set up

interface Budget {
  totalSpend: number;
  totalItem: number;
  id: number;
  name: string;
  amount: string;
  Icon: string | null;
  createdBy: string;
}

interface CardInfoProps {
  budgetList: Budget[];
}

function CardInfo({ budgetList }: CardInfoProps) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);
  const [financialAdvice, setFinancialAdvice] = useState("");

  useEffect(() => {
    if (budgetList.length > 0) {
      CalculateCardInfo();
    }
  }, [budgetList]);

  const CalculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpend_ = 0;

    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount);
      totalSpend_ += element.totalSpend;
    });

    setTotalBudget(totalBudget_);
    setTotalSpend(totalSpend_);

    // Generate financial advice using computed values
    generateFinancialAdvice(totalBudget_, totalSpend_);
  };

  const generateFinancialAdvice = async (totalBudget: number, totalSpend: number) => {
    const prompt = `Here are the user's budget details:
      - Total Budget: $${formatNumber(totalBudget)}
      - Total Spend: $${formatNumber(totalSpend)}
      - Number of Budgets: ${budgetList.length}.
      Provide personalized financial advice based on this data.`;

    const advice = await fetchAIResponse(prompt);
    setFinancialAdvice(advice || "Unable to fetch financial advice.");
  };

  return (
    <div>
      {budgetList?.length > 0 ? (
        <div>
          <div className="p-7 border mt-4 -mb-1 rounded-2xl flex items-center justify-between">
            <div>
              <div className="flex mb-2 flex-row space-x-1 items-center">
                <h2 className="text-md">FinTrack AI</h2>
                <Sparkles
                  className="rounded-full text-white w-10 h-10 p-2
                    bg-gradient-to-r
                    from-pink-500
                    via-red-500
                    to-yellow-500
                    background-animate"
                />
              </div>
              <h2 className="font-light text-md">
                {financialAdvice || "Loading financial advice..."}
              </h2>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Budget</h2>
                <h2 className="font-bold text-2xl">${formatNumber(totalBudget)}</h2>
              </div>
              <PiggyBank className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">Total Spend</h2>
                <h2 className="font-bold text-2xl">${formatNumber(totalSpend)}</h2>
              </div>
              <ReceiptText className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
            <div className="p-7 border rounded-2xl flex items-center justify-between">
              <div>
                <h2 className="text-sm">No. Of Budget</h2>
                <h2 className="font-bold text-2xl">{budgetList?.length}</h2>
              </div>
              <Wallet className="bg-blue-800 p-3 h-12 w-12 rounded-full text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              className="h-[110px] w-full bg-slate-200 animate-pulse rounded-lg"
              key={index}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
