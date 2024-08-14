import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Svogo",
  description: "Learn your own way",
};

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-baloo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={baloo.className}>{children}</body>
    </html>
  );
}
