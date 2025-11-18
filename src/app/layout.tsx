import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";

import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Umejr Dzinovic – Dev Resume",
  description:
    "A clean and modern developer resume showcasing skills in S-Boot, Next.js, full-stack development, and personal projects.",
  keywords: [
    "Dev Resume",
    "Full Stack Developer",
    "Spring Boot",
    "Next.js",
    "Software Engineer",
    "Umejr Dzinovic",
  ],
  authors: [{ name: "Umejr Dzinovic" }],
  openGraph: {
    title: "Umejr Dzinovic – Dev Resume",
    description:
      "Dive into my dev resume, skills, knowledge, and full-stack apps built with Spring Boot and Next.js.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
