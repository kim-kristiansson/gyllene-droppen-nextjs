export async function refreshAccessToken() {
    try {
        const res = await fetch("http://localhost:5027/api/auth/refresh", {
            method: "POST",
            credentials: "include", // Ensure cookies are sent
        });

        if (!res.ok) {
            throw new Error("Failed to refresh token");
        }

        return true;
    } catch (error) {
        console.error("Failed to refresh token:", error);
        return false;
    }
}
