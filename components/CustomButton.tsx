import React from 'react'
interface CustomButtonProps {
    text: string;
    disable?:boolean;
    onClick?: () => void;
    type?: 'submit' | "reset" | "button" | undefined;
    className?: string;
    hasBorder?: boolean;
}
const CustomButton = ({ text, disable, onClick,type, className, hasBorder }: CustomButtonProps) => {
    return (
        <button type={type} disabled={disable} className={`py-2 cursor-pointer px-6 rounded-lg text-lg min-w-31 text-center ${className} ${hasBorder ? 'border-2 border-golden' : ''}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default CustomButton