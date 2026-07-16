"use client"

import { useState } from "react"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Home, Car, Wrench, ChevronDown, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"

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
    icon: Home,
    title: "Consórcio de Imóveis",
    desc: "Para quem quer conquistar a casa própria, um apartamento, sala comercial ou terreno com planejamento e sem juros.",
    credits: "De R$ 50.000 a R$ 1.500.000",
    benefits: ["Sem entrada obrigatória", "Parcelas fixas", "Flexibilidade para usar o crédito"],
  },
  {
    icon: Car,
    title: "Consórcio de Automóveis",
    desc: "Troque ou adquira seu veículo novo ou usado por meio de um consórcio seguro, sem cobrança de juros.",
    credits: "De R$ 15.000 a R$ 300.000",
    benefits: ["Para carros, motos e caminhões", "Fácil aprovação", "Contemplação por sorteio ou lance"],
  },
  {
    icon: Wrench,
    title: "Consórcio de Serviços",
    desc: "Invista na sua formação, viagem, reforma ou procedimento estético com planejamento e parcelas acessíveis.",
    credits: "De R$ 5.000 a R$ 30.000",
    benefits: ["Educação, saúde e bem-estar", "Reforma e decoração", "Viagens e eventos"],
  },
]

const steps = [
  { num: "01", title: "Escolha o plano", desc: "Defina o crédito desejado e o prazo que cabe no seu orçamento." },
  { num: "02", title: "Entre no grupo", desc: "Você passa a fazer parte de um grupo de consorciados com o mesmo objetivo." },
  { num: "03", title: "Pague as parcelas", desc: "Parcelas mensais sem juros, apenas a taxa de administração." },
  { num: "04", title: "Seja contemplado", desc: "Contemplação por sorteio mensal ou pelo maior lance ofertado." },
  { num: "05", title: "Use o crédito", desc: "Receba a carta de crédito e realize seu objetivo com liberdade." },
]

const faqs = [
  {
    q: "Consórcio tem juros?",
    a: "Não. O consórcio cobra apenas a taxa de administração, que é rateada entre todos os participantes. Não há cobrança de juros como nos financiamentos tradicionais.",
  },
  {
    q: "Quando serei contemplado?",
    a: "A contemplação pode ocorrer por sorteio (mensal) ou por lance (você oferta um percentual do crédito para antecipar a contemplação). Não é possível prever quando ocorrerá.",
  },
  {
    q: "Posso usar o crédito para qualquer imóvel ou carro?",
    a: "Sim, dentro das categorias do plano. Para imóveis, você pode comprar novo, usado, na planta, terreno ou até usar para construção. Para automóveis, novo ou usado.",
  },
  {
    q: "E se eu precisar sair do consórcio antes do prazo?",
    a: "Você pode solicitar o cancelamento. Receberá os valores pagos de volta, corrigidos, descontadas as taxas de administração proporcionais. A devolução ocorre por sorteio ou ao final do grupo.",
  },
]

export default function ConsorcioPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <Header />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/consorcio-dreams.png"
            alt="Consórcio de imóveis e automóveis — AX Negócios"
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
              Sem juros
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4d3ce] leading-[1.05] tracking-tighter mb-6"
            >
              Conquiste seu sonho<br />
              <em className="text-[#986f31] not-italic">sem pagar juros</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#d4d3ce]/70 leading-relaxed font-light mb-10"
            >
              O consórcio é a forma mais inteligente de planejamento financeiro. Sem entrada, sem juros, com parcelas que cabem no seu bolso.
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
                id="consorcio-hero-whatsapp"
                className="inline-flex items-center gap-2 bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold px-8 py-4 rounded-full text-sm shadow-xl shadow-[#986f31]/20 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Simular meu consórcio
              </a>
              <Link
                href="#tipos"
                id="consorcio-hero-tipos"
                className="inline-flex items-center gap-2 border border-[#d4d3ce]/20 text-[#d4d3ce]/80 hover:border-[#d4d3ce]/40 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
              >
                Ver tipos de consórcio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TYPES ─────────────────────────────────────────────── */}
      <section id="tipos" className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">
            Tipos de Consórcio
          </h2>
          <p className="text-[#d4d3ce]/50 text-base font-light max-w-md">
            Escolha a modalidade que melhor se encaixa nos seus objetivos de vida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-[#d4d3ce]/[0.03] border border-[#d4d3ce]/8 hover:border-[#986f31]/40 rounded-2xl p-7 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#986f31]/10 border border-[#986f31]/20 flex items-center justify-center mb-5 group-hover:bg-[#986f31] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#986f31] group-hover:text-[#d4d3ce] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#d4d3ce] mb-2 tracking-tight">{t.title}</h3>
                <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light mb-4">{t.desc}</p>
                <div className="bg-[#986f31]/10 border border-[#986f31]/20 rounded-lg px-3 py-2 mb-5">
                  <p className="text-[#986f31] text-xs font-medium">{t.credits}</p>
                </div>
                <ul className="space-y-2">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-[#d4d3ce]/60 text-xs font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-[#986f31] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">
              Como funciona
            </h2>
            <p className="text-[#d4d3ce]/50 text-base font-light max-w-sm mx-auto">
              5 passos simples do início ao seu crédito.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative text-center"
              >
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
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border border-[#d4d3ce]/8 rounded-xl overflow-hidden"
            >
              <button
                id={`faq-consorcio-${i}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left text-[#d4d3ce] text-sm font-medium hover:text-[#986f31] transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 text-[#986f31] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-[#d4d3ce]/60 text-sm leading-relaxed font-light border-t border-[#d4d3ce]/5 pt-4">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT SECTION ───────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-6">
                Simule seu consórcio agora
              </h2>
              <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-8">
                Nosso especialista vai analisar o seu perfil e apresentar o melhor plano sem compromisso.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#d4d3ce]/[0.03] border border-[#986f31]/20 rounded-2xl p-8"
            >
              <ContactForm interest="Consórcio" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
