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
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsOpen(false)
            observer.disconnect()
          }
        },
        { threshold: 0.7 },
      )
      observer.observe(section)
    }
  }

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 },
    }),
  }

  const menuItems = ["Início", "Prêmios", "Como Funciona", "Regras", "Formulário"]

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#101418]/85 backdrop-blur-lg py-3 max-w-[1200px] rounded-3xl mt-4 mx-4 flex justify-between items-center px-6 border border-gray-800">
        <Image
          src="/logo-branco.png"
          width={120}
          height={36}
          alt="AX Mercado Real"
          className="object-contain h-9 w-auto"
        />
        <button onClick={toggleMenu} className="z-50 cursor-pointer">
          <motion.div initial={{ rotate: 0 }} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen
              ? <X className="h-7 w-7 text-white" />
              : <Menu className="h-7 w-7 text-gray-300" />
            }
          </motion.div>
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-x-0 z-40 flex flex-col items-center justify-start h-auto bg-[#101418]/97 backdrop-blur-lg text-white py-16 px-8 mx-4 mt-20 rounded-3xl border border-gray-800"
          >
            <motion.ul className="space-y-8 text-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="text-xl text-gray-300 hover:text-white cursor-pointer transition duration-300"
                  onClick={() => handleNavigation(item)}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
              className="mt-8"
            >
              <a href="#formulario">
                <button
                  className="bg-[#7CEB63] hover:bg-[#6ad854] text-[#101418] font-bold px-8 py-3 rounded-lg transition duration-200 cursor-pointer shadow-lg shadow-[#7CEB63]/30"
                  onClick={() => setIsOpen(false)}
                >
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
