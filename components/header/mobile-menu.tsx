"use client"

import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const normalizeText = (text: string) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")

  const handleNavigation = (id: string) => {
    const section = document.getElementById(normalizeText(id))
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.3 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 },
    }),
  }

  const menuItems = ["Início", "Prêmios", "Como Funciona", "Regras", "Formulário"]

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pointer-events-none">
        <div className="max-w-[1100px] mx-auto bg-[#986f31]/10 backdrop-blur-md border border-[#986f31]/20 rounded-full px-6 py-3 shadow-2xl pointer-events-auto flex justify-between items-center">
          <Image
            src="/logo-branco.png"
            width={140}
            height={42}
            alt="AX Mercado Real"
            className="object-contain h-10 w-auto"
          />
          <button 
            onClick={toggleMenu} 
            className="w-10 h-10 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20 text-[#986f31]"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={20} />
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
            className="fixed inset-0 z-40 bg-[#1c1c1c]/95 backdrop-blur-2xl flex flex-col items-center justify-center px-8"
          >
            <motion.ul className="space-y-10 text-center mb-12">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  className="text-3xl font-bold text-[#d4d3ce]/60 hover:text-[#986f31] transition-colors cursor-pointer tracking-tight"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            >
              <a href="#formulario" onClick={() => setIsOpen(false)}>
                <button className="bg-[#986f31] text-[#d4d3ce] font-bold px-12 py-5 rounded-2xl shadow-2xl shadow-[#986f31]/20 text-lg">
                  Indicar Agora
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
