import FooterPage from '@/components/ui/Footer'
import Navbar from '@/components/ui/NavbarHero'
import React, { ReactNode } from 'react'

const AboutLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='relative bg-[#27B28B]'>
            <Navbar />
            <section>
                {children}
            </section>
            <FooterPage />
        </main>
    )
}

export default AboutLayout