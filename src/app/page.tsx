"use client"
import React, {useState} from "react";
import InterestForm from "@/components/forms/interest-form";
import Image from "next/image";
import gylleneDroppen from "@/app/public/static/images/gyllene-droppen.png";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import ThankYouMessage from "@/components/thank-you-message";

const formSchema = z.object({
    email: z.string().email({
        message: "Ogiltlig e-postadress",
    }),
});


export default function Home() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState<string>("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        setResponseMessage('')

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/newsletter/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData);

                // Check for specific error message and translate it
                if (errorData.detail.includes('already confirmed')) {
                    setResponseMessage('Denna e-postadress är redan registrerad. Tack för ditt intresse!');
                }
                else if (errorData.detail === 'A confirmation link has already been sent to this email. Please check your inbox.') {
                    setResponseMessage('En bekräftelselänk har redan skickats till denna e-postadress. Vänligen kontrollera din inkorg.');
                } else {
                    setResponseMessage('Något gick fel. Försök igen senare.');
                }

                return;
            }

            setIsSubmitted(true);
        } catch (error: any) {
            setResponseMessage(error.message || 'Ett oväntat fel uppstod.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main>
            <div className="flex pt-4 flex-col gap-5 items-center justify-center min-h-screen bg-whisky-background">
                <Image
                    alt={"Gyllene Droppen"}
                    src={gylleneDroppen}
                    className="w-full max-w-[250px] h-auto sm:max-w-[300px] lg:max-w-[350px]"
                />

                {!isSubmitted ? (
                    <InterestForm onSubmit={form.handleSubmit(onSubmit)} form={form} isSubmitting={isSubmitting}
                                  responseMessage={responseMessage}/>
                ) : (
                    <ThankYouMessage/>
                )}
            </div>
        </main>
    )
}
