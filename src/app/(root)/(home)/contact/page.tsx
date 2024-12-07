import React from 'react'

const ContactPage = () => {
    return (
        <div className='pt-24 flex justify-between items-center flex-col p-24 bg-gradient-to-b from-[#27B28B] to-gray-400'>
            <h1 className='text-4xl font-semibold text-center p-6'>Contact Us</h1>
            <p className='m-12 p-3 text-lg text-center'>At FinTrack, we pride ourselves on delivering exceptional customer support that goes above and beyond. Our dedicated support team is committed to ensuring you have the smoothest possible experience with our products and services.</p>
            <h1 className='text-4xl font-semibold text-center p-6'>Technical Support</h1>
            <p className='mx-24 p-3'>Whether you&apos;re encountering a challenging technical issue or need guidance on maximizing our product&apos;s potential, our expert support team is here to help. Our technicians are highly trained, passionate about problem-solving, and equipped with deep knowledge of our platform. We offer:
                <ul className='list-disc'>
                    <li className=''>Rapid response times with most inquiries addressed within 2 business hours</li>
                    <li className=''>Skilled technical experts who provide personalized, in-depth troubleshooting</li>
                    <li className=''>Comprehensive support channels including email, live chat, and phone support</li>
                    <li className=''>Detailed, step-by-step guidance to resolve even the most complex technical challenges</li>
                </ul>
            </p>
            <h1 className='text-4xl font-semibold text-center p-6'>Premium Client Support</h1>
            <p className='mx-24 p-3'>For our premium tier clients, we elevate support to an entirely new level. Your dedicated account manager provides:

                <ul className='list-disc'>
                    <li>Priority, white-glove customer service</li>
                    <li>Proactive consultation and personalized optimization strategies</li>
                    <li>Direct line of communication with our senior technical specialists</li>
                    <li>Customized onboarding, training, and continuous success management</li>

                </ul>
                <div className='text-center font-semibold text-xl pt-12'>
                    Our mission is to transform technical challenges into opportunities for growth and innovation. No matter your needs, we&apos;re here to support you every step of the way.
                </div>
            </p>
        </div>
    )
}

export default ContactPage