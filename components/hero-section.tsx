"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gift, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#101418] pt-20 pb-10 md:pt-24 md:pb-0"
    >
      {/* Subtle green glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, #7CEB63 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#7CEB63]/10 text-[#7CEB63] px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 md:mb-8 border border-[#7CEB63]/25">
              <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Campanha Indicação Premiada &mdash; AX Mercado Real
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-balance leading-tight"
          >
            Sua Indicação Vale{" "}
            <span className="text-[#7CEB63]">Prêmios Premium</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty leading-relaxed"
          >
            Compartilhe a excelência da AX Mercado Real. Quando sua indicação resultar na compra de uma carta de crédito, você ganha de Apple Watches a Smart TVs 65&quot; QLED.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#7CEB63] hover:bg-[#6ad854] text-[#101418] w-full sm:w-auto px-8 py-5 sm:py-6 text-base sm:text-lg font-bold cursor-pointer shadow-lg shadow-[#7CEB63]/30 active:scale-[0.98] transition-all duration-200"
              onClick={scrollToForm}
            >
              Indicar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-white/5 hover:text-white w-full sm:w-auto px-8 py-5 sm:py-6 text-base sm:text-lg bg-transparent cursor-pointer active:scale-[0.98] transition-all duration-200"
              onClick={() =>
                document.getElementById("premios")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Tabela de Prêmios
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-sm text-gray-500 font-medium"
          >
            Bônus extra de +R$ 2.000,00 para o melhor indicador do mês!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-600 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
