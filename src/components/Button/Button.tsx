"use client"
import React, {ReactNode} from "react";

interface ButtonProps {
    disabled?: boolean;
    label?: ReactNode;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export default ({
    disabled,
    label,
    onClick,
    type = "button",
    className = "",
                }: ButtonProps) => (
    <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`bg-[#8A5E3D] font-serif text-lg py-2 px-4 rounded-full text-beige ${className} border border-[#D4AF37]`}
    >
        {label}
    </button>
)
