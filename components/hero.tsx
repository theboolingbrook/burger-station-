"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-x-hidden overflow-y-visible"
>
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1600&q=80"
          alt="Cinematic Burger"
          fill
          className="object-cover opacity-40 grayscale-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
      </div>

      <div className="relative z-20 text-center space-y-8 px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="text-primary font-black italic uppercase tracking-[0.3em] text-sm md:text-base">
            Premium Taste Since Day One
          </span>
          <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.85] mt-4">
            THE <span className="text-primary">BEST</span> <br /> BURGERS <br /> IN TOWN
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-300 text-lg md:text-2xl font-medium tracking-tight max-w-2xl mx-auto"
        >
          Juicy Beef, Crispy Chicken & Loaded Fries. Experience the ultimate flavor explosion at Burger Station.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={scrollToMenu}
            className="w-full sm:w-auto text-xl h-16 px-12 font-black italic uppercase tracking-wider bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,199,44,0.3)]"
          >
            Order Now
          </Button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToMenu}
        >
          <ChevronDown className="w-10 h-10 text-primary opacity-50 hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </section>
  )
}
