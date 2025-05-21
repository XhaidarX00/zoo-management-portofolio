"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    services: [
      { name: "Virtual Event Organizer", href: "#layanan" },
      { name: "Userbot & Automasi", href: "#layanan" },
      { name: "Nomor Virtual (NOKOS)", href: "#layanan" },
      { name: "Design Editing", href: "#layanan" },
      { name: "Social Media Growth", href: "#layanan" },
    ],
    links: [
      { name: "Beranda", href: "#" },
      { name: "Layanan", href: "#layanan" },
      { name: "Testimoni", href: "#testimoni" },
      { name: "Kontak", href: "#kontak" },
      { name: "Syarat & Ketentuan", href: "#" },
    ],
    contact: [
      { icon: <Phone className="h-5 w-5 mr-3" />, text: "+62 812 3456 7890" },
      { icon: <MessageCircle className="h-5 w-5 mr-3" />, text: "@ZooManagement" },
      { icon: <Mail className="h-5 w-5 mr-3" />, text: "hello@zoomanagement.com" },
      { icon: <MapPin className="h-5 w-5 mr-3" />, text: "Jakarta, Indonesia" },
    ],
    social: [
      { icon: <Instagram />, name: "Instagram", href: "#" },
      { icon: <Facebook />, name: "Facebook", href: "#" },
      { icon: <Youtube />, name: "YouTube", href: "#" },
      { icon: <ArrowUpRight />, name: "Twitter", href: "#" },
    ],
  }

  return (
    <footer className="relative overflow-hidden pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tracking-tighter">
                ZOO
              </span>
              <span className="text-xs text-emerald-400 -mt-4">®</span>
            </div>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Solusi lengkap untuk pengelolaan Telegram dan media sosial untuk bisnis Anda. Tingkatkan engagement dan
              efisiensi komunikasi Anda.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="text-white/40 hover:text-emerald-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                  aria-label={item.name}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-display mb-6 text-white tracking-wide">LAYANAN</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-display mb-6 text-white tracking-wide">TAUTAN</h3>
            <ul className="space-y-3">
              {footerLinks.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-emerald-400 transition-colors text-sm flex items-center group"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-display mb-6 text-white tracking-wide">KONTAK</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center text-white/60 hover:text-emerald-400 transition-colors text-sm"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Zoo Management. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-white/40 hover:text-emerald-400 transition-colors text-xs">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-white/40 hover:text-emerald-400 transition-colors text-xs">
              Syarat & Ketentuan
            </Link>
            <Link href="#" className="text-white/40 hover:text-emerald-400 transition-colors text-xs">
              Peta Situs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
