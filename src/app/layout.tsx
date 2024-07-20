import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const CascadiaCodeRegular = localFont({ src: "../../public/fonts/static/CascadiaCode-Regular.otf"})

export const metadata: Metadata = {
  title: "Arthur Fonseca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={CascadiaCodeRegular.className}>{children}</body>
    </html>
  );
}
