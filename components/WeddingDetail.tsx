'use client'
import CustomSection from './CustomSection'
import CustomHeader from './CustomHeader'
import CustomButton from './CustomButton'

import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});

const WeddingDetail = () => {
    return (
        <div className='mt-15 bg-green py-20 '>
            <CustomSection>
                <div className='pb-10  '>
                    <CustomHeader className='text-white' text='WEDDING DETAILS' />
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col gap-10 relative'>
                        <div className='flex gap-10'>
                            <div>
                                <img 
                                    className='max-w-35 min-h-35 rounded-2xl border object-cover' 
                                    src="/images/08_church_photo.jpg" 
                                    alt="church Image" 
                                />
                            </div>
                            <div 
                                className='flex flex-col my-auto max-w-55'
                            >
                                <div className={`text-golden text-2xl ${cinzel.className}`}>
                                    Church Ceremony
                                </div>
                                <div>
                                    <i className='text-lg'>
                                        St. Paul Kirche, Bergen
                                    </i>
                                </div>
                                <div className="mt-3">
                                    <CustomButton 
                                        text='GET DIRECTIONS' 
                                        onClick={()=>{}} 
                                        hasBorder
                                        className='!py-1 text-golden'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <div>
                                <img className='max-w-35 min-h-35 rounded-2xl border object-cover' src="/images/09_dinner_hall_with_tabes_and_glasses.jpg" alt="Dinner Hall" />
                            </div>
                            <div className='flex flex-col my-auto max-w-55'>
                                <div className={`text-golden text-2xl ${cinzel.className}`}>
                                    Reception
                                </div>
                                <div>
                                    <i className='text-lg'>
                                        Venue to be confirmed
                                    </i>
                                </div>
                                <div className="mt-3">
                                    <CustomButton 
                                        text='GET DIRECTIONS' 
                                        onClick={()=>{}} 
                                        hasBorder
                                        className='!py-1 text-golden'
                                    />
                                </div>
                            </div>
                        </div>
                        <img className='absolute -right-10.5 top-0 bottom-0 my-auto' src="/icons/element_flower_and_line_combined.svg" alt="demarcate" />
                    </div>
                    <div className='pl-40'>
                        
                        <div className='flex gap-5 pb-7'>
                            <div className='w-10' />
                            <div className={`text-2xl text-golden ${cinzel.className}`}>
                                PROGRAM OF EVENTS
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-5'>
                                <div className='max-w-10 w-full my-auto'>
                                    <img src="/icons/icon_glass.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full text-lg">
                                    11:00
                                </div>
                                <div className='text-white my-auto text-lg'>
                                    <i>Church Ceremony</i>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='max-w-10 w-full my-auto'>
                                    <img src="/icons/icon_glass.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full text-lg">
                                    12:00
                                </div>
                                <div className='text-white my-auto text-lg'>
                                    <i>Photos & Congratulations</i>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='max-w-10 w-full my-auto'>
                                    <img src="/icons/icon_glass.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full text-lg">
                                    14:00
                                </div>
                                <div className='text-white my-auto text-lg'>
                                    <i>Guests Arrival</i>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='max-w-10 w-full my-auto'>
                                    <img src="/icons/icon_glass.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full text-lg">
                                    14:30
                                </div>
                                <div className='text-white my-auto text-lg'>
                                    <i>Reception & Lunch</i>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className='max-w-10 w-full my-auto'>
                                    <img src="/icons/icon_glass.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full text-lg">
                                    16:00
                                </div>
                                <div className='text-white my-auto text-lg'>
                                    <i>Music, Dancing & Celebration</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomSection>
        </div>
    )
}

export default WeddingDetail