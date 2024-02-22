import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "./components/navigation";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iskaypet Frontend Challenge",
  description: "Made in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navigation></Navigation>
        {children}
        </body>
    </html>
  );
}
