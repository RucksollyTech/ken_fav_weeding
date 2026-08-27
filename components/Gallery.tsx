import React from 'react'
import CustomSection from './CustomSection'
import CustomHeader from './CustomHeader'
import CustomCarosel from './CustomCarosel'

const Gallery = () => {
    return (
        <div id='gallery'>
            <CustomSection>
                <div className='sm:py-17 py-7'>
                    <div>
                        <CustomHeader text='GALLERY' />
                    </div>
                    <div>
                        <CustomCarosel />
                    </div>
                </div>
            </CustomSection>
        </div>
    )
}

export default Gallery