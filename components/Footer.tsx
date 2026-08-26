import React from 'react'
import CustomSection from './CustomSection'
import CustomHeader from './CustomHeader'

import { Cormorant_Garamond, Allura } from 'next/font/google';
import { Phone } from 'lucide-react';


const allura = Allura({
    subsets: ["latin"],
    weight: "400",
});

const cormorant_Garamond = Cormorant_Garamond({
  weight: ['400','500'],
  subsets: ["latin"],
});
const Footer = () => {
    return (
        <div className='text-text'>
            <div className='py-13'>
                <div className={`${cormorant_Garamond.className} font-medium text-center text-4xl`}>
                    We can’t wait to celebrate with you!
                </div>
                <div className='text-lg italic text-center pt-5'>
                    Thank you for being part of our journey.
                    <br />
                    Your love and support mean the world to us.
                </div>
                <div className={`text-center text-5xl pt-7 ${allura.className}`}>
                    See you in Bergen!
                </div>
                <div className='py-5 flex items-center justify-center'>
                    <img src="/icons/icon_two_rings.svg" alt="rings" />
                </div>
                <div className='text-center text-lg'>
                    #ForeverKindled
                </div>
            </div>
            <div className='bg-[#193630] py-6'>
                <div className='max-w-110 w-full mx-auto relative'>
                    <div className={`${cormorant_Garamond.className} text-golden-light font-medium text-center text-2xl`}>
                        Contact:
                    </div>
                    <div className='flex items-center justify-center text-[#e8c47e] text-xl'>
                        ☎
                    </div>
                    <div className='text-golden-light pt-1 font-medium text-center text-center`'>
                        +4368181378027/+4746960450
                    </div>
                    <img className='absolute left-0 top-0 bottom-0 my-auto' src="/icons/element_flower_and_rings.svg" alt="flower" />
                    <img className='absolute right-0 top-0 bottom-0 my-auto' src="/icons/element_flower_and_rings.svg" alt="flower" />
                </div>
            </div>
        </div>
    )
}

export default Footer