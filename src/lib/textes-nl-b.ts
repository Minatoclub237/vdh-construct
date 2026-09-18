// Vervolg van het Nederlandse woordenboek: FAQ, contact, voettekst, juridische vermeldingen.
// Juridisch jargon volgt het Belgische gebruik: KBO, btw, vestigingseenheid,
// Consumentenombudsdienst, Gegevensbeschermingsautoriteit.

export const NL_B = {
  faq: {
    kicker: 'Veelgestelde vragen',
    titre: 'Wat men ons zegt',
    titreAccent: 'vóór het tekenen.',
    intro:
      'De vragen die men ons echt stelt vóór het tekenen, met controleerbare antwoorden. Staat de uwe er niet bij? Stel ze gerust.',
    categories: {
      budget: 'Prijs & offerte',
      chantier: 'Timing & werf',
      garanties: 'Vertrouwen & aanpak',
    },
    reserveTitre: 'Nog een bedenking?',
    reserveTexte:
      'Stel de vraag die u tegenhoudt. Jordan antwoordt zelf, geen callcenter.',
    reserveCta: 'Schrijf ons',
    objections: {
      budget: [
        {
          q: 'Uw offerte is duurder dan een andere.',
          a: 'Kijk na wat erin zit. Een terras op een slecht voorbereide ondergrond verzakt de eerste winter: de offerte rekent het uitgraven, de grondafvoer, de steenslagfundering, het geotextiel en het afschot voor de afwatering mee. Vergelijk de posten één voor één in plaats van de totalen — daar zit het verschil.',
          cta: 'Uw offerte post per post laten vergelijken',
          sujet: 'Offertes vergelijken',
          corps: 'Dag, hierbij de offerte die ik elders kreeg. Kunt u me zeggen wat erin zit en wat er niet in zit?\n\nMijn project: ',
        },
        {
          q: 'Ik heb geen idee van het budget voor wat ik wil.',
          a: 'Dan is dit het moment om te bellen, niet later. Wij komen het terrein bekijken, meten op, en u krijgt een prijsvork per vierkante meter plus de lijst van wat de prijs echt doet schommelen. Het bezoek en de offerte zijn gratis.',
          cta: 'Een gratis plaatsbezoek aanvragen',
        },
        {
          q: 'Kan de prijs onderweg nog veranderen?',
          a: 'Wat in de offerte beschreven staat, is de prijs van wat in de offerte beschreven staat. Komt er iets anders boven — een begraven betonplaat, een leiding, een onstabiele ondergrond — dan stoppen we, tonen we het u, en wordt niets uitgevoerd zonder uw akkoord.',
          cta: 'Uw terrein voorleggen',
          sujet: 'Mijn terrein',
          corps: 'Dag, hierbij enkele foto’s van mijn terrein en wat ik er graag zou laten doen:\n\n',
        },
        {
          q: 'Mijn werf is te klein om u te interesseren.',
          a: 'Toch niet. Een boordsteen herleggen, een border opnieuw aanleggen, enkele meters klinkers: kleine ingrepen nemen we ook aan, niet alleen volledige aanlegprojecten. Zo beginnen trouwens vaak de grotere werven.',
          cta: 'Uw kleine ingreep beschrijven',
        },
        {
          q: 'Is de grondafvoer een supplement?',
          a: 'Die staat in de offerte, want het is een echte post: het uitgraven van een terras levert meerdere kubieke meters op die geladen en afgevoerd moeten worden. Een offerte die er niet over spreekt, laat u die op het einde betalen.',
          cta: 'Het grondwerk laten becijferen',
        },
      ],
      chantier: [
        {
          q: 'Hoe lang blijft mijn tuin een werf?',
          a: 'De duur hangt af van de oppervlakte, de toegang en het weer — wij geven ze liever nadat we het terrein gezien hebben dan een termijn te gokken aan de telefoon. U krijgt ze schriftelijk bij de offerte, vóór u zich verbindt.',
          cta: 'Een bezoek vastleggen om de planning te bepalen',
        },
        {
          q: 'Ik ben er alleen op zaterdag.',
          a: 'Wij werken van maandag tot zaterdag, van 8 tot 18 uur. Zowel het bezoek als de werken kunnen dus op zaterdag vallen als dat de enige dag is waarop u er bent.',
          cta: 'Een zaterdag voorstellen',
          sujet: 'Beschikbaar op zaterdag',
          corps: 'Dag, ik ben enkel op zaterdag beschikbaar. Welke zaterdagen passen u voor een plaatsbezoek?\n\n',
        },
        {
          q: 'Mijn terrein ligt op een helling, is dat haalbaar?',
          a: 'Dat is een groot deel van ons werk: keermuren, terrasniveaus, buitentrappen en het herzetten van de niveaus. Een helling pak je aan met grondwerk en drainage, vóór er sprake is van een afwerkingslaag.',
          cta: 'Ons over uw hoogteverschil vertellen',
        },
        {
          q: 'Er is een minigraver nodig en u hebt er geen.',
          a: 'Het grondwerk dat wij uitvoeren gebeurt zonder minigraver: dat zeggen we op voorhand in plaats van het ter plaatse te laten blijken. Voor een groot volume melden we het bij het bezoek en zoeken we samen met u de oplossing, nog vóór er een offerte is.',
          cta: 'Het af te graven volume laten inschatten',
        },
        {
          q: 'Ik ga overal modder en puin terugvinden.',
          a: 'De omgeving wordt aan het eind van de dag begaanbaar achtergelaten en het uitgegraven materiaal wordt samengebracht, niet over het gazon uitgespreid. De aanvoer van materialen is een van de punten die we bij het bezoek bekijken, juist om de schade rondom te beperken.',
          cta: 'Zien hoe wij de toegang organiseren',
        },
      ],
      garanties: [
        {
          q: 'Er zijn nauwelijks recensies over u te vinden.',
          a: 'Dat klopt, en we gaan niet het tegendeel beweren: het bedrijf is jong en heeft nog geen gepubliceerde recensies. Wat wél controleerbaar is, is dat ook: op TrustUp.be toont ons profiel een TrustScore van 8,9/10, met geverifieerde historiek van de zaakvoerder en financiële gezondheid, en zonder sociale of fiscale schulden. En vooral: wij kunnen u een werf laten zien.',
          cta: 'Een lopende werf bezoeken',
        },
        {
          q: 'Ik ken u niet, wie bent u precies?',
          a: 'Jordan Vanderheyden, in Engis, Rue Nouvelle Route. Dit is geen platform dat uitbesteedt: de vakman die op bezoek komt, volgt daarna ook uw werf op. Wij werken binnen een straal van ongeveer 20 km, in Engis, Flémalle en Seraing.',
          cta: 'Rechtstreeks met Jordan spreken',
        },
        {
          q: 'En als het resultaat niet lijkt op wat ik voor ogen had?',
          a: 'Wat achteraf niet meer te corrigeren valt, bevestigen we samen ter plaatse: de niveaus, de hellingen, het tracé van de boordstenen en het legpatroon. Die punten worden getoond en goedgekeurd vóór het leggen, wanneer wijzigen nog niets kost.',
          cta: 'Uw project samen voorbereiden',
        },
        {
          q: 'Doet u tuinen of metselwerk?',
          a: 'Allebei, en dat is net de bedoeling: een geslaagde buitenruimte vraagt metselwerk onder de beplanting. Wij doen het grondwerk, de keermuren, de tuinhuizen, de bestrating en de terrassen, maar evengoed de beplanting, de borders en het onderhoud.',
          cta: 'Onze realisaties bekijken',
        },
        {
          q: 'Ik wil enkel advies, nog geen werken.',
          a: 'Daar dient het eerste gesprek voor: weten of uw idee haalbaar is, in welke volgorde het aangepakt wordt en welke orde van grootte u mag verwachten. Zonder offerte te tekenen en zonder achteraf gebeld te worden.',
          cta: 'Uw vraag stellen',
          sujet: 'Een vraag vooraf',
          corps: 'Dag, vóór ik verder ga zou ik graag weten:\n\n',
        },
      ],
    },
  },

  contact: {
    kicker: 'Contact',
    titre: 'Praten we over',
    titreAccent: 'uw buitenruimte',
    intro:
      'Beschrijf uw project in enkele lijnen. Jordan belt u terug om een plaatsbezoek af te spreken.',
    puces: [
      'Plaatsbezoek en offerte gratis, vrijblijvend',
      'Verplaatsing binnen een straal van 20 km rond Engis',
      'Bereikbaar van maandag tot zaterdag, van 8 tot 18 uur',
    ],
    zone: 'Engis, Flémalle, Seraing · 20 km rond Engis',
    champNom: 'Naam',
    champEmail: 'E-mail',
    champTel: 'Telefoon',
    champProjet: 'Soort project',
    champDelai: 'Gewenste termijn',
    champDescription: 'Beschrijving van het project',
    placeholderDescription: 'Oppervlakte in m², staat van het terrein, helling, toegang voor de materialen…',
    projets: [
      'Bestrating en aanleg',
      'Grondwerk (zonder minigraver)',
      'Klein metselwerk',
      'Omheiningen of schanskorven',
      'Aanleg van borders',
      'Tuin- of haagonderhoud',
      'Ander project',
    ],
    delais: ['Zo snel mogelijk', 'Binnen 1 tot 3 maanden', 'Binnen 3 tot 6 maanden', 'Ik informeer mij'],
    consentement:
      'Ik ga ermee akkoord dat mijn gegevens gebruikt worden om mij over mijn aanvraag te contacteren. Ze worden niet doorverkocht of aan derden doorgegeven.',
    envoyer: 'Mijn aanvraag versturen',
    apresEnvoi:
      'Het formulier opent uw mailprogramma met de aanvraag al opgesteld. Liever bellen? +32 493 08 33 44.',
    confirmation:
      'Uw mailprogramma is geopend met de vooraf ingevulde aanvraag: u hoeft ze enkel nog te versturen.',
  },

  footer: {
    titre: 'Een project',
    titreAccent: 'buiten?',
    description:
      'Tuinaanleg en metselwerk in Engis. Bestrating, terrassen, keermuren, omheiningen, borders en tuinonderhoud.',
    facebook: 'Volg onze werven op Facebook',
    colPrestations: 'Diensten',
    colEntreprise: 'Onderneming',
    colContact: 'Contact',
    prestations: [
      'Bestrating & terrassen',
      'Tuinmetselwerk',
      'Grondwerk & drainage',
      'Omheiningen & poorten',
      'Tuinonderhoud',
    ],
    entreprise: ['Realisaties', 'Vakkennis', 'Diensten', 'Veelgestelde vragen'],
    horaires: 'Ma – Za · 8 – 18 u · Zo gesloten',
    mentions: 'Juridische vermeldingen',
    donnees: 'Persoonsgegevens',
    retourHaut: 'Terug naar boven',
  },

  legal: {
    metaTitre: 'Juridische vermeldingen — VDH Construct, Engis',
    metaDescription:
      'Juridische vermeldingen van VDH Construct & aménagement extérieur, Rue Nouvelle Route 135 in 4480 Engis. Ondernemingsnummer KBO 1015.396.691, btw BE 1015.396.691.',
    kicker: 'Juridische informatie',
    titre: 'Juridische',
    titreAccent: 'vermeldingen',
    intro:
      'Identificatiegegevens gepubliceerd overeenkomstig het Belgische Wetboek van economisch recht, boek XII, en de Algemene Verordening Gegevensbescherming (AVG).',
    etiquettes: {
      denomination: 'Wettelijke benaming',
      forme: 'Rechtsvorm',
      nomCommercial: 'Handelsnaam',
      siege: 'Vestigingsadres',
      bce: 'Ondernemingsnummer (KBO)',
      tva: 'Btw-nummer',
      ue: 'Vestigingseenheid',
      debut: 'Begin van de activiteit',
      responsable: 'Verantwoordelijke uitgever',
    },
    formeValeur: 'Natuurlijke persoon (eenmanszaak)',
    siegeValeur: 'Rue Nouvelle Route 135, 4480 Engis, België',
    debutValeur: '22 oktober 2024',
    horairesValeur: 'Rue Nouvelle Route 135, 4480 Engis — van maandag tot zaterdag, 8 tot 18 uur',
    editeurTitre: 'Uitgever van de site',
    editeurTexte:
      'Deze site wordt uitgegeven en beheerd door de hieronder geïdentificeerde onderneming. Het gaat om een eenmanszaak: zij is dus niet ingeschreven in het rechtspersonenregister en beschikt niet over maatschappelijk kapitaal of een bestuursorgaan.',
    activitesTitre: 'Activiteiten en toegang tot het beroep',
    activitesTexte:
      'De onderneming is ingeschreven bij de Kruispuntbank van Ondernemingen voor de volgende activiteiten (NACE-BEL-codes):',
    activitesListe: [
      '43.910 — Metsel- en baksteenwerken',
      '41.001 — Algemene bouw van residentiële gebouwen en ruwbouw',
      '71.113 — Stedenbouwkundig, landschaps- en tuinontwerp',
      '81.300 — Aanleg en onderhoud van tuinen, parken en groenzones',
    ],
    activitesSuite:
      'Zij beschikt over de beroepsbekwaamheid voor ruwbouwactiviteiten, geregistreerd bij de Kruispuntbank van Ondernemingen sinds 22 oktober 2024. Deze gegevens zijn publiek en gratis raadpleegbaar via',
    activitesLien: 'Public Search van de KBO',
    activitesFin: 'aan de hand van ondernemingsnummer 1015.396.691.',
    assurancesTitre: 'Verzekeringen',
    assurances1:
      'De uitgevoerde werken zijn gedekt door de verzekeringen die in België voor de uitoefening van de activiteit vereist zijn, waaronder de verzekering beroepsaansprakelijkheid en de verzekering tienjarige aansprakelijkheid voor de werken die daaraan onderworpen zijn.',
    assurances2:
      'De verzekeringsattesten, met vermelding van de verzekeraar, het polisnummer en de geografische dekking, worden op eenvoudig verzoek bezorgd vóór de ondertekening van een offerte.',
    hebergementTitre: 'Hosting',
    hebergementTexte: 'De site wordt gehost door',
    proprieteTitre: 'Intellectuele eigendom',
    propriete1:
      'Alle onderdelen van de site — teksten, werffoto’s, video’s, logo en visuele identiteit — zijn beschermd door het auteursrecht. De getoonde foto’s en video’s documenteren werven die werkelijk door de onderneming zijn uitgevoerd.',
    propriete2:
      'Elke reproductie, weergave of hergebruik, geheel of gedeeltelijk en op welke drager ook, is verboden zonder voorafgaande schriftelijke toestemming.',
    donneesTitre: 'Persoonsgegevens',
    donnees1:
      'De gegevens die via het contactformulier worden doorgegeven — naam, contactgegevens en projectbeschrijving — worden uitsluitend gebruikt om op de aanvraag te antwoorden, het plaatsbezoek te organiseren en een offerte op te stellen. Ze worden niet verkocht, verhuurd of voor commerciële doeleinden aan derden doorgegeven.',
    donnees2:
      'De verwerking steunt op de uitvoering van precontractuele maatregelen op verzoek van de betrokkene (artikel 6.1.b AVG). De gegevens worden maximaal drie jaar na het laatste contact bewaard en daarna gewist.',
    donnees3:
      'U beschikt over een recht op inzage, verbetering, wissing, beperking en bezwaar. Om dit uit te oefenen, schrijf naar',
    donnees4:
      'Bij onenigheid kunt u klacht indienen bij de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel —',
    cookiesTitre: 'Cookies en bezoekersmeting',
    cookies1:
      'Deze site plaatst geen reclamecookies en gebruikt geen profileringstrackers. Het contactformulier opent uw mailprogramma: er worden geen gegevens op de site zelf opgeslagen.',
    cookies2:
      'De lettertypes worden geladen via Google Fonts, wat een verbinding met een externe server inhoudt die uw IP-adres kan registreren.',
    litigesTitre: 'Geschillenregeling',
    litiges1:
      'Bij een geschil vragen wij u ons eerst te contacteren om samen een minnelijke oplossing te zoeken.',
    litiges2:
      'Komt er geen akkoord, dan kan de consument zich wenden tot de Consumentenombudsdienst, Koning Albert II-laan 8, 1000 Brussel —',
    litiges3:
      'De contractuele relaties worden beheerst door het Belgische recht. De rechtbanken van het gerechtelijk arrondissement Luik zijn bevoegd.',
    responsabiliteTitre: 'Aansprakelijkheid',
    responsabilite1:
      'De op deze site gepubliceerde informatie wordt ter indicatie gegeven en met de grootste zorg bijgehouden. De omschrijvingen van de diensten, de termijnen en de werkingsgebieden vormen geen contractueel aanbod: enkel de ondertekende offerte verbindt de onderneming.',
    responsabilite2:
      'De foto’s tonen reeds uitgevoerde werven; zij lopen niet vooruit op het resultaat van een toekomstige werf, waarvan het uitzicht afhangt van het terrein, de gekozen materialen en de beperkingen van de plaats.',
    maj: 'Laatst bijgewerkt: 18 september 2026. Identificatiegegevens geverifieerd bij de Kruispuntbank van Ondernemingen.',
  },
};
