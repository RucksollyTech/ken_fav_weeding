'use client'
import { Cinzel } from "next/font/google";
import UnderLine from './UnderLine';
import CustomButton from './CustomButton';
import CustomSection from "./CustomSection";
import { scrollToSection } from "@/utils/utilityFunctions";

const cinzel = Cinzel({
  weight: '400',
  subsets: ["latin"],
});

const Hero = () => {
    return (
        <div id="home" className=" relative w-full hero-section">
            <CustomSection>
                <div className='relative z-20'>
                    <div className="flex flex-col ">
                        <div 
                        data-aos="fade-down" 
                        className="lg:hidden pt-5 sm:pt-10 -mb-17 sm:-mb-25 flex justify-center items-center">
                            <img className="sm:max-w-100 max-w-80 w-full md:max-w-150" src="https://res.cloudinary.com/zq7ppnqm/image/upload/f_auto,q_auto/c4" alt="Couples Image Kennet and Favour" />
                        </div>
                        <div data-aos="fade-right"  className='lg:py-20 py-10 lg:max-w-105 w-full mx-auto lg:mx-0'>
                            <h1 className={`${cinzel.className} text-3xl max-sm:leading-7 sm:text-5xl lg:text-8xl text-header flex flex-col`} >
                                <span className=" max-lg:text-center">
                                    FAVOUR
                                </span>
                                <span className='text-center text-golden'>
                                    & 
                                </span>
                                <span className=" max-lg:text-center">
                                    KENNETH
                                </span>
                            </h1>
                            <p className='text-header text-xs sm:text-lg mt-2 sm:mt-4 font-medium max-lg:text-center'>
                                TOGETHER WITH OUR FAMILIES, WE JOYFULLY <br/>
                                INVITE YOU TO CELEBRATE OUR WEDDING
                            </p>
                            <div className='sm:py-7 py-1 flex items-center justify-center lg:items-start lg:justify-normal'>
                                <UnderLine />
                            </div>
                            <div>
                                <div className='flex gap-3 items-center justify-center lg:items-start lg:justify-normal'>
                                    <div className='sm:max-w-8 max-w-4 flex items-center justify-center w-full'>
                                        <img className='sm:max-w-8 max-w-4' src="/icons/icon_calendar.svg" alt="" />
                                    </div>
                                    <span className='my-auto text-header font-bold text-sm sm:text-lg'>
                                        SATURDAY, 17TH OCTOBER 2026
                                    </span>
                                </div>
                                <div className='flex gap-3 sm:pt-3 pt-1.5 items-center justify-center lg:items-start lg:justify-normal'>
                                    <div className='sm:max-w-8 max-w-4 flex items-center justify-center w-full'>
                                        <img src="/icons/icon_location.svg" alt="" />
                                    </div>
                                    <span className='my-auto text-header font-bold text-sm sm:text-lg'>
                                        BERGEN NORWAY
                                    </span>
                                </div>
                                <div className='flex gap-3 lg:gap-5 pt-3 lg:pt-0 flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-normal'>
                                    <CustomButton 
                                        text="VIEW DETAILS" 
                                        onClick={() => scrollToSection('weddingDetail')} 
                                        className="bg-green text-golden lg:mt-6 max-sm:py-1.5 max-lg:min-w-60 max-lg:text-sm" 
                                        hasBorder={false} 
                                    />
                                    <CustomButton 
                                        text="RSVP" 
                                        onClick={() =>  scrollToSection('RSVP')} 
                                        className="text-golden lg:mt-6 max-sm:py-1.5 max-lg:min-w-60 max-lg:text-sm" 
                                        hasBorder={true} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img 
                        data-aos="fade-left" 
                        src="https://res.cloudinary.com/zq7ppnqm/image/upload/f_auto,q_auto/couple_green" 
                        className='absolute bottom-0 right-0 max-w-150 lg:block hidden ' 
                        alt="" 
                    />
                </div>
            </CustomSection>
            <div className='bg-[#fff8ef]/85 absolute inset-0 ' />
        </div>
    )
}

export default Hero