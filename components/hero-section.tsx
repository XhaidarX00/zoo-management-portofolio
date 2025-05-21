"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MessageCircle, ArrowRight } from "lucide-react"

const contactMessage = encodeURIComponent(
  "Hallo min zoo, mau tanya tentang jasa zoo nih..."
);


export default function HeroSection() {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              TELEGRAM AUTOMATION & VIRTUAL EVENTS
            </div>
            <h1 className="text-5xl md:text-7xl font-display leading-none text-white mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                POWER UP
              </span>{" "}
              YOUR TELEGRAM PRESENCE
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Solusi lengkap untuk memaksimalkan penggunaan Telegram dalam bisnis Anda. Dari acara virtual hingga
              otomatisasi grup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`https://t.me/kenapatagdar?text=${contactMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-black font-display rounded-full py-6 px-8 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] text-base">
                <MessageCircle className="mr-2 h-5 w-5" />
                HUBUNGI VIA TELEGRAM
              </Button>
              </a>
              <a href="#layanan">
              <Button
                variant="outline"
                className="border-2 border-white/10 text-white hover:bg-white/5 rounded-full py-6 px-8 transition-colors duration-300 group text-base"
              >
                PELAJARI LAYANAN
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-300 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-white/10 p-6 overflow-hidden">
              <Image
                src="/hero.jpeg"
                alt="Zoo Management Telegram Services"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <p className="text-white/90 font-medium">Telegram Automation Active</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -right-10 bg-purple-500/20 backdrop-blur-md rounded-full p-4 border border-purple-500/30"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <MessageCircle className="h-8 w-8 text-purple-300" />
            </motion.div>

            <motion.div
              className="absolute -bottom-5 -left-5 bg-emerald-500/20 backdrop-blur-md rounded-full p-3 border border-emerald-500/30"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 4,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Zap className="h-6 w-6 text-emerald-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Zap(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
