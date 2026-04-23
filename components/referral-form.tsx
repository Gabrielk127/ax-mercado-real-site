"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip"
import { RegulationModal, RulesContent, PrivacyContent } from "@/components/regulation-modal"

export function ReferralForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [acceptedRules, setAcceptedRules] = useState(false)
  const [hasViewedRules, setHasViewedRules] = useState(false)
  const [hasViewedPrivacy, setHasViewedPrivacy] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!acceptedPrivacy || !acceptedRules) {
      toast({
        title: "Atenção",
        description: "Por favor, aceite as regras da campanha e a política de privacidade para continuar.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      const data = {
        name: (document.getElementById("seu-nome") as HTMLInputElement).value,
        email: (document.getElementById("seu-email") as HTMLInputElement).value,
        mobile_phone: (document.getElementById("seu-telefone") as HTMLInputElement).value,
        nome_do_indicado: (document.getElementById("indicado-nome") as HTMLInputElement).value,
        telefone_do_indicado: (document.getElementById("indicado-telefone") as HTMLInputElement).value,
        email_do_indicado: (document.getElementById("indicado-email") as HTMLInputElement).value,
        cidade_do_indicado: (document.getElementById("indicado-cidade") as HTMLInputElement).value,
        cpf_do_indicador: (document.getElementById("seu-cpf") as HTMLInputElement).value,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Erro ao enviar indicação")

      toast({
        title: "Indicação enviada com sucesso!",
        description: "Obrigado por indicar a AX Mercado Real. Nossa equipe entrará em contato com o indicado em breve.",
      })

      form.reset()
      setAcceptedPrivacy(false)
      setAcceptedRules(false)
      setHasViewedRules(false)
      setHasViewedPrivacy(false)
    } catch (error) {
      console.error(error)
      toast({
        title: "Erro no envio",
        description: "Ocorreu um erro ao enviar sua indicação. Verifique os dados e tente novamente.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "bg-[#1a2028] border-gray-700 text-white placeholder:text-gray-600 focus:border-[#7CEB63] focus-visible:ring-0 focus-visible:ring-offset-0"

  return (
    <section id="formulario" className="py-14 sm:py-20 md:py-32 bg-[#101418]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4 text-balance">
            Faça Sua Indicação
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed">
            Preencha corretamente os dados do formulário da Campanha Indicação Premiada — AX Mercado Real
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="p-5 sm:p-6 md:p-10 rounded-lg border border-gray-800 bg-[#161b21]">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Dados do Indicado */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#7CEB63] mb-3 sm:mb-4">
                  Dados do Indicado
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="indicado-nome" className="text-gray-300">
                      Nome Completo do Indicado *
                    </Label>
                    <Input id="indicado-nome" placeholder="Nome completo" required className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="indicado-telefone" className="text-gray-300">
                      Telefone do Indicado *
                    </Label>
                    <Input id="indicado-telefone" type="tel" placeholder="(00) 00000-0000" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="indicado-email" className="text-gray-300">
                      E-mail do Indicado *
                    </Label>
                    <Input id="indicado-email" type="email" placeholder="email@exemplo.com" required className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="indicado-cidade" className="text-gray-300">
                      Cidade de Interesse *
                    </Label>
                    <Input id="indicado-cidade" placeholder="Cidade" required className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Seus Dados */}
              <div className="space-y-4 pt-4 sm:pt-6 border-t border-gray-800">
                <h3 className="text-lg sm:text-xl font-semibold text-[#7CEB63] mb-3 sm:mb-4">
                  Seus Dados (Indicador)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seu-nome" className="text-gray-300">
                      Seu Nome Completo *
                    </Label>
                    <Input id="seu-nome" placeholder="Seu nome" required className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seu-cpf" className="text-gray-300">
                      Seu CPF/CNPJ *
                    </Label>
                    <Input id="seu-cpf" placeholder="000.000.000-00" required className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seu-email" className="text-gray-300">
                      Seu E-mail *
                    </Label>
                    <Input id="seu-email" type="email" placeholder="seu@email.com" required className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seu-telefone" className="text-gray-300">
                      Seu Telefone *
                    </Label>
                    <Input id="seu-telefone" type="tel" placeholder="(00) 00000-0000" required className={inputClass} />
                  </div>
                </div>
              </div>

              {/* Termos */}
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-gray-800">
                <div className="flex items-start gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="mt-1">
                          <Checkbox
                            id="rules"
                            checked={acceptedRules}
                            onCheckedChange={(checked) => setAcceptedRules(checked as boolean)}
                            disabled={!hasViewedRules}
                            className="border-gray-700 data-[state=checked]:bg-[#7CEB63] data-[state=checked]:border-[#7CEB63] disabled:opacity-30"
                          />
                        </span>
                      </TooltipTrigger>
                      {!hasViewedRules && (
                        <TooltipContent side="right" className="bg-[#7CEB63] text-[#101418] border-none font-semibold">
                          Clique em &ldquo;regras da campanha&rdquo; para ler antes de aceitar.
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                  <Label
                    htmlFor="rules"
                    className={`block text-[13px] sm:text-sm leading-snug sm:leading-relaxed font-normal text-gray-400 cursor-pointer select-none pt-0.5 ${!hasViewedRules && 'opacity-70'}`}
                  >
                    Declaro que li e concordo com todas as{" "}
                    <RegulationModal
                      title="Regras da Campanha"
                      pdfUrl="/docs/regulamento.pdf"
                      onOpenChange={(open) => open && setHasViewedRules(true)}
                      content={<RulesContent />}
                      trigger={
                        <span className="inline text-[#7CEB63] hover:underline cursor-pointer font-semibold underline-offset-4">
                          regras da campanha
                        </span>
                      }
                    />{" "}
                    de indicações da AX Mercado Real.
                    {!hasViewedRules && (
                      <span className="text-[#7CEB63]/60 text-[10px] sm:text-xs ml-1 font-medium italic">
                        (clique para ler)
                      </span>
                    )}
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="mt-1 flex-shrink-0">
                          <Checkbox
                            id="privacy"
                            checked={acceptedPrivacy}
                            onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
                            disabled={!hasViewedPrivacy}
                            className="border-gray-700 data-[state=checked]:bg-[#7CEB63] data-[state=checked]:border-[#7CEB63] disabled:opacity-30"
                          />
                        </span>
                      </TooltipTrigger>
                      {!hasViewedPrivacy && (
                        <TooltipContent side="right" className="bg-[#7CEB63] text-[#101418] border-none font-semibold">
                          Clique em &ldquo;Política de Privacidade&rdquo; para ler antes de aceitar.
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                  <Label
                    htmlFor="privacy"
                    className={`block text-[13px] sm:text-sm leading-snug sm:leading-relaxed font-normal text-gray-400 cursor-pointer select-none pt-0.5 ${!hasViewedPrivacy && 'opacity-70'}`}
                  >
                    Li e aceito a{" "}
                    <RegulationModal
                      title="Política de Privacidade"
                      onOpenChange={(open) => open && setHasViewedPrivacy(true)}
                      content={<PrivacyContent />}
                      trigger={
                        <span className="inline text-[#7CEB63] hover:underline cursor-pointer font-semibold underline-offset-4">
                          Política de Privacidade
                        </span>
                      }
                    />{" "}
                    da AX Mercado Real.
                    {!hasViewedPrivacy && (
                      <span className="text-[#7CEB63]/60 text-[10px] sm:text-xs ml-1 font-medium italic">
                        (clique para ler)
                      </span>
                    )}
                  </Label>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-xs text-center text-gray-600 mb-6">
                  * Campos obrigatórios. Sua indicação só será válida se o indicado não estiver em nossa base ativa.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#7CEB63] hover:bg-[#6ad854] text-[#101418] py-4 sm:py-5 text-base sm:text-lg font-bold cursor-pointer rounded-lg shadow-lg shadow-[#7CEB63]/30 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando Indicação..." : "Indicar Agora e Ganhar Prêmios!"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
