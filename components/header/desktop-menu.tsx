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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#101418]/85 backdrop-blur-lg py-3 max-w-[1200px] rounded-3xl mx-auto mt-4 border border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-8 gap-4">
        <motion.div className="cursor-pointer" whileHover={{ scale: 1.03 }}>
          <Link href="#inicio">
            <Image
              src="/logo-branco.png"
              width={120}
              height={36}
              alt="AX Mercado Real"
              className="object-contain h-9 w-auto"
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex space-x-8 items-center">
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
              <a href={item.href} className="text-gray-300 text-base hover:text-white transition text-nowrap">
                {item.label}
              </a>
              <div className="absolute left-0 bottom-0 h-0.5 bg-[#7CEB63] w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}

          <motion.a
            href="#formulario"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.5 },
            }}
            className="bg-[#7CEB63] hover:bg-[#6ad854] text-[#101418] font-bold px-6 py-2 rounded-lg transition duration-200 cursor-pointer text-sm shadow-lg shadow-[#7CEB63]/30 active:scale-[0.98]"
          >
            Indicar Agora
          </motion.a>
        </nav>
      </div>
    </header>
  )
}

export default DesktopMenu
