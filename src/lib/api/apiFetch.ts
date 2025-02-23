export async function apiFetch(url: string, options: RequestInit = {}){
    const response = await fetch(`http://localhost:5027/api${url}`, {
        ...options,
        credentials: "include",
    });

    if(response.status === 401){
        const refreshResponse = await fetch("http://localhost:5027/api/auth/refresh-token", {
            method: "POST",
            credentials: "include",
        })

        if(refreshResponse.ok){
            return await apiFetch(url, {
                ...options,
                credentials: "include"
            });
        }
    }

    return response;
}