import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const PRESTATIONS = [
  'Maçonnerie générale',
  'Gros œuvre',
  'Fondations & terrassement',
  'Extension & surélévation',
  'Rénovation & reprise',
];

const ENTREPRISE = [
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Savoir-faire', href: '#solutions' },
  { label: 'Secteurs', href: '#secteurs' },
  { label: 'Objections fréquentes', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="relative z-[3] w-full bg-gold font-inter text-dark">
      <div className="absolute inset-2 sm:inset-3 border border-gold-dark rounded-sm pointer-events-none" />
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-1 h-1 bg-dark" />
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-1 h-1 bg-dark" />
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-1 h-1 bg-dark" />
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-1 h-1 bg-dark" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14 pt-14 sm:pt-20 pb-6">
        <div className="flex flex-col gap-8 border-b border-dashed border-gold-dark pb-12 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-octosquares font-bold uppercase leading-[0.95] text-dark text-[clamp(1.9rem,5.5vw,3.6rem)] max-w-[16ch]">
            Un projet de gros œuvre ?
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-dark px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-gold transition-colors hover:bg-black"
            >
              Demander un devis
              <ArrowUpRight size={16} />
            </a>
            <a
              href="tel:+33781410081"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-dark px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-dark transition-colors hover:bg-black/5"
            >
              <Phone size={15} />
              07 81 41 00 81
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="font-octosquares font-medium text-lg sm:text-[22px] tracking-tight">
                Building360
              </span>
            </div>
            <p className="max-w-[24rem] text-[13px] leading-[1.6] text-dark/70">
              Maçonnerie générale et gros œuvre du bâtiment. Fondations, structure et reprise
              d’ouvrage, du terrassement à la réception.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark/50">
              Prestations
            </p>
            {PRESTATIONS.map((item) => (
              <a
                key={item}
                href="#contact"
                className="text-[13px] text-dark/80 transition-colors hover:text-dark"
              >
                {item}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark/50">
              Entreprise
            </p>
            {ENTREPRISE.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-dark/80 transition-colors hover:text-dark"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark/50">
              Contact
            </p>
            <p className="flex items-start gap-2 text-[13px] text-dark/80">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              Val-de-Marne (94)
              <br />
              Île-de-France
            </p>
            <a
              href="tel:+33781410081"
              className="flex items-center gap-2 text-[13px] text-dark/80 transition-colors hover:text-dark"
            >
              <Phone size={15} />
              07 81 41 00 81
            </a>
            <a
              href="mailto:sasbuilding360@gmail.com"
              className="flex items-center gap-2 text-[13px] text-dark/80 transition-colors hover:text-dark"
            >
              <Mail size={15} />
              sasbuilding360@gmail.com
            </a>
            <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-dark/50">
              Lun – Sam · 7h – 21h · Dim. fermé
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-dashed border-gold-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.1em] text-dark/60">
            © 2026 Building360 · SIREN 933 640 658
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="#"
              className="text-[11px] uppercase tracking-[0.1em] text-dark/60 transition-colors hover:text-dark"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-[11px] uppercase tracking-[0.1em] text-dark/60 transition-colors hover:text-dark"
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <rect x="16" y="2" width="18" height="15" rx="1" transform="rotate(45 16 2)" fill="#080808" />
      <rect x="10" y="8" width="12" height="15" rx="1" transform="rotate(45 10 8)" fill="#080808" />
    </svg>
  );
}
