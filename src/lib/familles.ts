// Les quatre familles de réalisations, partagées entre ScrollStage (2e vidéo) et Realisations.
// Une entrée par photo réellement posée dans public/realisations/<famille>.
// Uniquement des réalisations terminées : aucun chantier en cours, aucun avant-travaux.

export type Photo = { src: string; titre: string; alt: string };

export type Famille = {
  slug: string;
  num: string;
  titre: string;
  intro: string;
  resume: string;
  couverture: string;
  photos: Photo[];
};

export const FAMILLES: Famille[] = [
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
