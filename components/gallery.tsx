"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  "https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80",
  "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80",
  "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80",
]

export function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-zinc-950 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
            THE <span className="text-primary">GALLERY</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl aspect-square ${
                idx === 0 || idx === 4 ? "md:col-span-2 md:aspect-video" : ""
              }`}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
