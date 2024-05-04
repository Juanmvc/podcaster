import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import "./globals.css";
import Navbar from "@/stories/navbar/Navbar";

const inter = Anek_Latin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcaster",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar linkText="Podcaster" linkUrl={'/'} loading/>
          {children}
      </body>
    </html>
  );
}
