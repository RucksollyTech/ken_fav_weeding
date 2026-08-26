import React from 'react'
import CustomSection from './CustomSection'
import CustomHeader from './CustomHeader'
import CustomCarosel from './CustomCarosel'

const Gallery = () => {
    return (
        <div>
            <CustomSection>
                <div className='py-17'>
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