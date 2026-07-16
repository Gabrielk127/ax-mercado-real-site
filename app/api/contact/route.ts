import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitize(value: string) {
  return value.trim().replace(/[<>]/g, "")
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { name, email, phone, message, cidade, conversionIdentifier } = data

    if (!name || !email || !phone || !conversionIdentifier) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios ausentes: nome, e-mail, telefone e origem." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return new Response(JSON.stringify({ error: "E-mail inválido." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const phoneDigits = String(phone).replace(/\D/g, "")
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return new Response(JSON.stringify({ error: "Telefone inválido." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const safeName = sanitize(String(name))
    const safeEmail = sanitize(String(email))

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM ?? "AX Mercado Real <contato@armangniimoveis.com.br>",
      to: process.env.CONTACT_EMAIL_TO ?? "",
      replyTo: safeEmail,
      subject: `Novo contato: ${safeName} — ${conversionIdentifier}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Origem:</strong> ${conversionIdentifier}</p>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Telefone:</strong> ${phoneDigits}</p>
        ${cidade ? `<p><strong>Cidade:</strong> ${sanitize(String(cidade))}</p>` : ""}
        ${message ? `<p><strong>Mensagem:</strong><br/>${sanitize(String(message))}</p>` : ""}
      `,
    })

    if (error) {
      console.error("Erro ao enviar e-mail via Resend:", error)
      return new Response(JSON.stringify({ error: "Erro ao enviar e-mail." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Integração RD Station desativada — mantida como referência caso queira reativar.
    // const rdToken = process.env.RD_STATION_TOKEN
    // if (rdToken) {
    //   await fetch(`https://api.rd.services/platform/conversions?api_key=${rdToken}`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       event_type: "CONVERSION",
    //       event_family: "CDP",
    //       payload: {
    //         conversion_identifier: conversionIdentifier,
    //         name: safeName,
    //         email: safeEmail,
    //         mobile_phone: phoneDigits,
    //       },
    //     }),
    //   })
    // }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Erro interno do servidor:", error)
    return new Response(JSON.stringify({ error: "Erro interno do servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
