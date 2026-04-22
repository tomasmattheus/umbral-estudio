import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.umbralestudiojuridico.com.ar';
  const variants = ['general', 'familia', 'laboral', 'sucesiones', 'consumidor'];

  return variants.map((svc) => ({
    url: `${base}/?svc=${svc}`,
    changeFrequency: 'weekly',
    priority: svc === 'general' ? 1 : 0.8
  }));
}
