"use client"
import React from "react";

interface ButtonProps {
    label?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}

export default ({
    label,
    onClick,
    type = "button",
    className = "",
                }: ButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        className={`bg-[#8A5E3D] font-serif text-lg py-2 px-4 rounded-full ${className} border border-[#D4AF37]`}
    >
        {label}
    </button>
)
