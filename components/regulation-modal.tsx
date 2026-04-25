"use client"

import type React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle2 } from "lucide-react"

interface RegulationModalProps {
  trigger: React.ReactNode
  title: string
  content: React.ReactNode
  pdfUrl?: string
  onOpenChange?: (open: boolean) => void
}

export function RegulationModal({ trigger, title, content, pdfUrl, onOpenChange }: RegulationModalProps) {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] w-[95vw] h-[90vh] bg-[#1c1c1c] border-[#d4d3ce]/10 text-[#d4d3ce] p-0 overflow-hidden flex flex-col rounded-[2rem] shadow-2xl">
        <DialogHeader className="p-8 pb-4">
          <DialogTitle className="text-3xl font-bold text-[#986f31] tracking-tight">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden relative w-full h-full">
          {pdfUrl ? (
            <iframe 
              src={`${pdfUrl}#toolbar=0&view=FitH`} 
              className="w-full h-full border-none block"
              title={title}
            />
          ) : (
            <ScrollArea className="h-full p-8 pt-0">
              <div className="space-y-8 text-[#d4d3ce]/70 pb-10 font-light leading-relaxed">
                {content}
              </div>
            </ScrollArea>
          )}
        </div>
        
        {pdfUrl && (
          <div className="p-6 border-t border-[#d4d3ce]/5 bg-[#1c1c1c] flex justify-center">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#986f31] hover:text-[#986f31]/80 font-medium transition-colors underline underline-offset-4 decoration-[#986f31]/30"
            >
              Abrir Regulamento em nova aba
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export function RulesContent() {
  return (
    <div className="space-y-10">
      <section>
        <h4 className="text-xl font-semibold text-[#d4d3ce] mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20">
            <CheckCircle2 className="w-5 h-5 text-[#986f31]" />
          </div>
          Como funciona
        </h4>
        <ul className="space-y-4 pl-11 list-disc marker:text-[#986f31]">
          <li>A indicação deve ser feita exclusivamente via formulário oficial.</li>
          <li>O indicado não pode ser cliente ativo ou estar em negociação.</li>
          <li>A premiação é validada após a assinatura do contrato e pagamento da primeira parcela/taxa.</li>
        </ul>
      </section>

      <section>
        <h4 className="text-xl font-semibold text-[#d4d3ce] mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20">
            <CheckCircle2 className="w-5 h-5 text-[#986f31]" />
          </div>
          Requisitos
        </h4>
        <ul className="space-y-4 pl-11 list-disc marker:text-[#986f31]">
          <li>Participante deve ter mais de 18 anos.</li>
          <li>Possuir CPF ou CNPJ regularizado para recebimento de prêmios.</li>
          <li>Não ser colaborador direto da AX Mercado Real.</li>
        </ul>
      </section>

      <section>
        <h4 className="text-xl font-semibold text-[#d4d3ce] mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#986f31]/10 flex items-center justify-center border border-[#986f31]/20">
            <CheckCircle2 className="w-5 h-5 text-[#986f31]" />
          </div>
          Prêmios
        </h4>
        <ul className="space-y-4 pl-11 list-disc marker:text-[#986f31]">
          <li>Os prêmios variam de acordo com o volume de crédito (VGV) indicado.</li>
          <li>O bônus de R$ 2.000,00 é exclusivo para o maior indicador do mês.</li>
          <li>Prêmios físicos não são convertíveis em dinheiro, exceto bônus específicos.</li>
        </ul>
      </section>
    </div>
  )
}

export function PrivacyContent() {
  return (
    <div className="space-y-8">
      <p>
        A AX Mercado Real preza pela total privacidade dos seus dados e dos seus indicados. Todas as informações coletadas são utilizadas exclusivamente para o processo de consultoria e validação da Campanha Indicação Premiada.
      </p>
      <p>
        Ao fornecer os dados, você declara ter autorização do indicado para compartilhar suas informações de contato com nossa equipe.
      </p>
      <ul className="space-y-4 list-disc pl-5 marker:text-[#986f31]">
        <li>Não compartilhamos dados com terceiros para fins publicitários.</li>
        <li>Seguimos rigorosamente as diretrizes da LGPD.</li>
        <li>Você pode solicitar a exclusão dos dados a qualquer momento via nossos canais de suporte.</li>
      </ul>
    </div>
  )
}
