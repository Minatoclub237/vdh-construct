import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';

// Quatre chantiers dont on possede l'etat AVANT et l'etat FINI du meme endroit.
// Chaque paire a ete confirmee sur un detail identifiable (mur peint, descente
// d'eau, couvre-mur, toiture) : on n'affiche pas deux photos qui se ressemblent.
const PAIRES = [
  {
    slug: 'allee-pierre',
    titre: 'Allée en pierre naturelle',
    lieu: 'Abords de maison',
    detail:
      'Les anciennes dalles se déchaussaient et les joints étaient pris par la mousse. Décaissement, fondation, puis pose de dalles de pierre naturelle avec une pente d’évacuation vers la pelouse.',
    repere: 'Même mur en brique peinte, même retour de pelouse à gauche.',
  },
  {
    slug: 'passage-technique',
    titre: 'Passage technique',
    lieu: 'Site industriel',
    detail:
      'Un couloir de service entre deux bâtiments, rendu impraticable par la végétation. Débroussaillage, géotextile et empierrement : le passage reste propre et l’eau s’évacue.',
    repere: 'Même descente d’eau coudée, même bardage métallique.',
  },
  {
    slug: 'muret-parterre',
    titre: 'Muret et parterre',
    lieu: 'Jardin en pente',
    detail:
      'Un talus qui s’effondrait sur le chemin. Muret de soutènement en brique, couvre-mur posé d’aplomb, puis remise en terre et plantation du parterre au-dessus.',
    repere: 'Mêmes dalles de couvre-mur, même haie taillée à l’arrière.',
  },
  {
    slug: 'cloture-site',
    titre: 'Clôture de site',
    lieu: 'Limite de propriété',
    detail:
      'Une limite tenue par des barrières de chantier provisoires. Poteaux scellés et panneaux de grillage rigide posés au cordeau sur toute la longueur.',
    repere: 'Même toiture courbe rouge et blanche, mêmes arbres au fond.',
  },
];

export default function AvantApres() {
  const cartesRef = useRef<(HTMLElement | null)[]>([]);
  const [etats, setEtats] = useState(() => PAIRES.map(() => ({ volet: 0, proximite: 0 })));

  useEffect(() => {
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    const render = () => {
      raf = 0;
      const vh = window.innerHeight;
      const suivant = cartesRef.current.map((el) => {
        if (!el) return { volet: 0, proximite: 0 };
        const r = el.getBoundingClientRect();
        if (reduit) return { volet: 1, proximite: 1 };

        // Le volet s'ouvre pendant que la carte traverse l'écran : 0 quand elle
        // arrive par le bas, 1 quand son centre a dépassé le tiers supérieur.
        const brut = (vh * 0.85 - r.top) / Math.max(1, r.height * 0.75);
        const volet = brut < 0 ? 0 : brut > 1 ? 1 : brut;

        // Proximité au centre de l'écran : pilote le redressement de la carte.
        const centre = Math.abs(r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        const proximite = 1 - (centre < 0 ? 0 : centre > 1 ? 1 : centre);
        return { volet, proximite };
      });

      setEtats((avant) =>
        avant.some(
          (e, i) =>
            Math.abs(e.volet - suivant[i].volet) > 0.004 ||
            Math.abs(e.proximite - suivant[i].proximite) > 0.004,
        )
          ? suivant
          : avant,
      );
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      id="avant-apres"
      className="relative z-[3] rounded-t-[40px] bg-[#111111] font-inter text-white shadow-[0_-28px_60px_-18px_rgba(0,0,0,0.5)]"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <header className="max-w-[46rem]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            Le même endroit, avant et après
          </p>
          <TexteRevele
            as="h2"
            texte="Ce qu’il y avait"
            accent="à la place."
            className="mt-3 font-octosquares text-[clamp(2.2rem,7vw,5rem)] font-bold uppercase leading-[0.9]"
          />
          <p className="mt-5 max-w-[34rem] text-[14px] leading-[1.6] text-white/60 sm:text-[15px]">
            Quatre chantiers dont nous avons gardé la photo de départ. Faites défiler :
            l’état d’origine s’efface au profit du résultat.
          </p>
        </header>

        <div className="mt-14 flex flex-col gap-12 sm:gap-16">
          {PAIRES.map((p, i) => {
            const { volet, proximite } = etats[i];
            const pct = Math.round(volet * 100);
            return (
              <article
                key={p.slug}
                ref={(el) => { cartesRef.current[i] = el; }}
                className={`grid items-center gap-7 lg:gap-12 ${
                  i % 2 ? 'lg:grid-cols-[1fr_1.25fr]' : 'lg:grid-cols-[1.25fr_1fr]'
                }`}
                style={{
                  // La carte se redresse et remonte en approchant du centre.
                  transform: `translateY(${(1 - proximite) * 26}px) scale(${0.965 + proximite * 0.035})`,
                  opacity: 0.45 + proximite * 0.55,
                  transition: 'transform 120ms linear, opacity 120ms linear',
                }}
              >
                <div
                  className={`relative aspect-[4/3] max-h-[58vh] overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10 ${
                    i % 2 ? 'lg:order-2' : ''
                  }`}
                >
                  {/* Etat d'origine, dessous */}
                  <img
                    src={`/avant-apres/${p.slug}-avant.webp`}
                    alt={`Avant travaux : ${p.titre.toLowerCase()}`}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Resultat, revele par le volet */}
                  <img
                    src={`/avant-apres/${p.slug}-apres.webp`}
                    alt={`Après travaux : ${p.titre.toLowerCase()}`}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ clipPath: `inset(0 0 0 ${100 - pct}%)` }}
                  />

                  {/* La ligne de séparation suit le volet */}
                  <div
                    aria-hidden
                    className="absolute inset-y-0 w-[2px] bg-gold shadow-[0_0_18px_rgba(243,175,66,0.7)]"
                    style={{ left: `${100 - pct}%`, opacity: pct > 2 && pct < 98 ? 1 : 0 }}
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
                    Avant
                  </span>
                  <span
                    className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-dark transition-opacity duration-300"
                    style={{ opacity: pct > 25 ? 1 : 0.25 }}
                  >
                    Après
                  </span>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold">
                    0{i + 1} · {p.lieu}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
                    {p.titre}
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-[14px] leading-[1.65] text-white/65">
                    {p.detail}
                  </p>
                  <p className="mt-4 border-l-2 border-gold/50 pl-3 text-[12px] leading-[1.5] text-white/40">
                    {p.repere}
                  </p>

                  <div
                    aria-hidden
                    className="mt-6 h-[3px] w-full max-w-[16rem] overflow-hidden rounded-full bg-white/10"
                  >
                    <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <a
          href="#contact"
          className="mt-16 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.07em] text-black transition-colors hover:bg-gold"
        >
          Montrez-nous votre « avant »
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
