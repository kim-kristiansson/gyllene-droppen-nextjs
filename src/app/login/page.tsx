"use client"

import React, {useState} from "react";
import {useRouter} from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5027/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            console.log("Response status:", res.status);
            console.log("Response headers:", [...res.headers]);

            if (res.ok) {
                console.log("Login successful!");
                router.push("/dashboard");
            } else {
                const errorText = await res.text();
                console.error("Error response:", errorText);
                setError("Felaktiga inloggningsuppgifter");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            setError("Något gick fel. Försök igen senare.");
        }
    };


    return (
        <div>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}