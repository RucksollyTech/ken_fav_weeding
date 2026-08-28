'use client'
import React from 'react'
import CustomSection from './CustomSection'
import CustomHeader from './CustomHeader'
import { Cinzel } from 'next/font/google';

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CustomButton from './CustomButton';
import { toast } from 'sonner';

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
});
const RSVP = () => {
    const [showDetails, setShowDetails] = useState(false);

    const [formData,setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    note: ''
  })
  const [loading,setLoading]=useState(false)
  const submitFunc = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (!formData.attendance){
      toast.error("Attendance field cannot be empty", {
        description: `Please make sure to select an option from the attendance field.`,
        position: "top-center",
        className: '!bg-black !text-red-500 !rounded-lg !shadow-lg',
        duration: 10000, 
        action: {
          label: "Dismiss",
          onClick: () => {},
        },
      })
      return
    }
    setLoading(true)
    try {
        await fetch("/api/rsvp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name:formData.name,
            email:formData.email,
            attendance:formData.attendance,
            note:formData.note,
        }),
        });
        toast.success("Your response was received 😊", {
            description: `Thank you ${formData.name}`,
            position: "top-center",
            className: '!bg-black !text-white !rounded-lg !shadow-lg',
            duration: 10000, 
            action: {
                label: "Dismiss",
                onClick: () => setFormData({
                name: '',
                email: '',
                attendance: '',
                note: ''
                }),
            },
        })
    } catch (error) {
        toast.error("Error!", {
            description: `An error occurred, please try again`,
            position: "top-center",
            className: '!bg-black !text-red-500 !rounded-lg !shadow-lg',
            duration: 10000, 
            action: {
            label: "Dismiss",
            onClick: () => {},
            },
        })
    }finally{
        setFormData({
            name: '',
            email: '',
            attendance: '',
            note: ''
        })
        setLoading(false)
    }
    
    
      
  }
  return (
    <div id='RSVP' className='sm:mt-15 mt-7 bg-green sm:py-20 py-7 '>
        <CustomSection>
            <div data-aos="fade-up"  className='sm:pb-10 pb-7 '>
                <CustomHeader className='text-white' text='RSVP' />
            </div>
            <div className="grid md:grid-cols-2 lg:gap-10 gap-5 pt-7">
                <div data-aos="fade-right" className='bg-[#394B3E] rounded-3xl pt-5 pb-5 max-sm:px-5 px-7 lg:pb-12 lg:px-18 text-text relative'>
                    <img className='absolute -top-7 mx-auto left-0 right-0' src="/icons/element_flower_and_rings.svg" alt="flower and rings" />
                    <div className={`${cinzel.className} text-lg sm:text-xl pt-7 text-center text-white`}>
                        We can’t wait to celebrate with you!
                    </div>
                    <p className="mt-2 text-center font-light italic text-white/70">
                        Please let us know if you’ll be joining us.
                    </p>
                    <div className='item-center justify-center flex pt-4'>
                        <span className='w-30 py-[1px] bg-golden' />
                    </div>

                    

                    <form onSubmit={submitFunc} className="mt-7 space-y-7">

                        <div>
                            <label className="mb-2 block text-sm text-white/60">
                                Full name
                            </label>

                            <input
                                type="text"
                                required
                                placeholder="Your Full Name"
                                value={formData.name}
                                onChange={(e)=>setFormData({...formData,name:e.target.value})}
                                className="
                                    w-full
                                    rounded-xl
                                    border-2
                                    border-[#e8c47e]
                                    bg-transparent
                                    sm:px-5 px-2 py-3
                                    sm:py-3.5
                                    text-sm
                                    text-white
                                    outline-none
                                    placeholder:italic
                                    placeholder:text-white/40
                                    focus:ring-1
                                    focus:ring-[#e8c47e]
                                "
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm text-white/60">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                                className={`
                                    w-full
                                    rounded-xl
                                    border-2
                                    border-[#e8c47e]
                                    bg-transparent!
                                    sm:px-5 px-2 py-3
                                    sm:py-3.5
                                    text-sm
                                    text-white
                                    outline-none
                                    placeholder:italic
                                    placeholder:text-white/40
                                    focus:ring-1
                                    focus:ring-[#e8c47e]
                                `}
                            />
                        </div>
                        <div>
                            <label className="mb-2 block text-sm text-white/60">
                                Attendance
                            </label>

                            <div className="grid gap-4 sm:grid-cols-2">

                                <button
                                    type="button"
                                    onClick={() =>setFormData({...formData,attendance:'accept'})}
                                    className={`
                                        flex items-center gap-4
                                        rounded-xl
                                        border-2
                                        border-[#e8c47e]
                                        px-5
                                        py-2
                                        text-left
                                        transition
                                        ${
                                            formData.attendance === "accept"
                                                ? "bg-[#e8c47e] text-[#123f37]"
                                                : "text-white/70"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            h-4 w-4 rounded-full border
                                            border-[#e8c47e]
                                            ${
                                                formData.attendance === "accept"
                                                    ? "bg-[#123f37]"
                                                    : ""
                                            }
                                        `}
                                    />

                                    <span className="italic text-sm">
                                        Joyfully Accepts
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setFormData({...formData,attendance:'decline'})}
                                    className={`
                                        flex items-center gap-4
                                        rounded-xl
                                        border-2
                                        border-[#e8c47e]
                                        px-5
                                        py-2
                                        text-left
                                        transition
                                        ${
                                            formData.attendance === "decline"
                                                ? "bg-[#e8c47e] text-[#123f37]"
                                                : "text-white/70"
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            h-4 w-4 rounded-full border
                                            border-[#e8c47e]
                                            ${
                                                formData.attendance === "decline"
                                                    ? "bg-[#123f37]"
                                                    : ""
                                            }
                                        `}
                                    />

                                    <span className="italic text-sm">
                                        Regretfully Declines
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-white/60">
                                Notes
                            </label>

                            <textarea
                                rows={1}
                                placeholder="Add any notes here"
                                value={formData.note}
                                onChange={(e)=>setFormData({...formData,note:e.target.value})}
                                className="
                                    w-full
                                    resize-none
                                    rounded-xl
                                    text-sm
                                    border-2
                                    border-[#e8c47e]
                                    bg-transparent
                                    px-5
                                    py-4
                                    text-white
                                    outline-none
                                    placeholder:italic
                                    placeholder:text-white/40
                                    focus:ring-1
                                    focus:ring-[#e8c47e]
                                "
                            />
                        </div>

                        <div className="flex justify-center">
                            <CustomButton 
                                text={loading ? 'Submitting...' : 'CONFIRM RSVP' }
                                disable={loading}
                                type='submit'
                                className='bg-[#e8c47e] text-sm !py-2 font-semibold hover:opacity-90 transition'
                            />
                        </div>
                    </form>
                </div>
                <div data-aos="fade-left" className='bg-[#394B3E] rounded-3xl flex flex-col max-sm:px-5 pt-5 justify-between pb-5 px-7 lg:pb-12 lg:px-25 text-text relative'>

                    <div>
                        <img className='absolute -top-7 mx-auto left-0 right-0' src="/icons/element_flower_and_rings.svg" alt="flower and rings" />
                        <div className={`${cinzel.className} text-lg sm:text-xl pt-7 text-center text-white`}>
                            Unable to attend?
                        </div>
                        <p className="mt-2 text-center font-light italic text-white/70">
                            We completely understand and will miss
                                celebrating with you.
                        </p>
                        <div className='item-center justify-center flex pt-4'>
                            <span className='w-30 py-[1px] bg-golden' />
                        </div>

                        <div className="mt-10 text-center">
                            <p className="mx-auto text-sm max-w-lg italic leading-relaxed text-white/70">
                                Your presence and well wishes are more than enough.
                                For anyone who has asked about sending their support,
                                our details are available below
                            </p>

                            <button
                                type="button"
                                onClick={() => setShowDetails(!showDetails)}
                                className="mt-6 inline-flex italic font-light items-center gap-2 text-[#e8c47e]"
                            >
                                View our details

                                <ChevronDown
                                    size={22}
                                    className={`transition-transform duration-300 ${
                                        showDetails ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {showDetails && (
                                <div className="mt-6 flex flex-col items-center justify-center">

                                    <p className="mb-4 text-lg text-white font-light underline">
                                        Bank Details:
                                    </p>

                                    <div className="mx-auto grid max-w-md font-extralight text-sm grid-cols-[auto_1fr] gap-x-3 sm:gap-x-8 gap-y-1 text-left text-white/80">
                                        <span>Account Name:</span>
                                        <span>Kenneth Nnanna Egwu</span>

                                        <span>Bank:</span>
                                        <span>Wise</span>

                                        <span>IBAN:</span>
                                        <span>BE47767243520280</span>

                                        <span>BIC/SWIFT:</span>
                                        <span>TRWIBEB1XXX</span>
                                    </div>
                                    <div className="mx-auto mt-3 grid max-w-md font-extralight text-sm grid-cols-[auto_1fr] gap-x-3 sm:gap-x-8 gap-y-1 text-left text-white/80">
                                        <span>Account Name:</span>
                                        <span>Favour Ofure Oseigbovo</span>

                                        <span>Bank:</span>
                                        <span>Nok details</span>

                                        {/* <span>IBAN:</span>
                                        <span>31264954358</span>

                                        <span>BIC/SWIFT:</span>
                                        <span>TRWIBEB1XXX</span> */}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <img src="/icons/icon_gift_box.svg" alt="gift box" />
                    </div>
                </div>
            </div>
        </CustomSection>
    </div>
  )
}

export default RSVP

