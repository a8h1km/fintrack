import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
    return (
        <div className='p-5 shadow-sm border-b flex justify-end'>
            <UserButton afterSwitchSessionUrl="/" />
        </div>
    )
}

export default DashboardHeader