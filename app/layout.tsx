import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClinicFlow",
  description: "Redefining Healthcare Access",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
