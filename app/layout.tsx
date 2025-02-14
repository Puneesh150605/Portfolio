import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Puneesh Hingorani - Web Developer Portfolio",
  description: "Showcasing cutting-edge web development projects and skills",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
