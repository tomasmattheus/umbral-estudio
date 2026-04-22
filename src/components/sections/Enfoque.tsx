import Image from 'next/image';

export default function Enfoque() {
  return (
    <section id="enfoque" className="grid bg-[#2F4B3F] lg:grid-cols-2">
      <div className="relative min-h-[520px]">
        <Image src="/nosotras.png" alt="Equipo jurídico de Umbral Estudio Jurídico en Rosario" fill className="object-cover" />
      </div>
      <div className="px-6 py-24 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C]">Nuestro enfoque</p>
        <h2 className="mb-6 text-5xl text-[#FAF7F0]">Cercanas. Claras. Comprometidas.</h2>
        <p className="mb-10 max-w-xl text-[#FAF7F0]/90">Creamos vínculos de confianza y una estrategia legal pensada para tu realidad.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {['Atención personalizada', 'Confidencialidad', 'Visión estratégica'].map((value) => (
            <article key={value}><h3 className="text-xl text-[#C9B58C]">{value}</h3></article>
          ))}
        </div>
      </div>
    </section>
  );
}
