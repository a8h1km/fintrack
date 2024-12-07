import React, { ReactNode } from 'react'
import { AnimatedTestimonials } from "@/components/ui/testimonials";
import { BackgroundLines } from '@/components/ui/backgroundlines';

const testimonials = [
    {
        quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
        name: "Abhishek K M",
        designation: "Developer at FinTrack",
        src: "/images/user.jpg",
    },
    {
        quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
        name: "Likitha S",
        designation: "CTO at InnovateSphere",
        src: "/images/user.jpg",
    },
    {
        quote:
            "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
        name: "Tanushri Nair",
        designation: "Operations Director at CloudScale",
        src: "/images/user.jpg",
    },
    {
        quote:
            "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
        name: "Chirag S Kumar",
        designation: "Engineering Lead at DataPro",
        src: "/images/user.jpg",
    },
];

interface AboutLayoutProps {
    children: ReactNode; // Type 'children' properly
}

const AboutLayout = ({ children }: AboutLayoutProps) => {
    return (
        <main className='relative pt-24 bg-[#27B28B]'>
            {children}
            <div className='flex justify-center items-center flex-col'>
                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-[#27B28B]">
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        We are a passionate group of people.
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                        We understand that managing money isn&apos;t just about numbers, it&apos;s about people&apos;s dreams, security, and peace of mind. Our approach goes beyond traditional budgeting tools by combining cutting-edge technology with deep empathy for the financial struggles many individuals face.
                    </p>
                </BackgroundLines>
                <p className='text-lg p-12 px-24 text-center'>
                    {/* Optional additional content */}
                </p>
            </div>
            <div className='bg-gradient-to-b from-[#27B28B] to-[#a0e4d1]'>
                <h1 className='text-5xl text-center font-extrabold p-7'>Our Team</h1>
                <div>
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>
            </div>
        </main>
    );
};

export default AboutLayout;