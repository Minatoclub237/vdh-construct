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
  const plagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [etats, setEtats] = useState(() => PAIRES.map(() => ({ volet: 0, entree: 0 })));

  useEffect(() => {
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;

    const render = () => {
      raf = 0;
      const vh = window.innerHeight;
      const suivant = plagesRef.current.map((el) => {
        if (!el) return { volet: 0, entree: 0 };
        if (reduit) return { volet: 1, entree: 1 };

        // Progression DANS la plage : la carte est collée au centre pendant
        // tout ce temps, donc le volet s'ouvre sous les yeux du visiteur.
        const r = el.getBoundingClientRect();
        const course = Math.max(1, r.height - vh);
        const brut = -r.top / course;
        const p = brut < 0 ? 0 : brut > 1 ? 1 : brut;

        // On garde une marge au debut et a la fin : le volet ne commence pas
        // avant que la carte soit posee, et finit avant qu'elle reparte.
        const v = (p - 0.18) / 0.62;
        const volet = v < 0 ? 0 : v > 1 ? 1 : v;

        // Petite mise en place a l'arrivee.
        const e = p / 0.16;
        const entree = e < 0 ? 0 : e > 1 ? 1 : e;
        return { volet, entree };
      });

      setEtats((avant) =>
        avant.some(
          (x, i) =>
            Math.abs(x.volet - suivant[i].volet) > 0.004 ||
            Math.abs(x.entree - suivant[i].entree) > 0.004,
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
      <div className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-8 sm:pt-24 lg:px-12">
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
            Quatre chantiers dont nous avons gardé la photo de départ. Chaque carte se pose
            au centre de l’écran, puis l’état d’origine s’efface au profit du résultat.
          </p>
        </header>
      </div>

      {/* Une plage par paire : la carte y reste collée, centrée, le temps du volet. */}
      {PAIRES.map((p, i) => {
        const { volet, entree } = etats[i];
        const pct = Math.round(volet * 100);
        return (
          <div
            key={p.slug}
            ref={(el) => { plagesRef.current[i] = el; }}
            className="relative h-[165vh]"
          >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden supports-[height:100svh]:h-[100svh]">
              <div
                className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12"
                style={{
                  transform: `translateY(${(1 - entree) * 34}px) scale(${0.96 + entree * 0.04})`,
                  opacity: 0.25 + entree * 0.75,
                }}
              >
                <article
                  className={`grid items-center gap-5 sm:gap-7 lg:gap-12 ${
                    i % 2 ? 'lg:grid-cols-[1fr_1.15fr]' : 'lg:grid-cols-[1.15fr_1fr]'
                  }`}
                >
                  <div
                    className={`relative aspect-[4/3] max-h-[44vh] overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10 sm:max-h-[52vh] lg:max-h-[62vh] ${
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
                    <h3 className="mt-1.5 text-xl font-semibold leading-tight sm:text-2xl lg:text-3xl">
                      {p.titre}
                    </h3>
                    <p className="mt-2.5 max-w-[34rem] text-[13px] leading-[1.6] text-white/65 sm:text-[14px]">
                      {p.detail}
                    </p>
                    <p className="mt-3 border-l-2 border-gold/50 pl-3 text-[11px] leading-[1.5] text-white/40 sm:text-[12px]">
                      {p.repere}
                    </p>

                    <div
                      aria-hidden
                      className="mt-4 h-[3px] w-full max-w-[16rem] overflow-hidden rounded-full bg-white/10"
                    >
                      <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        );
      })}

      <div className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[12px] font-medium uppercase tracking-[0.07em] text-black transition-colors hover:bg-gold"
        >
          Montrez-nous votre « avant »
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
