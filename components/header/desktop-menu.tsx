"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const DesktopMenu = () => {
  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Prêmios", href: "#premios" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Regras", href: "#regras" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-6 pointer-events-none">
      <div className="max-w-[1100px] mx-auto bg-[#986f31]/10 backdrop-blur-md border border-[#986f31]/20 rounded-full px-10 py-3 shadow-2xl pointer-events-auto flex justify-between items-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#986f31]/5 to-transparent pointer-events-none" />
        
        <motion.div className="cursor-pointer relative z-10" whileHover={{ scale: 1.02 }}>
          <Link href="#inicio">
            <Image
              src="/logo-branco.png"
              width={160}
              height={46}
              alt="AX Mercado Real"
              className="object-contain h-11 w-auto"
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex space-x-10 items-center relative z-10">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 },
              }}
            >
              <a href={item.href} className="text-[#d4d3ce]/70 text-sm font-medium hover:text-[#986f31] transition-all duration-300 tracking-tight">
                {item.label}
              </a>

              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-[#986f31] w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                layoutId="nav-underline"
              />
            </motion.div>
          ))}

          <motion.a
            href="#formulario"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#986f31] text-[#d4d3ce] font-bold px-8 py-3 rounded-2xl transition-all duration-300 cursor-pointer text-sm shadow-xl shadow-[#986f31]/20 border border-[#986f31]/30"
          >
            Indicar Agora
          </motion.a>
        </nav>
      </div>
    </header>
  )
}

export default DesktopMenu
