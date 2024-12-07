import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/components/ui/dbSchema";
import { Budgets, Expenses } from "@/schema";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import { toast } from "sonner";

interface AddExpenseProps {
    budgetId: number;
    user: string;
    refreshData1: () => void;
    refreshData2: () => void;
}

function AddExpense({ budgetId, user, refreshData1, refreshData2 }: AddExpenseProps) {
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const addNewExpense = async () => {
        if (!name || !amount) return;

        setLoading(true);

        const parsedAmount = parseFloat(amount);

        const result = await db
            .insert(Expenses)
            .values({
                name,
                amount: parsedAmount,
                budgetId,
                createdAt: moment().format("YYYY-MM-DD"),
            })
            .returning({ insertedId: Expenses.id });

        setAmount("");
        setName("");

        if (result) {
            setLoading(false);
            refreshData1();
            refreshData2();
            toast("New Expense Added!");
        } else {
            setLoading(false);
            toast.error("Failed to add expense");
        }
    };

    return (
        <div className="border p-5 rounded-2xl">
            <h2 className="font-bold text-lg">Add Expense</h2>
            <div className="mt-2">
                <h2 className="text-black font-medium my-1">Expense Name</h2>
                <Input
                    placeholder="e.g. Bedroom Decor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mt-2">
                <h2 className="text-black font-medium my-1">Expense Amount</h2>
                <Input
                    placeholder="e.g. 1000"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <Button
                disabled={!(name && amount) || loading}
                onClick={addNewExpense}
                className="mt-3 w-full rounded-full"
            >
                {loading ? <Loader className="animate-spin" /> : "Add New Expense"}
            </Button>
        </div>
    );
}

export default AddExpense;
