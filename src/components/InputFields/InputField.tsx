"use client"

import {useState} from "react";

interface InputFieldProps {
    id: string,
    name: string,
    type: string,
    placeholder: string,
    onChange?: (value: string) => void,
    className?: string
    error?: string
}

export default function InputField({id, type, placeholder, onChange, className, error, name}: InputFieldProps) {
    const [value, setValue] = useState("");

    const handleChange = (e: any) => {
        const newValue = e.target.value
        setValue(newValue)
        if(onChange) onChange(newValue)
    }

    return (
        <div className="w-full relative">
            <input
                className={`peer placeholder-transparent text-darkBrown border border-darkBrown rounded-lg bg-transparent p-2 w-full ${error ? "border-red-500" : ""} ${className}`}
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
            <label htmlFor={id} className={`${error ? "text-red-500 peer-placeholder-shown:text-red-500" : ""} bg-beige absolute left-[9] -top-2.5 text-sm peer-placeholder-shown:text-base transition-all text-darkBrown peer-placeholder-shown:text-darkBrown peer-placeholder-shown:top-2 peer-placeholder-shown:left-[9] peer-focus:-top-2.5 peer-focus:text-darkBrown peer-focus:text-sm pointer-text pointer-events-none`}>
                {placeholder}</label>
            <p
                className={`text-sm ${error ? "text-red-500" : "text-transparent"} text-start pl-3`}
                aria-live="polite"
            >
                {error || "Placeholder text"}
            </p>

        </div>

    )
}
