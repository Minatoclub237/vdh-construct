// Structure des familles de réalisations : uniquement ce qui NE dépend PAS de la langue
// (slug, numéro, chemins d'images). Les titres et textes alternatifs vivent dans les
// dictionnaires, sous `realisations.familles` et `realisations.photosTextes`.

export type FamilleSlug = 'terrassement' | 'pavage' | 'maconnerie' | 'clotures';

export type Famille = {
  slug: FamilleSlug;
  num: string;
  couverture: string;
  /** Clés de photos, dans l'ordre d'affichage. Chaque clé = un fichier .webp. */
  photos: string[];
};

const dossier: Record<FamilleSlug, string> = {
  terrassement: '/realisations/terrassement/',
  pavage: '/realisations/pavage/',
  maconnerie: '/realisations/maconnerie/',
  clotures: '/realisations/clotures/',
};

export const FAMILLES: Famille[] = [
  {
    slug: 'terrassement',
    num: '01',
    couverture: `${dossier.terrassement}double-bande-roulement.webp`,
    photos: [
      'double-bande-roulement',
      'allee-dalles-alveolees',
      'entree-garage-alveoles',
      'acces-carrossable-gravier',
      'cour-gravier-dore',
      'cour-gravier-stabilise',
      'allee-gravier-pavee',
      'acces-gravier-portail',
      'allee-gravier-noir',
      'allee-technique-gravier',
    ],
  },
  {
    slug: 'pavage',
    num: '02',
    couverture: `${dossier.pavage}terrasse-pierre-naturelle.webp`,
    photos: [
      'terrasse-pierre-naturelle',
      'cour-paves-ronds',
      'pavage-ancien-entree',
      'allee-pavee-facade',
      'pavage-long-facade',
      'acces-pave-gravier',
      'entree-pavee-portail',
      'bordure-pavee-galets',
      'terrasse-opus-incertum',
    ],
  },
  {
    slug: 'maconnerie',
    num: '03',
    couverture: `${dossier.maconnerie}muret-courbe-pierre.webp`,
    photos: [
      'muret-courbe-pierre',
      'muret-soutenement-pierre',
      'muret-pierre-couvre-mur',
      'muret-garde-corps',
      'muret-brique-escalier',
      'muret-brique-trottoir',
      'muret-brique-couvre-mur',
      'muret-pierre-reconstituee',
      'muret-pierre-jardin',
      'barbecue-maconne',
      'pilier-maconne',
    ],
  },
  {
    slug: 'clotures',
    num: '04',
    couverture: `${dossier.clotures}cloture-bois-noire.webp`,
    photos: [
      'cloture-bois-noire',
      'grillage-prairie',
      'cloture-portail-vert',
      'grillage-vert-terrain',
      'cloture-portillon-jardin',
      'occultant-gris-cour',
      'occultant-gris-gravier',
      'cloture-noire-batiment',
      'cloture-industrielle',
      'grillage-vert-industriel',
    ],
  },
];

/** Chemin du fichier d'une photo, à partir de sa famille et de sa clé. */
export function cheminPhoto(slug: FamilleSlug, cle: string): string {
  return `${dossier[slug]}${cle}.webp`;
}
