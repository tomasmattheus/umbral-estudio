import site from '@/data/site.json';

export default function TrustStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-[#E5DFD3] md:grid-cols-4 md:divide-x md:divide-y-0">
        {site.trust.map((item) => (
          <article key={item.title} className="px-6 py-10 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9B58C]">{item.title}</p>
            <h3 className="mb-2 text-xl text-[#2F4B3F]">{item.title}</h3>
            <p className="text-sm text-[#6B6B6B]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
