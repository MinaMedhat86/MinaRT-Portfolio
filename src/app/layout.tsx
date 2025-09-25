import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import PageTransition from "./components/pageTransition";
import StairTransition from "./components/stairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight:["100","200","300","400","500","600","700","800"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Mina Portfolio",
  description: "  A portfolio website showcasing my projects and skills.",
    icons: {
    icon: "/assests/images/Mina Pic2.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
           
        <Header />
        <StairTransition/>
        <PageTransition>
        {children}

        </PageTransition>

      </body>
    </html>
  );
}
