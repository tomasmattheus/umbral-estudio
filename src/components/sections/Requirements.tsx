import { VariantData } from '../types';

export default function Requirements({ variant }: { variant: VariantData }) {
  return (
    <section className="bg-[#FAF7F0] py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_2fr] lg:px-12">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C]">Cómo trabajamos</p>
          <h2 className="text-5xl leading-tight text-[#2F4B3F]">Un enfoque claro. <span className="text-[#C9B58C]">Resultados reales.</span></h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {variant.requirements.map((step, i) => (
            <article key={step} className="border-t border-[#E5DFD3] pt-6">
              <p className="mb-4 text-6xl leading-none text-[#C9B58C]">0{i + 1}.</p>
              <h3 className="mb-2 text-2xl text-[#2F4B3F]">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
