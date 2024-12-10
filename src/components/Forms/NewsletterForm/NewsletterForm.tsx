"use client";

import React, { useState } from "react";
import { subscribeToNewsletter } from "@/api/newsletter/subscribeToNewsletter";
import InputField from "@/components/InputFields/InputField";
import Button from "@/components/Button/Button";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(null);

        try {
            const result = await subscribeToNewsletter(email);
            setSuccess("Subscription successful!");
        } catch (err: any) {
            setError(err.message || "Failed to subscribe.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-center text-darkBrown font-medium border-darkBrown mb-4">
                Intresseanmälan
            </p>

            <InputField
                id="userEmail"
                name="userEmail"
                type="email"
                placeholder="E-postadress"
                onChange={setEmail}
                error={error}
            />

            <div className="grid justify-center">
                <Button
                    type="submit"
                    label={loading ? "Skickar..." : "Skicka"}
                    disabled={loading}
                />
            </div>
        </form>
    );
}
