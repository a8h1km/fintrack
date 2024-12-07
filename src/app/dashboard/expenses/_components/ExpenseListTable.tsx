import { db } from "@/components/ui/dbSchema";
import { Expenses } from "@/schema";
import { eq } from "drizzle-orm";
import React from "react";
import { toast } from "sonner";

interface Expense {
    id: number;
    name: string;
    amount: string;
    budgetId: number;
    createdAt: string;
    createdBy: string;
}

interface ExpenseListTableProps {
    expensesList: Expense[];
    refreshData1: () => void;
    refreshData2: () => void;
}

function ExpenseListTable({ expensesList, refreshData1, refreshData2 }: ExpenseListTableProps) {

    const deleteExpense = async (exp: Expense) => {
        const result = await db
            .delete(Expenses)
            .where(eq(Expenses.id, exp.id))
            .returning();

        if (result) {
            refreshData1();
            refreshData2();
            toast("Expense Deleted!");
        }
    };

    return (
        <div className="mt-3">
            <h2 className="font-bold text-lg">Latest Expenses</h2>
            <div className="grid grid-cols-4 rounded-tl-xl rounded-tr-xl bg-slate-200 p-2 mt-3">
                <h2 className="font-bold">Name</h2>
                <h2 className="font-bold">Amount</h2>
                <h2 className="font-bold">Date</h2>
                <h2 className="font-bold">Action</h2>
            </div>
            {expensesList.map((expense) => (
                <div key={expense.id} className="grid grid-cols-4 bg-slate-50 rounded-bl-xl rounded-br-xl p-2">
                    <h2>{expense.name}</h2>
                    <h2>{expense.amount}</h2>
                    <h2>{expense.createdAt}</h2>
                    <h2
                        onClick={() => deleteExpense(expense)}
                        className="text-red-500 cursor-pointer"
                    >
                        Delete
                    </h2>
                </div>
            ))}
        </div>
    );
};

export default ExpenseListTable;
