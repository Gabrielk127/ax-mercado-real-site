"use client"

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
  content?: React.ReactNode
  pdfUrl?: string
  onOpenChange?: (open: boolean) => void
}

export function RegulationModal({ trigger, title, content, pdfUrl, onOpenChange }: RegulationModalProps) {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] w-[95vw] h-[90vh] bg-[#101418] border-gray-800 text-white p-0 overflow-hidden flex flex-col">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-[#7CEB63]">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden relative w-full h-full">
          {pdfUrl ? (
            <iframe 
              src={`${pdfUrl}#toolbar=0&view=FitH`} 
              className="w-full h-full border-none block"
              title={title}
            />
          ) : (
            <ScrollArea className="h-full p-6 pt-0">
              <div className="space-y-6 text-gray-300 pb-10">
                {content}
              </div>
            </ScrollArea>
          )}
        </div>
        
        {pdfUrl && (
          <div className="p-4 border-t border-gray-800 bg-[#101418] flex justify-center">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-[#7CEB63] hover:underline"
            >
              Abrir PDF em nova aba
            </a>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

// Content components to keep the main file clean
export const RulesContent = () => (
  <div className="space-y-8">
    <section>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#7CEB63]" />
        Como funciona
      </h4>
      <ul className="space-y-3 pl-7 list-disc">
        <li>Indique um contato interessado em adquirir uma carta de crédito imobiliário.</li>
        <li>A indicação é válida quando o indicado concretiza a compra de no mínimo uma carta de crédito pela AX Mercado Real.</li>
        <li>Ao finalizar a venda, você receberá seu prêmio em até 30 dias úteis.</li>
        <li>Não há limite de indicações — quanto mais indicar, mais prêmios ganha.</li>
      </ul>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#7CEB63]" />
        Requisitos
      </h4>
      <ul className="space-y-3 pl-7 list-disc">
        <li>A indicação deve ser de uma pessoa que não esteja previamente na base de clientes ou em atendimento ativo da AX Mercado Real.</li>
        <li>CPF/CNPJ válido do indicador é obrigatório.</li>
        <li>A compra deve ser concretizada por meio da intermediação da AX Mercado Real.</li>
        <li>Todos os dados fornecidos devem estar corretos e verificáveis.</li>
      </ul>
    </section>

    <section>
      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-5 h-5 text-[#7CEB63]" />
        Prêmios
      </h4>
      <ul className="space-y-3 pl-7 list-disc">
        <li>Os prêmios são entregues mediante comprovação da conclusão da transação.</li>
        <li>Os prêmios físicos estão sujeitos à disponibilidade de estoque e logística.</li>
        <li>Não é possível trocar prêmios por valores em dinheiro ou outros itens.</li>
        <li>A AX Mercado Real se reserva o direito de substituir prêmios por equivalentes de mesmo valor.</li>
      </ul>
    </section>
  </div>
)

export const TermsContent = () => (
  <div className="space-y-4">
    <p>
      Ao participar desta campanha, você concorda que:
    </p>
    <ul className="space-y-3 pl-5 list-decimal">
      <li>As informações fornecidas no formulário são verdadeiras e de sua inteira responsabilidade.</li>
      <li>Você possui autorização da pessoa indicada para compartilhar seus dados de contato conosco.</li>
      <li>A AX Mercado Real entrará em contato com o indicado mencionando sua indicação.</li>
      <li>A campanha é válida por prazo indeterminado e poderá ser suspensa ou alterada mediante aviso prévio no site oficial ou via e-mail.</li>
    </ul>
  </div>
)

export const PrivacyContent = () => (
  <div className="space-y-4">
    <p>
      Sua privacidade é importante para nós. Coletamos seus dados e os dados do indicado apenas para:
    </p>
    <ul className="space-y-3 pl-7 list-disc">
      <li>Processar a indicação e verificar a elegibilidade aos prêmios.</li>
      <li>Entrar em contato para oferecer nossos serviços de carta de crédito imobiliário ao indicado.</li>
      <li>Manter um registro histórico de indicações para fins de auditoria interna.</li>
    </ul>
    <p>
      Não compartilhamos essas informações com terceiros, exceto quando necessário para o cumprimento de obrigações legais ou para a entrega dos prêmios.
    </p>
    <p>
      Você pode solicitar a exclusão de seus dados a qualquer momento através de nossos canais de atendimento.
    </p>
  </div>
)
