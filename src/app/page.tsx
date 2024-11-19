"use client"
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InterestForm from "@/components/forms/interest-form";

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
            <div className="flex items-center justify-center min-h-screen bg-gray">
                <InterestForm />
            </div>
        </main>
    )
}
