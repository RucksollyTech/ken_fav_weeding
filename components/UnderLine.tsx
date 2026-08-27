import React from 'react'

const UnderLine = ({className}:{className?:string}) => {
    return (
        <>
            <div className="sm:hidden block">
                <img className={`${className} max-w-50 my-1`} src="/icons/element_heart_with_two_lines.svg" alt="" />
            </div>
            <div className="sm:block hidden">
                <img className={className} src="/icons/element_heart_with_two_lines.svg" alt="" />
            </div>
            
        </>
    )
}

export default UnderLine