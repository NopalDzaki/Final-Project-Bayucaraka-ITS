import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayucaraka ITS",
  description: "UAV Research Team Bayucaraka ITS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
