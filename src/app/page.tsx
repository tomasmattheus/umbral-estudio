import type { Metadata } from 'next';
import site from '@/data/site.json';
import variants from '@/data/variants.json';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Requirements from '@/components/sections/Requirements';
import Services from '@/components/sections/Services';
import Enfoque from '@/components/sections/Enfoque';
import Testimonial from '@/components/sections/Testimonial';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { VariantData } from '@/components/types';

type Params = { searchParams: Promise<{ svc?: string }> };

const getVariant = (svc?: string): VariantData => {
  const key = svc && svc in variants ? svc : 'general';
  return variants[key as keyof typeof variants];
};

export async function generateMetadata({ searchParams }: Params): Promise<Metadata> {
  const params = await searchParams;
  const variant = getVariant(params.svc);
  const canonical = params.svc ? `/?svc=${params.svc}` : '/';

  return {
    title: variant.title,
    description: variant.description,
    alternates: { canonical },
    openGraph: {
      title: variant.title,
      description: variant.description,
      url: canonical,
      type: 'website'
    }
  };
}

export default async function Home({ searchParams }: Params) {
  const params = await searchParams;
  const variant = getVariant(params.svc);

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: site.brand,
    address: site.address,
    telephone: site.phone,
    image: `${site.url}/nosotras.png`,
    areaServed: 'Rosario, Santa Fe, Argentina',
    url: site.url,
    sameAs: [site.instagram]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <Navbar message={variant.whatsappMessage} />
      <main>
        <Hero variant={variant} />
        <TrustStrip />
        <Requirements variant={variant} />
        <Services />
        <Enfoque />
        <Testimonial />
        <FAQ variant={variant} />
        <CTASection message={variant.whatsappMessage} />
      </main>
      <Footer />
      <WhatsAppFloat message={variant.whatsappMessage} />
    </>
  );
}
