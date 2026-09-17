import { useEffect, useRef } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';

const PROJETS = [
  { num: '01', titre: 'Terrassement\n& fondations', image: '/realisations/1.webp' },
  { num: '02', titre: 'Élévation\nbéton armé', image: '/realisations/2.webp' },
  { num: '03', titre: 'Dalle\n& planchers', image: '/realisations/3.webp' },
  { num: '04', titre: 'Charpente\n& couverture', image: '/realisations/4.webp' },
  { num: '05', titre: 'Maison\nindividuelle', image: '/realisations/5.webp' },
  { num: '06', titre: 'Immeuble\nR+4', image: '/realisations/6.webp' },
  { num: '07', titre: 'Chantier\ntertiaire', image: '/realisations/7.webp' },
  { num: '08', titre: 'Suivi\nde chantier', image: '/realisations/8.webp' },
];

export default function Realisations() {
  const rangeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const metrics = useRef({ top: 0, height: 1 });

  // Le défilement vertical pilote la translation horizontale de la bande.
  useEffect(() => {
    const range = rangeRef.current;
    const track = trackRef.current;
    if (!range || !track) return;

    const measure = () => {
      metrics.current = {
        top: range.getBoundingClientRect().top + window.scrollY,
        height: range.offsetHeight,
      };
    };

    let raf = 0;
    const render = () => {
      raf = 0;
      const { top, height } = metrics.current;
      const total = Math.max(1, height - window.innerHeight);
      const raw = (window.scrollY - top) / total;
      const progress = raw < 0 ? 0 : raw > 1 ? 1 : raw;
      const distance = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="realisations" className="relative z-[2] bg-[#E8E3DD] font-inter rounded-t-[40px] shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.35)]">
      <div ref={rangeRef} className="relative h-[340vh]">
        <div className="sticky top-0 flex h-screen supports-[height:100svh]:h-[100svh] items-center overflow-x-clip">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-6 sm:gap-10 pl-5 sm:pl-8 lg:pl-12 pr-[20vw]"
            style={{ willChange: 'transform' }}
          >
            <header className="shrink-0 w-[80vw] max-w-[42rem]">
              <p className="text-gold-dark text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em]">
                Sélection de projets
              </p>
              <h2 className="mt-4 font-octosquares font-bold uppercase text-black leading-[0.9] text-[clamp(2.6rem,9vw,7rem)]">
                Réalisations
              </h2>
              <p className="mt-6 max-w-[26rem] text-black/60 text-[14px] sm:text-[15px] leading-[1.5]">
                Huit chantiers représentatifs de ce que nous livrons : du terrassement à la
                structure finie.
              </p>
            </header>

            {PROJETS.map((projet) => (
              <article
                key={projet.num}
                className="group relative shrink-0 w-[78vw] max-w-[850px] h-[58vh] max-h-[530px] rounded-2xl overflow-hidden"
              >
                <img
                  src={projet.image}
                  alt=""
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7 flex items-end justify-between gap-4">
                  <div>
                    <span className="text-gold text-[13px] font-medium">{projet.num}</span>
                    <h3 className="mt-1 whitespace-pre-line text-white text-2xl sm:text-3xl font-semibold leading-[1.1]">
                      {projet.titre}
                    </h3>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-black transition-colors hover:bg-white/85"
                    >
                      <Phone size={14} />
                      Prendre un RDV
                    </a>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-white/70 transition-all duration-300 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
