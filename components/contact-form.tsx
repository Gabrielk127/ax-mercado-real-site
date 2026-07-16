"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, X } from "lucide-react"

interface ContactFormProps {
  interest?: string
  onClose?: () => void
}

export function ContactForm({ interest = "Geral", onClose }: ContactFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile_phone: "",
    cidade: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11)
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, mobile_phone: formatPhone(e.target.value) }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.mobile_phone) return

    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.mobile_phone,
          cidade: form.cidade,
          conversionIdentifier: interest,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const errorData = await res.json().catch(() => ({}))
        throw new Error(errorData.error ?? "Erro ao enviar")
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description:
          error instanceof Error
            ? error.message
            : "Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    "w-full bg-[#986f31]/5 border border-[#986f31]/20 rounded-xl px-4 py-3.5 text-[#d4d3ce] placeholder-[#d4d3ce]/30 text-sm focus:outline-none focus:border-[#986f31]/60 focus:bg-[#986f31]/10 transition-all duration-300"
  const labelClass = "block text-[#d4d3ce]/70 text-xs font-medium uppercase tracking-wider mb-2"

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-10 space-y-4"
      >
        <div className="w-16 h-16 rounded-full bg-[#986f31]/15 flex items-center justify-center border border-[#986f31]/30">
          <CheckCircle className="w-8 h-8 text-[#986f31]" />
        </div>
        <h3 className="text-xl font-bold text-[#d4d3ce]">Recebemos seu contato!</h3>
        <p className="text-[#d4d3ce]/60 text-sm max-w-xs leading-relaxed">
          Nossa equipe especializada retornará em breve. Você também pode nos chamar pelo WhatsApp.
        </p>
        <a
          href="https://wa.me/5543991708520"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-[#986f31] text-[#d4d3ce] font-bold px-8 py-3 rounded-full text-sm hover:bg-[#7a5927] transition-colors active:scale-[0.98]"
        >
          Abrir WhatsApp
        </a>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#d4d3ce]/10 flex items-center justify-center text-[#d4d3ce]/50 hover:text-[#d4d3ce] hover:bg-[#d4d3ce]/15 transition-all"
          aria-label="Fechar"
        >
          <X size={15} />
        </button>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cf-name" className={labelClass}>Nome completo *</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="cf-phone" className={labelClass}>WhatsApp / Telefone *</label>
          <input
            id="cf-phone"
            name="mobile_phone"
            type="tel"
            required
            value={form.mobile_phone}
            onChange={handlePhoneChange}
            placeholder="(43) 99999-9999"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-email" className={labelClass}>E-mail *</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="cf-cidade" className={labelClass}>Cidade</label>
        <input
          id="cf-cidade"
          name="cidade"
          type="text"
          value={form.cidade}
          onChange={handleChange}
          placeholder="Sua cidade"
          className={inputClass}
        />
      </div>

      <div className="bg-[#986f31]/5 border border-[#986f31]/15 rounded-xl px-4 py-3 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#986f31] shrink-0" />
        <span className="text-[#d4d3ce]/60 text-xs">Interesse: <span className="text-[#986f31] font-medium">{interest}</span></span>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting || !form.name || !form.email || !form.mobile_phone}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-[#986f31] hover:bg-[#7a5927] text-[#d4d3ce] font-bold py-4 rounded-xl text-sm shadow-lg shadow-[#986f31]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Solicitar Atendimento"
        )}
      </motion.button>

      <p className="text-[#d4d3ce]/30 text-[10px] text-center leading-relaxed">
        Seus dados são protegidos conforme a LGPD. Não compartilhamos informações com terceiros.
      </p>
    </form>
  )
}
