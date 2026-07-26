import type { Metadata } from "next";
import { Merriweather, Catamaran } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const merriweather = Merriweather({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const catamaran = Catamaran({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Live Blog",
  description: "A live blog powered by Sanity and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${catamaran.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
