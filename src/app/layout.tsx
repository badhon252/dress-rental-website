import { cn } from "@/lib/utils";
import AppProvider from "@/providers/AppProvider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const nimbus = localFont({
  src: "./fonts/nimbus/nimbussannovdlig.ttf",
  variable: "--font-nimbus",
  weight: "100 900",
  display: "auto",
});

const avenir = localFont({
  src: "./fonts/avenir/Avenir Regular.ttf",
  variable: "--font-avenir",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musa Gala",
  description: "Effortless fashion hire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", nimbus.className, avenir.variable)}>
        <AppProvider>{children}
        <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}
