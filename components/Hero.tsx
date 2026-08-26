'use client'
import { Cinzel } from "next/font/google";
import UnderLine from './UnderLine';
import CustomButton from './CustomButton';
import CustomSection from "./CustomSection";

const cinzel = Cinzel({
  weight: '400',
  subsets: ["latin"],
});

const Hero = () => {
    return (
        <div className=" relative w-full hero-section">
            <CustomSection>
                <div className='relative z-20'>
                    <div className='py-20 max-w-100'>
                        <h1 className={`${cinzel.className} text-8xl text-header flex flex-col`} >
                            <span>
                                FAVOUR
                            </span>
                            <span className='text-center'>
                                & 
                            </span>
                            <span>
                                KENNETH
                            </span>
                        </h1>
                        <p className='text-header text-lg mt-4 font-medium font-sans'>
                            TOGETHER WITH OUR FAMILIES, WE JOYFULLY <br/>
                            INVITE YOU TO CELEBRATE OUR WEDDING
                        </p>
                        <div className='py-7'>
                            <UnderLine />
                        </div>
                        <div>
                            <div className='flex gap-3'>
                                <div className='max-w-8 flex items-center justify-center w-full'>
                                    <img className='min-w-8' src="/icons/icon_calendar.svg" alt="" />
                                </div>
                                <span className='my-auto text-header font-bold text-lg'>
                                    SATURDAY, 17TH OCTOBER 2026
                                </span>
                            </div>
                            <div className='flex gap-3 pt-3'>
                                <div className='max-w-8 flex items-center justify-center w-full'>
                                    <img src="/icons/icon_location.svg" alt="" />
                                </div>
                                <span className='my-auto text-header font-bold text-lg'>
                                    BERGEN NORWAY
                                </span>
                            </div>
                            <div className='flex gap-5'>
                                <CustomButton 
                                    text="VIEW DETAILS" 
                                    onClick={() => {}} 
                                    className="bg-green text-golden mt-6" 
                                    hasBorder={false} 
                                />
                                <CustomButton 
                                    text="RSVP" 
                                    onClick={() => {}} 
                                    className="text-golden mt-6" 
                                    hasBorder={true} 
                                />
                            </div>
                        </div>
                    </div>
                    <img 
                        src="/images/couple_green.png" 
                        className='absolute bottom-0 right-0 max-w-150' 
                        alt="" 
                    />
                </div>
            </CustomSection>
            <div className='bg-[#fff8ef]/85 absolute inset-0 ' />
        </div>
    )
}

export default Hero