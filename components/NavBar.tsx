import React from 'react'
import CustomSection from './CustomSection'
import MobileNav from './MobileBreadcrumb'
import TagInViewGetter from '@/utils/TagInViewGetter';

const NavBar = () => {
    const { activeId } = TagInViewGetter();
    console.log(activeId);
    return (
        <nav className="bg-nav sticky! top-0 z-100">
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
                            <span className={`block h-0.5 bg-golden ${activeId === 'home' ? 'w-full' : 'w-0'} transition-all duration-300`} />
                        </li>
                        <li>
                            <a href="#ourStory">
                                OUR STORY
                            </a>
                            <span className={`block h-0.5 bg-golden ${activeId === 'ourStory' ? 'w-full' : 'w-0'} transition-all duration-300`} />
                        </li>
                        <li>
                            <a href="#weddingDetail">
                                WEDDING DETAILS
                            </a>
                            <span className={`block h-0.5 bg-golden ${activeId === 'weddingDetail' ? 'w-full' : 'w-0'} transition-all duration-300`} />
                        </li>
                        <li>
                            <a href="#gallery">
                                GALLERY
                            </a>
                            <span className={`block h-0.5 bg-golden ${activeId === 'gallery' ? 'w-full' : 'w-0'} transition-all duration-300`} />
                        </li>
                        <li>
                            <a href="#RSVP">
                                RSVP
                            </a>
                            <span className={`block h-0.5 bg-golden ${activeId === 'RSVP' ? 'w-full' : 'w-0'} transition-all duration-300`} />
                        </li>
                    </ul>
                    <MobileNav />
                </div>
            </CustomSection>
        </nav>
    )
}

export default NavBar