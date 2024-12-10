export async function subscribeToNewsletter(email: string): Promise<any> {
    const response: Response = await fetch("https://localhost:7254/api/newsletter/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        const errorData: any = await response.json();
        throw new Error(errorData.detail || `Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
}
