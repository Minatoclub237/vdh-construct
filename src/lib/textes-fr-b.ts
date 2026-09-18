// Suite du dictionnaire français : FAQ, contact, pied de page, mentions légales.
// Séparé de textes-fr.ts uniquement pour garder des fichiers lisibles.

export const FR_B = {
  faq: {
    kicker: 'Questions fréquentes',
    titre: 'Ce qu’on nous dit avant',
    titreAccent: 'de signer.',
    intro:
      'Les questions qu’on nous pose vraiment avant de signer, avec des réponses vérifiables. Si la vôtre n’y est pas, posez-la.',
    categories: {
      budget: 'Prix & devis',
      chantier: 'Délais & chantier',
      garanties: 'Confiance & méthode',
    },
    reserveTitre: 'Une réserve à lever ?',
    reserveTexte:
      'Posez la question qui vous retient. C’est Jordan qui répond, pas un standard téléphonique.',
    reserveCta: 'Nous écrire',
    objections: {
      budget: [
        {
          q: 'Votre devis est plus cher qu’un autre.',
          a: 'Regardez ce qu’il contient. Une terrasse posée sur un sol mal préparé bouge au premier hiver : le devis chiffre le décaissement, l’évacuation des terres, l’empierrement, le géotextile et la pente d’évacuation. Comparez les postes un par un plutôt que les totaux, c’est là que l’écart s’explique.',
          cta: 'Faire comparer votre devis poste par poste',
          sujet: 'Comparaison de devis',
          corps: 'Bonjour, je vous joins le devis reçu ailleurs. Pouvez-vous me dire ce qu’il contient et ce qu’il ne contient pas ?\n\nMon projet : ',
        },
        {
          q: 'Je n’ai aucune idée du budget pour ce que je veux.',
          a: 'C’est le moment de nous appeler, pas plus tard. On passe voir le terrain, on mesure, et vous repartez avec une fourchette au mètre carré et la liste de ce qui fera réellement varier le prix. La visite et le devis sont gratuits.',
          cta: 'Demander une visite gratuite',
        },
        {
          q: 'Est-ce que le prix peut encore bouger en cours de route ?',
          a: 'Ce qui est décrit au devis est le prix de ce qui est décrit au devis. Si le terrain révèle autre chose — une dalle enfouie, une conduite, un sol instable — on s’arrête, on vous montre, et rien n’est engagé avant votre accord.',
          cta: 'Nous soumettre votre terrain',
          sujet: 'Mon terrain',
          corps: 'Bonjour, voici quelques photos de mon terrain et ce que j’aimerais y faire :\n\n',
        },
        {
          q: 'Mon chantier est trop petit pour vous intéresser.',
          a: 'Non. Une bordure à reprendre, un parterre à refaire, quelques mètres de pavé : on prend aussi les petites interventions, pas seulement les aménagements complets. C’est souvent comme ça que commencent les chantiers plus longs.',
          cta: 'Décrire votre petite intervention',
        },
        {
          q: 'L’évacuation des terres, c’est en supplément ?',
          a: 'Elle est au devis, parce que c’est un vrai poste : un décaissement de terrasse sort plusieurs mètres cubes qu’il faut charger et évacuer. Un devis qui n’en parle pas vous la fera payer à la fin.',
          cta: 'Faire chiffrer le terrassement',
        },
      ],
      chantier: [
        {
          q: 'Combien de temps mon jardin va-t-il rester en chantier ?',
          a: 'La durée dépend de la surface, de l’accès et de la météo — nous préférons vous la donner après avoir vu le terrain plutôt que d’annoncer un délai au hasard au téléphone. Vous l’avez par écrit avec le devis, avant de vous engager.',
          cta: 'Fixer la visite pour caler le planning',
        },
        {
          q: 'Je ne suis là que le samedi.',
          a: 'Nous travaillons du lundi au samedi, de 8h à 18h. La visite comme le chantier peuvent donc se caler sur un samedi si c’est le seul jour où vous êtes disponible.',
          cta: 'Proposer un samedi',
          sujet: 'Disponible le samedi',
          corps: 'Bonjour, je ne suis disponible que le samedi. Quels samedis vous conviennent pour une visite ?\n\n',
        },
        {
          q: 'Mon terrain est en pente, c’est jouable ?',
          a: 'C’est une bonne partie de notre travail : murs de soutènement, paliers, escaliers extérieurs et reprise des niveaux. Une pente se gère par le terrassement et le drainage avant de parler de revêtement.',
          cta: 'Nous parler de votre dénivelé',
        },
        {
          q: 'Il faudra une mini-pelle et vous n’en avez pas.',
          a: 'Le terrassement que nous réalisons se fait sans mini-pelle : nous le disons franchement plutôt que de le découvrir sur place. Pour un gros volume, on vous l’annonce dès la visite et on cale la solution avec vous avant tout devis.',
          cta: 'Faire évaluer le volume à terrasser',
        },
        {
          q: 'Je vais retrouver de la boue et des gravats partout.',
          a: 'Les abords sont rendus praticables en fin de journée et les déblais regroupés, pas étalés sur la pelouse. L’accès aux matériaux fait partie des points qu’on repère à la visite, justement pour limiter les dégâts autour.',
          cta: 'Voir comment nous organisons l’accès',
        },
      ],
      garanties: [
        {
          q: 'On ne trouve presque aucun avis sur vous en ligne.',
          a: 'C’est exact, et nous n’allons pas prétendre le contraire : l’entreprise est jeune et n’a pas encore d’avis publiés. Ce qui est vérifiable, en revanche, l’est : sur TrustUp.be, notre profil affiche un TrustScore de 8,9/10, avec l’historique du gérant et la santé financière vérifiés et aucune dette sociale ou fiscale. Et surtout, nous pouvons vous montrer un chantier.',
          cta: 'Visiter un chantier en cours',
        },
        {
          q: 'Je ne vous connais pas, qui êtes-vous exactement ?',
          a: 'Jordan Vanderheyden, à Engis, rue Nouvelle Route. Ce n’est pas une plate-forme qui sous-traite : c’est l’artisan qui vient à la visite qui suit ensuite votre chantier. Nous intervenons dans un rayon d’environ 20 km, à Engis, Flémalle et Seraing.',
          cta: 'Parler directement à Jordan',
        },
        {
          q: 'Et si le résultat ne ressemble pas à ce que j’avais en tête ?',
          a: 'On valide avec vous sur le terrain ce qui ne se corrige plus après : les niveaux, les pentes, le tracé des bordures et le calepinage. Ces points sont montrés et confirmés avant la pose, quand les changer ne coûte encore rien.',
          cta: 'Préparer votre projet avec nous',
        },
        {
          q: 'Vous faites du jardin ou de la maçonnerie ?',
          a: 'Les deux, et c’est justement le but : un extérieur réussi demande de la maçonnerie sous les plantes. Nous faisons le terrassement, les murs de soutènement, les abris de jardin, le pavage et les terrasses, mais aussi les plantations, les parterres et l’entretien.',
          cta: 'Voir nos réalisations',
        },
        {
          q: 'Je veux juste un conseil, pas encore des travaux.',
          a: 'Le premier échange sert à ça : savoir si votre idée est faisable, dans quel ordre s’y prendre et quel ordre de grandeur prévoir. Sans devis à signer et sans relance.',
          cta: 'Poser votre question',
          sujet: 'Une question avant de me lancer',
          corps: 'Bonjour, avant d’aller plus loin j’aimerais savoir :\n\n',
        },
      ],
    },
  },

  contact: {
    kicker: 'Contact',
    titre: 'Parlons de',
    titreAccent: 'votre extérieur',
    intro:
      'Décrivez votre projet en quelques lignes. Jordan vous rappelle pour convenir d’une visite sur place.',
    puces: [
      'Visite sur place et devis gratuits, sans engagement',
      'Déplacement dans un rayon de 20 km autour d’Engis',
      'Joignable du lundi au samedi, de 8h à 18h',
    ],
    zone: 'Engis, Flémalle, Seraing · 20 km autour d’Engis',
    champNom: 'Nom et prénom',
    champLieu: 'Commune ou code postal',
    selectionner: 'Sélectionner…',
    titreProjet: 'Votre projet',
    horairesLigne: 'Lundi à samedi, 8h à 18h · Dimanche fermé',
    placeholderNom: 'Marie Dupont',
    champEmail: 'E-mail',
    champTel: 'Téléphone',
    champProjet: 'Type de projet',
    champDelai: 'Délai souhaité',
    champDescription: 'Description du projet',
    placeholderDescription: 'Surface en m², état du terrain, pente, accès pour les matériaux…',
    projets: [
      'Pavage et aménagement',
      'Terrasse',
      'Petite maçonnerie',
      'Terrassement (sans mini-pelle)',
      'Clôtures et portails',
      'Création de parterres',
      'Entretien de jardin ou de haies',
      'Autre projet',
    ],
    delais: ['Dès que possible', 'Dans 1 à 3 mois', 'Dans 3 à 6 mois', 'Je me renseigne'],
    consentement:
      'J’accepte que mes informations soient utilisées pour être recontacté au sujet de ma demande. Elles ne sont ni revendues ni transmises à des tiers.',
    envoyer: 'Envoyer ma demande',
    apresEnvoi:
      'Le formulaire ouvre votre messagerie avec la demande déjà rédigée. Vous préférez appeler ? +32 493 08 33 44.',
    confirmation:
      'Votre logiciel de messagerie s’est ouvert avec la demande pré-remplie : il ne reste qu’à l’envoyer.',
  },

  footer: {
    titre: 'Un projet',
    titreAccent: 'd’extérieur ?',
    description:
      'Aménagements extérieurs et maçonnerie à Engis. Pavage, terrasses, murs de soutènement, clôtures, parterres et entretien de jardin.',
    facebook: 'Suivre nos chantiers sur Facebook',
    colPrestations: 'Prestations',
    colEntreprise: 'Entreprise',
    colContact: 'Contact',
    prestations: [
      'Pavage & terrasses',
      'Maçonnerie de jardin',
      'Terrassement & drainage',
      'Clôtures & portails',
      'Entretien de jardin',
    ],
    entreprise: ['Réalisations', 'Savoir-faire', 'Services', 'Questions fréquentes'],
    horaires: 'Lun – Sam · 8h – 18h · Dim. fermé',
    mentions: 'Mentions légales',
    donnees: 'Données personnelles',
    retourHaut: 'Revenir en haut de la page',
  },

  legal: {
    metaTitre: 'Mentions légales — VDH Construct, Engis',
    metaDescription:
      'Mentions légales de VDH Construct & aménagement extérieur, Rue Nouvelle Route 135 à 4480 Engis. Numéro d’entreprise BCE 1015.396.691, TVA BE 1015.396.691.',
    kicker: 'Informations légales',
    titre: 'Mentions',
    titreAccent: 'légales',
    intro:
      'Informations d’identification publiées conformément au Code de droit économique belge, livre XII, et au Règlement général sur la protection des données (RGPD).',
    etiquettes: {
      denomination: 'Dénomination légale',
      forme: 'Forme juridique',
      nomCommercial: 'Nom commercial',
      siege: 'Siège d’exploitation',
      bce: 'Numéro d’entreprise (BCE)',
      tva: 'Numéro de TVA',
      ue: 'Unité d’établissement',
      debut: 'Début d’activité',
      responsable: 'Responsable de la publication',
    },
    formeValeur: 'Personne physique (entreprise individuelle)',
    siegeValeur: 'Rue Nouvelle Route 135, 4480 Engis, Belgique',
    debutValeur: '22 octobre 2024',
    horairesValeur: 'Rue Nouvelle Route 135, 4480 Engis — du lundi au samedi, 8h à 18h',
    editeurTitre: 'Éditeur du site',
    editeurTexte:
      'Le présent site est édité et exploité par l’entreprise identifiée ci-dessous. Il s’agit d’une entreprise en personne physique : elle n’est donc pas inscrite au registre des personnes morales et ne dispose ni de capital social ni d’organe d’administration.',
    activitesTitre: 'Activités et accès à la profession',
    activitesTexte:
      'L’entreprise est inscrite à la Banque-Carrefour des Entreprises pour les activités suivantes (codes NACE-BEL) :',
    activitesListe: [
      '43.910 — Travaux de maçonnerie et de pose de briques',
      '41.001 — Construction générale de bâtiments résidentiels et gros œuvre',
      '71.113 — Architecture d’urbanisme, de paysage et de jardin',
      '81.300 — Création et entretien de jardins, parcs et espaces verts',
    ],
    activitesSuite:
      'Elle dispose de la compétence professionnelle pour les activités du gros œuvre, enregistrée auprès de la Banque-Carrefour des Entreprises depuis le 22 octobre 2024. Ces données sont consultables publiquement et gratuitement sur',
    activitesLien: 'le Public Search de la BCE',
    activitesFin: 'à l’aide du numéro d’entreprise 1015.396.691.',
    assurancesTitre: 'Assurances',
    assurances1:
      'Les travaux réalisés sont couverts par les assurances requises pour l’exercice de l’activité en Belgique, dont l’assurance de la responsabilité civile professionnelle et l’assurance de la responsabilité décennale pour les travaux qui y sont soumis.',
    assurances2:
      'Les attestations d’assurance, mentionnant l’assureur, le numéro de police et l’étendue géographique de la couverture, sont communiquées sur simple demande avant la signature de tout devis.',
    hebergementTitre: 'Hébergement',
    hebergementTexte: 'Le site est hébergé par',
    proprieteTitre: 'Propriété intellectuelle',
    propriete1:
      'L’ensemble des éléments du site — textes, photographies de chantiers, vidéos, logo et identité visuelle — est protégé par le droit d’auteur. Les photographies et vidéos présentées documentent des chantiers réellement exécutés par l’entreprise.',
    propriete2:
      'Toute reproduction, représentation ou réutilisation, totale ou partielle, sur quelque support que ce soit, est interdite sans autorisation écrite préalable.',
    donneesTitre: 'Données personnelles',
    donnees1:
      'Les données transmises via le formulaire de contact — nom, coordonnées et description du projet — sont utilisées uniquement pour répondre à la demande, organiser la visite sur place et établir un devis. Elles ne sont ni vendues, ni louées, ni transmises à des tiers à des fins commerciales.',
    donnees2:
      'Le traitement repose sur l’exécution de mesures précontractuelles prises à la demande de la personne concernée (article 6.1.b du RGPD). Les données sont conservées trois ans au maximum après le dernier contact, puis supprimées.',
    donnees3:
      'Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition. Pour l’exercer, écrivez à',
    donnees4:
      'En cas de désaccord, vous pouvez introduire une réclamation auprès de l’Autorité de protection des données, rue de la Presse 35, 1000 Bruxelles —',
    cookiesTitre: 'Cookies et mesure d’audience',
    cookies1:
      'Ce site ne dépose aucun cookie publicitaire et n’utilise aucun traceur de profilage. Le formulaire de contact ouvre votre logiciel de messagerie : aucune donnée n’est enregistrée sur le site lui-même.',
    cookies2:
      'Les polices de caractères sont chargées depuis Google Fonts, ce qui implique une connexion à un serveur tiers susceptible d’enregistrer votre adresse IP.',
    litigesTitre: 'Règlement des litiges',
    litiges1:
      'En cas de différend, nous vous invitons à nous contacter en premier lieu afin de rechercher une solution amiable.',
    litiges2:
      'À défaut d’accord, le consommateur peut s’adresser au Service de Médiation pour le Consommateur, boulevard du Roi Albert II 8, 1000 Bruxelles —',
    litiges3:
      'Les relations contractuelles sont régies par le droit belge. Les tribunaux de l’arrondissement judiciaire de Liège sont compétents.',
    responsabiliteTitre: 'Responsabilité',
    responsabilite1:
      'Les informations publiées sur ce site sont fournies à titre indicatif et tenues à jour avec le plus grand soin. Les descriptions de prestations, les délais et les zones d’intervention ne constituent pas une offre contractuelle : seul le devis signé engage l’entreprise.',
    responsabilite2:
      'Les photographies illustrent des chantiers déjà réalisés ; elles ne préjugent pas du résultat d’un chantier futur, dont l’aspect dépend du terrain, des matériaux choisis et des contraintes du site.',
    maj: 'Dernière mise à jour : 18 septembre 2026. Données d’identification vérifiées auprès de la Banque-Carrefour des Entreprises.',
  },
};
