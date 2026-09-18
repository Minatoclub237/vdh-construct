// Deux langues, deux URL distinctes : / (fr) et /nl/.
// Chaque langue est une entree Vite separee, donc la locale est FIXE pour toute
// la duree de la page. Pas besoin de contexte React ni de re-rendu : on la pose
// une fois au montage et les composants la lisent.

import { FR } from './textes-fr';
import { NL } from './textes-nl';

export type Locale = 'fr' | 'nl';

export type Textes = typeof FR;

const DICTIONNAIRES: Record<Locale, Textes> = {
  fr: FR,
  nl: NL,
};

let courante: Locale = 'fr';

export function definirLangue(l: Locale) {
  courante = l;
  if (typeof document !== 'undefined') document.documentElement.lang = BALISE_LANG[l];
}

export function langue(): Locale {
  return courante;
}

/** Les textes de la langue en cours. Appelé pendant le rendu : `const t = T();` */
export function T(): Textes {
  return DICTIONNAIRES[courante];
}

// fr-BE et nl-BE : le site vise la Belgique. L'anglais reste neutre.
export const BALISE_LANG: Record<Locale, string> = {
  fr: 'fr-BE',
  nl: 'nl-BE',
};

/** Racine de chaque langue, utilisée par le sélecteur et les liens internes. */
export const RACINE: Record<Locale, string> = {
  fr: '/',
  nl: '/nl/',
};

export const PAGE_LEGALE: Record<Locale, string> = {
  fr: '/mentions-legales',
  nl: '/nl/juridische-vermeldingen',
};

export const NOM_LANGUE: Record<Locale, string> = {
  fr: 'Français',
  nl: 'Nederlands',
};

/** Préfixe les ancres internes pour qu'un lien depuis /nl/ reste sur /nl/. */
export function lien(ancre: string, l: Locale = courante): string {
  return ancre.startsWith('#') ? `${RACINE[l]}${ancre}`.replace('//#', '/#') : ancre;
}
