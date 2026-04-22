import Image from 'next/image';
import WhatsAppLink from '../WhatsAppLink';

export default function CTASection({ message }: { message: string }) {
  return (
    <section className="border-y border-[#C9B58C]/30 bg-[#2F4B3F] py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 lg:px-12">
        <div className="flex items-center gap-4">
          <Image src="/logo-footer.png" alt="Umbral Estudio Jurídico isotipo" width={50} height={50} />
          <h2 className="text-4xl text-[#FAF7F0]">Estamos para ayudarte. Hablemos de tu caso.</h2>
        </div>
        <WhatsAppLink message={message} track="whatsapp_cta" className="border border-[#C9B58C] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C]">
          Agendá tu consulta
        </WhatsAppLink>
      </div>
    </section>
  );
}
