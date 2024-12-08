"use client";

import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";

export default function NewsletterSignUp() {
    const handleInputChange = (value: string) => {
        console.log(value);
    }

    return (
        <div className="bg-beige p-4 rounded-xl shadow-md">
            <div className="rounded-lg border-double border-4 border-darkBrown p-4">
                <div className="grid gap-4">
                    <h1 className="text-center text-darkBrown text-4xl font-serif">Gyllene Droppen</h1>
                    <InputField id={"userEmail"} type={"email"} placeholder={"Din e-postadress"} onChange={handleInputChange}  />
                    <div className="grid justify-center">
                        <Button label="Skicka" onClick={() => console.log('ok')} />
                    </div>
                </div>
            </div>
        </div>
    );
}
