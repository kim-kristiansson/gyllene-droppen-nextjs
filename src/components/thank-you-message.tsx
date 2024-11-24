// Thank You Message Component
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import mailSuccess from "@/app/public/static/images/mail-success.png";
import React from "react";
import Image from "next/image";

export default function ThankYouMessage() {
    return (
        <div className="flex items-center gap-5 flex-col">
        <Card>
            <CardHeader>
                <CardTitle>Tack för din intresseanmälan!</CardTitle>
                <CardDescription>
                    Vi har skickat ett bekräftelsemejl till din e-postadress. Vi återkommer snart med information om våra
                    event och hur du kan bli medlem.
                </CardDescription>
            </CardHeader>
        </Card>
                        <Image
                            alt={"Mail Success"}
                            src={mailSuccess}
                            className="w-full max-w-[50px] h-auto sm:max-w-[75px] lg:max-w-[100px]"
                        />
        </div>
    );
}