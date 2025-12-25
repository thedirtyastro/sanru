import type { Metadata } from "next";
import { Smooch_Sans } from "next/font/google";
import "./globals.css";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-smooch-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanru Creative Studio - Websites That Work. Social Media That Sells.",
  description: "From stunning websites to powerful social media strategies, Sanru Creative Studio helps your business shine online and grow with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={smoochSans.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

