import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Raphael Wiki",
  description: "Raphael's wiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <main style={{ marginLeft: "var(--sidebar-width)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
