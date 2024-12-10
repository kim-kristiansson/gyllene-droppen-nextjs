import React, {useActionState, useEffect} from "react";
import InputField from "@/components/InputFields/InputField";
import Button from "@/components/Button/Button";
import {subscribeToNewsletter} from "@/formActions/subscribeToNewsletter";

export default function NewsletterForm() {
    const [state, formAction, isPending] = useActionState(subscribeToNewsletter, {});
    const handleInputChange = (value: string) => {
        console.log(value);
    };

    useEffect(() => {
        console.log(state);

    }, [state]);

    return (
        <form action={formAction}>
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
                />
                <div className="grid justify-center">
                    {/*<FormSubmit />*/}
                    {
                        isPending ? <p>Sending...</p> : <Button label="Skicka" type="submit" />
                    }
                </div>
            </div>
        </form>
    );
}
