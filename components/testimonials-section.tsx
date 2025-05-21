"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import QuoteIcon from "@/components/icons/Quote"
import Image from 'next/image';

export default function TestimonialsSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const testimonials = [
    {
      name: "Haidar",
      role: "Event Manager",
      service: "Virtual Event Organizer",
      quote:
        "Zoo Management membantu kami menyelenggarakan webinar dengan 500+ peserta melalui Telegram. Sistem otomatisasi mereka sangat memudahkan pengelolaan acara dan distribusi sertifikat.",
      rating: 5,
      color: "from-emerald-500/20 to-teal-500/5",
      avatarUrl:"/hero.jpeg",
    },
    {
      name: "Kumoy",
      role: "Social Media Manager",
      service: "Userbot & Automasi",
      quote:
        "Userbot dari Zoo Management sangat membantu tim kami dalam mengelola grup Telegram dengan ribuan anggota. Fitur auto reply dan broadcast sangat menghemat waktu kami.",
      rating: 5,
      color: "from-purple-500/20 to-indigo-500/5",
      avatarUrl:"/hero.jpeg",
    },
    {
      name: "Bunny",
      role: "Digital Marketing",
      service: "Social Media Growth",
      quote:
        "Berkat layanan Social Media Growth dari Zoo Management, followers Instagram dan member grup Telegram kami meningkat signifikan dalam waktu singkat. Sangat merekomendasikan!",
      rating: 4,
      color: "from-pink-500/20 to-rose-500/5",
      avatarUrl:"/hero.jpeg",
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
    <section id="testimoni" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-400 text-sm font-medium">
            TESTIMONI KLIEN
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-tight">
            APA KATA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">MEREKA</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Lihat apa kata klien kami tentang layanan Zoo Management.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full rounded-xl border-0 bg-gradient-to-br border-white/5 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 group overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardContent className="p-6 relative">
                  <QuoteIcon className="h-8 w-8 text-white/10 absolute top-4 right-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-white/20" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 text-sm leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    {/* <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-black font-bold mr-3"> */}
                      {/* {testimonial.name.charAt(0)} */}
                    {/* </div> */}
                    <div className="relative w-10 h-10 mr-3">
                      <Image
                        src={testimonial.avatarUrl}
                        alt={`${testimonial.name}’s avatar`}
                        layout="fill"
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-xs text-white/60">
                        {testimonial.role} • {testimonial.service}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
