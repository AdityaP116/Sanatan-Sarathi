import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Sanatan Sarathi — Your Guide to Hindu Wisdom",
  description:
    "Explore the stories, symbols, festivals, and sacred mantras of revered Hindu deities through a simple and respectful spiritual guide.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("bg-background antialiased", inter.variable, poppins.variable, "font-sans")}
    >
      <body>{children}</body>
    </html>
  )
}
