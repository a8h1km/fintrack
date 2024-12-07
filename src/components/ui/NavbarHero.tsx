import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { currentUser } from '@clerk/nextjs/server'

const NavbarHero = async () => {
    const user = currentUser();
    return (
        <nav className='flex text-black justify-between items-center fixed z-50 w-full px-6 py-4 bg-gradient-to-b from-[#27B28B] pb-12'>
            <div className='flex ml-16 justify-between'>
                <Link href='/' className='flex items-center gap-1'>
                    <Image
                        src="/icons/fintrack_logo.svg"
                        width={32}
                        height={32}
                        alt='FinTrack Logo'
                        className=''
                    />
                    <p className='font-bold text-2xl'>FinTrack</p>
                </Link>
            </div>
            <div className='flex justify-between items-center gap-5'>
                {await user && (
                    <Link href='/dashboard' >
                        <p className='hover:bg-emerald-200 hover:text-black transition-all rounded-lg p-2'>Dashboard</p>
                    </Link>
                )}
                <Link href='/about'>
                    <p className='hover:bg-emerald-200 hover:text-black transition-all rounded-lg p-2'>About Us</p>
                </Link>
                <Link href='/pricing'>
                    <p className='hover:bg-emerald-200 hover:text-black transition-all rounded-lg p-2'>Pricing</p>
                </Link>
                <Link href='/contact'>
                    <p className='hover:bg-emerald-200 hover:text-black transition-all rounded-lg p-2'>Contact Us</p>
                </Link>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <a className='hover:cursor-pointer hover:bg-blue-500 hover:text-white transition-all rounded-lg p-2'>Get Started</a>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav >
    )
}

export default NavbarHero