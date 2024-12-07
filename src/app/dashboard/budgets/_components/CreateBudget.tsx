"use client";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/components/ui/dbSchema";
import { Budgets } from "@/schema";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

interface CreateBudgetProps {
    refreshData: () => void;
}

const CreateBudget: React.FC<CreateBudgetProps> = ({ refreshData }) => {
    const [emojiIcon, setEmojiIcon] = useState<string>("😀");
    const [openEmojiPicker, setOpenEmojiPicker] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [amount, setAmount] = useState<number | undefined>();

    const { user } = useUser();

    const onCreateBudget = async () => {
        if (!name.trim()) {
            toast("Budget name is required!");
            return;
        }
        if (!amount || isNaN(amount) || amount <= 0) {
            toast("Please enter a valid budget amount.");
            return;
        }

        try {
            const result = await db.insert(Budgets).values({
                name: name || "default",
                amount,
                createdBy: user?.primaryEmailAddress?.emailAddress || null,
                icon: emojiIcon,
            }).returning({ insertedId: Budgets.id })

            if (result) {
                refreshData();
                toast.success("New Budget Created!");
            }
        } catch (error) {
            toast.error("Failed to create budget. Please try again.");
            console.error("Error creating budget:", error);
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div
                        className="bg-slate-100 p-10 rounded-2xl
            items-center flex flex-col border-2 border-dashed
            cursor-pointer hover:shadow-md"
                    >
                        <div className="text-3xl">+</div>
                        <div>Create New Budget</div>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Budget</DialogTitle>
                        <DialogDescription>
                            <div className="mt-5">
                                {/* Emoji Picker Button */}
                                <Button
                                    variant="outline"
                                    className="text-lg"
                                    onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                                >
                                    {emojiIcon}
                                </Button>
                                {/* Emoji Picker Dropdown */}
                                {openEmojiPicker && (
                                    <div className="absolute z-20 bg-white border rounded-md shadow-md">
                                        <EmojiPicker
                                            onEmojiClick={(e) => {
                                                setEmojiIcon(e.emoji);
                                                setOpenEmojiPicker(false);
                                            }}
                                        />
                                    </div>
                                )}
                                {/* Budget Name Input */}
                                <div className="mt-2">
                                    <div className="text-black font-medium my-1">Budget Name</div>
                                    <Input
                                        placeholder="e.g. Home Decor"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                {/* Budget Amount Input */}
                                <div className="mt-2">
                                    <div className="text-black font-medium my-1">Budget Amount</div>
                                    <Input
                                        type="number"
                                        placeholder="e.g. 5000"
                                        value={amount || ""}
                                        onChange={(e) => setAmount(Number(e.target.value) || undefined)}
                                    />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <Button
                            disabled={!(name.trim() && amount)}
                            onClick={onCreateBudget}
                            className="mt-5 w-full rounded-full"
                        >
                            Create Budget
                        </Button>
                        <DialogClose asChild>
                            <Button variant="ghost" className="mt-5 w-full rounded-full">
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default CreateBudget;
