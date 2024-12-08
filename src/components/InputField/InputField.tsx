"use client"

import {useState} from "react";

interface InputFieldProps {
    id: string,
    type: string,
    placeholder: string,
    onChange?: (value: string) => void,
    className?: string
}

export default function InputField({id, type, placeholder, onChange, className}: InputFieldProps) {
    const [value, setValue] = useState("");

    const handleChange = (e: any) => {
        const newValue = e.target.value
        setValue(newValue)
        if(onChange) onChange(newValue)
    }

    return (
        <input
            className={`text-darkBrown border border-darkBrown rounded-lg bg-transparent p-2 w-full ${className}`}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    );
}
