import React, { useState } from "react";
import { z } from "zod";
import { subscribeToNewsletter } from "@/api/newsletter/subscribeToNewsletter";
import InputField from "@/components/InputFields/InputField";
import Button from "@/components/Button/Button";

// Zod schema for validation
const emailSchema = z.string().email("Ogiltig e-postadress");

export default function NewsletterForm({ onSuccess }: { onSuccess: () => void }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess(null);

        // Validate email with Zod
        const validation = emailSchema.safeParse(email);
        if (!validation.success) {
            setError(validation.error.errors[0].message);
            return;
        }

        setLoading(true);

        try {
            await subscribeToNewsletter(email);
            onSuccess();
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
