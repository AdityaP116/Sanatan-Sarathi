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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://sanatan-sarathi.vercel.app"),
  title: "Sanatan Sarathi — Your Guide to Hindu Wisdom",
  description:
    "Explore the stories, symbols, festivals, and sacred mantras of revered Hindu deities through a simple and respectful spiritual guide.",
  generator: "Next.js",
  openGraph: {
    title: "Sanatan Sarathi — Your Guide to Hindu Wisdom",
    description: "Explore the stories, symbols, festivals, and sacred mantras of revered Hindu deities.",
    url: "/",
    siteName: "Sanatan Sarathi",
    images: [
      {
        url: "/home-full.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanatan Sarathi",
    description: "Your Guide to Hindu Wisdom",
    images: ["/home-full.png"],
  },
}

import { MotionProvider } from "@/components/motion-provider"

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
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
