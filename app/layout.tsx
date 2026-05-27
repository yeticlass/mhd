import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppWidget from "./components/WhatsAppWidget";



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
    
      
      <body className="min-h-screen flex flex-col mx-auto max-w-8xl mt-2 pl-2 ">    
        <div className="">
        <Navbar/>
        {children}
        <div className="lg:ml-80">
         <WhatsAppWidget />
         </div>
        </div>
        </body>
        
    </html>
  );
}
