"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function InterestForm({ onSubmit, form, isSubmitting, responseMessage }: any) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Intresseanmälan för Gyllene Droppen</CardTitle>
                <CardDescription>
                    Fyll i din e-postadress för att visa ditt intresse för vår whiskyklubb. Vi kommer att kontakta dig
                    med mer information om våra evenemang och medlemskap.
                </CardDescription>
            </CardHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }: any) => (
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
                    <CardFooter className="flex flex-col space-y-4">
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Skickar...' : 'Skicka'}
                        </Button>
                        {responseMessage && <p className="text-sm text-center">{responseMessage}</p>}
                    </CardFooter>
                </form>
            </Form>
        </Card>
    );
}
