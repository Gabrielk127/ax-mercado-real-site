"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#101418] text-white py-10 sm:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <Image
                src="/logo-branco.png"
                alt="AX Mercado Real"
                width={140}
                height={50}
                className="object-contain opacity-80"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Conectando pessoas a oportunidades de crédito imobiliário com excelência e transparência.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-base mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              {["#inicio", "#premios", "#regras", "#formulario"].map((href, i) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#7CEB63] transition-colors cursor-pointer">
                    {["Início", "Prêmios", "Regras", "Formulário"][i]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-base mb-4 text-white">Contato</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7CEB63]" />
                <span>(43) 9170-8520</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#7CEB63]" />
                <span>contato@axmercadoreal.com.br</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-base mb-4 text-white">Horário de Atendimento</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 9h às 13h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} AX Mercado Real. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}
