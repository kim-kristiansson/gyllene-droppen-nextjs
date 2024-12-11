"use client";

import SocialLinks from "@/components/SocialLinks/SocialLinks";
import React, { useState } from "react";
import NewsletterForm from "@/components/Forms/NewsletterForm/NewsletterForm";
import Carousel from "@/components/Carousel/Carousel";
import { GoCheckCircle } from "react-icons/go";


export default function NewsletterSignUp() {
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSuccess = () => {
        setIsSuccess(true);
        setTimeout(() => {
            // Optionally, you can trigger additional behavior after the animation.
        }, 1000); // Match the animation duration
    };

    return (
        <div className="bg-beige px-4 shadow-xl lg:w-3/4 w-full sm:w-auto shadow-black/10 grid items-center h-screen sm:h-auto rounded-xl max-w-screen-md mx-auto p-16">
            <div className="relative p-6 pt-12 bg-beige border-4 border-double border-darkBrown rounded-xl text-center">
                <span
                    className="absolute top-0 bg-beige left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-great-vibes)] text-gold font-bold text-4xl">GD</span>
                <div className="grid gap-3">
                    <h1 className="text-center text-darkBrown text-4xl font-serif">Gyllene Droppen</h1>

                    {/* Conditionally render form or success message */}
                    <div
                        className={`${
                            isSuccess
                                ? "transform translate-x-full opacity-0 transition duration-1000"
                                : "transform translate-x-0 opacity-100"
                        }`}
                    >
                    </div>

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

                    <hr className="my-3 border-t border-darkBrown"/>
                    <p className="text-center text-darkBrown">Följ eller kontakta oss</p>
                    <SocialLinks/>
                    <footer>
                        <p className="text-xs text-center text-darkBrown">
                            © {new Date().getFullYear()} Gyllene Droppen
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
