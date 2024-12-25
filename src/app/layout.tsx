import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Monument = localFont({
  src: "./fonts/Monument-B.ttf",
  variable: "--Monument",
});
const monumentRegular = localFont({
  src: "fonts/Monument-R.ttf",
  variable: "--monumentRegular",
});
const Gilroy_M = localFont({
  src: "fonts/Gilroy-M.ttf",
  variable: "--Gilroy-M",
});
const Gilroy_R = localFont({
  src: "fonts/Gilroy-R.ttf",
  variable: "--Gilroy-R",
});
export const metadata: Metadata = {
  title: "Showcase",
  description:
    "A modern and interactive platform to showcase my personal projects, creative designs, and professional achievements. Built with Next.js for fast performance and Tailwind CSS for sleek styling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Monument.variable} ${Gilroy_M.variable} ${Gilroy_R.variable} ${monumentRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
