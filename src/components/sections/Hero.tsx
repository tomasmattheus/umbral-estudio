import Image from 'next/image';
import WhatsAppLink from '../WhatsAppLink';
import { VariantData } from '../types';

export default function Hero({ variant }: { variant: VariantData }) {
  return (
    <section className="bg-[#2F4B3F]">
      <div className="mx-auto grid min-h-[78vh] max-w-7xl items-stretch lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-20 lg:px-12">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C]">Umbral Estudio Jurídico</p>
          <h1 className="mb-6 text-5xl leading-[1.1] text-[#FAF7F0] lg:text-7xl">{variant.headline}</h1>
          <p className="mb-10 max-w-xl text-lg text-[#FAF7F0]/90">{variant.highlight}</p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppLink
              message={variant.whatsappMessage}
              track="whatsapp_hero"
              className="border border-[#C9B58C] bg-[#C9B58C] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F4B3F]"
            >
              Agendá tu consulta
            </WhatsAppLink>
            <a href="#enfoque" className="px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FAF7F0]">Conocé nosotras →</a>
          </div>
        </div>
        <div className="relative min-h-[520px]">
          <Image src="/nosotras.png" alt="María Agostina Gianoli y Antonella Ermini, fundadoras de Umbral Estudio Jurídico" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
