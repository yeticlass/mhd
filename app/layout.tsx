import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miteri Home Decor - Premium False Ceiling Services in Kathmandu",
  description:
    'Professional false ceiling, POP, gypsum ceiling, and interior decoration services in Kathmandu and nearby areas.',
  keywords: [
    'false ceiling kathmandu',
    'gypsum ceiling nepal',
    'interior design kathmandu',
    'ceiling contractor nepal',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth">
    
      
      <body className="flex flex-col mx-auto max-w-7.5xl px-5 mt-2">    
        <div>
        <Navbar/>
        {children}
        </div>
        </body>
        
    </html>
  );
}
