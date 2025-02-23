import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { apiFetch } from "@/lib/api/apiFetch";

export default async function Dashboard() {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        redirect("/login");
    }

    try {
        const res = await apiFetch("/auth/me");

        const user = await res.json();

        return (
            <div>
                <h1>Welcome, {user.firstName}!</h1>
            </div>
        );
    } catch {
        redirect("/login");
    }
}
