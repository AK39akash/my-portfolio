
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import AudioControl from "@/components/AudioControl";


import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akash | Portfolio",
  description: "3-D Portfolio Website",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScroll>
            <Preloader />
            <CustomCursor />
            <Navbar />
            <AudioControl />
            {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
