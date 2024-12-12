"use client";

import SocialLinks from "@/components/SocialLinks/SocialLinks";
import React, { useState } from "react";
import NewsletterForm from "@/components/Forms/NewsletterForm/NewsletterForm";
import Carousel from "@/components/Carousel/Carousel";
import { GoCheckCircle } from "react-icons/go";
import GoldenCard from "@/components/GoldenCard/GoldenCard";


export default function NewsletterSignUp() {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = () => {
        setIsSuccess(true);
        setTimeout(() => {
            // Optionally, you can trigger additional behavior after the animation.
        }, 1000); // Match the animation duration
    };

    return (
            <GoldenCard>
                <Carousel isSuccess={isSuccess}>
                    <NewsletterForm onSuccess={handleSuccess}/>
                    {isSuccess && (
                        <div
                            className="text-darkBrown flex flex-col items-center justify-center space-y-2">
                            <GoCheckCircle  className="text-6xl"/>
                            <h2 className="text-2xl font-bold text-center">Tack för din anmälan!</h2>
                            <p className="text-center">Din anmälan har tagits emot. Vänligen kontrollera din e-post
                                för bekräftelse.</p>
                        </div>
                    )}
                </Carousel>
            </GoldenCard>


    );
}
