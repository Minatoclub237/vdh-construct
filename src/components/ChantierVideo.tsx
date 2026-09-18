import { useEffect, useRef, useState } from 'react';
import { Play, Phone } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';
import { T, lien } from '@/lib/i18n';

// Cinq chantiers filmes au telephone par l'entreprise, remontes dans l'ordre du recit :
// l'etat de depart, puis ce qui se construit, puis ce qui est fini.
// Seuls les fichiers restent ici : titres et descriptions viennent du dictionnaire.
const CLIPS = [
  { src: '/chantier-video/cour-avant-travaux.mp4', poster: '/chantier-video/cour-avant-travaux.jpg', duree: '11 s' },
  { src: '/chantier-video/annexe-blocs.mp4', poster: '/chantier-video/annexe-blocs.jpg', duree: '13 s' },
  { src: '/chantier-video/cloture-jardin.mp4', poster: '/chantier-video/cloture-jardin.jpg', duree: '8 s' },
  { src: '/chantier-video/muret-brique-rue.mp4', poster: '/chantier-video/muret-brique-rue.jpg', duree: '18 s' },
  { src: '/chantier-video/cour-pavee.mp4', poster: '/chantier-video/cour-pavee.jpg', duree: '21 s' },
];

const PAS = 42; // degres entre deux cartes sur le cylindre

export default function ChantierVideo() {
  const t = T();
  const rangeRef = useRef<HTMLDivElement>(null);
  const drumRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);
  const metrics = useRef({ top: 0, height: 1, rayon: 460 });
  const [actif, setActif] = useState(0);

  useEffect(() => {
    const range = rangeRef.current;
    const drum = drumRef.current;
    if (!range || !drum) return;

    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = () => {
      const l = Math.min(window.innerWidth, 1400);
      metrics.current = {
        top: range.getBoundingClientRect().top + window.scrollY,
        height: range.offsetHeight,
        // rayon proportionne a la largeur : sur mobile le cylindre doit rester dans l'ecran
        rayon: Math.max(265, Math.min(l * 0.5, 540)),
      };
      drum.style.setProperty('--rayon', `${metrics.current.rayon}px`);
    };

    let raf = 0;
    let dernier = -1;
    const render = () => {
      raf = 0;
      const { top, height } = metrics.current;
      const total = Math.max(1, height - window.innerHeight);
      const brut = (window.scrollY - top) / total;
      const p = brut < 0 ? 0 : brut > 1 ? 1 : brut;

      const angle = p * (CLIPS.length - 1) * PAS;
      drum.style.transform = `translateZ(calc(var(--rayon) * -1)) rotateY(${-angle}deg)`;

      const i = Math.round(p * (CLIPS.length - 1));
      if (i !== dernier) {
        dernier = i;
        setActif(i);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    let t = 0;
    const onResize = () => {
      clearTimeout(t);
      t = window.setTimeout(() => {
        measure();
        onScroll();
      }, 120);
    };

    measure();
    render();
    if (!reduit) {
      window.addEventListener('scroll', onScroll, { passive: true });
    }
    window.addEventListener('resize', onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Seule la carte de face joue : les autres sont mises en pause et rembobinees.
  useEffect(() => {
    videosRef.current.forEach((v, i) => {
      if (!v) return;
      if (i === actif) {
        v.play().catch(() => {});
      } else if (!v.paused) {
        v.pause();
        v.currentTime = 0;
      }
    });
  }, [actif]);

  return (
    <section
      id="chantier"
      className="relative z-[3] rounded-t-[40px] bg-[#0a0a0a] font-inter text-white shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.5)]"
    >
      <div ref={rangeRef} className="relative h-[480vh]">
        <div className="sticky top-0 h-screen overflow-hidden supports-[height:100svh]:h-[100svh]">
          {/* Halo qui suit la carte de face */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[90px]"
          />

          <div className="relative mx-auto flex h-full max-w-[1400px] flex-col px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-12">
            <header className="shrink-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                {t.chantier.kicker}
              </p>
              <TexteRevele
                as="h2"
                texte={t.chantier.titre}
                accent={t.chantier.titreAccent}
                className="mt-3 font-octosquares text-[clamp(2.2rem,8vw,5.5rem)] font-bold uppercase leading-[0.9]"
              />
              <p className="mt-4 max-w-[30rem] text-[14px] leading-[1.6] text-white/60 sm:text-[15px]">
                {t.chantier.intro}
              </p>
            </header>

            {/* Le cylindre */}
            <div
              className="relative flex-1"
              style={{ perspective: '1500px', perspectiveOrigin: '50% 55%' }}
            >
              <div
                ref={drumRef}
                className="absolute left-1/2 top-1/2 h-0 w-0"
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                {CLIPS.map((c, i) => {
                  const on = i === actif;
                  return (
                    <div
                      key={c.src}
                      className="absolute"
                      style={{
                        transformStyle: 'preserve-3d',
                        // L'ordre compte : le recentrage doit s'appliquer dans le repère du
                        // cylindre, donc EN DERNIER (= le plus à gauche), sinon il suit la
                        // rotation de la carte et le sujet dérive hors du centre.
                        transform: `translate(-50%, -50%) rotateY(${i * PAS}deg) translateZ(var(--rayon))`,
                        left: 0,
                        top: 0,
                      }}
                    >
                      <figure
                        className={`relative w-[min(46vw,196px)] overflow-hidden rounded-2xl border transition-[opacity,border-color,box-shadow,filter] duration-500 sm:w-[min(40vw,290px)] ${
                          on
                            ? 'border-gold/70 opacity-100 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.9)]'
                            : 'border-white/10 opacity-45 grayscale'
                        }`}
                        style={{ aspectRatio: '9 / 16' }}
                      >
                        <video
                          ref={(el) => { videosRef.current[i] = el; }}
                          src={c.src}
                          poster={c.poster}
                          muted
                          loop
                          playsInline
                          preload={i === 0 ? 'metadata' : 'none'}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />

                        <figcaption className="absolute inset-x-3 bottom-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] tracking-[0.15em] text-gold">
                              0{i + 1}
                            </span>
                            <span className="font-mono text-[10px] tracking-[0.12em] text-white/50">
                              {c.duree}
                            </span>
                          </div>
                          <p className="mt-1 text-[13px] font-semibold leading-tight text-white sm:text-[15px]">
                            {t.chantier.clips[i].titre}
                          </p>
                        </figcaption>

                        {!on && (
                          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/45 p-2.5 backdrop-blur-sm">
                            <Play size={16} className="text-white/80" />
                          </span>
                        )}
                      </figure>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Légende de la carte de face + progression */}
            <div className="shrink-0 border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-[34rem]">
                  <p className="text-lg font-semibold leading-tight sm:text-xl">
                    {t.chantier.clips[actif].titre}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-white/60 sm:text-sm">
                    {t.chantier.clips[actif].detail}
                  </p>
                </div>
                <a
                  href={lien('#contact')}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-black transition-colors hover:bg-gold"
                >
                  <Phone size={14} />
                  {t.commun.devisGratuit}
                </a>
              </div>

              <div className="mt-4 flex gap-1.5" aria-hidden>
                {CLIPS.map((c, i) => (
                  <span
                    key={c.src}
                    className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
                      i === actif ? 'bg-gold' : 'bg-white/15'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
