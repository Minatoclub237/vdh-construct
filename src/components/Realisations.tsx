import { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Phone, X, ChevronLeft, ChevronRight } from 'lucide-react';

type Photo = { src: string; titre: string; alt: string };
type Famille = {
  slug: string;
  titre: string;
  intro: string;
  resume: string;
  couverture: string;
  photos: Photo[];
};

// Une entree par photo reellement posee dans public/realisations/<famille>.
// Seules des realisations terminees : aucun chantier en cours, aucun avant-travaux.
const FAMILLES: Famille[] = [
  {
    slug: 'terrassement',
    titre: 'Terrassement & drainage',
    intro: 'Le support qui empêche tout le reste de bouger',
    resume:
      'Décaissement, empierrement et pente d’évacuation. Allées carrossables, cours en gravier et dalles alvéolées posées sur un fond stabilisé — de quoi encaisser une voiture sans creuser d’ornière.',
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
    titre: 'Pavage & dallage',
    intro: 'Terrasses, allées et abords',
    resume:
      'Pierre naturelle, klinkers et pavés anciens, posés sur fondation avec bordures et niveaux tenus. Terrasses, entrées, abords de façade et parterres minéraux.',
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
    titre: 'Maçonnerie de jardin',
    intro: 'Murs, piliers et ouvrages maçonnés',
    resume:
      'Murets de soutènement et murs bahut en pierre, brique ou blocs, couvre-murs en pierre bleue, piliers, escaliers et barbecues maçonnés. Les ouvrages qui structurent un terrain en pente.',
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
];

const CARTE_ACTIVE = 'border-black bg-black text-white';
const CARTE_INACTIVE = 'border-black/12 bg-white/55 text-black hover:border-black/35 hover:bg-white';

export default function Realisations() {
  const [actif, setActif] = useState(FAMILLES[0].slug);
  const [visionneuse, setVisionneuse] = useState<number | null>(null);

  const famille = useMemo(
    () => FAMILLES.find((f) => f.slug === actif) ?? FAMILLES[0],
    [actif],
  );

  // Les blocs de la vidéo pointent vers #realisations-<famille> : on ouvre la bonne famille.
  useEffect(() => {
    const lireHash = () => {
      const cible = window.location.hash.replace('#realisations-', '').replace('#', '');
      if (FAMILLES.some((f) => f.slug === cible)) setActif(cible);
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

  const choisir = (slug: string) => {
    setActif(slug);
    setVisionneuse(null);
    history.replaceState(null, '', `#realisations-${slug}`);
  };

  return (
    <section
      id="realisations"
      className="relative z-[2] rounded-t-[40px] bg-[#E8E3DD] font-inter shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.35)]"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <header className="max-w-[46rem]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-dark sm:text-[13px]">
            Sélection de projets
          </p>
          <h2 className="mt-4 font-octosquares text-[clamp(2.6rem,9vw,6rem)] font-bold uppercase leading-[0.9] text-black">
            Réalisations
          </h2>
          <p className="mt-6 max-w-[34rem] text-[14px] leading-[1.6] text-black/60 sm:text-[15px]">
            Trente chantiers menés autour d’Engis, rangés par métier. Choisissez une famille pour
            voir ce que ça donne une fois terminé.
          </p>
        </header>

        {/* Les trois familles, résumées puis cliquables. */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {FAMILLES.map((f) => {
            const on = f.slug === actif;
            return (
              <button
                key={f.slug}
                type="button"
                onClick={() => choisir(f.slug)}
                aria-pressed={on}
                className={`group overflow-hidden rounded-2xl border text-left transition-colors duration-300 ${on ? CARTE_ACTIVE : CARTE_INACTIVE}`}
              >
                <div className="relative h-36 overflow-hidden sm:h-40">
                  <img
                    src={f.couverture}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${on ? '' : 'grayscale group-hover:grayscale-0'}`}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-tight sm:text-xl">{f.titre}</h3>
                    <span className={`shrink-0 text-[12px] font-medium ${on ? 'text-gold' : 'text-black/45'}`}>
                      {f.photos.length}
                    </span>
                  </div>
                  <p className={`mt-1 text-[12px] uppercase tracking-[0.12em] ${on ? 'text-white/55' : 'text-black/45'}`}>
                    {f.intro}
                  </p>
                  <p className={`mt-3 text-[13px] leading-[1.6] ${on ? 'text-white/75' : 'text-black/60'}`}>
                    {f.resume}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Les photos de la famille choisie. */}
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-black/10 pt-6">
          <p className="text-[13px] text-black/55">
            <span className="font-semibold text-black">{famille.titre}</span> — {famille.photos.length}{' '}
            réalisations terminées
          </p>
          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-black/80 sm:inline-flex"
          >
            <Phone size={14} />
            Devis gratuit
          </a>
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

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-black/80 sm:hidden"
        >
          <Phone size={14} />
          Devis gratuit
        </a>
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
