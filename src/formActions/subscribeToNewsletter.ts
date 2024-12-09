import {z} from "zod";

export async function subscribeToNewsletter(formData: any)
{
    // const schema = z.object({
    //     email: z.string().email(),
    // })
    //
    // const data = schema.parse({
    //     email: formData.get("userEmail"),
    // })


    const email: string | null = formData.get("userEmail");

    const response = await fetch("https://localhost:7254/api/newsletter/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        const errorDetails = await response.json(); // Parse error details
        console.error("Error Details:", errorDetails);
        return { error: `Failed to subscribe: ${response.status}` }; // Return error message
    }

    const responseData = await response.json(); // Parse successful response
    console.log("Subscription successful:", responseData);
    return responseData; // Return success response
}
