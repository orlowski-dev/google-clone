import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "Google Search Clone",
  description: "Google search website clone",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"font-roboto " + roboto.variable}>{children}</body>
    </html>
  );
}
