// Nederlandse versie. Zelfde structuur als textes-fr.ts — TypeScript controleert dat.
// Vakjargon volgt het Belgische gebruik : keermuur, grasbetontegels, ruwbouw,
// blauwe hardsteen, klinkers. Geen woord-voor-woordvertaling : de korte,
// directe toon van de Franse versie blijft behouden.

import { NL_B } from './textes-nl-b';

const NL_A = {
  meta: {
    titre: 'VDH Construct — Bestrating, terrassen en metselwerk in Engis',
    description:
      'Tuinaanleg in Engis, Flémalle en Seraing: bestrating, terrassen, metselwerk, omheiningen, borders en tuinonderhoud. Gratis offerte na plaatsbezoek.',
  },

  commun: {
    devisGratuit: 'Gratis offerte',
    voirRealisations: 'Bekijk onze realisaties',
    telephone: '+32 493 08 33 44',
    fermer: 'Sluiten',
    precedente: 'Vorige foto',
    suivante: 'Volgende foto',
    agrandir: 'Vergroten',
    retourSite: 'Terug naar de site',
    changerLangue: 'Taal wijzigen',
  },

  nav: {
    savoirFaire: 'Vakkennis',
    services: 'Diensten',
    realisations: 'Realisaties',
    faq: 'FAQ',
    ouvrirMenu: 'Menu openen',
  },

  hero: {
    mots: ['Bestrating', 'Terras', 'Metselwerk'],
    baseline:
      'Tuinaanleg in Engis, Flémalle en Seraing. Gratis offerte na plaatsbezoek, van maandag tot zaterdag.',
    defiler: 'Scrollen',
    garanties: 'Plaatsbezoek · Vrijblijvend · Binnen 20 km rond Engis',
  },

  features: {
    titre: 'Van de kleine ingreep tot de volledige aanleg van uw buitenruimte',
    texte:
      'Onderhoud, bestrating, terrassen, omheiningen en metselwerk: één vakman voor heel de buitenruimte, in Engis en binnen een straal van 20 km.',
    demanderDevis: 'Offerte aanvragen',
  },

  stage: {
    services: ['/ BESTRATING & TERRAS', '/ TUINMETSELWERK', '/ GRONDWERK & ONDERHOUD', '/ OMHEININGEN & POORTEN'],
    badgeZone: 'Engis · Flémalle · Seraing',
    phrase1:
      'Wij leggen buitenruimtes aan die de winters doorstaan. Al het vakwerk zit in de voorbereiding, vóór de eerste tegel.',
    titre1: 'Uitgegraven. Gelegd.',
    titre1Accent: 'Klaar.',
    carteTitre: 'Praten we over uw buitenruimte?',
    carteSous: 'VDH Construct — Engis',
    carteCta: 'Gratis plaatsbezoek',
    badge2: 'Metselwerk & ruwbouw',
    phrase2:
      'Een buitenruimte die standhoudt wordt onder het oppervlak beslist: uitgraven, steenslagfundering, afschot voor de afwatering.',
    titre2: 'Gemaakt om',
    titre2Accent: 'te blijven.',
    texte2:
      'Van de eerste spadesteek tot de laatste boordsteen maakt VDH Construct van een terrein een leefruimte: net gewerkt, stap voor stap.',
    voirLes: 'Bekijk de',
    realisationsMot: 'realisaties',
    capacites: [
      'Uitgraven, steenslagfundering en afschot voor de afwatering: de ondergrond die belet dat een terras verzakt.',
      'Klinkers, tegels en blauwe hardsteen, boordstenen en opritten, gelegd op een gestabiliseerde fundering.',
      'Keermuren, tuinhuizen, pijlers, hervoegen en betonwerken.',
      'Draadpanelen, blinde panelen, houten omheiningen en poorten, op waterpas verankerde palen.',
    ],
  },

  realisations: {
    kicker: 'Selectie van projecten',
    titre: 'Realisaties',
    intro:
      'Veertig werven rond Engis, gerangschikt in vier vakgebieden. Klik op een categorie: de foto’s openen meteen.',
    voirPhotos: 'Bekijk de {n} foto’s',
    photos: 'foto’s',
    famille: 'Categorie',
    fermerGalerie: 'Realisaties sluiten',
    familles: {
      terrassement: {
        titre: 'Grondwerk\n& drainage',
        intro: 'De ondergrond die al de rest op zijn plaats houdt',
        resume:
          'Uitgraven, steenslagfundering en afschot voor de afwatering. Berijdbare opritten, grindkoeren en grasbetontegels op een gestabiliseerde ondergrond.',
      },
      pavage: {
        titre: 'Bestrating\n& tegelwerk',
        intro: 'Terrassen, opritten en omgeving',
        resume:
          'Natuursteen, klinkers en oude straatstenen, gelegd op fundering met boordstenen en strak gehouden niveaus. Terrassen, inritten en gevelstroken.',
      },
      maconnerie: {
        titre: 'Tuin-\nmetselwerk',
        intro: 'Muren, pijlers en metselwerk',
        resume:
          'Keermuren en lage muurtjes in natuursteen, baksteen of blokken, muurdeksels in blauwe hardsteen, pijlers, trappen en gemetselde barbecues.',
      },
      clotures: {
        titre: 'Omheiningen\n& poorten',
        intro: 'Afbakenen, afsluiten, afschermen',
        resume:
          'Draadpanelen, blinde panelen, houten omheiningen en poorten, waterpas geplaatst op verankerde palen. Van de privétuin tot het bedrijfsterrein.',
      },
    },
    photosTextes: {
      'double-bande-roulement': { titre: 'Dubbele rijstrook', alt: 'Grindoprit met twee stroken witte grasbetontegels' },
      'allee-dalles-alveolees': { titre: 'Oprit met grasbetontegels', alt: 'Grindoprit versterkt met een strook grasbetontegels' },
      'entree-garage-alveoles': { titre: 'Garage-inrit', alt: 'Garage-inrit in grind en grasbetontegels voor een bakstenen woning' },
      'acces-carrossable-gravier': { titre: 'Berijdbare toegang', alt: 'Berijdbare grindoprit afgeboord met hagen' },
      'cour-gravier-dore': { titre: 'Koer in goudkleurig grind', alt: 'Koer in goudkleurig grind afgeboord met klinkers voor een garage' },
      'cour-gravier-stabilise': { titre: 'Gestabiliseerde grindkoer', alt: 'Gestabiliseerde grindkoer voor een garagepoort' },
      'allee-gravier-pavee': { titre: 'Oprit in grind en klinkers', alt: 'Toegang in grind en klinkers voor een witte garage' },
      'acces-gravier-portail': { titre: 'Toegang en poort', alt: 'Grindkoer voor een garage en een blauwe poort' },
      'allee-gravier-noir': { titre: 'Oprit in zwart grind', alt: 'Oprit in zwart grind met betonnen boord langs een woning' },
      'allee-technique-gravier': { titre: 'Dienstpad', alt: 'Dienstpad in grind langs een gebouw' },
      'terrasse-pierre-naturelle': { titre: 'Terras in natuursteen', alt: 'Terras in onregelmatige natuursteentegels langs een witte woning' },
      'cour-paves-ronds': { titre: 'Koer in klinkers', alt: 'Koer bestraat met klinkers voor een bakstenen woning' },
      'pavage-ancien-entree': { titre: 'Bestrating in oude straatstenen', alt: 'Bestrating in oude straatstenen voor een bakstenen inkom' },
      'allee-pavee-facade': { titre: 'Bestrating langs de gevel', alt: 'Bestrate strook langs de bakstenen gevel van een woning' },
      'pavage-long-facade': { titre: 'Gevelstrook in klinkers', alt: 'Strook klinkers langs een bakstenen muur' },
      'acces-pave-gravier': { titre: 'Bestrate toegang', alt: 'Bestrate toegang met grindboord langs een bakstenen woning' },
      'entree-pavee-portail': { titre: 'Bestrate inkom', alt: 'Bestrate inkom voor een blauwe poort met brievenbus' },
      'bordure-pavee-galets': { titre: 'Boord in klinkers en kiezels', alt: 'Bestrate boord tussen een bed witte kiezels en een beplante border' },
      'terrasse-opus-incertum': { titre: 'Terras in breuksteen', alt: 'Terras in onregelmatige natuursteentegels voor een raampartij' },
      'muret-courbe-pierre': { titre: 'Gebogen muurtje in natuursteen', alt: 'Gebogen muurtje in natuursteen rond een gazon' },
      'muret-soutenement-pierre': { titre: 'Keermuur', alt: 'Keermuur in natuursteen die een beplante border tegenhoudt' },
      'muret-pierre-couvre-mur': { titre: 'Muurtje met muurdeksel', alt: 'Muurtje in natuursteen afgewerkt met een muurdeksel' },
      'muret-garde-corps': { titre: 'Muurtje met leuning', alt: 'Muurtje in natuursteen met smeedijzeren leuning' },
      'muret-brique-escalier': { titre: 'Muurtje en trap', alt: 'Gebogen bakstenen muurtje met betonnen trap' },
      'muret-brique-trottoir': { titre: 'Bakstenen muurtje', alt: 'Bakstenen muurtje langs een stoep voor een gesnoeide haag' },
      'muret-brique-couvre-mur': { titre: 'Bakstenen muurtje met deksel', alt: 'Bakstenen muurtje met betonnen muurdeksel langs een border' },
      'muret-pierre-reconstituee': { titre: 'Muurtje in gereconstitueerde steen', alt: 'Muurtje in blokken gereconstitueerde steen dat een talud tegenhoudt' },
      'muret-pierre-jardin': { titre: 'Tuinmuurtje', alt: 'Muurtje in natuursteen in een tuin met houten afsluiting' },
      'barbecue-maconne': { titre: 'Gemetselde barbecue', alt: 'Gemetselde barbecue in blokken en baksteen met rooster en werkblad' },
      'pilier-maconne': { titre: 'Gemetselde pijler', alt: 'Gemetselde pijler in blokken afgewerkt met baksteen' },
      'cloture-bois-noire': { titre: 'Zwarte houten omheining', alt: 'Zwart geschilderde houten omheining met poortje voor een betegeld terras' },
      'grillage-prairie': { titre: 'Weide-omheining', alt: 'Groene draadpanelen langs een weide' },
      'cloture-portail-vert': { titre: 'Omheining met poort', alt: 'Groene draadpanelen met poort op de perceelsgrens' },
      'grillage-vert-terrain': { titre: 'Draadpanelen', alt: 'Groene draadpanelen langs een terrein' },
      'cloture-portillon-jardin': { titre: 'Omheining met poortje', alt: 'Groene draadpanelen met poortje in een tuin' },
      'occultant-gris-cour': { titre: 'Blinde panelen', alt: 'Grijze blinde panelen langs een betonnen koer' },
      'occultant-gris-gravier': { titre: 'Zichtscherm aan de koer', alt: 'Grijs zichtscherm langs een grindkoer' },
      'cloture-noire-batiment': { titre: 'Zwarte omheining', alt: 'Zwarte omheining voor een bedrijfsgebouw' },
      'cloture-industrielle': { titre: 'Omheining bedrijfsterrein', alt: 'Draadomheining rond een industriële installatie' },
      'grillage-vert-industriel': { titre: 'Terreinomheining', alt: 'Groene draadpanelen op een bedrijfsterrein' },
    },
  },

  chantier: {
    kicker: 'Vijf werven, gefilmd met de gsm',
    titre: 'Rauw',
    titreAccent: 'van de werf',
    intro:
      'Geen montage, geen enscenering. Wat we zien bij aankomst op de werf — en wat we achterlaten bij vertrek.',
    clips: [
      { titre: 'Het vertrekpunt', detail: 'Een gesloten koer, versleten muren en kale grond. Daar begint alles.' },
      { titre: 'De aanbouw komt uit de grond', detail: 'Plaat gegoten, blokken waterpas gemetseld, openingen uitgespaard.' },
      { titre: 'Omheining op de draad', detail: 'Verankerde palen en panelen uitgelijnd over heel de tuingrens.' },
      { titre: 'Bakstenen muurtje aan de straat', detail: 'Baksteen, muurdeksel en kiezelbed, aan de straatkant.' },
      { titre: 'De koer krijgt vorm', detail: 'Van gestabiliseerde ondergrond tot de laatste snedes tegen de gevel.' },
    ],
  },

  avantApres: {
    kicker: 'Dezelfde plek, voor en na',
    titre: 'Wat er eerst',
    titreAccent: 'stond.',
    intro:
      'Vier werven waarvan we de beginfoto bewaarden. Elke kaart komt midden in beeld tot stilstand, daarna wijkt de oude toestand voor het resultaat.',
    avant: 'Voor',
    apres: 'Na',
    cta: 'Toon ons uw « voor »',
    paires: [
      {
        titre: 'Pad in natuursteen',
        lieu: 'Rond de woning',
        detail:
          'De oude tegels kwamen los en het mos zat in de voegen. Uitgraven, fundering, daarna natuursteentegels met afschot naar het gazon.',
        repere: 'Dezelfde geschilderde bakstenen muur, hetzelfde gazon links.',
      },
      {
        titre: 'Technische doorgang',
        lieu: 'Bedrijfsterrein',
        detail:
          'Een dienstgang tussen twee gebouwen, onbegaanbaar door de begroeiing. Vrijmaken, geotextiel en steenslag: de doorgang blijft net en het water loopt weg.',
        repere: 'Dezelfde geknikte regenpijp, dezelfde metalen gevelbekleding.',
      },
      {
        titre: 'Muurtje en border',
        lieu: 'Tuin op helling',
        detail:
          'Een talud dat op het pad afschoof. Bakstenen keermuur, muurdeksel waterpas geplaatst, daarna grond aangevuld en de border erboven beplant.',
        repere: 'Dezelfde muurdekseltegels, dezelfde gesnoeide haag achteraan.',
      },
      {
        titre: 'Terreinomheining',
        lieu: 'Perceelsgrens',
        detail:
          'Een grens die met tijdelijke werfhekken werd afgezet. Verankerde palen en draadpanelen, over de hele lengte op de draad geplaatst.',
        repere: 'Hetzelfde gebogen rood-witte dak, dezelfde bomen achteraan.',
      },
    ],
  },
};

export const NL = { ...NL_A, ...NL_B };
