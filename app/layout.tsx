import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Burger Station | Premium Burgers & Fast Food in Gujranwala",
  description:
    "Order delicious gourmet burgers, loaded fries, and crispy chicken from Burger Station. Available in Satellite Town, Mumtaz Market, and Rahwali branches.",
  generator: "v0.app",
  keywords: ["burger", "fast food", "gujranwala", "food delivery", "chicken", "fries", "burger station"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
