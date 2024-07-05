import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import {Footer} from '@/components/ui/footer'
const inter = Poppins({ subsets: ["latin"], weight:["100",'400','500','600'] });

export const metadata: Metadata = {
  title: "Bitcoin Council Conference",
  description: "this is the Bitcoin Council Conference website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
