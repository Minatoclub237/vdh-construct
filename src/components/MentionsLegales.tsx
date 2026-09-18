import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { T, RACINE, langue } from '@/lib/i18n';

// Toutes les donnees d'identification proviennent du Public Search de la
// Banque-Carrefour des Entreprises, consulte le 18 septembre 2026.
// Entite PERSONNE PHYSIQUE : pas de RPM, pas de capital, pas de gerant a mentionner.
//
// TODO client — a demander a Jordan Vanderheyden puis a inscrire ici :
//   1. Assurance RC professionnelle : compagnie, numero de police, etendue geographique
//   2. Assurance decennale (obligatoire en Belgique pour le gros oeuvre) : idem
//   3. Eventuelle agreation d'entrepreneur (categorie + classe), si elle existe
// En attendant, la page renvoie a la communication des attestations sur demande :
// c'est exact et verifiable, contrairement a un numero de police invente.

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
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-gold-dark">{numero}</p>
          <h2 className="mt-1 text-lg font-semibold leading-tight text-black sm:text-xl">{titre}</h2>
        </div>
        <div className="max-w-[46rem] space-y-3 text-[14px] leading-[1.7] text-black/70">{children}</div>
      </div>
    </section>
  );
}

const A = 'font-medium text-gold-dark underline underline-offset-2';

export default function MentionsLegales() {
  const t = T();
  const g = t.legal;
  const l = langue();

  const identite = [
    [g.etiquettes.denomination, 'Vanderheyden, Jordan'],
    [g.etiquettes.forme, g.formeValeur],
    [g.etiquettes.nomCommercial, 'VDH Construct & aménagement extérieur'],
    [g.etiquettes.siege, g.siegeValeur],
    [g.etiquettes.bce, '1015.396.691'],
    [g.etiquettes.tva, 'BE 1015.396.691'],
    [g.etiquettes.ue, '2.365.243.644'],
    [g.etiquettes.debut, g.debutValeur],
    [g.etiquettes.responsable, 'Jordan Vanderheyden'],
  ];

  return (
    <main className="min-h-screen bg-[#E8E3DD] font-inter">
      <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <a
          href={RACINE[l]}
          className="inline-flex items-center gap-2 text-[13px] font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft size={15} />
          {t.commun.retourSite}
        </a>

        <header className="mt-10 max-w-[46rem]">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-dark">{g.kicker}</p>
          <h1 className="mt-3 font-octosquares text-[clamp(2rem,6vw,3.6rem)] font-bold uppercase leading-[0.95] text-black">
            {g.titre} <span className="text-gold-dark">{g.titreAccent}</span>
          </h1>
          <p className="mt-5 text-[14px] leading-[1.7] text-black/60 sm:text-[15px]">{g.intro}</p>
        </header>

        <div className="mt-12">
          <Bloc numero="01" titre={g.editeurTitre}>
            <p>{g.editeurTexte}</p>
            <dl className="mt-5 overflow-hidden rounded-xl border border-black/10 bg-white/50">
              {identite.map(([label, valeur], i) => (
                <div
                  key={label}
                  className={`grid gap-1 px-4 py-3 sm:grid-cols-[16rem_1fr] sm:gap-4 ${i ? 'border-t border-black/10' : ''}`}
                >
                  <dt className="text-[12px] uppercase tracking-[0.08em] text-black/45">{label}</dt>
                  <dd className="text-[14px] font-medium text-black">{valeur}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex flex-col gap-2.5 text-[14px]">
              <a href="tel:+32493083344" className="flex items-center gap-2 text-black transition-colors hover:text-gold-dark">
                <Phone size={15} className="shrink-0 text-gold-dark" />
                {t.commun.telephone}
              </a>
              <a href="mailto:info@vdhamenagements.be" className="flex items-center gap-2 text-black transition-colors hover:text-gold-dark">
                <Mail size={15} className="shrink-0 text-gold-dark" />
                info@vdhamenagements.be
              </a>
              <span className="flex items-start gap-2 text-black/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold-dark" />
                {g.horairesValeur}
              </span>
            </div>
          </Bloc>

          <Bloc numero="02" titre={g.activitesTitre}>
            <p>{g.activitesTexte}</p>
            <ul className="mt-2 space-y-1.5">
              {g.activitesListe.map((a) => (
                <li key={a} className="flex gap-2.5">
                  <span aria-hidden className="mt-[0.6em] h-[3px] w-[3px] shrink-0 rounded-full bg-gold-dark" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              {g.activitesSuite}{' '}
              <a href="https://kbopub.economie.fgov.be/kbopub/zoeknummerform.html" target="_blank" rel="noopener noreferrer" className={A}>
                {g.activitesLien}
              </a>{' '}
              {g.activitesFin}
            </p>
          </Bloc>

          <Bloc numero="03" titre={g.assurancesTitre}>
            <p>{g.assurances1}</p>
            <p>{g.assurances2}</p>
          </Bloc>

          <Bloc numero="04" titre={g.hebergementTitre}>
            <p>
              {g.hebergementTexte} <strong className="font-medium text-black">Vercel Inc.</strong>, 440 N Barranca Ave #4133,
              Covina, CA 91723, USA —{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={A}>
                vercel.com
              </a>.
            </p>
          </Bloc>

          <Bloc numero="05" titre={g.proprieteTitre}>
            <p>{g.propriete1}</p>
            <p>{g.propriete2}</p>
          </Bloc>

          <Bloc numero="06" titre={g.donneesTitre} ancre="donnees">
            <p>{g.donnees1}</p>
            <p>{g.donnees2}</p>
            <p>
              {g.donnees3}{' '}
              <a href="mailto:info@vdhamenagements.be?subject=RGPD" className={A}>
                info@vdhamenagements.be
              </a>.
            </p>
            <p>
              {g.donnees4}{' '}
              <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className={A}>
                autoriteprotectiondonnees.be
              </a>.
            </p>
          </Bloc>

          <Bloc numero="07" titre={g.cookiesTitre}>
            <p>{g.cookies1}</p>
            <p>{g.cookies2}</p>
          </Bloc>

          <Bloc numero="08" titre={g.litigesTitre}>
            <p>{g.litiges1}</p>
            <p>
              {g.litiges2}{' '}
              <a href="https://mediationconsommateur.be" target="_blank" rel="noopener noreferrer" className={A}>
                mediationconsommateur.be
              </a>{' '}
              — tél. 02 702 52 20.
            </p>
            <p>{g.litiges3}</p>
          </Bloc>

          <Bloc numero="09" titre={g.responsabiliteTitre}>
            <p>{g.responsabilite1}</p>
            <p>{g.responsabilite2}</p>
          </Bloc>
        </div>

        <footer className="border-t border-black/10 pt-8">
          <p className="text-[12px] text-black/45">{g.maj}</p>
          <a
            href={RACINE[l]}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.07em] text-white transition-colors hover:bg-black/80"
          >
            <ArrowLeft size={14} />
            {t.commun.retourSite}
          </a>
        </footer>
      </div>
    </main>
  );
}
