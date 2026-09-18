import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FAMILLES } from '@/lib/familles';

export default function Realisations() {
  const rangeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const metrics = useRef({ top: 0, height: 1 });

  // `ouverte` = la famille affichée en plein écran. null = rien d'ouvert.
  const [ouverte, setOuverte] = useState<string | null>(null);
  const [photo, setPhoto] = useState<number | null>(null);

  const famille = useMemo(
    () => FAMILLES.find((f) => f.slug === ouverte) ?? null,
    [ouverte],
  );

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

  const ouvrir = useCallback((slug: string) => {
    setOuverte(slug);
    setPhoto(null);
  }, []);

  const fermer = useCallback(() => {
    setOuverte(null);
    setPhoto(null);
    if (window.location.hash.startsWith('#realisations-')) {
      history.replaceState(null, '', '#realisations');
    }
  }, []);

  // Les blocs de la 2e vidéo pointent vers #realisations-<famille> : on ouvre direct.
  useEffect(() => {
    const lireHash = () => {
      const cible = window.location.hash.replace('#realisations-', '').replace('#', '');
      if (FAMILLES.some((f) => f.slug === cible)) {
        setOuverte(cible);
        setPhoto(null);
      }
    };
    lireHash();
    window.addEventListener('hashchange', lireHash);
    return () => window.removeEventListener('hashchange', lireHash);
  }, []);

  const deplacer = useCallback(
    (pas: number) => {
      if (!famille) return;
      setPhoto((i) => (i === null ? i : (i + pas + famille.photos.length) % famille.photos.length));
    },
    [famille],
  );

  // Clavier + blocage du défilement de fond tant qu'une famille est ouverte.
  useEffect(() => {
    if (!ouverte) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (photo !== null) setPhoto(null);
        else fermer();
      }
      if (photo !== null && e.key === 'ArrowRight') deplacer(1);
      if (photo !== null && e.key === 'ArrowLeft') deplacer(-1);
    };
    document.addEventListener('keydown', onKey);
    const precedent = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = precedent;
    };
  }, [ouverte, photo, deplacer, fermer]);

  return (
    <section
      id="realisations"
      className="relative z-[2] rounded-t-[40px] bg-[#E8E3DD] font-inter shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.35)]"
    >
      {/* La bande des quatre familles, tirée par le défilement vertical. */}
      <div ref={rangeRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-x-clip supports-[height:100svh]:h-[100svh]">
          <div
            ref={trackRef}
            className="flex w-max items-center gap-6 pl-5 pr-[20vw] sm:gap-10 sm:pl-8 lg:pl-12"
            style={{ willChange: 'transform' }}
          >
            <header className="w-[80vw] max-w-[42rem] shrink-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark sm:text-[13px]">
                Sélection de projets
              </p>
              <h2 className="mt-4 font-octosquares text-[clamp(2.6rem,9vw,7rem)] font-bold uppercase leading-[0.9] text-black">
                Réalisations
              </h2>
              <p className="mt-6 max-w-[26rem] text-[14px] leading-[1.5] text-black/60 sm:text-[15px]">
                Quarante chantiers menés autour d’Engis, rangés en quatre métiers.
                Cliquez sur une famille : les photos s’ouvrent aussitôt.
              </p>
            </header>

            {FAMILLES.map((f) => (
              <button
                key={f.slug}
                type="button"
                onClick={() => ouvrir(f.slug)}
                className="group relative h-[58vh] max-h-[530px] w-[78vw] max-w-[620px] shrink-0 overflow-hidden rounded-2xl text-left"
              >
                <img
                  src={f.couverture}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="text-[13px] font-medium text-gold">{f.num}</span>
                      <h3 className="mt-1 whitespace-pre-line text-2xl font-semibold leading-[1.1] text-white sm:text-3xl">
                        {f.titre}
                      </h3>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                        {f.intro}
                      </p>
                      <p className="mt-3 max-w-[22rem] text-[13px] leading-[1.55] text-white/80">
                        {f.resume}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-black transition-colors group-hover:bg-gold">
                        Voir les {f.photos.length} photos
                        <ChevronRight size={14} />
                      </span>
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="shrink-0 text-white/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plein écran : on tombe directement sur les photos de la famille. */}
      {famille && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#E8E3DD]">
          <div className="sticky top-0 z-10 border-b border-black/10 bg-[#E8E3DD]/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold-dark">
                  Famille {famille.num}
                </p>
                <h3 className="truncate text-xl font-semibold leading-tight text-black sm:text-2xl">
                  {famille.titre.replace('\n', ' ')}
                  <span className="ml-2 text-[13px] font-normal text-black/45">
                    {famille.photos.length} photos
                  </span>
                </h3>
              </div>

              <div className="order-3 flex w-full flex-wrap gap-2 sm:order-none sm:w-auto sm:flex-1">
                {FAMILLES.map((f) => (
                  <button
                    key={f.slug}
                    type="button"
                    onClick={() => ouvrir(f.slug)}
                    aria-pressed={f.slug === famille.slug}
                    className={`rounded-full border px-3.5 py-1.5 text-[11px] font-medium transition-colors duration-300 sm:text-[12px] ${
                      f.slug === famille.slug
                        ? 'border-black bg-black text-white'
                        : 'border-black/15 bg-white/60 text-black/70 hover:border-black/40 hover:bg-white'
                    }`}
                  >
                    {f.titre.replace('\n', ' ')}
                  </button>
                ))}
              </div>

              <div className="ml-auto flex items-center gap-2">
                <a
                  href="#contact"
                  onClick={fermer}
                  className="hidden items-center gap-2 rounded-full bg-black px-4 py-2 text-[11px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-black/80 sm:inline-flex"
                >
                  <Phone size={13} />
                  Devis gratuit
                </a>
                <button
                  type="button"
                  onClick={fermer}
                  aria-label="Fermer les réalisations"
                  className="rounded-full border border-black/15 bg-white/70 p-2.5 text-black transition-colors hover:bg-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 px-5 py-6 sm:gap-4 sm:px-8 lg:grid-cols-3 xl:grid-cols-4">
            {famille.photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setPhoto(i)}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-black/5"
                aria-label={`Agrandir : ${p.titre}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
                  <h4 className="text-left text-[13px] font-medium leading-tight text-white sm:text-sm">
                    {p.titre}
                  </h4>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {famille && photo !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={famille.photos[photo].titre}
          onClick={() => setPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setPhoto(null)}
            aria-label="Revenir à la galerie"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25"
          >
            <X size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); deplacer(-1); }}
            aria-label="Photo précédente"
            className="absolute left-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={famille.photos[photo].src}
              alt={famille.photos[photo].alt}
              className="mx-auto max-h-[78vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {famille.photos[photo].titre}
              <span className="ml-2 text-white/40">
                {photo + 1} / {famille.photos.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); deplacer(1); }}
            aria-label="Photo suivante"
            className="absolute right-3 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
