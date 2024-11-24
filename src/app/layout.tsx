import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import {ThemeProvider} from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Gyllene Droppen",
    description: "Whiskygemenskap",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-whisky-background">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
