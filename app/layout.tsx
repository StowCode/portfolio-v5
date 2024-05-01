import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "../app/sections/globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Stowcode Solutions",
  description: "Custom Web Design and Development",
  openGraph: {
    images:'https://www.flickr.com/photos/194765725@N05/53692433079/in/dateposted-public/'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
