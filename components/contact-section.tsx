"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, ArrowRight } from "lucide-react"

const contactMessage = encodeURIComponent(
  "Hallo min zoo, mau tanya tentang jasa zoo nih..."
);

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              HUBUNGI KAMI
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-tight">
              SIAP{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                UPGRADE
              </span>{" "}
              TELEGRAM ANDA?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Tertarik dengan layanan kami? Hubungi kami sekarang untuk konsultasi gratis dan penawaran khusus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* WhatsApp */}
              <a
                href={`https://api.whatsapp.com/send/?phone=6285952865767&text=${contactMessage}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#25D366] hover:bg-[#1da851] text-black font-display rounded-full py-6 px-8 transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] text-base group">
                  <Phone className="mr-2 h-5 w-5" />
                  WHATSAPP
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </a>

              {/* Telegram */}
              <a
                href={`https://t.me/kenapatagdar?text=${contactMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#0088cc] hover:bg-[#0077b5] text-white font-display rounded-full py-6 px-8 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,136,204,0.5)] text-base group">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  TELEGRAM
                  <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Button>
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm">
                Atau kirim email ke <span className="text-emerald-400">hello@zoomanagement.com</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
