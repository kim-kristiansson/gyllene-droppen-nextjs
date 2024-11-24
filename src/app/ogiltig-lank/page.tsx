import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import gylleneDroppen from "@/app/public/static/images/gyllene-droppen.png";
import cross from "@/app/public/static/images/cross.png";
import React from "react";

export default function InvalidLink() {
    return (
        <div className="flex pt-4 flex-col gap-5 items-center justify-center min-h-screen w-full max-w-[90%] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px] 2xl:max-w-[1000px] mx-auto">
            <Image
                alt={"Gyllene Droppen"}
                src={gylleneDroppen}
                className="w-full max-w-[250px] h-auto sm:max-w-[300px] lg:max-w-[350px]"
            />
            <Card>
                <CardHeader className="items-center">
                    <Image
                        alt={"Cross"}
                        src={cross}
                        className="w-full max-w-[50px] h-auto sm:max-w-[75px] lg:max-w-[100px]"
                    />
                    <CardTitle>Ogiltig länk</CardTitle>
                </CardHeader>
                <CardContent>
                        Tyvärr, länken du försökte använda är ogiltig eller har redan använts.
                        Kontrollera att du har klickat på rätt länk eller kontakta oss om problemet kvarstår.

                        Om du har frågor, vänligen kontakta oss på <a href="mailto:info@gyllenedroppen.se">info@gyllenedroppen.se</a>.


                </CardContent>
            </Card>
        </div>
    );
}
