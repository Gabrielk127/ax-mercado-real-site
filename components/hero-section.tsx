"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gift, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    const element = document.getElementById("formulario")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#1c1c1c] pt-20 pb-10 md:pt-24 md:pb-0"
    >
      {/* Premium Gradient Overlay inspired by taste-skill */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 30% 50%, #986f31 0%, transparent 70%), radial-gradient(ellipse 50% 70% at 75% 20%, #273849 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c1c1c]/50 to-[#1c1c1c]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 py-10 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-[#986f31]/10 text-[#986f31] px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 border border-[#986f31]/20 backdrop-blur-md">
              <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Campanha Indicação Premiada &mdash; AX Mercado Real
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#d4d3ce] text-balance leading-[1.1] tracking-tight"
          >
            Sua Indicação Vale <br />
            <span className="text-[#986f31] italic font-serif">Prêmios Premium</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#d4d3ce]/80 max-w-2xl mx-auto text-pretty leading-relaxed font-light"
          >
            Compartilhe a excelência da AX Mercado Real. Quando sua indicação resultar na compra de uma carta de crédito, você ganha de Apple Watches a Smart TVs 65&quot; QLED.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] w-full sm:w-auto px-10 py-7 text-lg font-bold rounded-xl shadow-2xl shadow-[#986f31]/20 active:scale-[0.98] transition-all duration-300"
              onClick={scrollToForm}
            >
              Indicar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#d4d3ce]/20 text-[#d4d3ce] hover:bg-[#d4d3ce]/5 w-full sm:w-auto px-10 py-7 text-lg bg-transparent rounded-xl backdrop-blur-sm active:scale-[0.98] transition-all duration-300"
              onClick={() =>
                document.getElementById("premios")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Tabela de Prêmios
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12"
          >
            <ArrowDown className="w-6 h-6 mx-auto text-[#d4d3ce]/30 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
