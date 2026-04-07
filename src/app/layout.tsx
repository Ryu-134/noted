import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOTED | Student Notes OS",
  description:
    "Browser-first note transformation shell for deterministic processing and clean exports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
