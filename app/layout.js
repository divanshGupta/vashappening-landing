import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // improves font loading behavior
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vashappening Media",
  description: "Software Development Agency",
  icons: {
    icon: "/favicon.png", // or .png
    shortcut: "/favicon.png",
    apple: "/favicon.png", // optional for Apple devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white text-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
