'use client';

import WhatsAppLink from './WhatsAppLink';

type Props = { message: string };

export default function WhatsAppFloat({ message }: Props) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <WhatsAppLink
        message={message}
        track="whatsapp_float"
        className="inline-flex items-center gap-2 border border-[#2F4B3F] bg-[#2F4B3F] px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg"
      >
        WhatsApp
      </WhatsAppLink>
    </div>
  );
}
