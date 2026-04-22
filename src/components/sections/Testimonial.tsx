import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className="grid lg:grid-cols-2">
      <article className="bg-[#FAF7F0] px-6 py-24 lg:px-12">
        <p className="text-4xl text-[#C9B58C]">“</p>
        <p className="max-w-lg text-4xl leading-tight text-[#2F4B3F]">Excelentes profesionales. Me sentí acompañada y escuchada en todo momento.</p>
      </article>
      <article className="relative min-h-[320px]">
        <Image src="/office-2.png" alt="Vista de Rosario al atardecer" fill className="object-cover" />
        <div className="absolute left-10 top-10 border border-[#C9B58C]/40 bg-[#2F4B3F]/90 p-8 text-[#FAF7F0]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C]">Abogadas en Rosario</p>
          <p className="text-3xl">Conocemos la ciudad y sus necesidades.</p>
        </div>
      </article>
    </section>
  );
}
