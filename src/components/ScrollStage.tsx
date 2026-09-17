import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import Reveal from '@/components/scroll/Reveal';
import ScrollVideo from '@/components/scroll/ScrollVideo';

const SERVICES = ['/ MAÇONNERIE GÉNÉRALE', '/ GROS ŒUVRE', '/ RÉNOVATION & EXTENSION'];

const CAPABILITIES = [
  {
    index: '01',
    title: 'Fondations & terrassement',
    body: 'Implantation, terrassement et fondations dimensionnées pour la charge réelle de l’ouvrage.',
  },
  {
    index: '02',
    title: 'Structure & élévation',
    body: 'Murs porteurs, planchers, poteaux-poutres : une trame maîtrisée du sous-sol à la toiture.',
  },
  {
    index: '03',
    title: 'Suivi de chantier',
    body: 'Un interlocuteur unique, un planning tenu et un compte rendu à chaque phase du chantier.',
  },
];

const SECTION_SHELL =
  'relative flex flex-col justify-between px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 pb-12 md:pb-16';

const SECTION_HEIGHT = 'min-h-screen supports-[height:100svh]:min-h-[100svh]';

const BADGE =
  'inline-flex border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.15em] text-white drop-shadow-md';

const HEADLINE =
  'text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg';

export default function ScrollStage() {
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
                {SERVICES.map((service, i) => (
                  <Reveal key={service} delay={150 + i * 120}>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md">
                      {service}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={300} className="max-w-xs sm:text-right">
                <p className="text-lg leading-relaxed text-white drop-shadow-md sm:text-xl">
                  Nous construisons des structures durables, avec la rigueur et la précision qu’exige
                  chaque étape du gros œuvre.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <Reveal delay={150} className="mb-5">
                  <span className={BADGE}>Val-de-Marne · Île-de-France</span>
                </Reveal>
                <Reveal delay={280}>
                  <h2 className={HEADLINE}>
                    Solide. Précis.
                    <br />
                    Livré.
                  </h2>
                </Reveal>
              </div>

              <Reveal delay={420}>
                <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
                  <img
                    src="/chantier/3.webp"
                    alt="Chantier de gros œuvre suivi par Building360"
                    className="h-24 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-1.5 pr-2">
                    <p className="text-sm font-medium text-white">Parlons de votre chantier</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                      Building360 — Gros œuvre
                    </p>
                    <a
                      href="#contact"
                      className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85"
                    >
                      Rendez-vous de 15 min
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
                <span className={BADGE}>Expertise structurelle</span>
              </Reveal>

              <Reveal delay={220} className="max-w-sm sm:text-right">
                <p className="text-lg leading-relaxed text-white drop-shadow-md sm:text-xl">
                  Nos équipes ne se contentent pas d’exécuter : elles anticipent, ajustent et
                  sécurisent chaque phase de l’ouvrage.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
              <div className="max-w-xl">
                <Reveal delay={180}>
                  <h2 className={HEADLINE}>
                    Bâtir
                    <br />
                    durablement.
                  </h2>
                </Reveal>

                <Reveal delay={320} className="mt-6 max-w-md">
                  <p className="text-sm leading-relaxed text-white/80 drop-shadow-md sm:text-base">
                    Des premières fouilles au dernier plancher, Building360 transforme un plan en
                    ouvrage : proprement, précisément, dans les délais annoncés.
                  </p>
                </Reveal>

                <Reveal delay={420} className="mt-8">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#realisations"
                      className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85 sm:text-sm"
                    >
                      Voir nos chantiers
                      <ChevronRight size={14} />
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:text-sm"
                    >
                      Demander un devis
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 px-5 backdrop-blur-md sm:px-6">
                {CAPABILITIES.map((item, i) => (
                  <Reveal
                    key={item.index}
                    delay={300 + i * 110}
                    className={i < CAPABILITIES.length - 1 ? 'border-b border-white/15' : ''}
                  >
                    <div className="group flex gap-5 py-5">
                      <span className="font-mono text-[11px] tracking-[0.15em] text-white/55">
                        {item.index}
                      </span>
                      <div>
                        <h3 className="flex items-center gap-1 text-base font-medium text-white sm:text-lg">
                          {item.title}
                          <ChevronRight
                            size={16}
                            className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                          />
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">{item.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
  );
}
