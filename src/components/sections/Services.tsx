const services = ['Familia', 'Laboral', 'Sucesiones', 'Consumidor'];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <h2 className="mb-10 text-5xl text-[#2F4B3F]">Áreas de práctica</h2>
        <div className="grid gap-px bg-[#E5DFD3] md:grid-cols-2 lg:grid-cols-4">
          {services.map((name) => (
            <article key={name} className="bg-white">
              <div className="bg-[#2F4B3F] px-6 py-8 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C]">Área</div>
              <div className="px-6 py-8">
                <h3 className="mb-4 text-3xl text-[#2F4B3F]">{name}</h3>
                <a href={`/?svc=${name.toLowerCase()}`} className="text-sm font-bold uppercase tracking-[0.15em] text-[#6B6B6B]">Ver detalle →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
