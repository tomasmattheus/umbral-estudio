'use client';

import { useState } from 'react';
import { VariantData } from '../types';

export default function FAQ({ variant }: { variant: VariantData }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-[#FAF7F0] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-0">
        <h2 className="mb-10 text-5xl text-[#2F4B3F]">Preguntas frecuentes</h2>
        <div className="border border-[#E5DFD3]">
          {variant.faq.map((item, i) => (
            <article key={item.q} className="border-b border-[#E5DFD3] last:border-b-0">
              <button className="flex w-full items-center justify-between px-6 py-5 text-left" onClick={() => setOpen(open === i ? -1 : i)}>
                <h3 className="text-xl text-[#2F4B3F]">{item.q}</h3>
                <span className="text-[#C9B58C]">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="px-6 pb-5 text-[#6B6B6B]">{item.a}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
