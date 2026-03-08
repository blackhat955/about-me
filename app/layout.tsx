import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Durgesh Tiwari | Software Engineer",
  description:
    "Software Engineer specializing in iOS/Swift, C++, and high-performance systems. MS in Data Science from Indiana University Bloomington.",
  keywords: [
    "software engineer",
    "iOS developer",
    "Swift",
    "C++",
    "SwiftUI",
    "Metal",
    "systems programming",
  ],
  authors: [{ name: "Durgesh Tiwari" }],
  openGraph: {
    title: "Durgesh Tiwari | Software Engineer",
    description:
      "Software Engineer specializing in iOS/Swift, C++, and high-performance systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
