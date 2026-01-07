"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CartDrawer } from "./cart-drawer"
import { Instagram, Facebook, MessageCircle, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Categories", href: "#categories" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/bstation.pk?igsh=MXJzZ3dkdG53eW5qYw==", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/share/1Bd9Pfm6Kg/", icon: Facebook },
    { name: "Whatsapp", href: "https://wa.me/923071007097", icon: MessageCircle },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3 border-b border-zinc-800" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="#home" className="flex flex-col">
          <h1 className="text-2xl font-black italic uppercase leading-none tracking-tighter">
            BURGER <span className="text-primary">STATION</span>
          </h1>
          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Gujranwala</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-black italic uppercase tracking-wider text-zinc-300 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-primary transition-colors"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <CartDrawer />
          <button className="lg:hidden text-zinc-100 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-950 border-t border-zinc-900 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-black italic uppercase tracking-wider text-zinc-300 hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-center gap-6 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-zinc-400 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
