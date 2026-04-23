"use client"

import { motion } from "framer-motion"
import { Tv, Watch, Wine, Bot, Coffee, CreditCard } from "lucide-react"

const prizes = [
  {
    faixa: "Faixa 1",
    range: "R$ 500 MIL – R$ 699 MIL",
    icon: Coffee,
    name: "Cafeteira Premium",
    description: "Sistema de cápsulas profissional",
  },
  {
    faixa: "Faixa 2",
    range: "R$ 700 MIL – R$ 899 MIL",
    icon: Bot,
    name: "Robô Aspirador",
    description: "Inteligente com mapeamento",
  },
  {
    faixa: "Faixa 3",
    range: "R$ 900 MIL – R$ 1,09 M",
    icon: Wine,
    name: "Adega Climatizada",
    description: "Capacidade para 28 garrafas",
  },
  {
    faixa: "Faixa 4",
    range: "R$ 1,1 M – R$ 1,39 M",
    icon: Watch,
    name: "Apple Watch",
    description: "Modelo mais recente com GPS",
  },
  {
    faixa: "Faixa 5",
    range: "A partir de R$ 1,4 M",
    icon: Tv,
    name: 'Smart TV 65"',
    description: "4K Ultra HD com tecnologia QLED",
  },
]

export function PrizesSection() {
  return (
    <section id="premios" className="py-14 sm:py-20 md:py-32 bg-[#0d1115]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">
            Prêmios por Valor da Carta de Crédito
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed">
            A cada venda de carta de crédito concretizada pela AX Mercado Real, sua recompensa é definida pelo valor da carta indicada
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.faixa}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col p-4 sm:p-6 rounded-lg border border-gray-800 bg-[#161b21] hover:border-[#7CEB63]/40 hover:shadow-lg hover:shadow-[#7CEB63]/5 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center gap-3 flex-1">
                {/* Faixa badge */}
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#7CEB63] bg-[#7CEB63]/10 px-3 py-1 rounded-full">
                  {prize.faixa}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#7CEB63]/10 flex items-center justify-center border border-[#7CEB63]/20">
                  <prize.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#7CEB63]" />
                </div>

                {/* Prize info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-white">
                    {prize.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 text-pretty mb-3">
                    {prize.description}
                  </p>
                </div>

                {/* Credit range */}
                <div className="w-full border-t border-gray-800 pt-4 flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1.5 text-[#7CEB63]">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase font-bold tracking-tighter">
                      Carta de Crédito
                    </span>
                  </div>
                  <p className="text-sm text-white font-bold leading-none">{prize.range}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance bonus callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-14 max-w-3xl mx-auto"
        >
          <div className="p-5 sm:p-7 rounded-lg border border-[#7CEB63]/25 bg-[#7CEB63]/5 text-center">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#7CEB63] bg-[#7CEB63]/10 px-3 py-1 rounded-full mb-3">
              Bônus por Performance
            </span>
            <p className="text-white text-base sm:text-lg font-semibold mb-1">
              Bônus Extra de R$ 2.000,00
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              O participante com a maior premiação total no mês recebe um bônus adicional de R$ 2.000,00 &mdash; válido quando houver mais de uma indicação convertida em venda no período.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-gray-600 max-w-3xl mx-auto leading-relaxed">
            * Os prêmios físicos são entregues em até 60 dias após a escolha do prêmio, sujeitos à disponibilidade de estoque. Os prêmios não podem ser trocados por valores em dinheiro.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
