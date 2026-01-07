"use client"

import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { CartDrawer } from "./cart-drawer"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag } from "lucide-react"

export function StickyCart() {
  const { items, total } = useCart()

  return (
    <AnimatePresence>
      {items.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 backdrop-blur-xl border-2 border-primary/30 p-5 rounded-2xl flex items-center justify-between shadow-2xl shadow-primary/20">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Cart Total</p>
              <p className="text-2xl font-black text-primary italic">Rs {total}</p>
              <p className="text-[10px] text-zinc-600 font-bold">
                {items.length} item{items.length > 1 ? "s" : ""}
              </p>
            </div>
            <CartDrawer
              trigger={
                <Button className="h-14 px-8 font-black italic uppercase tracking-wider rounded-xl shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  View Cart
                </Button>
              }
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
