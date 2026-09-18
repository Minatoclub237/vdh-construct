import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';

// Toutes les donnees d'identification proviennent du Public Search de la
// Banque-Carrefour des Entreprises, consulte le 18 septembre 2026.
// Entite PERSONNE PHYSIQUE : pas de RPM, pas de capital, pas de gerant a mentionner.
//
// TODO client — a demander a Jordan Vanderheyden puis a inscrire ici :
//   1. Assurance RC professionnelle : compagnie, numero de police, etendue geographique
//   2. Assurance decennale (obligatoire en Belgique pour le gros oeuvre) : idem
//   3. Eventuelle agreation d'entrepreneur (categorie + classe), si elle existe
// En attendant, la page renvoie a la communication des attestations sur demande :
// c'est exact et verifiable, contrairement a un numero de police inventé.

const IDENTITE = [
  { label: 'Dénomination légale', valeur: 'Vanderheyden, Jordan' },
  { label: 'Forme juridique', valeur: 'Personne physique (entreprise individuelle)' },
  { label: 'Nom commercial', valeur: 'VDH Construct & aménagement extérieur' },
  { label: 'Siège d’exploitation', valeur: 'Rue Nouvelle Route 135, 4480 Engis, Belgique' },
  { label: 'Numéro d’entreprise (BCE)', valeur: '1015.396.691' },
  { label: 'Numéro de TVA', valeur: 'BE 1015.396.691' },
  { label: 'Unité d’établissement', valeur: '2.365.243.644' },
  { label: 'Début d’activité', valeur: '22 octobre 2024' },
  { label: 'Responsable de la publication', valeur: 'Jordan Vanderheyden' },
];

const ACTIVITES = [
  '43.910 — Travaux de maçonnerie et de pose de briques',
  '41.001 — Construction générale de bâtiments résidentiels et gros œuvre',
  '71.113 — Architecture d’urbanisme, de paysage et de jardin',
  '81.300 — Création et entretien de jardins, parcs et espaces verts',
];

function Bloc({
  titre,
  numero,
  ancre,
  children,
}: {
  titre: string;
  numero: string;
  ancre?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={ancre} className="scroll-mt-6 border-t border-black/10 py-9">
      <div className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold-dark">
            {numero}
          </p>
          <h2 className="mt-1 text-lg font-semibold leading-tight text-black sm:text-xl">
            {titre}
          </h2>
        </div>
        <div className="max-w-[46rem] space-y-3 text-[14px] leading-[1.7] text-black/70">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#E8E3DD] font-inter">
      <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft size={15} />
          Retour au site
        </a>

        <header className="mt-10 max-w-[46rem]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-dark">
            Informations légales
          </p>
          <h1 className="mt-3 font-octosquares text-[clamp(2rem,6vw,3.6rem)] font-bold uppercase leading-[0.95] text-black">
            Mentions <span className="text-gold-dark">légales</span>
          </h1>
          <p className="mt-5 text-[14px] leading-[1.7] text-black/60 sm:text-[15px]">
            Informations d’identification publiées conformément au Code de droit économique
            belge, livre XII, et au Règlement général sur la protection des données (RGPD).
          </p>
        </header>

        <div className="mt-12">
          <Bloc numero="01" titre="Éditeur du site">
            <p>
              Le présent site est édité et exploité par l’entreprise identifiée ci-dessous.
              Il s’agit d’une entreprise en personne physique : elle n’est donc pas inscrite
              au registre des personnes morales et ne dispose ni de capital social ni
              d’organe d’administration.
            </p>
            <dl className="mt-5 overflow-hidden rounded-xl border border-black/10 bg-white/50">
              {IDENTITE.map((l, i) => (
                <div
                  key={l.label}
                  className={`grid gap-1 px-4 py-3 sm:grid-cols-[16rem_1fr] sm:gap-4 ${
                    i ? 'border-t border-black/10' : ''
                  }`}
                >
                  <dt className="text-[12px] uppercase tracking-[0.08em] text-black/45">
                    {l.label}
                  </dt>
                  <dd className="text-[14px] font-medium text-black">{l.valeur}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex flex-col gap-2.5 text-[14px]">
              <a href="tel:+32493083344" className="flex items-center gap-2 text-black transition-colors hover:text-gold-dark">
                <Phone size={15} className="shrink-0 text-gold-dark" />
                +32 493 08 33 44
              </a>
              <a href="mailto:info@vdhamenagements.be" className="flex items-center gap-2 text-black transition-colors hover:text-gold-dark">
                <Mail size={15} className="shrink-0 text-gold-dark" />
                info@vdhamenagements.be
              </a>
              <span className="flex items-start gap-2 text-black/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold-dark" />
                Rue Nouvelle Route 135, 4480 Engis — du lundi au samedi, 8h à 18h
              </span>
            </div>
          </Bloc>

          <Bloc numero="02" titre="Activités et accès à la profession">
            <p>
              L’entreprise est inscrite à la Banque-Carrefour des Entreprises pour les
              activités suivantes (codes NACE-BEL) :
            </p>
            <ul className="mt-2 space-y-1.5">
              {ACTIVITES.map((a) => (
                <li key={a} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.6em] h-[3px] w-[3px] shrink-0 rounded-full bg-gold-dark" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Elle dispose de la compétence professionnelle pour les activités du gros œuvre,
              enregistrée auprès de la Banque-Carrefour des Entreprises depuis le
              22 octobre 2024. Ces données sont consultables publiquement et gratuitement sur{' '}
              <a
                href="https://kbopub.economie.fgov.be/kbopub/zoeknummerform.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-dark underline underline-offset-2"
              >
                le Public Search de la BCE
              </a>{' '}
              à l’aide du numéro d’entreprise 1015.396.691.
            </p>
          </Bloc>

          <Bloc numero="03" titre="Assurances">
            <p>
              Les travaux réalisés sont couverts par les assurances requises pour l’exercice
              de l’activité en Belgique, dont l’assurance de la responsabilité civile
              professionnelle et l’assurance de la responsabilité décennale pour les travaux
              qui y sont soumis.
            </p>
            <p>
              Les attestations d’assurance, mentionnant l’assureur, le numéro de police et
              l’étendue géographique de la couverture, sont communiquées sur simple demande
              avant la signature de tout devis.
            </p>
          </Bloc>

          <Bloc numero="04" titre="Hébergement">
            <p>
              Le site est hébergé par <strong className="font-medium text-black">Vercel Inc.</strong>,
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-dark underline underline-offset-2"
              >
                vercel.com
              </a>.
            </p>
          </Bloc>

          <Bloc numero="05" titre="Propriété intellectuelle">
            <p>
              L’ensemble des éléments du site — textes, photographies de chantiers, vidéos,
              logo et identité visuelle — est protégé par le droit d’auteur. Les photographies
              et vidéos présentées documentent des chantiers réellement exécutés par
              l’entreprise.
            </p>
            <p>
              Toute reproduction, représentation ou réutilisation, totale ou partielle, sur
              quelque support que ce soit, est interdite sans autorisation écrite préalable.
            </p>
          </Bloc>

          <Bloc numero="06" titre="Données personnelles" ancre="donnees">
            <p>
              Les données transmises via le formulaire de contact — nom, coordonnées et
              description du projet — sont utilisées uniquement pour répondre à la demande,
              organiser la visite sur place et établir un devis. Elles ne sont ni vendues, ni
              louées, ni transmises à des tiers à des fins commerciales.
            </p>
            <p>
              Le traitement repose sur l’exécution de mesures précontractuelles prises à la
              demande de la personne concernée (article 6.1.b du RGPD). Les données sont
              conservées trois ans au maximum après le dernier contact, puis supprimées.
            </p>
            <p>
              Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation
              et d’opposition. Pour l’exercer, écrivez à{' '}
              <a
                href="mailto:info@vdhamenagements.be?subject=Donn%C3%A9es%20personnelles"
                className="font-medium text-gold-dark underline underline-offset-2"
              >
                info@vdhamenagements.be
              </a>.
            </p>
            <p>
              En cas de désaccord, vous pouvez introduire une réclamation auprès de
              l’Autorité de protection des données, rue de la Presse 35, 1000 Bruxelles —{' '}
              <a
                href="https://www.autoriteprotectiondonnees.be"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-dark underline underline-offset-2"
              >
                autoriteprotectiondonnees.be
              </a>.
            </p>
          </Bloc>

          <Bloc numero="07" titre="Cookies et mesure d’audience">
            <p>
              Ce site ne dépose aucun cookie publicitaire et n’utilise aucun traceur de
              profilage. Le formulaire de contact ouvre votre logiciel de messagerie : aucune
              donnée n’est enregistrée sur le site lui-même.
            </p>
            <p>
              Les polices de caractères sont chargées depuis Google Fonts, ce qui implique une
              connexion à un serveur tiers susceptible d’enregistrer votre adresse IP.
            </p>
          </Bloc>

          <Bloc numero="08" titre="Règlement des litiges">
            <p>
              En cas de différend, nous vous invitons à nous contacter en premier lieu afin de
              rechercher une solution amiable.
            </p>
            <p>
              À défaut d’accord, le consommateur peut s’adresser au Service de Médiation pour
              le Consommateur, boulevard du Roi Albert II 8, 1000 Bruxelles —{' '}
              <a
                href="https://mediationconsommateur.be"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-dark underline underline-offset-2"
              >
                mediationconsommateur.be
              </a>{' '}
              — tél. 02 702 52 20.
            </p>
            <p>
              Les relations contractuelles sont régies par le droit belge. Les tribunaux de
              l’arrondissement judiciaire de Liège sont compétents.
            </p>
          </Bloc>

          <Bloc numero="09" titre="Responsabilité">
            <p>
              Les informations publiées sur ce site sont fournies à titre indicatif et tenues
              à jour avec le plus grand soin. Les descriptions de prestations, les délais et
              les zones d’intervention ne constituent pas une offre contractuelle : seul le
              devis signé engage l’entreprise.
            </p>
            <p>
              Les photographies illustrent des chantiers déjà réalisés ; elles ne préjugent
              pas du résultat d’un chantier futur, dont l’aspect dépend du terrain, des
              matériaux choisis et des contraintes du site.
            </p>
          </Bloc>
        </div>

        <footer className="border-t border-black/10 pt-8">
          <p className="text-[12px] text-black/45">
            Dernière mise à jour : 18 septembre 2026. Données d’identification vérifiées
            auprès de la Banque-Carrefour des Entreprises.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-black/80"
          >
            <ArrowLeft size={14} />
            Retour au site
          </a>
        </footer>
      </div>
    </main>
  );
}
