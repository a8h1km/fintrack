import Prices from '@/components/ui/prices'
import React from 'react'

const PricingPage = () => {
    return (
        <div className='pt-24 flex justify-between items-center flex-col'>
            <h1 className='text-center text-5xl pt-10'>We provide our services at affordable premiums.</h1>
            <p></p>
            <Prices>
            </Prices>
        </div>
    )
}

export default PricingPage