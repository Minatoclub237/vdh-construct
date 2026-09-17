import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';
import Reveal from '@/components/scroll/Reveal';
import ScrollVideo from '@/components/scroll/ScrollVideo';

const SERVICES = ['/ PAVAGE & TERRASSE', '/ MAÇONNERIE DE JARDIN', '/ TERRASSEMENT & ENTRETIEN'];

const CAPABILITIES = [
  {
    index: '01',
    title: 'Terrassement & drainage',
    body: 'Décaissement, empierrement et pente d’évacuation : le support qui empêche une terrasse de bouger.',
  },
  {
    index: '02',
    title: 'Pavage & dallage',
    body: 'Pavés, dalles et pierre bleue, bordures et allées de garage, posés sur une fondation stabilisée.',
  },
  {
    index: '03',
    title: 'Maçonnerie de jardin',
    body: 'Murs de soutènement, abris de jardin, piliers, rejointoyage et travaux de béton.',
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
                  Nous posons des extérieurs qui traversent les hivers. Tout le soin est dans la
                  préparation, avant la première dalle.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <Reveal delay={150} className="mb-5">
                  <span className={BADGE}>Engis · Flémalle · Seraing</span>
                </Reveal>
                <Reveal delay={280}>
                  <h2 className={HEADLINE}>
                    Terrassé. Posé.
                    <br />
                    Fini.
                  </h2>
                </Reveal>
              </div>

              <Reveal delay={420}>
                <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
                  <img
                    src="/chantier/3.webp"
                    alt="Murets en blocs de béton sur un chantier VDH Construct"
                    className="h-24 w-20 rounded-lg object-cover"
                  />
                  <div className="flex flex-col gap-1.5 pr-2">
                    <p className="text-sm font-medium text-white">Parlons de votre extérieur</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                      VDH Construct — Engis
                    </p>
                    <a
                      href="#contact"
                      className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85"
                    >
                      Visite gratuite sur place
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
                <span className={BADGE}>Maçonnerie & gros œuvre</span>
              </Reveal>

              <Reveal delay={220} className="max-w-sm sm:text-right">
                <p className="text-lg leading-relaxed text-white drop-shadow-md sm:text-xl">
                  Un extérieur qui tient se décide sous la surface : décaissement, empierrement,
                  pente d’évacuation.
                </p>
              </Reveal>
            </div>

            <div className="flex flex-1 flex-col justify-end gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
              <div className="max-w-xl">
                <Reveal delay={180}>
                  <h2 className={HEADLINE}>
                    Fait pour
                    <br />
                    durer.
                  </h2>
                </Reveal>

                <Reveal delay={320} className="mt-6 max-w-md">
                  <p className="text-sm leading-relaxed text-white/80 drop-shadow-md sm:text-base">
                    Du premier coup de pelle à la dernière bordure, VDH Construct transforme un
                    terrain en espace de vie : proprement, étape par étape.
                  </p>
                </Reveal>

                <Reveal delay={420} className="mt-8">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="#realisations"
                      className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85 sm:text-sm"
                    >
                      Voir nos réalisations
                      <ChevronRight size={14} />
                    </a>
                    <a
                      href="#contact"
                      className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:text-sm"
                    >
                      Devis gratuit
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
