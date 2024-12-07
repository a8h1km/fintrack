"use client"
import DashboardHeader from '@/components/ui/DashboardHeader'
import SideNav from '@/components/ui/SideNav'
import React, { useEffect, useCallback } from 'react'
import { db } from '../../components/ui/dbSchema'
import { Budgets } from '@/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'
import { Toaster } from '@/components/ui/sonner'



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();
    const router = useRouter();


    const checkUserBudgets = useCallback((async () => {
        if (!user?.primaryEmailAddressId) {
            throw new Error("User email address is not available.");
        }
        if (user?.primaryEmailAddress) {
            const result = await db.select().from(Budgets).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
            if (result.length === 0) {
                router.replace('/dashboard/budgets');
            }
        }
    }), [user, router]);

    useEffect(() => {
        if (user) {
            checkUserBudgets();
        }
    }, [user, checkUserBudgets]);
    return (
        <div>
            <Toaster />
            <div className='fixed md:w-64 hidden md:block'>
                <SideNav />
            </div>
            <div className='md:ml-64'>
                <DashboardHeader />
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout