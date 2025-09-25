import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Shira's Cakes - Custom Cakes in Plano, TX",
  description: "Professional custom cakes, cupcakes, and cookies by Shira Tzur. Serving Plano, TX area since 2019. Order your perfect cake today!",
  keywords: "custom cakes, Plano TX, birthday cakes, wedding cakes, cupcakes, cookies, Shira Tzur",
  authors: [{ name: "Shira Tzur" }],
  openGraph: {
    title: "Shira's Cakes - Custom Cakes in Plano, TX",
    description: "Professional custom cakes, cupcakes, and cookies by Shira Tzur. Serving Plano, TX area since 2019.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shira's Cakes - Custom Cakes in Plano, TX",
    description: "Professional custom cakes, cupcakes, and cookies by Shira Tzur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
