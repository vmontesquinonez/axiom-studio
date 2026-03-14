import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const stream = client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 600,
      system: `Eres el asistente virtual de AXIOM Studio, una agencia de diseño web de élite que crea sitios web potenciados por inteligencia artificial con animaciones de nivel mundial.

Tu rol es ayudar a clientes potenciales con sus dudas sobre:
- Nuestros servicios: sitios web con IA, animaciones & motion, rendimiento web, identidad de marca
- Nuestro proceso: Descubrimiento → Diseño → Desarrollo → Lanzamiento
- Precios: proyectos desde $15,000 MXN, con paquetes personalizados según necesidad
- Tiempos: entre 2 y 6 semanas dependiendo del proyecto
- Tecnología: Next.js, GSAP, Three.js, Claude AI, TypeScript, Tailwind

Responde siempre en español, de forma concisa, profesional y cálida. Si el cliente quiere iniciar un proyecto, invítalo a llenar el formulario de contacto en la sección de contacto, escribir a vmontesquinonez@gmail.com o llamar al +52 333 448 8366.

No inventes información que no esté en este contexto. Mantén respuestas cortas (máximo 3 párrafos).`,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (chunk.type === "content_block_delta" && chunk.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(chunk.delta.text));
            }
          }
        } catch (streamErr) {
          console.error("[chat/route] stream error:", streamErr);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err) {
    console.error("[chat/route] error:", err);
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
