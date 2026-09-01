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
    const openInNewTab = (address: string) => {
        window.open(address, "_blank", "noopener,noreferrer");
    };
    const openMap = () => {
        const address = "Nygårdsgaten 3, 5015 Bergen, Norway";

        window.open(
            `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
            "_blank",
            "noopener,noreferrer"
        );
    };
    return (
        <section id='weddingDetail' className='sm:mt-15 mt-7 bg-green sm:py-20 py-7 '>
            <CustomSection>
                <div data-aos="fade-up"  className='sm:pb-10 pb-7 '>
                    <CustomHeader className='text-white' text='WEDDING DETAILS' />
                </div>
                <div className='grid lg:grid-cols-2'>
                    <div className='flex flex-col gap-10 max-sm:gap-7 relative'>
                        <div data-aos="fade-right"  className='flex gap-10 max-sm:gap-5 mx-auto '>
                            <div className='max-w-35 w-full max-md:max-w-25'>
                                <img 
                                    className='w-35 max-w-full h-35 max-sm:max-w-25 max-sm:max-h-25 rounded-2xl border object-cover' 
                                    src="/images/08_church_photo.jpg" 
                                    alt="church Image" 
                                />
                            </div>
                            <div 
                                className='flex flex-col my-auto max-w-55 w-full'
                            >
                                <div className={`text-golden text-base sm:text-2xl ${cinzel.className}`}>
                                    Church Ceremony
                                </div>
                                <div>
                                    <i className='text-sm sm:text-lg text-golden-light'>
                                        St. Paul Kirke, Bergen
                                    </i>
                                </div>
                                <div className="mt-3">
                                    <CustomButton 
                                        text='GET DIRECTIONS' 
                                        onClick={openMap} 
                                        hasBorder
                                        className='lg:py-1.5 text-golden max-sm:text-xs max-sm:py-1.5'
                                    />
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-right" className='flex gap-10 max-sm:gap-5 mx-auto'>
                            <div className='max-w-35 w-full max-md:max-w-25'>
                                <img 
                                    className='w-40.5 h-35 max-sm:max-w-25 max-sm:max-h-25 rounded-2xl border object-cover' 
                                    src="/images/09_dinner_hall_with_tabes_and_glasses.jpg" alt="Dinner Hall" />
                            </div>
                            <div className='flex flex-col my-auto max-w-55 w-full'>
                                <div className={`text-golden text-base sm:text-2xl ${cinzel.className}`}>
                                    Reception
                                </div>
                                <div>
                                    <i className='sm:text-lg text-sm text-golden-light'>
                                        Venue to be confirmed
                                    </i>
                                </div>
                                <div className="mt-3">
                                    <CustomButton 
                                        text='GET DIRECTIONS' 
                                        onClick={()=>{}} 
                                        hasBorder
                                        className='lg:py-1.5 text-golden max-sm:text-xs max-sm:py-1.5'
                                    />
                                </div>
                            </div>
                        </div>
                        <img data-aos="fade-up"  className='absolute hidden lg:block -right-10.5 top-0 bottom-0 my-auto' src="/icons/element_flower_and_line_combined.svg" alt="demarcate" />
                    </div>
                    <div className='lg:pl-40 mx-auto max-lg:pt-8'>
                        
                        <div data-aos="fade-up"  className='flex gap-5 pb-7'>
                            <div className='w-10 max-sm:hidden' />
                            <div className={`text-2xl max-sm:text-xl text-golden ${cinzel.className}`}>
                                PROGRAM OF EVENTS
                            </div>
                        </div>
                        <div data-aos="fade-left"  className='flex flex-col sm:gap-5 gap-4'>
                            <div className='flex sm:gap-5 gap-3'>
                                <div className='sm:max-w-10 max-w-5 w-full my-auto'>
                                    <img src="/icons/icon_rings.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full sm:text-lg text-sm">
                                    11:00
                                </div>
                                <div className='text-white my-auto sm:text-lg text-sm'>
                                    <i>Church Ceremony</i>
                                </div>
                            </div>
                            <div className='flex sm:gap-5 gap-3'>
                                <div className='sm:max-w-10 max-w-5 w-full my-auto'>
                                    <img src="/icons/icon_camera.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full sm:text-lg text-sm">
                                    12:00
                                </div>
                                <div className='text-white my-auto sm:text-lg text-sm'>
                                    <i>Photos & Congratulations</i>
                                </div>
                            </div>
                            <div className='flex sm:gap-5 gap-3'>
                                <div className='sm:max-w-10 max-w-5 w-full my-auto'>
                                    <img src="/icons/icon_group.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full sm:text-lg text-sm">
                                    14:00
                                </div>
                                <div className='text-white my-auto sm:text-lg text-sm'>
                                    <i>Guests Arrival</i>
                                </div>
                            </div>
                            <div className='flex sm:gap-5 gap-3'>
                                <div className='sm:max-w-10 max-w-5 w-full my-auto'>
                                    <img src="/icons/icon_glass.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full sm:text-lg text-sm">
                                    14:30
                                </div>
                                <div className='text-white my-auto sm:text-lg text-sm'>
                                    <i>Reception & Lunch</i>
                                </div>
                            </div>
                            <div className='flex sm:gap-5 gap-3'>
                                <div className='sm:max-w-10 max-w-5 w-full my-auto'>
                                    <img src="/icons/icon_music.svg" alt="wedding rings" />
                                </div>
                                <div className="text-white my-auto max-w-13 w-full sm:text-lg text-sm">
                                    16:00
                                </div>
                                <div className='text-white my-auto sm:text-lg text-sm'>
                                    <i>Music, Dancing & Celebration</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomSection>
        </section>
    )
}

export default WeddingDetail