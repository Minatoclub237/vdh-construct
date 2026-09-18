// Référence française. Les deux autres langues (textes-nl.ts, textes-en.ts)
// reprennent exactement cette structure — TypeScript le vérifie via `Textes`.
// Les clés de photos correspondent à `CLE` dans familles.ts.

import { FR_B } from './textes-fr-b';

const FR_A = {
  meta: {
    titre: 'VDH Construct — Pavage, terrasse et maçonnerie à Engis',
    description:
      'Aménagements extérieurs à Engis, Flémalle et Seraing : pavage, terrasses, maçonnerie, clôtures, parterres et entretien de jardin. Devis gratuit après visite sur place.',
  },

  commun: {
    devisGratuit: 'Devis gratuit',
    voirRealisations: 'Voir nos réalisations',
    telephone: '+32 493 08 33 44',
    fermer: 'Fermer',
    precedente: 'Photo précédente',
    suivante: 'Photo suivante',
    agrandir: 'Agrandir',
    retourSite: 'Retour au site',
    changerLangue: 'Changer de langue',
  },

  nav: {
    savoirFaire: 'Savoir-faire',
    services: 'Services',
    realisations: 'Réalisations',
    faq: 'FAQ',
    ouvrirMenu: 'Ouvrir le menu',
  },

  hero: {
    mots: ['Pavage', 'Terrasse', 'Maçonnerie'],
    baseline:
      'Aménagements extérieurs à Engis, Flémalle et Seraing. Devis gratuit après visite sur place, du lundi au samedi.',
    defiler: 'Défiler',
    garanties: 'Visite sur place · Sans engagement · Dans 20 km autour d’Engis',
  },

  features: {
    titre: 'De la petite intervention à l’aménagement complet de votre extérieur',
    texte:
      'Entretien, pavage, terrasses, clôtures et maçonnerie : un seul artisan pour tout l’extérieur, à Engis et dans un rayon de 20 km.',
    demanderDevis: 'Demander un devis',
  },

  stage: {
    services: ['/ PAVAGE & TERRASSE', '/ MAÇONNERIE DE JARDIN', '/ TERRASSEMENT & ENTRETIEN', '/ CLÔTURES & PORTAILS'],
    badgeZone: 'Engis · Flémalle · Seraing',
    phrase1:
      'Nous posons des extérieurs qui traversent les hivers. Tout le soin est dans la préparation, avant la première dalle.',
    titre1: 'Terrassé. Posé.',
    titre1Accent: 'Fini.',
    carteTitre: 'Parlons de votre extérieur',
    carteSous: 'VDH Construct — Engis',
    carteCta: 'Visite gratuite sur place',
    badge2: 'Maçonnerie & gros œuvre',
    phrase2:
      'Un extérieur qui tient se décide sous la surface : décaissement, empierrement, pente d’évacuation.',
    titre2: 'Fait pour',
    titre2Accent: 'durer.',
    texte2:
      'Du premier coup de pelle à la dernière bordure, VDH Construct transforme un terrain en espace de vie : proprement, étape par étape.',
    voirLes: 'Voir les',
    realisationsMot: 'réalisations',
    capacites: [
      'Décaissement, empierrement et pente d’évacuation : le support qui empêche une terrasse de bouger.',
      'Pavés, dalles et pierre bleue, bordures et allées de garage, posés sur une fondation stabilisée.',
      'Murs de soutènement, abris de jardin, piliers, rejointoyage et travaux de béton.',
      'Grillage rigide, panneaux occultants, clôtures bois et portails, sur poteaux scellés d’aplomb.',
    ],
  },

  realisations: {
    kicker: 'Sélection de projets',
    titre: 'Réalisations',
    intro:
      'Quarante chantiers menés autour d’Engis, rangés en quatre métiers. Cliquez sur une famille : les photos s’ouvrent aussitôt.',
    voirPhotos: 'Voir les {n} photos',
    photos: 'photos',
    famille: 'Famille',
    fermerGalerie: 'Fermer les réalisations',
    familles: {
      terrassement: {
        titre: 'Terrassement\n& drainage',
        intro: 'Le support qui empêche tout le reste de bouger',
        resume:
          'Décaissement, empierrement et pente d’évacuation. Allées carrossables, cours en gravier et dalles alvéolées posées sur un fond stabilisé.',
      },
      pavage: {
        titre: 'Pavage\n& dallage',
        intro: 'Terrasses, allées et abords',
        resume:
          'Pierre naturelle, klinkers et pavés anciens, posés sur fondation avec bordures et niveaux tenus. Terrasses, entrées et abords de façade.',
      },
      maconnerie: {
        titre: 'Maçonnerie\nde jardin',
        intro: 'Murs, piliers et ouvrages maçonnés',
        resume:
          'Murets de soutènement et murs bahut en pierre, brique ou blocs, couvre-murs en pierre bleue, piliers, escaliers et barbecues maçonnés.',
      },
      clotures: {
        titre: 'Clôtures\n& portails',
        intro: 'Délimiter, fermer, masquer',
        resume:
          'Grillage rigide, panneaux occultants, clôtures bois et portails, posés d’aplomb sur poteaux scellés. Du jardin privatif au site industriel.',
      },
    },
    photosTextes: {
      'double-bande-roulement': { titre: 'Double bande de roulement', alt: 'Allée en gravier avec deux bandes de dalles alvéolées blanches' },
      'allee-dalles-alveolees': { titre: 'Allée en dalles alvéolées', alt: 'Allée en gravier renforcée d’une bande de dalles alvéolées' },
      'entree-garage-alveoles': { titre: 'Entrée de garage', alt: 'Entrée de garage en gravier et dalles alvéolées devant une maison en brique' },
      'acces-carrossable-gravier': { titre: 'Accès carrossable', alt: 'Accès carrossable en gravier bordé de haies' },
      'cour-gravier-dore': { titre: 'Cour en gravier doré', alt: 'Cour en gravier doré bordée de pavés devant un garage' },
      'cour-gravier-stabilise': { titre: 'Cour en gravier stabilisé', alt: 'Cour en gravier stabilisé devant une porte de garage' },
      'allee-gravier-pavee': { titre: 'Allée gravier et pavés', alt: 'Accès mêlant gravier et pavés devant un garage blanc' },
      'acces-gravier-portail': { titre: 'Accès et portail', alt: 'Cour gravillonnée devant un garage et un portail bleu' },
      'allee-gravier-noir': { titre: 'Allée en gravier noir', alt: 'Allée en gravier noir bordée de béton le long d’une maison' },
      'allee-technique-gravier': { titre: 'Allée technique', alt: 'Allée de service en gravier le long d’un bâtiment' },
      'terrasse-pierre-naturelle': { titre: 'Terrasse en pierre naturelle', alt: 'Terrasse en dalles de pierre naturelle irrégulière le long d’une maison blanche' },
      'cour-paves-ronds': { titre: 'Cour en pavés', alt: 'Cour pavée de klinkers devant une maison en brique' },
      'pavage-ancien-entree': { titre: 'Pavage à l’ancienne', alt: 'Pavage en pavés anciens devant une entrée en brique' },
      'allee-pavee-facade': { titre: 'Allée pavée en façade', alt: 'Allée pavée longeant la façade en brique d’une maison' },
      'pavage-long-facade': { titre: 'Pavage de façade', alt: 'Bande pavée en klinkers le long d’un mur en brique' },
      'acces-pave-gravier': { titre: 'Accès pavé', alt: 'Accès pavé bordé de gravier le long d’une maison en brique' },
      'entree-pavee-portail': { titre: 'Entrée pavée', alt: 'Entrée pavée devant un portail bleu avec boîte aux lettres' },
      'bordure-pavee-galets': { titre: 'Bordure pavée et galets', alt: 'Bordure pavée séparant un lit de galets blancs d’un massif planté' },
      'terrasse-opus-incertum': { titre: 'Terrasse en opus incertum', alt: 'Terrasse en dalles de pierre irrégulières devant une baie vitrée' },
      'muret-courbe-pierre': { titre: 'Muret courbe en pierre', alt: 'Muret courbe en pierre naturelle entourant une pelouse' },
      'muret-soutenement-pierre': { titre: 'Muret de soutènement', alt: 'Muret de soutènement en pierre naturelle retenant un parterre planté' },
      'muret-pierre-couvre-mur': { titre: 'Muret et couvre-mur', alt: 'Muret en pierre naturelle surmonté d’un couvre-mur' },
      'muret-garde-corps': { titre: 'Muret et garde-corps', alt: 'Muret en pierre surmonté d’un garde-corps en fer forgé' },
      'muret-brique-escalier': { titre: 'Muret et escalier', alt: 'Muret en brique courbe accompagné d’un escalier en béton' },
      'muret-brique-trottoir': { titre: 'Muret en brique', alt: 'Muret en brique le long d’un trottoir devant une haie taillée' },
      'muret-brique-couvre-mur': { titre: 'Muret brique et couvre-mur', alt: 'Muret en brique avec couvre-mur béton bordant un massif' },
      'muret-pierre-reconstituee': { titre: 'Muret en pierre reconstituée', alt: 'Muret en blocs de pierre reconstituée retenant un talus' },
      'muret-pierre-jardin': { titre: 'Muret de jardin', alt: 'Muret en pierre naturelle dans un jardin avec barrière en bois' },
      'barbecue-maconne': { titre: 'Barbecue maçonné', alt: 'Barbecue maçonné en blocs et brique avec grille et plan de travail' },
      'pilier-maconne': { titre: 'Pilier maçonné', alt: 'Pilier maçonné en blocs couronné de brique' },
      'cloture-bois-noire': { titre: 'Clôture bois noire', alt: 'Clôture en bois peinte en noir avec portillon devant une terrasse dallée' },
      'grillage-prairie': { titre: 'Clôture de prairie', alt: 'Clôture en grillage rigide vert bordant une prairie' },
      'cloture-portail-vert': { titre: 'Clôture et portail', alt: 'Clôture en grillage rigide vert avec portail en limite de terrain' },
      'grillage-vert-terrain': { titre: 'Grillage rigide', alt: 'Clôture en grillage rigide vert le long d’un terrain' },
      'cloture-portillon-jardin': { titre: 'Clôture et portillon', alt: 'Clôture en grillage rigide vert avec portillon dans un jardin' },
      'occultant-gris-cour': { titre: 'Panneaux occultants', alt: 'Clôture en panneaux occultants gris bordant une cour bétonnée' },
      'occultant-gris-gravier': { titre: 'Brise-vue sur cour', alt: 'Clôture occultante grise le long d’une cour en gravier' },
      'cloture-noire-batiment': { titre: 'Clôture noire', alt: 'Clôture noire devant un bâtiment industriel' },
      'cloture-industrielle': { titre: 'Clôture industrielle', alt: 'Clôture grillagée autour d’une installation industrielle' },
      'grillage-vert-industriel': { titre: 'Grillage de site', alt: 'Clôture en grillage rigide vert sur un site industriel' },
    },
  },

  chantier: {
    kicker: 'Cinq chantiers, filmés au téléphone',
    titre: 'Brut',
    titreAccent: 'de chantier',
    intro:
      'Ni plan de coupe, ni mise en scène. Ce qu’on voit en arrivant sur le chantier — et ce qu’on laisse en partant.',
    clips: [
      { titre: 'Le point de départ', detail: 'Une cour fermée, murs usés et sol nu. C’est là que tout commence.' },
      { titre: 'L’annexe sort de terre', detail: 'Dalle coulée, blocs montés d’aplomb, ouvertures réservées.' },
      { titre: 'Clôture au cordeau', detail: 'Poteaux scellés et panneaux alignés sur toute la limite du jardin.' },
      { titre: 'Muret brique sur rue', detail: 'Brique, couvre-mur et lit de galets, en façade sur le trottoir.' },
      { titre: 'La cour reprend forme', detail: 'Du fond stabilisé aux dernières coupes de pavés, contre la façade.' },
    ],
  },

  avantApres: {
    kicker: 'Le même endroit, avant et après',
    titre: 'Ce qu’il y avait',
    titreAccent: 'à la place.',
    intro:
      'Quatre chantiers dont nous avons gardé la photo de départ. Chaque carte se pose au centre de l’écran, puis l’état d’origine s’efface au profit du résultat.',
    avant: 'Avant',
    apres: 'Après',
    cta: 'Montrez-nous votre « avant »',
    paires: [
      {
        titre: 'Allée en pierre naturelle',
        lieu: 'Abords de maison',
        detail:
          'Les anciennes dalles se déchaussaient et les joints étaient pris par la mousse. Décaissement, fondation, puis pose de dalles de pierre naturelle avec une pente d’évacuation vers la pelouse.',
        repere: 'Même mur en brique peinte, même retour de pelouse à gauche.',
      },
      {
        titre: 'Passage technique',
        lieu: 'Site industriel',
        detail:
          'Un couloir de service entre deux bâtiments, rendu impraticable par la végétation. Débroussaillage, géotextile et empierrement : le passage reste propre et l’eau s’évacue.',
        repere: 'Même descente d’eau coudée, même bardage métallique.',
      },
      {
        titre: 'Muret et parterre',
        lieu: 'Jardin en pente',
        detail:
          'Un talus qui s’effondrait sur le chemin. Muret de soutènement en brique, couvre-mur posé d’aplomb, puis remise en terre et plantation du parterre au-dessus.',
        repere: 'Mêmes dalles de couvre-mur, même haie taillée à l’arrière.',
      },
      {
        titre: 'Clôture de site',
        lieu: 'Limite de propriété',
        detail:
          'Une limite tenue par des barrières de chantier provisoires. Poteaux scellés et panneaux de grillage rigide posés au cordeau sur toute la longueur.',
        repere: 'Même toiture courbe rouge et blanche, mêmes arbres au fond.',
      },
    ],
  },
};

export const FR = { ...FR_A, ...FR_B };
