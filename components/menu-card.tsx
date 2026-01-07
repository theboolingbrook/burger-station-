"use client"

import Image from "next/image"
import type { MenuItem } from "@/lib/menu-data"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"

export function MenuCard({ item }: { item: MenuItem }) {
  const addItem = useCart((state) => state.addItem)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative shrink-0 w-[85vw] sm:w-auto overflow-visible rounded-3xl bg-zinc-900/30 backdrop-blur-md p-3 border border-zinc-800/50 transition-all duration-500 shadow-lg"

    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4 bg-zinc-800">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {item.isPair && (
          <div className="absolute top-3 left-3 bg-primary text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">
            Pair
          </div>
        )}

        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <Button
            size="icon"
            onClick={() => addItem(item)}
            className="rounded-full w-12 h-12 bg-primary text-black hover:bg-white transition-colors shadow-2xl"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <div className="px-2 pb-2 space-y-3">
        <div className="flex flex-col gap-1">
          <h3 className="font-black italic uppercase text-lg text-zinc-100 leading-tight group-hover:text-primary transition-colors duration-300">
            {item.name}
          </h3>
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{item.category}</p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-black uppercase tracking-tighter">Price</span>
            <p className="text-xl font-black text-primary leading-none">Rs {item.price}</p>
          </div>

          <Button
            onClick={() => addItem(item)}
            variant="outline"
            size="sm"
            className="rounded-full h-9 px-4 border-zinc-800 hover:bg-primary hover:text-black transition-all font-black italic uppercase text-[10px]"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
