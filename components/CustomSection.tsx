import React from 'react'
interface CustomSectionProps {
    children: React.ReactNode;
    className?: string;
}
const CustomSection = ({ children, className }: CustomSectionProps) => {
    return (
        <div className={`max-w-290 w-full mx-auto px-5 ${className}`}>
            {children}
        </div>
    )
}

export default CustomSection