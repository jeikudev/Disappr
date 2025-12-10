import { AppProvider } from "@/providers/app-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disappr",
  description: "Everything is private, nothing is saved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AppProvider>{children}</AppProvider>
    </html>
  );
}
