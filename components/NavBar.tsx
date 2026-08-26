import React from 'react'
import CustomSection from './CustomSection'

const NavBar = () => {
    return (
        <nav className="bg-nav">
            <CustomSection>
                <div className='flex justify-between items-center py-2'>
                    <div>
                        <img src="/icons/Logo.svg" alt="Logo" className="w-20" />
                    </div>
                    <ul className="flex space-x-14 text-lg text-header">
                        <li>
                            <a href="/">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                OUR STORY
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                WEDDING DETAILS
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                GALLERY
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                RSVP
                            </a>
                        </li>
                    </ul>
                </div>
            </CustomSection>
        </nav>
    )
}

export default NavBar