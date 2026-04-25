"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-[#d4d3ce] py-16 md:py-24 border-t border-[#d4d3ce]/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="relative inline-block">
              <Image
                src="/logo-branco.png"
                alt="AX Mercado Real"
                width={200}
                height={72}
                className="object-contain opacity-90"
              />
              <div className="absolute -bottom-2 left-0 w-1/2 h-[2px] bg-[#986f31]" />
            </div>
            <p className="text-[#d4d3ce]/50 text-sm leading-relaxed max-w-xs font-light">
              Conectando pessoas a oportunidades de crédito imobiliário com excelência, transparência e agora, com recompensas exclusivas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-8 text-[#d4d3ce] tracking-tight">Navegação</h3>
            <ul className="space-y-4 text-[#d4d3ce]/50 text-sm font-light">
              {["#inicio", "#premios", "#regras", "#formulario"].map((href, i) => (
                <li key={href}>
                  <a href={href} className="hover:text-[#986f31] transition-colors cursor-pointer inline-flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-[#986f31] group-hover:w-4 transition-all duration-300" />
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
            <h3 className="font-semibold text-lg mb-8 text-[#d4d3ce] tracking-tight">Contato Direto</h3>
            <ul className="space-y-5 text-[#d4d3ce]/50 text-sm font-light">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#273849] flex items-center justify-center border border-[#986f31]/20 group-hover:bg-[#986f31] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#986f31] group-hover:text-[#d4d3ce]" />
                </div>
                <span>(43) 9170-8520</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#273849] flex items-center justify-center border border-[#986f31]/20 group-hover:bg-[#986f31] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#986f31] group-hover:text-[#d4d3ce]" />
                </div>
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
            <h3 className="font-semibold text-lg mb-8 text-[#d4d3ce] tracking-tight">Atendimento</h3>
            <ul className="space-y-4 text-[#d4d3ce]/50 text-sm font-light">
              <li className="flex flex-col gap-1">
                <span className="text-[#d4d3ce]/80 font-medium">Segunda a Sexta</span>
                <span>08:00h às 18:00h</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[#d4d3ce]/80 font-medium">Sábado</span>
                <span>09:00h às 13:00h</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#d4d3ce]/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[#d4d3ce]/30 text-xs tracking-widest uppercase font-light text-center md:text-left">
            © {new Date().getFullYear()} AX Mercado Real. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[#d4d3ce]/20 text-[10px] tracking-widest uppercase font-light">
             <span className="hover:text-[#986f31] transition-colors cursor-pointer">Privacidade</span>
             <span className="hover:text-[#986f31] transition-colors cursor-pointer">Termos</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
