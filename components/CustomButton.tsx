import React from 'react'
interface CustomButtonProps {
    text: string;
    onClick: () => void;
    className?: string;
    hasBorder?: boolean;
}
const CustomButton = ({ text, onClick, className, hasBorder }: CustomButtonProps) => {
    return (
        <button className={`py-2 px-6 rounded-lg text-lg min-w-31 text-center ${className} ${hasBorder ? 'border-2 border-golden' : ''}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default CustomButton