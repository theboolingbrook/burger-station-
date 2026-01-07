"use client"

import { useCart } from "@/hooks/use-cart"
import { branches } from "@/lib/menu-data"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, Minus, Plus, Trash2, Send } from "lucide-react"
import { useState, type ReactNode } from "react"

export function CartDrawer({ trigger }: { trigger?: ReactNode }) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    branch: branches[0].name,
  })

  const handleCheckout = () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill in all required fields: Name, Phone, and Delivery Address.")
      return
    }

    const orderText = items
      .map((item) => `• ${item.name} x${item.quantity} - Rs ${item.price * item.quantity}`)
      .join("\n")

    const message = `🍔 *NEW ORDER FROM BURGER STATION*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Preferred Branch: ${formData.branch}

📋 *Order Items:*
${orderText}

💰 *Total Amount: Rs ${total}*

Please confirm this order. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/923071007097?text=${encodedMessage}`, "_blank")
    clearCart()
    setFormData({ name: "", phone: "", address: "", branch: branches[0].name })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || (
          <Button variant="outline" size="icon" className="relative bg-zinc-900 border-zinc-800 hover:bg-zinc-800">
            <ShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md bg-zinc-950 border-zinc-800 text-zinc-100 flex flex-col h-full">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-black italic uppercase text-primary">Your Cart</SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 -mx-6 px-6">
          {items.length === 0 ? (
            <div className="text-center py-20 text-zinc-500">
              <ShoppingCart className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="font-bold uppercase tracking-wider text-sm">Your cart is empty.</p>
              <p className="text-xs mt-2">Add some delicious items!</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-bold text-sm uppercase tracking-tight">{item.name}</h4>
                      <p className="text-primary font-black text-sm">Rs {item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-zinc-500 hover:text-red-500 hover:bg-red-500/10"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-zinc-800">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-xs font-black uppercase tracking-wider">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="bg-zinc-900 border-zinc-800 focus:border-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-xs font-black uppercase tracking-wider">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="03XX-XXXXXXX"
                      className="bg-zinc-900 border-zinc-800 focus:border-primary"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="branch" className="text-xs font-black uppercase tracking-wider">
                      Preferred Branch
                    </Label>
                    <Select value={formData.branch} onValueChange={(val) => setFormData({ ...formData, branch: val })}>
                      <SelectTrigger className="bg-zinc-900 border-zinc-800 focus:border-primary">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800">
                        {branches.map((b) => (
                          <SelectItem key={b.name} value={b.name}>
                            {b.name} - {b.phone}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address" className="text-xs font-black uppercase tracking-wider">
                      Delivery Address *
                    </Label>
                    <Input
                      id="address"
                      placeholder="House #, Street, Area"
                      className="bg-zinc-900 border-zinc-800 focus:border-primary"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>

        <div className="pt-6 space-y-4 border-t border-zinc-800 bg-zinc-950">
          <div className="flex items-center justify-between text-lg font-black italic uppercase">
            <span>Total</span>
            <span className="text-primary text-2xl">Rs {total}</span>
          </div>
          <Button
            className="w-full h-14 text-base font-black italic uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all"
            disabled={items.length === 0}
            onClick={handleCheckout}
          >
            <Send className="w-5 h-5 mr-2" />
            Place Order on WhatsApp
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
