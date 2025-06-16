import "~/styles/globals.css";

import {ClerkProvider} from '@clerk/nextjs'


import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "A simple image gallery app built with T3 Stack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    
    <html lang="en" className={`${geist.variable} flex flex-col gap-4`}>
      <body>
        <Navbar />
        {children}
      </body>

    </html>
    
    </ClerkProvider>
  );
}
