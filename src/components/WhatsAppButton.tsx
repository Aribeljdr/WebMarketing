import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/51987654321"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-pulse-cyan"
      style={{ animationName: 'pulse-whatsapp' }}
    >
      <MessageCircle className="w-8 h-8 fill-white" />
      <style>{`
        @keyframes pulse-whatsapp {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </a>
  );
}
