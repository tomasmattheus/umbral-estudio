import Link from 'next/link';

type Props = {
  message: string;
  track: 'whatsapp_hero' | 'whatsapp_cta' | 'whatsapp_float';
  className?: string;
  children: React.ReactNode;
};

export default function WhatsAppLink({ message, track, className, children }: Props) {
  const url = `https://wa.me/5493415986642?text=${encodeURIComponent(message)}`;
  return (
    <Link href={url} target="_blank" rel="noreferrer" data-track={track} className={className}>
      {children}
    </Link>
  );
}
