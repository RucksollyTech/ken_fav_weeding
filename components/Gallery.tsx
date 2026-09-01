import React from 'react'
import CustomSection from './CustomSection'
import CustomHeader from './CustomHeader'
import CustomCarosel from './CustomCarosel'

const Gallery = () => {
    return (
        <section id='gallery'>
            <CustomSection>
                <div className='sm:py-17 py-7'>
                    <div data-aos="fade-up" >
                        <CustomHeader text='GALLERY' />
                    </div>
                    <div data-aos="fade-up" >
                        <CustomCarosel />
                    </div>
                </div>
            </CustomSection>
        </section>
    )
}

export default Gallery