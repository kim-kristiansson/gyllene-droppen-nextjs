"use client";

import SocialLinks from "@/components/SocialLinks/SocialLinks";
import React, { useState } from "react";


export default function GoldenCard({children}: any) {
    return (
        <div className="bg-beige text-darkBrown px-4 shadow-xl lg:w-3/4 w-full sm:w-auto shadow-black/10 grid items-center h-screen sm:h-auto rounded-xl max-w-screen-md mx-auto p-16">
            <div className="relative p-6 pt-12 bg-beige border-4 border-double border-darkBrown rounded-xl text-center">
                <span
                    className="absolute top-0 bg-beige left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-great-vibes)] text-gold font-bold text-4xl">GD</span>
                <div className="grid gap-3">
                    <h1 className="text-center text-darkBrown text-4xl font-serif">Gyllene Droppen</h1>
                    {children}
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
