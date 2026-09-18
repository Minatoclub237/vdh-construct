import { useState } from 'react';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { T, lien } from '@/lib/i18n';
import SelecteurLangue from '@/components/ui/SelecteurLangue';

// Les libellés viennent du dictionnaire ; seuls les ancres restent ici.
const NAV_LINKS = [
  { cle: 'savoirFaire', href: '#solutions' },
  { cle: 'services', href: '#secteurs' },
  { cle: 'realisations', href: '#realisations' },
  { cle: 'faq', href: '#faq' },
] as const;

const TEL_DISPLAY = '+32 493 08 33 44';
const TEL_HREF = 'tel:+32493083344';

export default function Hero({ onAdvance }: { onAdvance: () => void }) {
  const t = T();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full bg-gold font-inter overflow-hidden">
      <div
        className="absolute inset-2 sm:inset-3 border border-gold-dark rounded-sm pointer-events-none animate-border-draw"
        style={{ animationDelay: '100ms' }}
      />

      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-1 h-1 bg-dark animate-fade-in" style={{ animationDelay: '600ms' }} />
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-1 h-1 bg-dark animate-fade-in" style={{ animationDelay: '700ms' }} />
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-1 h-1 bg-dark animate-fade-in" style={{ animationDelay: '800ms' }} />
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-1 h-1 bg-dark animate-fade-in" style={{ animationDelay: '900ms' }} />

      <div
        className="absolute inset-3 sm:inset-4 border border-dashed border-gold-dark rounded-sm flex flex-col overflow-hidden min-h-0 animate-border-draw"
        style={{ animationDelay: '250ms' }}
      >
        <nav className="relative z-30 flex items-center justify-between px-5 sm:px-8 lg:px-12 border-b border-dashed border-gold-dark min-h-[4rem] sm:min-h-[5.5rem]">
          <div className="flex items-center gap-2 sm:gap-3 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <LogoMark />
            <span className="font-octosquares font-medium text-lg sm:text-[22px] text-black tracking-tight">
              VDH Construct
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={t.nav[link.cle]}
                href={lien(link.href)}
                className="px-5 py-2.5 bg-black/5 rounded-sm text-[13px] font-medium uppercase tracking-[0.07em] text-black hover:bg-black/10 transition-colors animate-fade-up"
                style={{ animationDelay: `${500 + i * 80}ms` }}
              >
                {t.nav[link.cle]}
              </a>
            ))}
          </div>

          <SelecteurLangue className="hidden md:flex animate-fade-up" />

          <a
            href={lien('#contact')}
            className="hidden md:inline-flex px-6 py-3.5 bg-dark rounded-sm text-gold text-[13px] font-medium uppercase tracking-[0.07em] hover:bg-black transition-colors animate-fade-up"
            style={{ animationDelay: '820ms' }}
          >
            {t.commun.devisGratuit}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t.nav.ouvrirMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm bg-black/5 hover:bg-black/10 transition-colors animate-fade-in"
            style={{ animationDelay: '500ms' }}
          >
            <div className="relative w-5 h-5">
              <Menu
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  menuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                }`}
              />
              <X
                size={20}
                className={`absolute inset-0 transition-all duration-300 ${
                  menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                }`}
              />
            </div>
          </button>
        </nav>

        <div
          className={`md:hidden absolute inset-0 top-[4rem] sm:top-[5.5rem] z-20 bg-gold flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col px-5 sm:px-8 pt-8 gap-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={t.nav[link.cle]}
                href={lien(link.href)}
                onClick={() => setMenuOpen(false)}
                className={`px-5 py-4 bg-black/5 rounded-sm text-[14px] font-medium uppercase tracking-[0.07em] text-black hover:bg-black/10 transition-all duration-400 ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : '0ms' }}
              >
                {t.nav[link.cle]}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-start gap-3 px-5 sm:px-8 mt-6">
            <SelecteurLangue className="mb-1" />
            <a
              href={lien('#contact')}
              onClick={() => setMenuOpen(false)}
              className={`inline-flex px-6 py-4 bg-dark rounded-sm text-gold text-[13px] font-medium uppercase tracking-[0.07em] hover:bg-black transition-all duration-400 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: menuOpen ? `${80 + NAV_LINKS.length * 50}ms` : '0ms' }}
            >
              {t.commun.devisGratuit}
            </a>
            <a
              href={TEL_HREF}
              onClick={() => setMenuOpen(false)}
              className={`inline-flex items-center gap-2 px-6 py-4 rounded-sm border border-gold-dark text-black text-[13px] font-semibold uppercase tracking-[0.07em] hover:bg-black/5 transition-all duration-400 ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
              style={{ transitionDelay: menuOpen ? `${130 + NAV_LINKS.length * 50}ms` : '0ms' }}
            >
              <Phone size={15} />
              {TEL_DISPLAY}
            </a>
          </div>
        </div>

        <div className="relative z-10 flex-1 grid grid-cols-1 grid-rows-[auto_auto_minmax(0,1fr)_auto] lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)_auto_auto] min-h-0">
          <h1 className="font-octosquares font-bold text-black uppercase leading-[0.9] select-none px-5 sm:px-8 lg:px-12 pt-6 sm:pt-10 lg:pt-14 lg:col-start-1 lg:row-start-1">
            <span
              className="block text-[clamp(1.8rem,7vw,5.5rem)] animate-fade-up"
              style={{ animationDelay: '500ms' }}
            >
              {t.hero.mots[0]}
            </span>
            <span
              className="block text-[clamp(1.8rem,7vw,5.5rem)] mt-2 sm:mt-3 animate-fade-up"
              style={{ animationDelay: '620ms' }}
            >
              {t.hero.mots[1]}
            </span>
            <span
              className="block text-[clamp(1.8rem,7vw,5.5rem)] mt-2 sm:mt-3 animate-fade-up"
              style={{ animationDelay: '740ms' }}
            >
              {t.hero.mots[2]}
            </span>
          </h1>

          <p
            className="max-w-[26rem] px-5 sm:px-8 lg:px-12 mt-6 lg:mt-0 mb-5 sm:mb-6 text-black text-[14px] sm:text-[15px] font-medium uppercase leading-[1.4] tracking-[0.04em] animate-fade-up lg:col-start-1 lg:row-start-2"
            style={{ animationDelay: '900ms' }}
          >
            {t.hero.baseline}
          </p>

          <div
            className="flex min-h-0 overflow-hidden border-t lg:border-t-0 lg:border-l border-dashed border-gold-dark p-2 animate-scale-in lg:col-start-2 lg:row-start-1 lg:row-span-3"
            style={{ animationDelay: '600ms' }}
          >
            <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-sm">
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>

          {/* En mobile ces boutons passent sous la vidéo ; en lg ils reviennent
              en bas de la colonne de texte. */}
          <div className="flex flex-wrap items-center gap-3 px-5 sm:px-8 lg:px-12 pt-5 sm:pt-6 pb-6 sm:pb-12 border-t lg:border-t-0 border-dashed border-gold-dark lg:pt-0 lg:col-start-1 lg:row-start-3">
            <a
              href={lien('#contact')}
              className="inline-flex px-6 py-3.5 bg-dark rounded-sm text-gold text-[13px] font-medium uppercase tracking-[0.07em] hover:bg-black transition-colors animate-fade-up"
              style={{ animationDelay: '1050ms' }}
            >
              {t.commun.devisGratuit}
            </a>
            <a
              href={TEL_HREF}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm border border-gold-dark text-black text-[13px] font-semibold uppercase tracking-[0.07em] hover:bg-black/5 transition-colors animate-fade-up"
              style={{ animationDelay: '1120ms' }}
            >
              <Phone size={15} />
              {TEL_DISPLAY}
            </a>
            <button
              onClick={onAdvance}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm border border-gold-dark text-black text-[13px] font-medium uppercase tracking-[0.07em] hover:bg-black/5 transition-colors animate-fade-up"
              style={{ animationDelay: '1190ms' }}
            >
              {t.hero.defiler}
              <ChevronDown size={16} className="animate-bounce" />
            </button>

            <p
              className="basis-full text-black/70 text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.1em] animate-fade-up"
              style={{ animationDelay: '1260ms' }}
            >
              {t.hero.garanties}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMark() {
  // Rendu detoure sur fond jaune : ses pixels de bord se fondent dans le dore du hero.
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
