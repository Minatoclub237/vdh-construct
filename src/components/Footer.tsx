import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';

// Chaque prestation ouvre la famille correspondante dans Réalisations.
// « Entretien » n'a pas de famille photo : il renvoie au contact.
const PRESTATIONS = [
  { label: 'Pavage & terrasses', href: '#realisations-pavage' },
  { label: 'Maçonnerie de jardin', href: '#realisations-maconnerie' },
  { label: 'Terrassement & drainage', href: '#realisations-terrassement' },
  { label: 'Clôtures & portails', href: '#realisations-clotures' },
  { label: 'Entretien de jardin', href: '#contact' },
];

const ENTREPRISE = [
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Savoir-faire', href: '#solutions' },
  { label: 'Services', href: '#secteurs' },
  { label: 'Questions fréquentes', href: '#faq' },
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
          <TexteRevele
            as="h2"
            texte="Un projet"
            accent="d’extérieur ?"
            accentClass="text-white"
            className="max-w-[16ch] font-octosquares text-[clamp(1.9rem,5.5vw,3.6rem)] font-bold uppercase leading-[0.95] text-dark"
          />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-dark px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-gold transition-colors hover:bg-black"
            >
              Devis gratuit
              <ArrowUpRight size={16} />
            </a>
            <a
              href="tel:+32493083344"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-dark px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-dark transition-colors hover:bg-black/5"
            >
              <Phone size={15} />
              +32 493 08 33 44
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            {/* Le logo ramène en haut de page, sur le hero. */}
            <a
              href="#hero"
              aria-label="Revenir en haut de la page"
              className="group flex w-fit items-center gap-3 rounded-sm transition-opacity hover:opacity-80"
            >
              <LogoMark />
              <span className="font-octosquares text-lg font-medium tracking-tight sm:text-[22px]">
                VDH Construct
              </span>
            </a>
            <p className="max-w-[24rem] text-[13px] leading-[1.6] text-dark/70">
              Aménagements extérieurs et maçonnerie à Engis. Pavage, terrasses, murs de
              soutènement, clôtures, parterres et entretien de jardin.
            </p>

            <a
              href="https://www.facebook.com/p/VDH-construct-am%C3%A9nagements-ext%C3%A9rieurs-61567285237457/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2.5 rounded-sm border border-gold-dark bg-white/40 px-3.5 py-2.5 text-[13px] font-medium text-dark transition-colors hover:bg-white/70"
            >
              <LogoFacebook />
              Suivre nos chantiers sur Facebook
            </a>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-dark/50">
              Prestations
            </p>
            {PRESTATIONS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] text-dark/80 transition-colors hover:text-dark"
              >
                {item.label}
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
              Rue Nouvelle Route 135
              <br />
              4480 Engis
            </p>
            <a
              href="tel:+32493083344"
              className="flex items-center gap-2 text-[13px] text-dark/80 transition-colors hover:text-dark"
            >
              <Phone size={15} />
              +32 493 08 33 44
            </a>
            <a
              href="mailto:info@vdhamenagements.be"
              className="flex items-center gap-2 text-[13px] text-dark/80 transition-colors hover:text-dark"
            >
              <Mail size={15} />
              info@vdhamenagements.be
            </a>
            <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-dark/50">
              Lun – Sam · 8h – 18h · Dim. fermé
            </p>
          </div>
        </div>

        {/* Numero verifie le 18/09/2026 au Public Search de la Banque-Carrefour des Entreprises.
            Entite personne physique « Vanderheyden, Jordan » : ni RPM ni capital a mentionner. */}
        <div className="flex flex-col gap-3 border-t border-dashed border-gold-dark pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.1em] text-dark/60">
            © 2026 VDH Construct · Engis · BCE / TVA&nbsp;BE&nbsp;1015.396.691
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

function LogoFacebook() {
  // Logo officiel dans sa couleur de marque (#1877F2), pas une icone monochrome.
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden focusable="false" className="shrink-0">
      <path
        fill="#1877F2"
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z"
      />
      <path
        fill="#FFFFFF"
        d="m16.67 15.56.53-3.49h-3.33V9.81c0-.96.47-1.89 1.96-1.89h1.51V4.96s-1.37-.24-2.68-.24c-2.74 0-4.53 1.67-4.53 4.69v2.66H7.08v3.49h3.05V24a12.1 12.1 0 0 0 3.74 0v-8.44h2.8Z"
      />
    </svg>
  );
}

function LogoMark() {
  // Meme variante que le hero : le footer est lui aussi sur fond dore.
  return (
    <img
      src="/logo-vdh-gold.webp"
      alt="VDH Construct & Aménagements Extérieurs"
      width={48}
      height={48}
      className="h-9 w-9 sm:h-12 sm:w-12 flex-shrink-0 select-none"
      draggable={false}
    />
  );
}
