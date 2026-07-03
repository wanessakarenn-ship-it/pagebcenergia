import { MessageCircle } from "lucide-react";

// Replace with the real commercial WhatsApp number (digits only, country code first).
export const WHATSAPP_COMERCIAL = "[WHATSAPP_COMERCIAL]";
export const WHATSAPP_CLIENTES = "[WHATSAPP_CLIENTES]";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_COMERCIAL}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" stroke="white" strokeWidth={1.5} />
    </a>
  );
}
