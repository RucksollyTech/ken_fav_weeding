import { Cinzel } from 'next/font/google';
import React from 'react'
import UnderLine from './UnderLine';

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});


const CustomHeader = ({text,className}:{text:string,className?:string}) => {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <div className={`${cinzel.className} ${className} text-header text-2xl sm:text-5xl font-bold font-sans`}>
                {text}
            </div>
            <UnderLine />
        </div>
    )
}

export default CustomHeader