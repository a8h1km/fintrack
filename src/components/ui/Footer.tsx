/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const FooterPage = () => {
    return (
        <footer >
            <div className='bg-gray-700 text-white flex justify-center items-start'>
                <div className=''>
                    <Link href='/' className='flex m-8 mb-1 p-4 rounded-3xl bg-slate-500 items-center hover:text-black transition-all hover:bg-slate-300 '>
                        <Image
                            src="/icons/fintrack_logo.svg"
                            width={32}
                            height={32}
                            alt='FinTrack Logo'
                            className='mr-2'
                        />
                        <p className='font-bold'>FinTrack</p>
                    </Link>
                    <p className='text-center text-slate-400'>Smarter Financing.</p>
                </div>
                <div className='p-8'>
                    <p className='text-xl'>Legal</p>
                    <ul className='text-sm text-slate-500'>
                        <li className=' hover:text-white transition-all hover:cursor-pointer'>Privacy Policy</li>
                        <li className=' hover:text-white transition-all hover:cursor-pointer'>Terms of Service</li>
                        <li className=' hover:text-white transition-all hover:cursor-pointer'>Cookie Policy</li>
                        <li className=' hover:text-white transition-all hover:cursor-pointer'>Security</li>
                    </ul>
                </div>
                <div className='p-8'>
                    <p className='text-xl'>Follow Us</p>
                    <ul className='text-sm text-slate-500'>
                        <li className=' hover:text-white transition-all'><a href="https://www.instagram.com/">Instagram</a></li>
                        <li className=' hover:text-white transition-all'><a href="https://x.com/home">Twitter/X</a></li>
                        <li className=' hover:text-white transition-all'><a href="https://www.youtube.com/">YouTube</a></li>
                    </ul>
                </div>
                <div className='p-8'>
                    <p className='text-xl'>Quick Links</p>
                    <ul className='text-sm text-slate-500'>
                        <li className=' hover:text-white transition-all'><a href="/">Home</a></li>
                        <li className=' hover:text-white transition-all'><a href="/about">About Us</a></li>
                        <li className=' hover:text-white transition-all'><a href="/pricing">Pricing</a></li>
                        <li className=' hover:text-white transition-all'><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className='text-center text-sm p-5 bg-black text-gray-400'>
                © 2024 FinTrack Technologies, Inc. All rights reserved. FinTrack® is a registered trademark of FinTrack Technologies, Inc. Protected by international copyright laws. Unauthorized use, reproduction, or distribution is strictly prohibited.
            </div>
        </footer>
    )
}

export default FooterPage