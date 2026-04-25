"use client"

import { motion } from "framer-motion"
import { UserPlus, MessageCircle, ShoppingBag, Gift } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Indique um Contato",
    description: "Preencha o formulário com seus dados e os do indicado. Ele não deve estar em nossa base ativa.",
  },
  {
    icon: MessageCircle,
    title: "AX Entra em Contato",
    description: "Nossa equipe consultiva apresentará as melhores opções de cartas de crédito para o perfil do seu indicado.",
  },
  {
    icon: ShoppingBag,
    title: "Venda Concretizada",
    description: "Assim que a compra de no mínimo uma carta de crédito for concluída, sua premiação estará garantida.",
  },
  {
    icon: Gift,
    title: "Receba sua Premiação",
    description: "Pagamentos via PIX em até 30 dias úteis e prêmios físicos entregues em até 60 dias.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4d3ce] mb-6 tracking-tight">
            Processo de Participação
          </h2>
          <p className="text-lg text-[#d4d3ce]/60 max-w-2xl mx-auto leading-relaxed font-light">
            Um fluxo simplificado e transparente para você acompanhar suas indicações
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#986f31]/20 to-transparent z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    {/* Outer Glow */}
                    <div className="absolute inset-0 bg-[#986f31]/20 rounded-full blur-xl group-hover:bg-[#986f31]/40 transition-colors duration-500" />
                    
                    {/* Main Circle */}
                    <div className="relative w-20 h-20 rounded-full bg-[#273849] flex items-center justify-center border border-[#986f31]/30 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                      <step.icon className="w-10 h-10 text-[#986f31]" />
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#986f31] flex items-center justify-center font-bold text-sm text-[#d4d3ce] shadow-lg border-2 border-[#273849]">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-4 text-[#d4d3ce] tracking-tight group-hover:text-[#986f31] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#d4d3ce]/50 text-base leading-relaxed font-light px-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
