import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import gylleneDroppen from "@/app/public/static/images/gyllene-droppen.png";
import React from "react";

export default function Tack() {
    return (
        <div className="flex pt-4 flex-col gap-5 items-center justify-center min-h-screen bg-whisky-background">
            <Image
                alt={"Gyllene Droppen"}
                src={gylleneDroppen}
                className="w-full max-w-[250px] h-auto sm:max-w-[300px] lg:max-w-[350px]"
            />
            <Card>
                <CardHeader>
                    <CardTitle>Din E-post är nu bekräftad!</CardTitle>
                    <CardDescription>
                        Tack för visat intresse i Whiskyklubben Gyllene Droppen. Vi återkommer snart med information om våra event och hur du kan bli medlem.
                    </CardDescription>
                </CardHeader>
            </Card>
        </div>
    );
}
