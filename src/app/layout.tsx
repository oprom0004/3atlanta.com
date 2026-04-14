import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://3atlanta.com"
  ),
  title: "3Atlanta | Industrial Variable DC Power Supply Solutions",
  description:
    "Premium industrial-grade variable DC power supplies. High-voltage, high-precision, and programmable solutions for aerospace, semiconductor, and R&D applications.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
