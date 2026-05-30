"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import {
  Home,
  Car,
  Award,
  Building2,
  Tractor,
  TrendingUp,
  ChevronRight,
  Shield,
  Users,
  ArrowRight,
  MessageCircle,
} from "lucide-react"

const services = [
  {
    icon: Home,
    label: "Consórcio",
    desc: "Planejamento inteligente para conquistar imóvel, veículo ou serviço sem juros.",
    href: "/consorcio",
    color: "from-[#986f31]/20 to-transparent",
  },
  {
    icon: Car,
    label: "Financiamento",
    desc: "Crédito personalizado para compra de imóveis, veículos e equipamentos.",
    href: "/financiamento",
    color: "from-[#273849]/40 to-transparent",
  },
  {
    icon: Award,
    label: "Carta Contemplada",
    desc: "Crédito imediato, sem juros e com total flexibilidade de uso.",
    href: "/carta-contemplada",
    color: "from-[#986f31]/15 to-transparent",
  },
  {
    icon: Building2,
    label: "Para sua Empresa",
    desc: "Soluções de crédito para expansão, infraestrutura e agronegócio.",
    href: "/para-sua-empresa",
    color: "from-[#273849]/30 to-transparent",
  },
  {
    icon: TrendingUp,
    label: "Assessoria Financeira",
    desc: "Planejamento e aplicações personalizadas para maximizar seu patrimônio.",
    href: "/assessoria-financeira",
    color: "from-[#986f31]/10 to-transparent",
  },
]

const stats = [
  { number: "+200M", label: "Em crédito intermediado" },
  { number: "+500", label: "Clientes atendidos" },
  { number: "100%", label: "Atendimento personalizado" },
  { number: "5 anos", label: "De experiência no mercado" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <Header />

      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-advisor.png"
            alt="AX Negócios — Reunião de assessoria financeira premium"
            fill
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1c1c] via-[#1c1c1c]/85 to-[#1c1c1c]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent" />
        </div>

        {/* Ambient glow */}
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #986f31 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-[#986f31]/10 text-[#986f31] px-4 py-2 rounded-full text-xs font-medium mb-6 border border-[#986f31]/20 backdrop-blur-sm tracking-widest uppercase"
            >
              <Shield className="w-3 h-3" />
              Soluções Financeiras Personalizadas
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#d4d3ce] leading-[1.05] tracking-tighter mb-6"
            >
              Realize seus{" "}
              <em className="text-[#986f31] not-italic">objetivos</em>
              <br />
              com quem entende
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-[#d4d3ce]/70 leading-relaxed max-w-xl mb-10 font-light"
            >
              Consórcios, financiamentos, carta contemplada e assessoria financeira. Atendimento especializado em Londrina e região.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5543991708520"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-whatsapp"
                className="inline-flex items-center gap-2 bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold px-8 py-4 rounded-full text-sm shadow-xl shadow-[#986f31]/20 transition-all duration-300 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com Especialista
              </a>
              <Link
                href="/consorcio"
                id="hero-cta-services"
                className="inline-flex items-center gap-2 border border-[#d4d3ce]/20 text-[#d4d3ce]/80 hover:text-[#d4d3ce] hover:border-[#d4d3ce]/40 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.98] backdrop-blur-sm"
              >
                Conhecer soluções
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────── */}
      <section className="relative z-10 border-y border-[#986f31]/10 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#986f31] tracking-tight">{s.number}</p>
                <p className="text-[#d4d3ce]/50 text-xs font-light mt-1 tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ──────────────────────────────────────── */}
      <section id="servicos" className="max-w-[1200px] mx-auto px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter leading-tight mb-4">
            O que podemos<br />fazer por você
          </h2>
          <p className="text-[#d4d3ce]/50 text-base font-light max-w-md leading-relaxed">
            Cada solução é desenhada para o seu perfil. Do primeiro imóvel ao agronegócio em escala.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <Link
                  href={svc.href}
                  className="group relative block bg-[#d4d3ce]/[0.03] hover:bg-[#986f31]/10 border border-[#d4d3ce]/8 hover:border-[#986f31]/40 rounded-2xl p-7 transition-all duration-400 overflow-hidden h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#986f31]/10 border border-[#986f31]/20 flex items-center justify-center mb-5 group-hover:bg-[#986f31] group-hover:border-[#986f31] transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#986f31] group-hover:text-[#d4d3ce] transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-[#d4d3ce] mb-2 tracking-tight">{svc.label}</h3>
                    <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light mb-6">{svc.desc}</p>
                    <div className="flex items-center gap-2 text-[#986f31] text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      Saiba mais <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ─── SPLIT — CORPORATE FINANCING ───────────────────────── */}
      <section className="border-y border-[#d4d3ce]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[#986f31] text-xs font-medium uppercase tracking-widest">Para Empresas</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter leading-tight mt-3 mb-6">
                Crédito para empresas crescerem sem travar o fluxo de caixa
              </h2>
              <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-8">
                Capital de giro, expansão de infraestrutura, aquisição de tecnologia e maquinário. Soluções sob medida para o porte da sua empresa.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Financiamento empresarial com taxas competitivas",
                  "Consórcio de equipamentos e frota",
                  "Crédito rural e agronegócio",
                  "Assessoria na estruturação da operação",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#986f31]/15 border border-[#986f31]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#986f31]" />
                    </div>
                    <span className="text-[#d4d3ce]/70 text-sm font-light">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/para-sua-empresa"
                id="home-cta-empresa"
                className="inline-flex items-center gap-2 bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 active:scale-[0.98] shadow-lg shadow-[#986f31]/20"
              >
                Explorar soluções empresariais
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/handshake-corporate.png"
                  alt="Parceria empresarial — financiamento para empresas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#1c1c1c] border border-[#986f31]/30 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#986f31]/15 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[#986f31]" />
                  </div>
                  <div>
                    <p className="text-[#d4d3ce] text-sm font-bold">Crédito Empresarial</p>
                    <p className="text-[#d4d3ce]/50 text-xs">Sob medida para o seu negócio</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SPLIT — RURAL/AGRO ─────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/agriculture-modern.png"
                alt="Crédito rural e agronegócio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[#1c1c1c] border border-[#986f31]/30 rounded-xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#986f31]/15 flex items-center justify-center">
                  <Tractor className="w-5 h-5 text-[#986f31]" />
                </div>
                <div>
                  <p className="text-[#d4d3ce] text-sm font-bold">Crédito Rural</p>
                  <p className="text-[#d4d3ce]/50 text-xs">Do campo à colheita</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <span className="text-[#986f31] text-xs font-medium uppercase tracking-widest">Agronegócio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter leading-tight mt-3 mb-6">
              Investimento no campo com solidez e planejamento
            </h2>
            <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-8">
              Financiamento de terras, maquinário agrícola e expansão de propriedades rurais. Entendemos as necessidades do produtor e do empresário rural.
            </p>
            <div className="space-y-3 mb-10">
              {[
                "Aquisição e regularização de terras",
                "Financiamento de tratores e colheitadeiras",
                "Consórcio rural sem juros",
                "Crédito para irrigação e infraestrutura",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#986f31]/15 border border-[#986f31]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#986f31]" />
                  </div>
                  <span className="text-[#d4d3ce]/70 text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/para-sua-empresa"
              id="home-cta-agro"
              className="inline-flex items-center gap-2 border border-[#986f31]/40 text-[#986f31] hover:bg-[#986f31]/10 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.98]"
            >
              Soluções para o campo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── WHY AX ─────────────────────────────────────────────── */}
      <section className="border-t border-[#d4d3ce]/5 bg-[#986f31]/5">
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter mb-4">
              Por que escolher a AX?
            </h2>
            <p className="text-[#d4d3ce]/50 text-base font-light max-w-lg mx-auto">
              Somos uma assessoria independente comprometida com os melhores resultados para você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Independência e Imparcialidade",
                desc: "Não somos atrelados a nenhuma administradora. Buscamos a melhor solução do mercado para o seu perfil.",
              },
              {
                icon: Users,
                title: "Atendimento Humanizado",
                desc: "Cada cliente tem um consultor dedicado. Nós ouvimos, entendemos e apresentamos as opções mais adequadas.",
              },
              {
                icon: TrendingUp,
                title: "Resultados Comprovados",
                desc: "Mais de R$ 200 milhões em crédito intermediado e centenas de famílias e empresas beneficiadas.",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-[#d4d3ce]/[0.03] border border-[#d4d3ce]/8 rounded-2xl p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#986f31]/10 border border-[#986f31]/20 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#986f31]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#d4d3ce] mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-[#d4d3ce]/50 text-sm leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ────────────────────────────────────────── */}
      <section id="contato" className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#d4d3ce] tracking-tighter leading-tight mb-6">
              Pronto para dar o próximo passo?
            </h2>
            <p className="text-[#d4d3ce]/60 text-base font-light leading-relaxed mb-8">
              Fale com um de nossos especialistas. Sem compromisso, sem pressão. Apenas a consultoria que você merece.
            </p>
            <div className="space-y-4">
              <a
                href="https://wa.me/5543991708520"
                target="_blank"
                rel="noopener noreferrer"
                id="home-final-whatsapp"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#986f31]/10 border border-[#986f31]/20 flex items-center justify-center group-hover:bg-[#986f31] transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 text-[#986f31] group-hover:text-[#d4d3ce] transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-[#d4d3ce] text-sm font-bold">(43) 99170-8520</p>
                  <p className="text-[#d4d3ce]/40 text-xs">Clique para abrir o WhatsApp</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#d4d3ce]/[0.03] border border-[#986f31]/20 rounded-2xl p-8 relative"
          >
            <h3 className="text-lg font-bold text-[#d4d3ce] mb-6 tracking-tight">Fale com um especialista</h3>
            <ContactForm interest="Geral" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
