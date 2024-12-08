"use client";

import Image from "next/image";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";

export default function NewsletterSignUp() {
    const handleInputChange = (value: string) => {
        console.log(value);
    }

    return (
        <div className="bg-beige p-4 shadow-md h-screen grid items-center">
            <div className="relative p-6 pt-8 bg-beige border-4 border-double border-darkBrown rounded-lg text-center">
                <span className="absolute top-0 bg-beige left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-great-vibes)] text-gold font-bold text-4xl">GD</span>
                <div className="grid gap-4">
                    <h1 className="text-center text-darkBrown text-4xl font-serif">Gyllene Droppen</h1>
                    <p className="text-center text-darkBrown">Intresseanmälan</p>
                    <InputField className="placeholder-darkBrown" id={"userEmail"} type={"email"} placeholder={"Din e-postadress"}
                                onChange={handleInputChange}/>
                    <div className="grid justify-center">
                        <Button label="Skicka" onClick={() => console.log('ok')}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
