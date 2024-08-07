import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verco - Your Trusted Sales Ally",
  description: "Verco is an all-in-one AI-powered sales assistant platform designed to empower businesses by automating and enhancing their sales and customer service processes. With its extensive feature set, customizable options, and seamless integrations, Verco is poised to become an indispensable tool for businesses looking to streamline operations and boost customer satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
