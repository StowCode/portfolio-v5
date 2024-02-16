import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Stowcode Solutions",
  description: "Portfolio Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <h1 className={`${poppins.className} text-white m-5`}>Navbar</h1>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
