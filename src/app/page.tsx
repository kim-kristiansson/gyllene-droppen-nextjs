"use client"
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InterestForm from "@/components/forms/interest-form";
import Image from "next/image";
import gylleneDroppen from "@/app/public/static/images/gyllene-droppen.png";

const formSchema = z.object({
    email: z.string().email({
        message: 'Ogiltlig e-postadress',
    })
})

export default function Home() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
        }
    })

    function onsubmit (values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <main>
            <div className="flex pt-4 flex-col gap-5 items-center min-h-screen bg-gray">
                <Image
                    alt={'Gyllene Droppen'}
                    src={gylleneDroppen}
                    style={{maxWidth: '300px', height: "auto"}}
                />

                <InterestForm />
            </div>
        </main>
    )
}
