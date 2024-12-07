"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    LayoutGrid,
    PiggyBank,
    ReceiptText,
    ShieldCheck,
    CircleDollarSign,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { db } from "./dbSchema"; // Assuming your Drizzle DB instance
import { Expenses } from "@/schema"; // Assuming your Expenses schema
import { useRouter } from "next/navigation";

const SideNav = () => {
    const router = useRouter();
    const [hasExpense, setHasExpense] = useState(false);
    const path = usePathname();

    useEffect(() => {
        if (path === "/dashboard/expenses") {
            checkIfExpenseExists();
        }
    }, [path]);

    const checkIfExpenseExists = async () => {
        try {
            // Use a select query to fetch expenses and check if there are any records
            const result = await db.select().from(Expenses);

            // Check if the result array has any items
            if (result.length === 0) {
                // No expenses, redirect to /dashboard/budgets
                router.push("/dashboard/budgets");
            } else {
                setHasExpense(true); // Expenses found, set state to true
                router.push("/dashboard/expenses/1");
            }
        } catch (error) {
            console.error("Error checking for expenses:", error);
        }
    };

    const menulist = [
        {
            id: 1,
            name: "Dashboard",
            icon: LayoutGrid,
            path: "/dashboard",
        },
        {
            id: 2,
            name: "Budgets",
            icon: PiggyBank,
            path: "/dashboard/budgets",
        },
        {
            id: 3,
            name: "Expenses",
            icon: ReceiptText,
            path: "/dashboard/expenses/2",
        },
        {
            id: 4,
            name: "Upgrade",
            icon: ShieldCheck,
            path: "/pricing",
        },
    ];

    return (
        <div className="h-screen p-5 border shadow-sm ">
            <div className="flex flex-row items-center">
                <Image
                    src={"/icons/fintrack_logo.svg"}
                    width={40}
                    height={25}
                    alt="icon"
                    className="mx-2"
                />
                <span className="text-black font-bold text-xl">FinTrack</span>
            </div>

            <div className="mt-5">
                {menulist.map((menu, index) => (
                    <Link href={menu.path} key={index}>
                        <h2
                            className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full hover:text-primary hover:bg-blue-100 ${path == menu.path && "text-primary bg-blue-100"
                                }`}
                        >
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
