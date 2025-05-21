"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Bot, Phone, Users, Edit, BarChart, ArrowUpRight } from "lucide-react"

export default function ServicesSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const services = [
    {
      icon: <Calendar className="h-10 w-10 text-emerald-400" />,
      title: "VIRTUAL EVENT ORGANIZER",
      description:
        "Penyelenggaraan acara virtual melalui Telegram dengan rundown, konsep, dokumentasi sertifikat, talent performance, dan video.",
      color: "from-emerald-500/20 to-teal-500/5",
    },
    {
      icon: <Bot className="h-10 w-10 text-purple-400" />,
      title: "USERBOT & AUTOMASI",
      description:
        "Solusi otomatisasi grup Telegram dengan berbagai modul seperti Auto Welcome, Auto Reply, Broadcast, dan banyak lagi.",
      color: "from-purple-500/20 to-indigo-500/5",
    },
    {
      icon: <Phone className="h-10 w-10 text-pink-400" />,
      title: "NOMOR VIRTUAL (NOKOS)",
      description:
        "Nomor virtual untuk verifikasi dan operasional Telegram dengan berbagai paket sesuai kebutuhan Anda.",
      color: "from-pink-500/20 to-rose-500/5",
    },
    {
      icon: <Edit className="h-10 w-10 text-amber-400" />,
      title: "DESIGN EDITING",
      description:
        "Layanan editing foto, video, audio, dan dokumentasi sertifikat untuk kebutuhan bisnis dan acara Anda.",
      color: "from-amber-500/20 to-orange-500/5",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-400" />,
      title: "AUTOMATISASI GRUP",
      description: "Bot untuk perhitungan gcast, tagall, kehadiran, typing, dan kreativitas dalam grup Telegram Anda.",
      color: "from-blue-500/20 to-sky-500/5",
    },
    {
      icon: <BarChart className="h-10 w-10 text-emerald-400" />,
      title: "SOCIAL MEDIA GROWTH",
      description:
        "Tingkatkan followers dan member grup di Telegram, Instagram, YouTube, Facebook, dan platform lainnya.",
      color: "from-emerald-500/20 to-teal-500/5",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="layanan" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            LAYANAN KAMI
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-tight">
            SOLUSI{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">LENGKAP</span>{" "}
            UNTUK TELEGRAM
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan untuk memaksimalkan penggunaan Telegram dan media sosial dalam bisnis
            Anda.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full rounded-xl border-0 bg-gradient-to-br border-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 group overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardContent className="p-6 relative">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5 text-white/50" />
                  </div>
                  <div className="mb-6 bg-white/5 rounded-lg p-3 w-fit">{service.icon}</div>
                  <h3 className="text-xl font-display mb-3 text-white tracking-tight">{service.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-display text-white mb-8 text-center tracking-tight">
            MODUL{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">USERBOT</span>{" "}
            TELEGRAM
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Auto Welcome",
              "Auto Reply",
              "Broadcast",
              "Scheduler",
              "Group Analytics",
              "Auto Kick",
              "Anti Spam",
              "Media Download",
              "Poll Creator",
              "Link Preview",
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-colors duration-300 group"
              >
                <p className="text-sm font-medium text-white/80 group-hover:text-emerald-400 transition-colors">
                  {module}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
