"use client"
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import gylleneDroppen from "@/app/public/static/images/gyllene-droppen.png";
import Image from 'next/image'

const formSchema = z.object({
    email: z.string().email({
        message: 'Ogiltig e-postadress',
    })
})

export default function InterestForm() {
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
        <Card>
            <CardHeader>
                <CardTitle>Intresseanmälan för Gyllene Droppen</CardTitle>
                <CardDescription>Fyll i din e-postadress för att visa ditt intresse för vår whiskyklubb. Vi kommer att kontakta dig med mer information om våra evenemang och medlemskap.</CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onsubmit)}>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}:any) => (
                                <FormItem>
                                    <FormLabel>E-postadress</FormLabel>
                                    <FormControl>
                                        <Input placeholder={'mail@exempel.se'} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button>Skicka</Button>
                    </CardFooter>
                </form>
            </Form>
        </Card>
    )
}
