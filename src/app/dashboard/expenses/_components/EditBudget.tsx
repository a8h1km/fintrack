"use client";
import { Button } from "@/components/ui/button";
import { PenBox } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { db } from "@/components/ui/dbSchema";
import { Budgets } from "@/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

// Define prop types
interface EditBudgetProps {
    budgetInfo: {
        id: number;
        name: string;
        amount: number;
        icon: string;
        createdBy: string;
    };
    refreshData: () => void;
}

function EditBudget({ budgetInfo, refreshData }: EditBudgetProps) {
    const [emojiIcon, setEmojiIcon] = useState<string>(budgetInfo?.icon);
    const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);
    const [name, setName] = useState<string>(budgetInfo?.name || "");
    const [amount, setAmount] = useState<number>(budgetInfo?.amount || 0);

    const { user } = useUser();

    // Update state when budgetInfo changes
    useEffect(() => {
        if (budgetInfo) {
            setEmojiIcon(budgetInfo.icon);
            setAmount(budgetInfo.amount);
            setName(budgetInfo.name);
        }
    }, [budgetInfo]);

    // Update budget function
    const onUpdateBudget = async () => {
        try {
            const result = await db
                .update(Budgets)
                .set({
                    name: name,
                    amount: amount,
                    icon: emojiIcon,
                })
                .where(eq(Budgets.id, budgetInfo.id))
                .returning();

            if (result) {
                refreshData();
                toast("Budget Updated!");
            } else {
                toast.error("Failed to update budget.");
            }
        } catch (error) {
            toast.error("Error updating budget.");
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex space-x-2 gap-2 rounded-full">
                        <PenBox className="w-4" /> Edit
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Budget</DialogTitle>
                        <DialogDescription>
                            <div className="mt-5">
                                <Button
                                    variant="outline"
                                    className="text-lg"
                                    onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                                >
                                    {emojiIcon}
                                </Button>
                                <div className="absolute z-20">
                                    <EmojiPicker
                                        open={openEmojiPicker}
                                        onEmojiClick={(e) => {
                                            setEmojiIcon(e.emoji);
                                            setOpenEmojiPicker(false);
                                        }}
                                    />
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-black font-medium my-1">Budget Name</h2>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g. Home Decor"
                                    />
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-black font-medium my-1">Budget Amount</h2>
                                    <Input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        placeholder="e.g. 5000$"
                                    />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button
                                disabled={!(name && amount)}
                                onClick={onUpdateBudget}
                                className="mt-5 w-full rounded-full"
                            >
                                Update Budget
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default EditBudget;
