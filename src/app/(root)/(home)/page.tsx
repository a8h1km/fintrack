import { ContainerScroll } from '@/components/ui/container-scroll'
import { FlipWords } from '@/components/ui/flip-words'
import Image from 'next/image'
import Link from 'next/link';
import React, { ReactNode } from 'react'

const words = ["Track monthly expenses", "Track budgets using trackers", "Get AI analysis", "View Expenditure Charts", "Learn how to save"];

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className=''>
            {children}
            <div className='p-0 m-0'>
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                A SIMPLE WAY TO MANAGE YOUR  <br />
                                <span className="text-4xl md:text-[6rem] font-bold leading-none text-white">
                                    PERSONAL FINANCES
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/images/scrollhero.png`}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>

            <div className="h-[45rem] flex justify-center items-center px-4 py-8 bg-hero-pattern bg-cover bg-center bg-local">
                <div className="text-4xl bg-gradient-to-t mx-8 font-bold text-neutral-600 dark:text-neutral-400 text-center">
                    <FlipWords words={words} className='mx-10' /> <br />with <br /> FinTrack
                </div>
            </div>

            <div className='bg-gradient-to-t from-[#69bfa6] '>
                <p className='font-extrabold text-center p-14 text-5xl'>Plan your budget, your way.</p>
            </div>

            <div className='flex justify-center items-center flex-col'>
                <div className='p-8 flex justify-between items-center flex-row'>
                    <div className='w-96'>
                        <h2 className='text-[#2C6771] text-xl font-bold'>Simple Money Tracker</h2>
                        <p className='text-black'>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                    </div>
                    <div>
                        <Image
                            src={`/images/hero_one.png`}
                            width={350}
                            height={100}
                            alt='heroone'
                            className='mx-11 rounded-3xl'
                        />
                    </div>
                </div>
                <div className='p-8 flex justify-between items-center flex-row'>
                    <div>
                        <Image
                            src={`/images/hero_two.png`}
                            width={350}
                            height={100}
                            alt='heroone'
                            className='mx-11 rounded-3xl'
                        />
                    </div>
                    <div className='w-96'>
                        <h2 className='text-[#2C6771] text-xl font-bold'>Painless Budgeting</h2>
                        <p className='text-black'>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
                    </div>
                </div>
                <div className='p-8 flex justify-between items-center flex-row'>
                    <div className='w-96'>
                        <h2 className='text-[#2C6771] text-xl font-bold'>All in One Place</h2>
                        <p className='text-black'>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
                    </div>
                    <div>
                        <Image
                            src={`/images/hero_three.png`}
                            width={350}
                            height={100}
                            alt='heroone'
                            className='mx-11 rounded-3xl'
                        />
                    </div>
                </div>
            </div>

            <div>
                <p className='text-3xl text-center font-bold p-8'>Socials</p>
                <div className='flex flex-row justify-center items-center pb-8'>
                    <Link href='https://www.instagram.com/'>
                        <Image
                            src={`/icons/Instagram.png`}
                            width={32}
                            height={32}
                            alt='insta'
                        />
                    </Link>
                    <div className='pl-3'>
                        <Link href='https://x.com/home'>
                            <Image
                                src={`/icons/x.png`}
                                width={32}
                                height={32}
                                alt='insta'
                            />
                        </Link>
                    </div>
                    <Link href='https://www.youtube.com/'>
                        <Image
                            src={`/icons/youtube.png`}
                            width={50}
                            height={50}
                            alt='insta'
                        />
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default HomeLayout