/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import CardInfo from "@/components/ui/CardInfo";
import { getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "@/schema";
import { eq, desc } from "drizzle-orm";
import { db } from "@/components/ui/dbSchema";
import BarChartDashboard from "@/components/ui/BarChartDashboard";
import BudgetItem from "@/components/ui/BudgetItem";

type BudgetItem = {
    totalSpend: number;
    totalItem: number;
    id: number;
    name: string;
    amount: string;
    Icon: string | null;
    createdBy: string;
};

const DashboardPage = () => {
    const { user } = useUser();
    const [budgetlist, setBudgetList] = useState<BudgetItem[]>([]);

    useEffect(() => {
        if (user) {
            getBudgetList();
        }
    }, [user]);

    const getBudgetList = async () => {
        const result = await db
            .select({
                ...getTableColumns(Budgets),
                totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
                totalItem: sql`count(${Expenses.id})`.mapWith(Number),
            })
            .from(Budgets)
            .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
            .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
            .groupBy(Budgets.id)
            .orderBy(desc(Budgets.id));

        console.log("Fetched Budget List:", result);  // Log to confirm the fetched data
        setBudgetList(result);
    };

    return (
        <div className="p-8 bg-white">
            <h2 className="font-bold text-4xl">Hi, {user?.fullName} 👋</h2>
            <p className="text-gray-500">
                Here&apos;s what&apos;s happening with your money, Let&apos;s Manage your expenses
            </p>

            {/* Pass budgetList as a prop to CardInfo */}
            <CardInfo budgetList={budgetlist} />
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-5">
                <div className="lg:col-span-2">
                    <BarChartDashboard budgetList={budgetlist} />

                    {/* <ExpenseListTable
                        expensesList={expensesList}
                        refreshData1={() => getBudgetList()}
                        refreshData2={() => getBudgetList()}
                    /> */}
                </div>
                <div className="grid gap-5">
                    <h2 className="font-bold text-lg">Latest Budgets</h2>
                    {budgetlist?.length > 0
                        ? budgetlist.map((budget, index) => (
                            <BudgetItem budget={budget} key={index} />
                        ))
                        : [1, 2, 3, 4].map((item, index) => (
                            <div key={index}
                                className="h-[180xp] w-full
                 bg-slate-200 rounded-lg animate-pulse"
                            >{item}</div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
