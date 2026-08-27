import React from 'react'
import CustomSection from './CustomSection'
import MobileNav from './MobileBreadcrumb'

const NavBar = () => {
    return (
        <nav className="bg-nav sticky top-0 z-100">
            <CustomSection>
                <div className='flex justify-between items-center py-2'>
                    <div>
                        <img src="/icons/Logo.svg" alt="Logo" className="sm:w-20 w-17" />
                    </div>
                    <ul className="hidden md:flex lg:space-x-14 space-x-8 text-base lg:text-lg text-header">
                        <li>
                            <a href="#home">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#ourStory">
                                OUR STORY
                            </a>
                        </li>
                        <li>
                            <a href="#weddingDetail">
                                WEDDING DETAILS
                            </a>
                        </li>
                        <li>
                            <a href="#gallery">
                                GALLERY
                            </a>
                        </li>
                        <li>
                            <a href="#RSVP">
                                RSVP
                            </a>
                        </li>
                    </ul>
                    <MobileNav />
                </div>
            </CustomSection>
        </nav>
    )
}

export default NavBar