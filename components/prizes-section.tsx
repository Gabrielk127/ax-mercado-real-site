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
    <section id="premios" className="py-14 sm:py-20 md:py-32 bg-[#1c1c1c] relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4d3ce] mb-4 tracking-tight">
            Prêmios por Valor da Carta de Crédito
          </h2>
          <p className="text-lg text-[#d4d3ce]/60 max-w-2xl mx-auto leading-relaxed font-light">
            Sua recompensa é definida pelo valor total das cartas de crédito concretizadas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.faixa}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-8 rounded-2xl border border-[#d4d3ce]/5 bg-[#273849]/30 backdrop-blur-sm hover:border-[#986f31]/40 hover:bg-[#273849]/50 transition-all duration-500 shadow-xl"
            >
              <div className="flex flex-col items-center text-center gap-6 flex-1">
                {/* Faixa badge */}
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#986f31] bg-[#986f31]/10 px-4 py-1.5 rounded-full border border-[#986f31]/20">
                  {prize.faixa}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#986f31]/20 to-transparent flex items-center justify-center border border-[#986f31]/10 group-hover:scale-110 transition-transform duration-500">
                  <prize.icon className="w-8 h-8 text-[#986f31]" />
                </div>

                {/* Prize info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 text-[#d4d3ce]">
                    {prize.name}
                  </h3>
                  <p className="text-sm text-[#d4d3ce]/50 leading-relaxed">
                    {prize.description}
                  </p>
                </div>

                {/* Credit range */}
                <div className="w-full border-t border-[#d4d3ce]/5 pt-6 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-[#986f31]/70">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-widest">
                      Volume de Crédito
                    </span>
                  </div>
                  <p className="text-base text-[#d4d3ce] font-bold tracking-tight">{prize.range}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="p-8 sm:p-12 rounded-[2rem] border border-[#986f31]/20 bg-gradient-to-br from-[#986f31]/5 via-transparent to-[#273849]/5 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#986f31]/50 to-transparent" />
            
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#986f31] mb-6">
              Bônus Exclusivo
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#d4d3ce] mb-4">
              + R$ 2.000,00 por Performance
            </h3>
            <p className="text-[#d4d3ce]/60 text-lg leading-relaxed max-w-2xl mx-auto font-light">
              O participante com o maior volume total de indicações convertidas no mês recebe um bônus adicional em dinheiro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
