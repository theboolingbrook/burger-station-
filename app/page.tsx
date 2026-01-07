"use client"

import { motion } from "framer-motion"
import { menuItems, branches } from "@/lib/menu-data"
import { MenuCard } from "@/components/menu-card"
import { StickyCart } from "@/components/sticky-cart"
import { Navbar } from "@/components/navbar" // Added Navbar
import { Hero } from "@/components/hero" // Added Hero
import { Gallery } from "@/components/gallery" // Added Gallery import
import { About } from "@/components/about" // Added About import
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Facebook, MapPin, Phone } from "lucide-react"

export default function Home() {
  const categories = ["all", "burgers", "twisters", "sliders", "sides", "fries"]

  return (
    <main className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <section id="menu" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-primary font-black italic uppercase tracking-[0.2em] text-xs">Freshly Prepared</span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              OUR <span className="text-primary">MENU</span>
            </h2>
          </motion.div>
          <div className="h-1.5 w-32 bg-primary mx-auto rounded-full" />
        </div>

        <Tabs defaultValue="all" className="space-y-16">
          <div id="categories" className="flex justify-center scroll-mt-32">
            <TabsList className="bg-zinc-900/50 backdrop-blur-md p-1.5 h-auto flex flex-wrap justify-center border border-zinc-800/50 rounded-full">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="px-8 py-3.5 text-xs font-black italic uppercase tracking-widest rounded-full data-[state=active]:bg-primary data-[state=active]:text-black transition-all duration-500"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-0 outline-none">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {menuItems
                  .filter((item) => (cat === "all" ? true : item.category === cat))
                  .map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <Gallery />
      <About />
      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Logo & About */}
          <div className="md:col-span-4 space-y-8">
            <div className="flex flex-col">
              <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-none">
                BURGER <span className="text-primary">STATION</span>
              </h3>
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase mt-2">
                Gujranwala's Finest
              </span>
            </div>
            <p className="text-zinc-500 max-w-sm text-base leading-relaxed font-medium">
              Burger Station serves the most authentic grilled and crispy burgers in Gujranwala. We focus on premium
              ingredients and unforgettable taste.
            </p>
            <div className="flex items-center gap-5">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/1Bd9Pfm6Kg/",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/bstation.pk?igsh=MXJzZ3dkdG53eW5qYw==",
                },
                { icon: Phone, href: "https://wa.me/923071007097" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-primary hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 hover:scale-110 active:scale-95 shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Branches */}
          <div className="md:col-span-8">
            <div className="space-y-6 mb-10">
              <span className="text-primary font-black italic uppercase tracking-widest text-xs">Find Us</span>
              <h4 className="text-3xl font-black italic uppercase tracking-tighter">Our Locations</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {branches.map((branch) => (
                <div
                  key={branch.name}
                  className="group space-y-6 p-8 bg-zinc-900/20 rounded-3xl border border-zinc-800/50 hover:border-primary/30 transition-all duration-500 hover:bg-zinc-900/40 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-150" />
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="space-y-2 relative z-10">
                    <h5 className="font-black italic uppercase text-xl tracking-tight leading-none group-hover:text-primary transition-colors">
                      {branch.name}
                    </h5>
                    <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Branch</p>
                  </div>
                  <a
                    href={`tel:${branch.phone.replace(/-/g, "")}`}
                    className="flex items-center gap-3 text-zinc-400 hover:text-primary transition-all cursor-pointer group/link pt-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-black italic uppercase tracking-wider">{branch.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>© 2025 BURGER STATION.</p>
            <p className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full" />
            <p>PREMIUM BURGER EXPERIENCE</p>
          </div>
          <p className="text-primary/50">ESTABLISHED IN GUJRANWALA</p>
        </div>
      </footer>
      {/* Sticky Cart for Mobile */}
      <StickyCart /> // added StickyCart component
    </main>
  )
}
