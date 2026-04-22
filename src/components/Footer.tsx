import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-[#E5DFD3] bg-[#FAF7F0] text-[#1C1C1C]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-12">
        <div>
          <Image src="/logo-footer.png" alt="Umbral Estudio Jurídico" width={90} height={90} className="mb-4" />
          <p className="text-sm text-[#6B6B6B]">Defendemos derechos. Abrimos caminos.</p>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F4B3F]">Navegación</h3>
          <ul className="space-y-2 text-sm text-[#6B6B6B]"><li>Nosotras</li><li>Áreas</li><li>Enfoque</li></ul>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F4B3F]">Áreas</h3>
          <ul className="space-y-2 text-sm text-[#6B6B6B]"><li>Familia</li><li>Laboral</li><li>Sucesiones</li><li>Consumidor</li></ul>
        </div>
        <div>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#2F4B3F]">Contacto</h3>
          <a href="tel:+5493415986642" data-track="call_click" className="block text-sm text-[#6B6B6B]">+54 9 341 598-6642</a>
          <p className="mt-2 text-sm text-[#6B6B6B]">Alem 1668, Planta Alta, Rosario</p>
        </div>
      </div>
    </footer>
  );
}
