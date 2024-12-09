"use client";

import { useFormStatus } from "react-dom";
import React, { useEffect, useState } from "react";
import Button from "@/components/Button/Button";

export default function FormSubmit() {
    const status = useFormStatus();
    const [visibleDots, setVisibleDots] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleDots((prev) => (prev < 3 ? prev + 1 : 0)); // Cycle through 0 to 3
        }, 500);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    const isPending = !status.pending; // Simulating pending state for testing

    return (
        <Button
            type={isPending ? "button" : "submit"}
            label={"Skicka"}
            className="w-[150px] text-center"
        />
    );
}
