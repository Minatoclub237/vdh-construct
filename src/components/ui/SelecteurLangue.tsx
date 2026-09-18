import { langue, RACINE, NOM_LANGUE, type Locale } from '@/lib/i18n';

// Deux vraies URL, donc deux vrais liens : pas de bascule JavaScript.
// Le visiteur change de page, et Google indexe les deux versions séparément.
const LANGUES: Locale[] = ['fr', 'nl'];

export default function SelecteurLangue({
  variante = 'clair',
  className = '',
}: {
  /** `clair` sur fond doré ou beige, `sombre` sur fond noir. */
  variante?: 'clair' | 'sombre';
  className?: string;
}) {
  const active = langue();
  const base = variante === 'sombre' ? 'text-white/50 hover:text-white' : 'text-dark/50 hover:text-dark';
  const on = variante === 'sombre' ? 'text-white' : 'text-dark';

  return (
    <nav aria-label="Langue" className={`flex items-center gap-1.5 ${className}`}>
      {LANGUES.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden className={variante === 'sombre' ? 'text-white/25' : 'text-dark/25'}>
              /
            </span>
          )}
          {l === active ? (
            <span aria-current="true" className={`text-[12px] font-semibold uppercase tracking-[0.08em] ${on}`}>
              {l}
            </span>
          ) : (
            <a
              href={RACINE[l]}
              hrefLang={l}
              lang={l}
              title={NOM_LANGUE[l]}
              className={`text-[12px] font-medium uppercase tracking-[0.08em] transition-colors ${base}`}
            >
              {l}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
