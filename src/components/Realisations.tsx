import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';

type Photo = { src: string; titre: string; alt: string };
type Famille = {
  slug: string;
  num: string;
  titre: string;
  intro: string;
  resume: string;
  couverture: string;
  photos: Photo[];
};

// Une entree par photo reellement posee dans public/realisations/<famille>.
// Uniquement des realisations terminees : aucun chantier en cours, aucun avant-travaux.
const FAMILLES: Famille[] = [
  {
    slug: 'terrassement',
    num: '01',
    titre: 'Terrassement\n& drainage',
    intro: 'Le support qui empêche tout le reste de bouger',
    resume:
      'Décaissement, empierrement et pente d’évacuation. Allées carrossables, cours en gravier et dalles alvéolées posées sur un fond stabilisé.',
    couverture: '/realisations/terrassement/double-bande-roulement.webp',
    photos: [
      { src: '/realisations/terrassement/double-bande-roulement.webp', titre: 'Double bande de roulement', alt: 'Allée en gravier avec deux bandes de dalles alvéolées blanches' },
      { src: '/realisations/terrassement/allee-dalles-alveolees.webp', titre: 'Allée en dalles alvéolées', alt: 'Allée en gravier renforcée d’une bande de dalles alvéolées' },
      { src: '/realisations/terrassement/entree-garage-alveoles.webp', titre: 'Entrée de garage', alt: 'Entrée de garage en gravier et dalles alvéolées devant une maison en brique' },
      { src: '/realisations/terrassement/acces-carrossable-gravier.webp', titre: 'Accès carrossable', alt: 'Accès carrossable en gravier bordé de haies' },
      { src: '/realisations/terrassement/cour-gravier-dore.webp', titre: 'Cour en gravier doré', alt: 'Cour en gravier doré bordée de pavés devant un garage' },
      { src: '/realisations/terrassement/cour-gravier-stabilise.webp', titre: 'Cour en gravier stabilisé', alt: 'Cour en gravier stabilisé devant une porte de garage' },
      { src: '/realisations/terrassement/allee-gravier-pavee.webp', titre: 'Allée gravier et pavés', alt: 'Accès mêlant gravier et pavés devant un garage blanc' },
      { src: '/realisations/terrassement/acces-gravier-portail.webp', titre: 'Accès et portail', alt: 'Cour gravillonnée devant un garage et un portail bleu' },
      { src: '/realisations/terrassement/allee-gravier-noir.webp', titre: 'Allée en gravier noir', alt: 'Allée en gravier noir bordée de béton le long d’une maison' },
      { src: '/realisations/terrassement/allee-technique-gravier.webp', titre: 'Allée technique', alt: 'Allée de service en gravier le long d’un bâtiment' },
    ],
  },
  {
    slug: 'pavage',
    num: '02',
    titre: 'Pavage\n& dallage',
    intro: 'Terrasses, allées et abords',
    resume:
      'Pierre naturelle, klinkers et pavés anciens, posés sur fondation avec bordures et niveaux tenus. Terrasses, entrées et abords de façade.',
    couverture: '/realisations/pavage/terrasse-pierre-naturelle.webp',
    photos: [
      { src: '/realisations/pavage/terrasse-pierre-naturelle.webp', titre: 'Terrasse en pierre naturelle', alt: 'Terrasse en dalles de pierre naturelle irrégulière le long d’une maison blanche' },
      { src: '/realisations/pavage/cour-paves-ronds.webp', titre: 'Cour en pavés', alt: 'Cour pavée de klinkers devant une maison en brique' },
      { src: '/realisations/pavage/pavage-ancien-entree.webp', titre: 'Pavage à l’ancienne', alt: 'Pavage en pavés anciens devant une entrée en brique' },
      { src: '/realisations/pavage/allee-pavee-facade.webp', titre: 'Allée pavée en façade', alt: 'Allée pavée longeant la façade en brique d’une maison' },
      { src: '/realisations/pavage/pavage-long-facade.webp', titre: 'Pavage de façade', alt: 'Bande pavée en klinkers le long d’un mur en brique' },
      { src: '/realisations/pavage/acces-pave-gravier.webp', titre: 'Accès pavé', alt: 'Accès pavé bordé de gravier le long d’une maison en brique' },
      { src: '/realisations/pavage/entree-pavee-portail.webp', titre: 'Entrée pavée', alt: 'Entrée pavée devant un portail bleu avec boîte aux lettres' },
      { src: '/realisations/pavage/bordure-pavee-galets.webp', titre: 'Bordure pavée et galets', alt: 'Bordure pavée séparant un lit de galets blancs d’un massif planté' },
      { src: '/realisations/pavage/terrasse-opus-incertum.webp', titre: 'Terrasse en opus incertum', alt: 'Terrasse en dalles de pierre irrégulières devant une baie vitrée' },
    ],
  },
  {
    slug: 'maconnerie',
    num: '03',
    titre: 'Maçonnerie\nde jardin',
    intro: 'Murs, piliers et ouvrages maçonnés',
    resume:
      'Murets de soutènement et murs bahut en pierre, brique ou blocs, couvre-murs en pierre bleue, piliers, escaliers et barbecues maçonnés.',
    couverture: '/realisations/maconnerie/muret-courbe-pierre.webp',
    photos: [
      { src: '/realisations/maconnerie/muret-courbe-pierre.webp', titre: 'Muret courbe en pierre', alt: 'Muret courbe en pierre naturelle entourant une pelouse' },
      { src: '/realisations/maconnerie/muret-soutenement-pierre.webp', titre: 'Muret de soutènement', alt: 'Muret de soutènement en pierre naturelle retenant un parterre planté' },
      { src: '/realisations/maconnerie/muret-pierre-couvre-mur.webp', titre: 'Muret et couvre-mur', alt: 'Muret en pierre naturelle surmonté d’un couvre-mur' },
      { src: '/realisations/maconnerie/muret-garde-corps.webp', titre: 'Muret et garde-corps', alt: 'Muret en pierre surmonté d’un garde-corps en fer forgé' },
      { src: '/realisations/maconnerie/muret-brique-escalier.webp', titre: 'Muret et escalier', alt: 'Muret en brique courbe accompagné d’un escalier en béton' },
      { src: '/realisations/maconnerie/muret-brique-trottoir.webp', titre: 'Muret en brique', alt: 'Muret en brique le long d’un trottoir devant une haie taillée' },
      { src: '/realisations/maconnerie/muret-brique-couvre-mur.webp', titre: 'Muret brique et couvre-mur', alt: 'Muret en brique avec couvre-mur béton bordant un massif' },
      { src: '/realisations/maconnerie/muret-pierre-reconstituee.webp', titre: 'Muret en pierre reconstituée', alt: 'Muret en blocs de pierre reconstituée retenant un talus' },
      { src: '/realisations/maconnerie/muret-pierre-jardin.webp', titre: 'Muret de jardin', alt: 'Muret en pierre naturelle dans un jardin avec barrière en bois' },
      { src: '/realisations/maconnerie/barbecue-maconne.webp', titre: 'Barbecue maçonné', alt: 'Barbecue maçonné en blocs et brique avec grille et plan de travail' },
      { src: '/realisations/maconnerie/pilier-maconne.webp', titre: 'Pilier maçonné', alt: 'Pilier maçonné en blocs couronné de brique' },
    ],
  },
  {
    slug: 'clotures',
    num: '04',
    titre: 'Clôtures\n& portails',
    intro: 'Délimiter, fermer, masquer',
    resume:
      'Grillage rigide, panneaux occultants, clôtures bois et portails, posés d’aplomb sur poteaux scellés. Du jardin privatif au site industriel.',
    couverture: '/realisations/clotures/cloture-bois-noire.webp',
    photos: [
      { src: '/realisations/clotures/cloture-bois-noire.webp', titre: 'Clôture bois noire', alt: 'Clôture en bois peinte en noir avec portillon devant une terrasse dallée' },
      { src: '/realisations/clotures/grillage-prairie.webp', titre: 'Clôture de prairie', alt: 'Clôture en grillage rigide vert bordant une prairie' },
      { src: '/realisations/clotures/cloture-portail-vert.webp', titre: 'Clôture et portail', alt: 'Clôture en grillage rigide vert avec portail en limite de terrain' },
      { src: '/realisations/clotures/grillage-vert-terrain.webp', titre: 'Grillage rigide', alt: 'Clôture en grillage rigide vert le long d’un terrain' },
      { src: '/realisations/clotures/cloture-portillon-jardin.webp', titre: 'Clôture et portillon', alt: 'Clôture en grillage rigide vert avec portillon dans un jardin' },
      { src: '/realisations/clotures/occultant-gris-cour.webp', titre: 'Panneaux occultants', alt: 'Clôture en panneaux occultants gris bordant une cour bétonnée' },
      { src: '/realisations/clotures/occultant-gris-gravier.webp', titre: 'Brise-vue sur cour', alt: 'Clôture occultante grise le long d’une cour en gravier' },
      { src: '/realisations/clotures/cloture-noire-batiment.webp', titre: 'Clôture noire', alt: 'Clôture noire devant un bâtiment industriel' },
      { src: '/realisations/clotures/cloture-industrielle.webp', titre: 'Clôture industrielle', alt: 'Clôture grillagée autour d’une installation industrielle' },
      { src: '/realisations/clotures/grillage-vert-industriel.webp', titre: 'Grillage de site', alt: 'Clôture en grillage rigide vert sur un site industriel' },
    ],
  },
];

export default function Realisations() {
  const rangeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const galerieRef = useRef<HTMLDivElement>(null);
  const metrics = useRef({ top: 0, height: 1 });

  const [actif, setActif] = useState(FAMILLES[0].slug);
  const [visionneuse, setVisionneuse] = useState<number | null>(null);

  const famille = useMemo(
    () => FAMILLES.find((f) => f.slug === actif) ?? FAMILLES[0],
    [actif],
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

  const ouvrir = useCallback((slug: string, defiler: boolean) => {
    setActif(slug);
    setVisionneuse(null);
    history.replaceState(null, '', `#realisations-${slug}`);
    if (defiler) {
      requestAnimationFrame(() => {
        galerieRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  // Les blocs de la 2e vidéo pointent vers #realisations-<famille>.
  useEffect(() => {
    const lireHash = () => {
      const cible = window.location.hash.replace('#realisations-', '').replace('#', '');
      const f = FAMILLES.find((x) => x.slug === cible);
      if (!f) return;
      setActif(f.slug);
      requestAnimationFrame(() => {
        galerieRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };
    lireHash();
    window.addEventListener('hashchange', lireHash);
    return () => window.removeEventListener('hashchange', lireHash);
  }, []);

  const deplacer = useCallback(
    (pas: number) => {
      setVisionneuse((i) => {
        if (i === null) return i;
        const n = famille.photos.length;
        return (i + pas + n) % n;
      });
    },
    [famille.photos.length],
  );

  useEffect(() => {
    if (visionneuse === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisionneuse(null);
      if (e.key === 'ArrowRight') deplacer(1);
      if (e.key === 'ArrowLeft') deplacer(-1);
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [visionneuse, deplacer]);

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
                Cliquez sur une famille pour voir ce que ça donne une fois terminé.
              </p>
            </header>

            {FAMILLES.map((f) => {
              const on = f.slug === actif;
              return (
                <button
                  key={f.slug}
                  type="button"
                  onClick={() => ouvrir(f.slug, true)}
                  aria-pressed={on}
                  className={`group relative h-[58vh] max-h-[530px] w-[78vw] max-w-[620px] shrink-0 overflow-hidden rounded-2xl text-left transition-shadow duration-500 ${on ? 'shadow-[0_0_0_3px_#F3AF42]' : ''}`}
                >
                  <img
                    src={f.couverture}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    draggable={false}
                    className={`absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0 ${on ? '' : 'grayscale'}`}
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
                          Voir les {f.photos.length} réalisations
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
              );
            })}
          </div>
        </div>
      </div>

      {/* Les photos de la famille choisie. */}
      <div ref={galerieRef} className="mx-auto max-w-[1400px] scroll-mt-6 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold-dark">
              Famille {famille.num}
            </p>
            <h3 className="mt-1 text-2xl font-semibold leading-tight text-black sm:text-3xl">
              {famille.titre.replace('\n', ' ')}
              <span className="ml-3 text-[14px] font-normal text-black/45">
                {famille.photos.length} réalisations terminées
              </span>
            </h3>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-black/80"
          >
            <Phone size={14} />
            Devis gratuit
          </a>
        </div>

        {/* Raccourci entre familles, sans remonter la bande. */}
        <div className="mt-6 flex flex-wrap gap-2">
          {FAMILLES.map((f) => (
            <button
              key={f.slug}
              type="button"
              onClick={() => ouvrir(f.slug, false)}
              aria-pressed={f.slug === actif}
              className={`rounded-full border px-4 py-2 text-[12px] font-medium transition-colors duration-300 ${
                f.slug === actif
                  ? 'border-black bg-black text-white'
                  : 'border-black/15 bg-white/50 text-black/70 hover:border-black/40 hover:bg-white'
              }`}
            >
              {f.titre.replace('\n', ' ')}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {famille.photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setVisionneuse(i)}
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

      {visionneuse !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={famille.photos[visionneuse].titre}
          onClick={() => setVisionneuse(null)}
        >
          <button
            type="button"
            onClick={() => setVisionneuse(null)}
            aria-label="Fermer"
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
              src={famille.photos[visionneuse].src}
              alt={famille.photos[visionneuse].alt}
              className="mx-auto max-h-[78vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {famille.photos[visionneuse].titre}
              <span className="ml-2 text-white/40">
                {visionneuse + 1} / {famille.photos.length}
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
