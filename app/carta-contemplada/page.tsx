"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/header/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Zap, DollarSign, Shuffle, Shield, ChevronDown, MessageCircle, CheckCircle } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const benefits = [
  {
    icon: Zap,
    title: "Disponibilidade Imediata",
    desc: "O crédito está contemplado. Você utiliza o valor imediatamente, sem esperar sorteio.",
  },
  {
    icon: DollarSign,
    title: "Sem Juros",
    desc: "Diferente do financiamento, a carta contemplada não cobra juros — apenas a taxa de administração negociável.",
  },
  {
    icon: Shuffle,
    title: "Flexibilidade de uso",
    desc: "Use para comprar imóvel, veículo, pagar dívidas, ou investir no seu negócio conforme o tipo de carta.",
  },
  {
    icon: Shield,
    title: "Segurança jurídica",
    desc: "Transferência documentada e acompanhada pela administradora do consórcio, com total transparência.",
  },
]

const steps = [
  { num: "01", title: "Você encontra a carta", desc: "A carta já está contemplada. Você ou nosso consultor a localiza no mercado." },
  { num: "02", title: "Análise e negociação", desc: "Verificamos a autenticidade e negociamos o deságio com o vendedor." },
  { num: "03", title: "Processo de transferência", desc: "Documentação e transferência junto à administradora." },
  { num: "04", title: "Crédito liberado", desc: "O crédito fica disponível para uso imediato no bem desejado." },
]

const faqs = [
  {
    q: "O que é uma carta contemplada?",
    a: "É uma cota de consórcio que já foi contemplada pelo sorteio, ou seja, o crédito já foi liberado. Você a adquire de outra pessoa que não quer ou não pode usar o crédito, aproveitando as condições sem esperar a contemplação.",
  },
  {
    q: "É seguro comprar uma carta contemplada?",
    a: "Sim, desde que a negociação seja feita com assessoria especializada. Verificamos a autenticidade junto à administradora, analisamos a situação do grupo e acompanhamos toda a transferência para garantir segurança.",
  },
  {
    q: "Para que tipos de compra posso usar?",
    a: "Depende do tipo de carta. Cartas imobiliárias são usadas para imóveis; cartas de automóvel para veículos; e assim por diante. Algumas cartas permitem mais de um tipo de bem.",
  },
  {
    q: "Quanto custa uma carta contemplada?",
    a: "O valor depende do crédito disponível e do deságio negociado com o vendedor. Em geral, você paga entre 85% e 95% do valor do crédito, o que ainda representa uma economia real em relação ao financiamento com juros.",
  },
]

export default function CartaContempladaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <Header />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/consorcio-dreams.png"
            alt="Carta contemplada — AX Negócios"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1c]/85 to-[#1c1c1c]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent" />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] opacity-8 pointer-events-none"
          style={{ background: "radial-gradient(circle, #986f31 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#986f31]/10 text-[#986f31] px-4 py-2 rounded-full text-xs font-medium mb-6 border border-[#986f31]/20 tracking-widest uppercase"
            >
              Crédito já disponível
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4d3ce] leading-[1.05] tracking-tighter mb-6"
            >
              Carta contemplada:<br />
              crédito <em className="text-[#986f31] not-italic">agora</em>, sem juros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#d4d3ce]/70 leading-relaxed font-light mb-10"
            >
              A melhor opção para quem precisa de crédito imediato sem pagar os juros abusivos do financiamento tradicional.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/5543991708520"
                target="_blank"
                rel="noopener noreferrer"
                id="carta-hero-whatsapp"
                className="inline-flex items-center gap-2 bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold px-8 py-4 rounded-full text-sm shadow-xl shadow-[#986f31]/20 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Quero saber mais
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ──────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Por que escolher a carta contemplada?</h2>
          <p className="text-[#d4d3ce]/50 text-base font-light max-w-md">Vantagens reais para quem quer crédito inteligente e imediato.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
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
                  <div>
                    <h3 className="text-lg font-bold text-[#d4d3ce] mb-2 tracking-tight">{b.title}</h3>
                    <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light">{b.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── COMPARE ───────────────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Carta vs. Financiamento</h2>
            <p className="text-[#d4d3ce]/50 text-base font-light max-w-sm mx-auto">Entenda por que a carta contemplada pode ser mais vantajosa.</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-px bg-[#d4d3ce]/8 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-[#1c1c1c] p-4" />
              <div className="bg-[#986f31]/15 p-4 text-center">
                <p className="text-[#986f31] font-bold text-sm">Carta Contemplada</p>
              </div>
              <div className="bg-[#1c1c1c] p-4 text-center">
                <p className="text-[#d4d3ce]/50 font-medium text-sm">Financiamento</p>
              </div>

              {/* Rows */}
              {[
                ["Juros", "Não", "Sim"],
                ["Crédito imediato", "Sim", "Sim"],
                ["Entrada necessária", "Deságio", "Geralmente sim"],
                ["Aprovação", "Simples", "Análise de crédito"],
                ["Custo total", "Menor", "Maior"],
              ].map(([label, left, right], i) => (
                <>
                  <div key={`l-${i}`} className="bg-[#1c1c1c] px-4 py-3.5 text-[#d4d3ce]/70 text-sm font-light">{label}</div>
                  <div key={`m-${i}`} className="bg-[#986f31]/5 px-4 py-3.5 text-center text-sm">
                    <span className="text-[#986f31] font-medium">{left}</span>
                  </div>
                  <div key={`r-${i}`} className="bg-[#1c1c1c] px-4 py-3.5 text-center text-[#d4d3ce]/40 text-sm font-light">{right}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Como funciona</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.num} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center bg-[#d4d3ce]/[0.03] border border-[#d4d3ce]/8 rounded-2xl p-6">
              <div className="inline-flex w-12 h-12 rounded-full bg-[#986f31]/10 border border-[#986f31]/30 items-center justify-center text-[#986f31] font-bold text-sm mb-4 mx-auto">
                {s.num}
              </div>
              <h4 className="text-[#d4d3ce] font-bold text-sm mb-2">{s.title}</h4>
              <p className="text-[#d4d3ce]/45 text-xs leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Perguntas frequentes</h2>
          </motion.div>
          <div className="max-w-2xl space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border border-[#d4d3ce]/8 rounded-xl overflow-hidden">
                <button
                  id={`faq-carta-${i}`}
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
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-6">Interessado em uma carta contemplada?</h2>
            <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-6">
              Nosso consultor vai localizar as melhores opções do mercado, verificar a autenticidade e acompanhar todo o processo com segurança.
            </p>
            <div className="space-y-2">
              {["Análise gratuita da carta", "Verificação junto à administradora", "Assessoria na negociação do deságio", "Acompanhamento de toda a transferência"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[#d4d3ce]/70 text-sm font-light">
                  <CheckCircle className="w-4 h-4 text-[#986f31] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#d4d3ce]/[0.03] border border-[#986f31]/20 rounded-2xl p-8">
            <ContactForm interest="Carta Contemplada" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
