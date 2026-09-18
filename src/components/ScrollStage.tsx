import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import Reveal from '@/components/scroll/Reveal';
import TexteRevele from '@/components/ui/TexteRevele';
import ScrollVideo from '@/components/scroll/ScrollVideo';
import { FAMILLES } from '@/lib/familles';
import { T, lien } from '@/lib/i18n';

// Ordre d'affichage des quatre familles. Libellés et textes : dictionnaire.
const ORDRE_SERVICES = ['pavage', 'maconnerie', 'terrassement', 'clotures'] as const;
const ORDRE_CAPACITES = ['terrassement', 'pavage', 'maconnerie', 'clotures'] as const;

const SECTION_SHELL =
  'relative flex flex-col justify-between px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-12 md:pb-16';

const SECTION_HEIGHT = 'min-h-screen supports-[height:100svh]:min-h-[100svh]';

const BADGE =
  'inline-flex border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.15em] text-white drop-shadow-md';

const HEADLINE =
  'text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg';

export default function ScrollStage() {
  const t = T();
  const rangeRef = useRef<HTMLDivElement>(null);

  return (
      <div id="solutions" ref={rangeRef} className="scroll-stage relative bg-[#0a0a0a] font-inter text-white antialiased">
        <div className="sticky top-0 z-0 h-screen supports-[height:100svh]:h-[100svh]">
          <ScrollVideo />
        </div>

        <div className="relative z-10 -mt-[100vh] supports-[height:100svh]:-mt-[100svh]">
          <section className={`${SECTION_SHELL} ${SECTION_HEIGHT}`}>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-2">
                {ORDRE_SERVICES.map((slug, i) => (
                  <Reveal key={slug} delay={150 + i * 120}>
                    <a
                      href={lien(`#realisations-${slug}`)}
                      className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md transition-colors duration-300 hover:text-white"
                    >
                      {t.stage.services[i]}
                    </a>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={300} className="max-w-xs sm:text-right">
                <p className="text-lg leading-relaxed text-white drop-shadow-md sm:text-xl">
                  {t.stage.phrase1}
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <Reveal delay={150} className="mb-5">
                  <span className={BADGE}>{t.stage.badgeZone}</span>
                </Reveal>
                <Reveal delay={280}>
                  <TexteRevele as="h2" texte={t.stage.titre1} accent={t.stage.titre1Accent} className={HEADLINE} />
                </Reveal>
              </div>

              <Reveal delay={420}>
                <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
                  <img
                    src="/chantier/3.webp"
                    alt=""
                    aria-hidden
                    className="h-24 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-1.5 pr-2">
                    <p className="text-sm font-medium text-white">{t.stage.carteTitre}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                      {t.stage.carteSous}
                    </p>
                    <a
                      href={lien('#contact')}
                      className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85"
                    >
                      {t.stage.carteCta}
                      <ChevronRight size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <div aria-hidden className="h-[80vh]" />

          <section className={`${SECTION_SHELL} ${SECTION_HEIGHT}`}>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <Reveal delay={120}>
                <span className={BADGE}>{t.stage.badge2}</span>
              </Reveal>

              <Reveal delay={220} className="max-w-sm sm:text-right">
                <p className="text-lg leading-relaxed text-white drop-shadow-md sm:text-xl">
                  {t.stage.phrase2}
                </p>
              </Reveal>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
              <div className="max-w-xl">
                <Reveal delay={180}>
                  <TexteRevele as="h2" texte={t.stage.titre2} accent={t.stage.titre2Accent} className={HEADLINE} />
                </Reveal>

                <Reveal delay={320} className="mt-6 max-w-md">
                  <p className="text-sm leading-relaxed text-white/80 drop-shadow-md sm:text-base">
                    {t.stage.texte2}
                  </p>
                </Reveal>

                <Reveal delay={420} className="mt-8">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={lien('#realisations')}
                      className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85 sm:text-sm"
                    >
                      {t.commun.voirRealisations}
                      <ChevronRight size={14} />
                    </a>
                    <a
                      href={lien('#contact')}
                      className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:text-sm"
                    >
                      {t.commun.devisGratuit}
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 px-5 backdrop-blur-md sm:px-6">
                {ORDRE_CAPACITES.map((slug, i) => {
                  const f = FAMILLES.find((x) => x.slug === slug)!;
                  return (
                  <Reveal
                    key={slug}
                    delay={300 + i * 110}
                    className={i < ORDRE_CAPACITES.length - 1 ? 'border-b border-white/15' : ''}
                  >
                    <a href={lien(`#realisations-${slug}`)} className="group flex gap-5 py-5">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/55">
                        {f.num}
                      </span>
                      <div>
                        <h3 className="flex items-center gap-1 text-base font-medium text-white sm:text-lg">
                          {t.realisations.familles[slug].titre.replace('\n', ' ')}
                          <ChevronRight
                            size={16}
                            className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                          />
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">{t.stage.capacites[i]}</p>
                        <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-white/45 transition-colors duration-300 group-hover:text-gold">
                          {t.stage.voirLes} {f.photos.length} {t.stage.realisationsMot}
                        </span>
                      </div>
                    </a>
                  </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
