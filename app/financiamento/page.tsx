"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Building, Car, Briefcase, Cog, ChevronDown, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const types = [
  {
    icon: Building,
    title: "Financiamento Imobiliário",
    desc: "Crédito para aquisição de imóvel residencial, comercial ou terreno. Taxas competitivas e prazos estendidos.",
    features: ["Imóveis novos e usados", "Prazo de até 35 anos", "Financiamento de até 80% do valor"],
  },
  {
    icon: Car,
    title: "Financiamento de Veículos",
    desc: "Compre seu carro, caminhão ou moto com aprovação rápida e condições especiais.",
    features: ["Veículos novos e seminovos", "Prazo de até 60 meses", "Análise simplificada"],
  },
  {
    icon: Briefcase,
    title: "Financiamento Empresarial",
    desc: "Capital de giro, expansão e investimentos para sua empresa com soluções estruturadas.",
    features: ["Para micro, pequenas e médias empresas", "Capital de giro e CAPEX", "Taxas adequadas ao porte"],
  },
  {
    icon: Cog,
    title: "Financiamento de Equipamentos",
    desc: "Máquinas, equipamentos industriais e tecnologia para potencializar a produção.",
    features: ["Equipamentos novos e usados", "Financiamento de até 100%", "Leasing e arrendamento"],
  },
]

const steps = [
  { num: "01", title: "Análise de perfil", desc: "Verificamos seu histórico e capacidade de pagamento." },
  { num: "02", title: "Simulação personalizada", desc: "Apresentamos as melhores opções disponíveis para você." },
  { num: "03", title: "Documentação", desc: "Orientamos sobre os documentos necessários para a aprovação." },
  { num: "04", title: "Aprovação de crédito", desc: "Acompanhamos todo o processo junto à instituição financeira." },
  { num: "05", title: "Liberação do crédito", desc: "Crédito na conta e objetivo realizado." },
]

const faqs = [
  {
    q: "Qual a diferença entre financiamento e consórcio?",
    a: "No financiamento, você recebe o crédito imediatamente, mas paga juros sobre o valor financiado. No consórcio, não há juros, mas a contemplação pode demorar. A escolha depende da sua urgência e capacidade financeira.",
  },
  {
    q: "Preciso de entrada para financiar?",
    a: "Depende do produto e da instituição. Para imóveis, geralmente é necessária uma entrada de 20% a 30%. Para veículos e equipamentos, pode ser menor ou até zero em alguns casos.",
  },
  {
    q: "Posso financiar com restrição no CPF?",
    a: "Em geral, restrições no CPF dificultam a aprovação. Mas existem linhas especiais e análise de crédito alternativa para casos específicos. Consulte nosso especialista para verificar sua situação.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Para pessoa física: RG, CPF, comprovante de renda, comprovante de residência e documentos do bem. Para pessoa jurídica: documentos da empresa, balanço patrimonial e faturamento.",
  },
]

export default function FinanciamentoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <Header />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/handshake-corporate.png"
            alt="Financiamento — AX Negócios"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1c]/80 to-[#1c1c1c]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#986f31]/10 text-[#986f31] px-4 py-2 rounded-full text-xs font-medium mb-6 border border-[#986f31]/20 tracking-widest uppercase"
            >
              Crédito imediato
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4d3ce] leading-[1.05] tracking-tighter mb-6"
            >
              Financiamento sob<br />
              <em className="text-[#986f31] not-italic">medida para você</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#d4d3ce]/70 leading-relaxed font-light mb-10"
            >
              Imóveis, veículos, equipamentos e capital empresarial. Encontramos a melhor linha de crédito para o seu perfil com aprovação rápida.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5543991708520"
                target="_blank"
                rel="noopener noreferrer"
                id="financiamento-hero-whatsapp"
                className="inline-flex items-center gap-2 bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold px-8 py-4 rounded-full text-sm shadow-xl shadow-[#986f31]/20 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Simular financiamento
              </a>
              <Link
                href="#modalidades"
                id="financiamento-hero-tipos"
                className="inline-flex items-center gap-2 border border-[#d4d3ce]/20 text-[#d4d3ce]/80 hover:border-[#d4d3ce]/40 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
              >
                Ver modalidades
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TYPES BENTO ───────────────────────────────────────── */}
      <section id="modalidades" className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Modalidades de Financiamento</h2>
          <p className="text-[#d4d3ce]/50 text-base font-light max-w-md">Soluções de crédito para cada necessidade, com análise personalizada do seu perfil.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {types.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#d4d3ce]/[0.03] border border-[#d4d3ce]/8 hover:border-[#986f31]/40 rounded-2xl p-8 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#986f31]/10 border border-[#986f31]/20 flex items-center justify-center shrink-0 group-hover:bg-[#986f31] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#986f31] group-hover:text-[#d4d3ce] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#d4d3ce] mb-2 tracking-tight">{t.title}</h3>
                    <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light mb-5">{t.desc}</p>
                    <ul className="space-y-2">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[#d4d3ce]/60 text-xs font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-[#986f31] shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Como funciona</h2>
            <p className="text-[#d4d3ce]/50 text-base font-light max-w-sm mx-auto">Da análise à liberação do crédito, acompanhamos cada etapa.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div key={s.num} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-full h-[1px] bg-[#986f31]/20 z-0" />
                )}
                <div className="relative z-10 inline-flex w-12 h-12 rounded-full bg-[#986f31]/10 border border-[#986f31]/30 items-center justify-center text-[#986f31] font-bold text-sm mb-4 mx-auto">
                  {s.num}
                </div>
                <h4 className="text-[#d4d3ce] font-bold text-sm mb-2">{s.title}</h4>
                <p className="text-[#d4d3ce]/45 text-xs leading-relaxed font-light">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Perguntas frequentes</h2>
        </motion.div>
        <div className="max-w-2xl space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border border-[#d4d3ce]/8 rounded-xl overflow-hidden">
              <button
                id={`faq-financiamento-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[#d4d3ce] text-sm font-medium hover:text-[#986f31] transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-4 h-4 text-[#986f31] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-[#d4d3ce]/60 text-sm leading-relaxed font-light border-t border-[#d4d3ce]/5 pt-4">{faq.a}</div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-6">
                Simule seu financiamento
              </h2>
              <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed">
                Preencha o formulário e nosso especialista retornará com as melhores opções para o seu perfil.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#d4d3ce]/[0.03] border border-[#986f31]/20 rounded-2xl p-8">
              <ContactForm interest="Financiamento" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
