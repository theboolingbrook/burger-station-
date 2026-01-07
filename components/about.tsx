"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-primary font-black italic uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              BORN IN <br /> <span className="text-primary">GUJRANWALA</span>
            </h2>
          </div>

          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Burger Station serves the most authentic grilled and crispy burgers in Gujranwala. We focus on premium
              ingredients and unforgettable taste.
            </p>
            <p>
              From our signature beef patties to our locally sourced fresh vegetables, every component of our menu is
              selected with one goal: to deliver the ultimate burger experience to our community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary italic leading-none">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Fresh Beef</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-primary italic leading-none">LOCAL</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Ingredients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden border border-zinc-800"
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-50">
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-frying-a-hamburger-meat-on-a-grill-40013-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <p className="text-2xl font-black italic uppercase tracking-tight leading-none text-white">
              Elevating street food <br /> to a <span className="text-primary underline">premium</span> art form.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
