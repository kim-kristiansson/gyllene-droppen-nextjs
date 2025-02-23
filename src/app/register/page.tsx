"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🔹 Define schema with Zod
const registerSchema = z.object({
    email: z.string().email("Ogiltig e-postadress"),
    firstName: z.string().min(1, "Förnamn krävs").max(100, "Förnamnet får vara max 100 tecken"),
    lastName: z.string().min(1, "Efternamn krävs").max(100, "Efternamnet får vara max 100 tecken"),
    password: z.string().min(6, "Lösenordet måste vara minst 6 tecken"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Lösenorden matchar inte",
    path: ["confirmPassword"],
});

export default function Register() {
    const router = useRouter();
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: any) => {
        setServerError("");

        try {
            const res = await fetch("http://localhost:5027/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                let errorMessage = "Registrering misslyckades.";

                try {
                    const errorData = await res.json(); // Try parsing JSON
                    if (errorData.detail) {
                        errorMessage = errorData.detail; // Extracts `ProblemDetails.Detail`
                    }
                } catch {
                    errorMessage = await res.text(); // Fallback for plain text responses
                }

                setServerError(errorMessage);
                return;
            }

            router.push("/login"); // Redirect after successful registration
        } catch {
            setServerError("Något gick fel, försök igen senare.");
        }
    };


    return (
        <div>
            <h1>Registrera dig</h1>

            {serverError && <p style={{ color: "red" }}>{serverError}</p>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="E-postadress" {...register("email")} />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

                <input type="text" placeholder="Förnamn" {...register("firstName")} />
                {errors.firstName && <p style={{ color: "red" }}>{errors.firstName.message}</p>}

                <input type="text" placeholder="Efternamn" {...register("lastName")} />
                {errors.lastName && <p style={{ color: "red" }}>{errors.lastName.message}</p>}

                <input type="password" placeholder="Lösenord" {...register("password")} />
                {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

                <input type="password" placeholder="Bekräfta lösenord" {...register("confirmPassword")} />
                {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Registrerar..." : "Registrera"}
                </button>
            </form>
        </div>
    );
}
