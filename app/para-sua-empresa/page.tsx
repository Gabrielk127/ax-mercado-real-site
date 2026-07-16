"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import Header from "@/components/header/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Building2, Cog, Tractor, Lightbulb, TrendingUp, MessageCircle, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

const corporateSolutions = [
  {
    icon: TrendingUp,
    title: "Capital de Giro",
    desc: "Crédito para manter o fluxo de caixa saudável e aproveitar oportunidades sem comprometer o operacional.",
    highlights: ["Aprovação ágil", "Prazo flexível", "Sem garantias em alguns casos"],
  },
  {
    icon: Building2,
    title: "Expansão de Infraestrutura",
    desc: "Financiamento para construção, reforma ou aquisição de imóveis comerciais e industriais.",
    highlights: ["Projetos de qualquer porte", "Longo prazo de pagamento", "Condições especiais para PJ"],
  },
  {
    icon: Cog,
    title: "Equipamentos e Tecnologia",
    desc: "Atualização tecnológica, maquinário industrial e equipamentos de TI para aumentar a produtividade.",
    highlights: ["Financiamento de até 100%", "Leasing operacional", "Equipamentos novos e usados"],
  },
  {
    icon: Lightbulb,
    title: "Inovação e P&D",
    desc: "Linhas de crédito específicas para empresas que investem em pesquisa, desenvolvimento e inovação.",
    highlights: ["Linhas BNDES e FINEP", "Taxas subsidiadas", "Assessoria na estruturação"],
  },
]

const ruralSolutions = [
  {
    title: "Aquisição de Terras",
    desc: "Financiamento para compra e regularização de propriedades rurais com condições adequadas ao produtor.",
  },
  {
    title: "Maquinário Agrícola",
    desc: "Consórcio e financiamento de tratores, colheitadeiras, pulverizadores e implementos.",
  },
  {
    title: "Infraestrutura Rural",
    desc: "Crédito para silos, armazéns, irrigação, cercas, estradas internas e eletrificação.",
  },
  {
    title: "Custeio e Investimento",
    desc: "Linhas agrícolas para sementes, insumos, preparo do solo e demais custos de produção.",
  },
]

export default function ParaSuaEmpresaPage() {
  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <Header />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/handshake-corporate.png"
            alt="Soluções financeiras para empresas — AX Negócios"
            fill
            priority
            className="object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1c]/85 to-[#1c1c1c]/40" />
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
              Empresas &amp; Agronegócio
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4d3ce] leading-[1.05] tracking-tighter mb-6"
            >
              Crédito para fazer<br />
              seu negócio <em className="text-[#986f31] not-italic">crescer</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#d4d3ce]/70 leading-relaxed font-light mb-10"
            >
              Soluções de crédito estruturadas para empresas de todos os portes e para o agronegócio. Capital de giro, equipamentos, imóveis e muito mais.
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
                id="empresa-hero-whatsapp"
                className="inline-flex items-center gap-2 bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold px-8 py-4 rounded-full text-sm shadow-xl shadow-[#986f31]/20 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com especialista
              </a>
              <Link
                href="#rural"
                id="empresa-hero-rural"
                className="inline-flex items-center gap-2 border border-[#d4d3ce]/20 text-[#d4d3ce]/80 hover:border-[#d4d3ce]/40 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
              >
                Ver soluções rurais
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CORPORATE SOLUTIONS ───────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">
            Soluções para empresas
          </h2>
          <p className="text-[#d4d3ce]/50 text-base font-light max-w-md">
            Do capital de giro à expansão estrutural. Crédito inteligente para cada fase do seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corporateSolutions.map((sol, i) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={sol.title}
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
                    <h3 className="text-lg font-bold text-[#d4d3ce] mb-2 tracking-tight">{sol.title}</h3>
                    <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light mb-5">{sol.desc}</p>
                    <ul className="space-y-1.5">
                      {sol.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-[#d4d3ce]/55 text-xs font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-[#986f31] shrink-0" />
                          {h}
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

      {/* ─── RURAL / AGRO ──────────────────────────────────────── */}
      <section id="rural" className="border-t border-[#d4d3ce]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="text-[#986f31] text-xs font-medium uppercase tracking-widest">Agronegócio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter leading-tight mt-3 mb-6">
                Do campo à colheita com crédito inteligente
              </h2>
              <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-8">
                Entendemos a sazonalidade do campo e a realidade do produtor rural. Nossas soluções são pensadas para respeitar seu ciclo de produção.
              </p>
              <div className="space-y-4">
                {ruralSolutions.map((sol) => (
                  <div key={sol.title} className="border-l-2 border-[#986f31]/30 pl-4">
                    <h4 className="text-[#d4d3ce] text-sm font-bold mb-1">{sol.title}</h4>
                    <p className="text-[#d4d3ce]/50 text-xs font-light leading-relaxed">{sol.desc}</p>
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
                <Image src="/agriculture-modern.png" alt="Crédito rural e agronegócio" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#1c1c1c] border border-[#986f31]/30 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#986f31]/15 flex items-center justify-center">
                    <Tractor className="w-5 h-5 text-[#986f31]" />
                  </div>
                  <div>
                    <p className="text-[#d4d3ce] text-sm font-bold">Crédito Rural</p>
                    <p className="text-[#d4d3ce]/50 text-xs">Adequado ao seu ciclo produtivo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE AX FOR BUSINESS ────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">
              Por que empresas escolhem a AX?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Análise Independente", desc: "Não somos ligados a nenhum banco. Buscamos as melhores condições disponíveis no mercado para o seu CNPJ." },
              { num: "02", title: "Agilidade no Processo", desc: "Mapeamos toda a documentação necessária e acompanhamos a análise de crédito para acelerar a aprovação." },
              { num: "03", title: "Estruturação Financeira", desc: "Para operações mais complexas, auxiliamos na montagem da estrutura de garantias e projeto de viabilidade." },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#d4d3ce]/[0.03] border border-[#d4d3ce]/8 rounded-2xl p-8"
              >
                <div className="w-12 h-12 rounded-full bg-[#986f31]/10 border border-[#986f31]/20 flex items-center justify-center text-[#986f31] font-bold text-sm mb-5">
                  {item.num}
                </div>
                <h3 className="text-lg font-bold text-[#d4d3ce] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-6">
              Vamos conversar sobre o seu negócio?
            </h2>
            <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-6">
              Independente do porte da sua empresa, temos uma solução. Fale com nosso especialista e receba uma análise sem compromisso.
            </p>
            <div className="space-y-2.5">
              {["Análise sem compromisso", "Assessoria em todo o processo", "Soluções para pessoa física e jurídica", "Atendimento em Londrina e região"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-[#d4d3ce]/70 text-sm font-light">
                  <CheckCircle className="w-4 h-4 text-[#986f31] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#d4d3ce]/[0.03] border border-[#986f31]/20 rounded-2xl p-8">
            <ContactForm interest="Soluções Empresariais" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
