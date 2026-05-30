"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/header/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { BarChart3, BookOpen, Target, MessageCircle, CheckCircle } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const pillars = [
  {
    icon: Target,
    title: "Diagnóstico Personalizado",
    desc: "Análise completa do seu perfil de investidor, objetivos financeiros e tolerância a risco para construir a estratégia ideal.",
  },
  {
    icon: BarChart3,
    title: "Produtos Exclusivos",
    desc: "Acesso a produtos de renda fixa, variável, fundos e alternativas diversificadas com foco em resultado e proteção.",
  },
  {
    icon: BookOpen,
    title: "Educação Financeira",
    desc: "Você compreende onde investe. Orientamos de forma clara e transparente, sem termos técnicos desnecessários.",
  },
]

const steps = [
  { num: "01", title: "Conversa inicial", desc: "Entendemos seus objetivos de curto, médio e longo prazo." },
  { num: "02", title: "Análise de perfil", desc: "Identificamos seu perfil de risco e situação patrimonial atual." },
  { num: "03", title: "Elaboração da estratégia", desc: "Montamos um plano de alocação adequado ao seu perfil." },
  { num: "04", title: "Acompanhamento contínuo", desc: "Monitoramos e ajustamos a carteira periodicamente conforme o mercado." },
]

export default function AssessoriaFinanceiraPage() {
  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <Header />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/hero-advisor.png"
            alt="Assessoria financeira — AX Negócios"
            fill
            priority
            className="object-cover object-center opacity-30"
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
              Aplicações Financeiras
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4d3ce] leading-[1.05] tracking-tighter mb-6"
            >
              Seu dinheiro trabalhando<br />
              por <em className="text-[#986f31] not-italic">você</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#d4d3ce]/70 leading-relaxed font-light mb-10"
            >
              Assessoria de investimentos com foco em resultados reais. Construímos juntos uma estratégia que equilibra segurança, rentabilidade e os seus objetivos de vida.
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
                id="assessoria-hero-whatsapp"
                className="inline-flex items-center gap-2 bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold px-8 py-4 rounded-full text-sm shadow-xl shadow-[#986f31]/20 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com assessor
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PILLARS ───────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">
            Nossa abordagem de assessoria
          </h2>
          <p className="text-[#d4d3ce]/50 text-base font-light max-w-md">
            Não vendemos produtos. Construímos estratégias financeiras sob medida para cada cliente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#d4d3ce]/[0.03] border border-[#d4d3ce]/8 hover:border-[#986f31]/40 rounded-2xl p-8 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#986f31]/10 border border-[#986f31]/20 flex items-center justify-center mb-5 group-hover:bg-[#986f31] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#986f31] group-hover:text-[#d4d3ce] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#d4d3ce] mb-3 tracking-tight">{p.title}</h3>
                <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── SPLIT: WHO IT'S FOR ────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter leading-tight mb-6">
                Para quem é a assessoria financeira?
              </h2>
              <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-8">
                Nossa assessoria é para quem quer dar o próximo passo no crescimento do patrimônio, seja começando a investir ou reorganizando uma carteira existente.
              </p>
              <div className="space-y-3.5">
                {[
                  "Pessoas físicas que querem mais rentabilidade que a poupança",
                  "Profissionais liberais planejando aposentadoria",
                  "Empresários que desejam separar patrimônio pessoal do empresarial",
                  "Famílias planejando a educação dos filhos",
                  "Quem recebeu uma herança e não sabe como aplicar",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#986f31]/15 border border-[#986f31]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#986f31]" />
                    </div>
                    <span className="text-[#d4d3ce]/70 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src="/hero-advisor.png" alt="Assessoria financeira personalizada" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#1c1c1c] border border-[#986f31]/30 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#986f31]/15 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-[#986f31]" />
                  </div>
                  <div>
                    <p className="text-[#d4d3ce] text-sm font-bold">Carteira Personalizada</p>
                    <p className="text-[#d4d3ce]/50 text-xs">Adequada ao seu perfil de risco</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">Como trabalhamos</h2>
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

      {/* ─── CONTACT ───────────────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-6">
                Comece sua jornada financeira
              </h2>
              <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-6">
                A primeira conversa é gratuita e sem compromisso. Vamos entender onde você está e para onde quer ir.
              </p>
              <div className="space-y-2.5">
                {["Análise de perfil sem custo", "Estratégia personalizada", "Acompanhamento contínuo", "Transparência total nas recomendações"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-[#d4d3ce]/70 text-sm font-light">
                    <CheckCircle className="w-4 h-4 text-[#986f31] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#d4d3ce]/[0.03] border border-[#986f31]/20 rounded-2xl p-8">
              <ContactForm interest="Assessoria Financeira" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
