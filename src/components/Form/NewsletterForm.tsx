import React from "react";
import InputField from "@/components/InputFields/InputField";
import Button from "@/components/Button/Button";

interface NewsletterFormProps {
    onSubmit: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NewsletterForm({onSubmit}: NewsletterFormProps) {
    const handleInputChange = (value: string) => {
        console.log(value);
    };

    return (
        <div>
            <p className="text-center text-darkBrown">Intresseanmälan</p>
            <InputField
                className="placeholder-darkBrown"
                id={"userEmail"}
                type={"email"}
                placeholder={"Din e-postadress"}
                onChange={handleInputChange}
            />
            <div className="grid justify-center">
                <Button label="Skicka" onClick={onSubmit}/>
            </div>
        </div>
    );
}
