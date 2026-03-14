"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "¡Hola! Soy el asistente de AXIOM Studio. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      gsap.fromTo(panelRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
      );
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [open]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Error en la respuesta");
      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: assistantText };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Lo siento, hubo un error. Por favor intenta de nuevo." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          className="fixed bottom-24 right-6 z-50 flex flex-col"
          style={{
            width: "360px",
            height: "480px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "var(--border)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center text-xs font-bold" style={{ background: "var(--gold)", color: "#080808", fontFamily: "var(--font-mono)" }}>AX</div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--white)" }}>Asistente AXIOM</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.6)" }} />
                  <span className="text-xs" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em" }}>EN LÍNEA</span>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="w-7 h-7 flex items-center justify-center transition-colors hover:text-[var(--gold)]" style={{ color: "var(--muted)" }}>✕</button>
          </div>

          {/* Messages */}
          <div ref={messagesRef} className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: "thin" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[80%] px-4 py-3 text-sm leading-relaxed"
                  style={m.role === "user"
                    ? { background: "var(--gold)", color: "#080808" }
                    : { background: "var(--bg)", color: "var(--white)", border: "1px solid var(--border)" }
                  }
                >
                  {m.content || <span className="animate-pulse">●●●</span>}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="px-4 py-3 text-sm" style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                  <span className="animate-pulse">●●●</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Escribe tu pregunta..."
                disabled={loading}
                className="flex-1 px-4 py-3 text-sm outline-none disabled:opacity-50"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--white)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="px-4 py-3 text-sm font-medium transition-all duration-200 disabled:opacity-40 hover:opacity-90"
                style={{ background: "var(--gold)", color: "#080808" }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: open ? "var(--surface)" : "var(--gold)", border: "1px solid var(--border)", boxShadow: "0 8px 30px rgba(201,168,76,0.3)" }}
      >
        {open
          ? <span style={{ color: "var(--muted)", fontSize: "1.1rem" }}>✕</span>
          : <span style={{ fontSize: "1.3rem" }}>💬</span>
        }
      </button>
    </>
  );
}
