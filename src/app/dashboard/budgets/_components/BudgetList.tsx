/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client"
import React, { useEffect, useState } from 'react'
import CreateBudget from './CreateBudget'
import { db } from '@/components/ui/dbSchema'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm'
import { Budgets, Expenses } from '@/schema'
import { useUser } from '@clerk/nextjs'
import BudgetItem from '@/components/ui/BudgetItem'

type BudgetItem = {
    totalSpend: number;
    totalItem: number;
    id: number;
    name: string;
    amount: string;
    Icon: string | null;
    createdBy: string;
};

function BudgetList() {

    const [budgetList, setBudgetList] = useState<BudgetItem[]>([]);
    const { user } = useUser();
    useEffect(() => {
        user && getBudgetList();
    }, [user])


    const getBudgetList = async () => {

        const result = await db.select({
            ...getTableColumns(Budgets),
            totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql`count(${Expenses.id})`.mapWith(Number)
        }).from(Budgets)
            .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
            .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
            .groupBy(Budgets.id)
            .orderBy(desc(Budgets.id))
            ;

        setBudgetList(result);
        console.log(result)
    }

    return (
        <div className='mt-7'>
            <div className='grid grid-cols-1
        md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <CreateBudget
                    refreshData={() => getBudgetList()} />
                {budgetList?.length > 0 ? budgetList.map((budget, index) => (
                    <BudgetItem budget={budget} key={index} />
                ))
                    : [1, 2, 3, 4, 5].map((item, index) => (
                        <div className='w-full bg-slate-200 rounded-lg
        h-[150px] animate-pulse'>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default BudgetList