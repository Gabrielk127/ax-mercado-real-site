"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Consórcio", href: "/consorcio" },
  { label: "Financiamento", href: "/financiamento" },
  { label: "Carta Contemplada", href: "/carta-contemplada" },
  { label: "Para sua Empresa", href: "/para-sua-empresa" },
  { label: "Assessoria", href: "/assessoria-financeira" },
]

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuVariants: Variants = {
    hidden: { opacity: 0, scale: 0.97, y: -12 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, scale: 0.97, y: -12, transition: { duration: 0.25 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.07, type: "spring", stiffness: 120, damping: 20 },
    }),
  }

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
        <div className="max-w-[1100px] mx-auto bg-[#986f31]/10 backdrop-blur-md border border-[#986f31]/20 rounded-full px-5 py-3 shadow-2xl pointer-events-auto flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo-branco.png"
              width={130}
              height={40}
              alt="AX Negócios, Créditos & Investimentos"
              className="object-contain h-9 w-auto"
            />
          </Link>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20 text-[#986f31]"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[#1c1c1c]/97 backdrop-blur-2xl flex flex-col items-center justify-center px-8"
          >
            <motion.ul className="space-y-8 text-center mb-12">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-bold transition-colors tracking-tight ${
                        isActive ? "text-[#986f31]" : "text-[#d4d3ce]/60 hover:text-[#986f31]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            >
              <a
                href="https://wa.me/5543991708520"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                id="mobile-cta-whatsapp"
              >
                <button className="bg-[#986f31] text-[#d4d3ce] font-bold px-12 py-4 rounded-full shadow-2xl shadow-[#986f31]/20 text-lg hover:bg-[#7a5927] transition-colors active:scale-[0.98]">
                  Fale Conosco
                </button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu
