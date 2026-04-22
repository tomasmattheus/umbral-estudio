import Image from 'next/image';
import Link from 'next/link';
import WhatsAppLink from './WhatsAppLink';

type Props = { message: string };

export default function Navbar({ message }: Props) {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#C9B58C]/20 bg-[#2F4B3F]/95 backdrop-blur" aria-label="Principal">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link href="/" className="relative h-10 w-44">
          <Image src="/logo.png" alt="Logo de Umbral Estudio Jurídico" fill className="object-contain object-left" priority />
        </Link>
        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-[#FAF7F0] md:flex">
          <a href="#enfoque">Nosotras</a>
          <a href="#servicios">Áreas de práctica</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
        </div>
        <WhatsAppLink
          message={message}
          track="whatsapp_hero"
          className="border border-[#C9B58C] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C] transition hover:bg-[#C9B58C] hover:text-[#2F4B3F]"
        >
          Consultanos +
        </WhatsAppLink>
      </div>
    </nav>
  );
}
