import type { Metadata } from "next";
import {
  Bebas_Neue,
  Inter as FontSans,
  Oswald,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const bebas = Bebas_Neue({
  weight: ["400"],
  variable: "--font-bebas",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});
export const metadata = {
  title: "Cybernaut LLP",
  description: "The warehouse of Knowledge.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          oswald.variable,
          bebas.variable,
          poppins.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
