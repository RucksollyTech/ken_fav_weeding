import React from 'react'
interface CustomSectionProps {
    children: React.ReactNode;
    className?: string;
}
const CustomSection = ({ children, className }: CustomSectionProps) => {
    return (
        <div className={`max-w-290 w-full mx-auto sm:px-5 px-4 ${className}`}>
            {children}
        </div>
    )
}

export default CustomSection