"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const rules = [
  {
    title: "Quem Pode Participar",
    items: [
      "Pessoas físicas ou jurídicas maiores de 18 anos com CPF/CNPJ válido",
      "Não possuir vínculo empregatício direto com a AX Mercado Real",
      "Preenchimento correto do formulário de indicação disponível na plataforma",
      "Concordância com todos os termos desta Campanha ao enviar a indicação",
    ],
  },
  {
    title: "Indicação Válida",
    items: [
      "Dados do indicador e do indicado preenchidos corretamente no formulário",
      "O indicado não pode estar previamente na base de clientes nem em atendimento ativo da AX Mercado Real",
      "O indicado deve ser contatado pela AX Mercado Real e concretizar a compra de no mínimo uma carta de crédito",
      "Indicações com dados incompletos ou inválidos serão consideradas nulas",
    ],
  },
  {
    title: "Pagamento & Prêmios",
    items: [
      "Pagamento via PIX ou transferência bancária em até 30 dias úteis após a assinatura do contrato",
      "Prêmios físicos entregues em até 60 dias após a escolha do prêmio no endereço indicado",
      "Cada indicado válido gera premiação apenas para o primeiro participante que o cadastrou",
      "Não há limite de indicações — cada indicação deve resultar em venda distinta",
    ],
  },
]

export function RulesSection() {
  return (
    <section id="regras" className="py-20 md:py-32 bg-[#1c1c1c] relative overflow-hidden">
       {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#273849]/20 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d4d3ce] mb-6 tracking-tight">
            Regras da Campanha
          </h2>
          <p className="text-lg text-[#d4d3ce]/60 max-w-2xl mx-auto leading-relaxed font-light">
            Transparência e clareza para garantir a melhor experiência no programa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {rules.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 rounded-3xl border border-[#d4d3ce]/5 bg-[#273849]/20 backdrop-blur-sm hover:border-[#986f31]/30 transition-all duration-500"
            >
              <h3 className="text-xl font-semibold text-[#986f31] mb-8 tracking-tight">
                {section.title}
              </h3>
              <ul className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: sectionIndex * 0.15 + itemIndex * 0.05,
                    }}
                    className="flex gap-4 group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#986f31] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-[#d4d3ce]/70 leading-relaxed text-sm font-light">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-transparent via-[#986f31]/30 to-transparent w-full max-w-md mb-8" />
          <p className="text-sm text-[#d4d3ce]/40 max-w-3xl mx-auto leading-relaxed italic">
            Ao submeter o formulário de indicação, você concorda automaticamente com todas as regras e condições descritas acima. A Campanha é válida por prazo indeterminado e poderá ser suspensa ou alterada a qualquer momento mediante aviso prévio.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
