import React from "react";
import InputField from "@/components/InputFields/InputField";
import Button from "@/components/Button/Button";
import {subscribeToNewsletter} from "@/formActions/subscribeToNewsletter";
import FormSubmit from "@/components/Forms/FormSubmit/FormSubmit";

export default function NewsletterForm() {
    const handleInputChange = (value: string) => {
        console.log(value);
    };

    return (
        <form action={subscribeToNewsletter}>
            <div>
                <p className="text-center text-darkBrown font-medium border-darkBrown mb-4">
                    Intresseanmälan
                </p>

                <InputField
                    className="placeholder-darkBrown mt-2"
                    id={"userEmail"}
                    name={"userEmail"}
                    type={"email"}
                    placeholder={"E-postadress"}
                    onChange={handleInputChange}
                    error={""}
                />
                <div className="grid justify-center">
                    <FormSubmit />
                </div>
            </div>
        </form>
    );
}
