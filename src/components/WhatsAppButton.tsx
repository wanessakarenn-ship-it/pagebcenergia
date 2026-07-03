import { MessageCircle } from "lucide-react";

export const WHATSAPP_COMERCIAL = "";
export const WHATSAPP_CLIENTES = "";

export function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#lead-form"
      onClick={handleClick}
      aria-label="Falar com nossa equipe comercial"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" stroke="white" strokeWidth={1.5} />
    </a>
  );
}
