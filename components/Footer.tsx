import React from 'react'
import CustomSection from './CustomSection'
import CustomHeader from './CustomHeader'

import { Cormorant_Garamond, Allura } from 'next/font/google';
import { Phone } from 'lucide-react';
import UnderLine from './UnderLine';


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
        <div id='footer' className='text-text'>
            <div data-aos="fade-up" className='sm:py-13 py-7  px-5'>
                <div className={`${cormorant_Garamond.className} font-medium text-center text-3xl sm:text-4xl`}>
                    We can’t wait to celebrate with you!
                </div>
                <div className='sm:text-lg text-sm italic text-center pt-5'>
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
                <div className='justify-center flex pt-5 pb-3'>
                    <UnderLine />
                </div>
                <div className={`${cormorant_Garamond.className} text-center text-xl pb-5`}>
                    Dress code: Formal
                    <br />
                    Colour of the day:
                </div>
                <div className='max-w-md mx-auto w-full grid grid-cols-3 gap-3'>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='rounded-full h-5 w-5 bg-green' />
                        <div className="text-center text-sm">
                            Dark Emerald
                            Green
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='rounded-full h-5 w-5 bg-[#E5C690]' />
                        <div className="text-center text-sm">
                            Soft Gold
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div className='rounded-full h-5 w-5 bg-[#FFF8EF] border border-black' />
                        <div className="text-center text-sm">
                            Champagne Gold
                        </div>
                    </div>
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
                        <a href="tel:+4368181378027">+4368181378027</a>/<a href="tel:+4746960450">+4746960450</a>
                    </div>
                    <img className='absolute sm:left-0 -left-13 top-0 bottom-0 my-auto' src="/icons/element_flower_and_rings.svg" alt="flower" />
                    <img className='absolute sm:right-0 -right-10 top-0 bottom-0 my-auto' src="/icons/element_flower_and_rings.svg" alt="flower" />
                </div>
            </div>
        </div>
    )
}

export default Footer