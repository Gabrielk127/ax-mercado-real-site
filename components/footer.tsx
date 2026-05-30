"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const serviceLinks = [
  { label: "Consórcio", href: "/consorcio" },
  { label: "Financiamento", href: "/financiamento" },
  { label: "Carta Contemplada", href: "/carta-contemplada" },
  { label: "Para sua Empresa", href: "/para-sua-empresa" },
  { label: "Assessoria Financeira", href: "/assessoria-financeira" },
]

export function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-[#d4d3ce] border-t border-[#d4d3ce]/5">
      {/* Main Footer Grid */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:col-span-1"
          >
            <div className="relative inline-block">
              <Link href="/">
                <Image
                  src="/logo-branco.png"
                  alt="AX Negócios, Créditos & Investimentos"
                  width={180}
                  height={64}
                  className="object-contain opacity-90"
                />
              </Link>
              <div className="absolute -bottom-2 left-0 w-2/5 h-[2px] bg-[#986f31]" />
            </div>
            <p className="text-[#d4d3ce]/50 text-sm leading-relaxed max-w-xs font-light">
              Soluções financeiras personalizadas para realizar seus objetivos com transparência, excelência e comprometimento.
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-sm mb-7 text-[#d4d3ce] tracking-widest uppercase">Soluções</h3>
            <ul className="space-y-3.5 text-[#d4d3ce]/50 text-sm font-light">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#986f31] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#986f31] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-sm mb-7 text-[#d4d3ce] tracking-widest uppercase">Contato</h3>
            <ul className="space-y-4 text-[#d4d3ce]/50 text-sm font-light">
              <li>
                <a
                  href="https://wa.me/5543991708520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:text-[#986f31] transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20 group-hover:bg-[#986f31] transition-colors duration-300 shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#986f31] group-hover:text-[#d4d3ce]" />
                  </div>
                  <span>(43) 99170-8520</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@axnegocioseinvestimentos.com.br"
                  className="flex items-center gap-3 group hover:text-[#986f31] transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20 group-hover:bg-[#986f31] transition-colors duration-300 shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#986f31] group-hover:text-[#d4d3ce]" />
                  </div>
                  <span className="break-all">contato@axnegocioseinvestimentos.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#986f31]" />
                </div>
                <span>Rua Adhemar Pereira de Barros, 630<br />Bela Suíça, Londrina - PR</span>
              </li>
            </ul>
          </motion.div>

          {/* Hours Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-sm mb-7 text-[#d4d3ce] tracking-widest uppercase">Atendimento</h3>
            <ul className="space-y-4 text-[#d4d3ce]/50 text-sm font-light">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#986f31]" />
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-[#d4d3ce]/80 font-medium block">Segunda a Sexta</span>
                    <span>08h00 às 18h00</span>
                  </div>
                  <div>
                    <span className="text-[#d4d3ce]/80 font-medium block">Sábado</span>
                    <span>09h00 às 13h00</span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-[#d4d3ce]/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[#d4d3ce]/30 text-xs tracking-widest uppercase font-light text-center md:text-left">
            © {new Date().getFullYear()} AX Negócios, Créditos &amp; Investimentos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-[#d4d3ce]/25 text-[10px] tracking-widest uppercase font-light">
            <span className="hover:text-[#986f31] transition-colors cursor-pointer">Privacidade</span>
            <span className="hover:text-[#986f31] transition-colors cursor-pointer">Termos</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
