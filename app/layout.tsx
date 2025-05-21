import type React from "react"
import type { Metadata } from "next"
import { Titan_One, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SpaceBackground from "@/components/space-background"

const titanOne = Titan_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-titan-one",
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "ZOO MGMT — Telegram Automation & Virtual Events",
  description:
    "Layanan Virtual Event Organizer via Telegram, Design Editing, Automatisasi Grup Support, Jual-beli Userbot Telegram, Nomor Virtual, dan Social Media Growth.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${titanOne.variable} ${outfit.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="space-wrapper overflow-hidden">
            <SpaceBackground />
            <div className="relative z-10">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
