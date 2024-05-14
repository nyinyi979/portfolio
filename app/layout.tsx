import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Schibsted_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About me",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="apple-touch-icon" sizes="76x76" href="./apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
      <link rel="manifest" href="./site.webmanifest" />
      <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="./favicon.ico" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-config" content="./browserconfig.xml" />
      <meta name="theme-color" content="#ffffff"></meta>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
