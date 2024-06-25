import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 bg-white">
          <Navbar />
        </div>
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 bg-slate-100">
          {children}
        </div>
      </body>
    </html>
  );
}