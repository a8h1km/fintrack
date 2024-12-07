/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Use this instead of useRouter().query
import { db } from "@/components/ui/dbSchema";
import { Budgets, Expenses } from "@/schema";
import { useUser } from "@clerk/nextjs";
import { and, desc, eq, getTableColumns, sql } from "drizzle-orm";
import BudgetItem from "@/components/ui/BudgetItem";
import AddExpense from "../_components/AddExpense";
import { Toaster } from "@/components/ui/sonner";
import ExpenseListTable from "../_components/ExpenseListTable";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash } from "lucide-react";
import { toast } from "sonner";
import EditBudget from "../_components/EditBudget";

const ExpensesPage: React.FC = () => {
    const { id } = useParams(); // Retrieve the dynamic route parameter
    const { user } = useUser();
    const [budgetInfo, setbudgetInfo] = useState();
    const [expensesList, setExpensesList] = useState([]);
    const route = useRouter();

    useEffect(() => {
        if (user && id) {
            getBudgetInfo(Number(id));
            getExpensesList(Number(id));
        }
    }, [user, id]);

    const getBudgetInfo = async (budgetId: number) => {
        try {
            const result = await db
                .select({
                    ...getTableColumns(Budgets),
                    totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
                    totalItem: sql`count(${Expenses.id})`.mapWith(Number),

                })
                .from(Budgets)
                .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
                .where(
                    and(
                        eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress || ""),
                        eq(Budgets.id, budgetId)
                    )
                )
                .groupBy(Budgets.id);

            setbudgetInfo(result[0])
            console.log(result);
        } catch (error) {
            console.error("Error fetching budget info:", error);
        }
    };

    const getExpensesList = async (budgetId: number) => {
        const result = await db.select().from(Expenses).where(
            eq(Expenses.budgetId, budgetId))
            .orderBy(desc(Expenses.id));  // .orderBy should be outside of .where
        setExpensesList(result);
        console.log(result);
    };

    const deleteBudget = async () => {
        const deleteExpenseResult = await db
            .delete(Expenses)
            .where(eq(Expenses.budgetId, Number(id)))
            .returning();

        if (deleteExpenseResult) {
            const result = await db
                .delete(Budgets)
                .where(eq(Budgets.id, Number(id)))
                .returning();
            console.log(result)
        }
        toast("Budget Deleted !");
        route.replace("/dashboard/budgets");
    };

    return (
        <div className="p-10">
            <Toaster />
            <h2 className="text-2xl font-bold gap-2 flex justify-between items-center">
                <span className="flex gap-2 items-center">
                    <ArrowLeft onClick={() => route.back()} className="cursor-pointer" />
                    My Expenses
                </span>
                <div className="flex gap-2 items-center">
                    <EditBudget
                        budgetInfo={budgetInfo}
                        refreshData={() => getBudgetInfo(Number(id))}
                    />

                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button className="flex gap-2 rounded-full" variant="destructive">
                                <Trash className="w-4" /> Delete
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete
                                    your current budget along with expenses and remove your data
                                    from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteBudget()}>
                                    Continue
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                {budgetInfo ? (
                    <BudgetItem budget={budgetInfo} />
                ) : (
                    <div
                        className="h-[150px] w-full bg-slate-200 
            rounded-lg animate-pulse"
                    ></div>
                )}
            </div>
            <AddExpense budgetId={Number(id)}
                user={user}
                refreshData1={() => getExpensesList(Number(id))}
                refreshData2={() => getBudgetInfo(Number(id))} />
            <div className="mt-4">
                <ExpenseListTable
                    expensesList={expensesList}
                    refreshData1={() => getExpensesList(Number(id))}
                    refreshData2={() => getBudgetInfo(Number(id))} />
            </div>
        </div>
    );
};

export default ExpensesPage;
