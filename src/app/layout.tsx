
import "./globals.css";
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Footer from "./components/Footer";



const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "AgriTech Solutions",
  description: "Empowering Agriculture with Technology",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
   
 <body className={inter.className}>

    
        {children}
<Footer/>
      </body>
    </html>
  );
}
