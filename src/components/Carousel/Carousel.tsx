"use client";

import React, { useEffect, useState } from "react";

export default function Carousel({ children, isSuccess }: { children: React.ReactNode[]; isSuccess: boolean }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (isSuccess) {
            setCurrentSlide(1); // Move to the second slide
        } else {
            setCurrentSlide(0); // Move back to the first slide
        }
    }, [isSuccess]);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {React.Children.map(children, (child) => (
                    <div className="w-full flex-shrink-0">{child}</div>
                ))}
            </div>
        </div>
    );
}
