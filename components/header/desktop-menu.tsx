"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Início", href: "/" },
  {
    label: "Consórcio",
    href: "/consorcio",
  },
  {
    label: "Financiamento",
    href: "/financiamento",
  },
  {
    label: "Carta Contemplada",
    href: "/carta-contemplada",
  },
  {
    label: "Para sua Empresa",
    href: "/para-sua-empresa",
  },
  {
    label: "Assessoria",
    href: "/assessoria-financeira",
  },
]

const DesktopMenu = () => {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 pt-4 pointer-events-none transition-all duration-300`}
    >
      <div
        className={`max-w-[1200px] mx-auto backdrop-blur-md border border-[#986f31]/20 rounded-full px-8 py-3 shadow-2xl pointer-events-auto flex justify-between items-center relative overflow-hidden transition-all duration-300 ${
          scrolled ? "bg-[#1c1c1c]/90" : "bg-[#986f31]/10"
        }`}
      >
        {/* Subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#986f31]/5 to-transparent pointer-events-none" />

        <motion.div className="cursor-pointer relative z-10" whileHover={{ scale: 1.02 }}>
          <Link href="/">
            <Image
              src="/logo-branco.png"
              width={150}
              height={44}
              alt="AX Negócios, Créditos & Investimentos"
              className="object-contain h-10 w-auto"
            />
          </Link>
        </motion.div>

        <nav className="hidden lg:flex items-center gap-7 relative z-10">
          {navLinks.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.07, duration: 0.4 } }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 tracking-tight ${
                    isActive ? "text-[#986f31]" : "text-[#d4d3ce]/70 hover:text-[#986f31]"
                  }`}
                >
                  {item.label}
                </Link>
                <div
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#986f31] transition-all duration-300 origin-left ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.div>
            )
          })}

          <motion.a
            href="https://wa.me/5543991708520"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta-whatsapp"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.4 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#986f31] text-[#d4d3ce] font-bold px-6 py-2.5 rounded-full text-sm shadow-lg shadow-[#986f31]/20 border border-[#986f31]/30 transition-all duration-300 hover:bg-[#7a5927]"
          >
            Fale Conosco
          </motion.a>
        </nav>
      </div>
    </header>
  )
}

export default DesktopMenu
