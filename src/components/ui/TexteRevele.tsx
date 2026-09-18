import { createElement, useEffect, useRef, useState, type ElementType } from 'react';

// Revelation mot a mot : chaque mot remonte derriere un masque quand la ligne entre a l'ecran.
// IntersectionObserver et non ScrollTrigger : un element deja visible au chargement doit
// s'animer lui aussi, sinon le texte reste invisible en haut de page.

type Props = {
  texte: string;
  /** Seconde partie du titre, rendue dans l'autre couleur. */
  accent?: string;
  accentClass?: string;
  as?: ElementType;
  className?: string;
  /** Retard avant le premier mot, en ms. */
  delai?: number;
  /** Ecart entre deux mots, en ms. */
  pas?: number;
};

export default function TexteRevele({
  texte,
  accent,
  accentClass = 'text-gold',
  as = 'span',
  className = '',
  delai = 0,
  pas = 55,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [vu, setVu] = useState(false);
  const [reduit, setReduit] = useState(false);

  useEffect(() => {
    setReduit(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVu(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const groupes = [
    { mots: texte.split(/\s+/).filter(Boolean), classe: '' },
    ...(accent ? [{ mots: accent.split(/\s+/).filter(Boolean), classe: accentClass }] : []),
  ];

  let n = -1;

  return createElement(
    as,
    { ref, className },
    groupes.map((g, gi) =>
      g.mots.map((mot) => {
        n += 1;
        const i = n;
        return (
          <span
            key={`${gi}-${i}`}
            // Le masque coupe les jambages (g, j, p) : on lui rend la place avec pb/-mb.
            className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom"
          >
            <span
              className={`inline-block will-change-transform ${g.classe} ${
                reduit
                  ? ''
                  : `transition-[transform,opacity] duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      vu ? 'translate-y-0 opacity-100' : 'translate-y-[110%] opacity-0'
                    }`
              }`}
              style={reduit ? undefined : { transitionDelay: `${delai + i * pas}ms` }}
            >
              {mot}
            </span>
            {' '}
          </span>
        );
      }),
    ),
  );
}
