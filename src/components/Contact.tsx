import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';

const EMAIL = 'sasbuilding360@gmail.com';

const TYPES = [
  'Construction neuve',
  'Extension / surélévation',
  'Rénovation / reprise d’ouvrage',
  'Terrassement / fondations',
  'Mur, clôture, dallage',
  'Autre projet',
];

const DELAIS = ['Dès que possible', 'Dans 1 à 3 mois', 'Dans 3 à 6 mois', 'Je me renseigne'];

const ENGAGEMENTS = [
  'Réponse sous 48 h ouvrées',
  'Visite technique et devis détaillé gratuits',
  'Attestations d’assurance fournies avant tout acompte',
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Pas de backend sur cette maquette : la demande part dans le client mail
  // du visiteur, déjà rédigée.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const corps = [
      `Nom : ${get('nom')}`,
      `E-mail : ${get('email')}`,
      `Téléphone : ${get('telephone')}`,
      `Commune ou code postal : ${get('lieu')}`,
      `Type de projet : ${get('type')}`,
      `Démarrage souhaité : ${get('delai')}`,
      '',
      'Description du projet :',
      get('message'),
    ].join('\n');

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Demande de devis — ${get('type')} — ${get('nom')}`
    )}&body=${encodeURIComponent(corps)}`;

    setSent(true);
  };

  const field =
    'w-full rounded-sm border border-neutral-300 bg-white px-4 py-3 text-[14px] text-black placeholder:text-black/40 outline-none transition-colors focus:border-black';
  const label = 'block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/60';

  return (
    <section id="contact" className="relative z-[3] w-full bg-white font-inter text-black">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
              Contact
            </p>
            <h2 className="mt-4 font-octosquares font-bold uppercase leading-[0.95] text-[clamp(2rem,5vw,3.4rem)]">
              Parlons de votre chantier
            </h2>
            <p className="mt-5 max-w-[30rem] text-[14px] sm:text-[15px] leading-[1.6] text-black/70">
              Décrivez votre projet en quelques lignes. Un conducteur de travaux vous rappelle pour
              cadrer la faisabilité, les contraintes structurelles et l’ordre de grandeur du budget.
            </p>

            <div className="mt-10 flex flex-col divide-y divide-dashed divide-neutral-300 border-y border-dashed border-neutral-300">
              <a
                href="tel:+33781410081"
                className="flex items-center gap-3 py-4 text-[15px] transition-colors hover:text-gold-dark"
              >
                <Phone size={17} className="shrink-0 text-gold-dark" />
                07 81 41 00 81
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 py-4 text-[15px] transition-colors hover:text-gold-dark"
              >
                <Mail size={17} className="shrink-0 text-gold-dark" />
                {EMAIL}
              </a>
              <p className="flex items-center gap-3 py-4 text-[15px] text-black/70">
                <Clock size={17} className="shrink-0 text-gold-dark" />
                Lundi – samedi, 7h – 21h · Dimanche fermé
              </p>
              <p className="flex items-center gap-3 py-4 text-[15px] text-black/70">
                <MapPin size={17} className="shrink-0 text-gold-dark" />
                Val-de-Marne (94) et Île-de-France
              </p>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {ENGAGEMENTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-black/70">
                  <span className="mt-[7px] h-1 w-1 shrink-0 bg-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-neutral-200 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="nom">
                    Nom et prénom
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    required
                    autoComplete="name"
                    placeholder="Jean Dupont"
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="telephone">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="06 12 34 56 78"
                    className={`mt-2 ${field}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="email">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jean.dupont@email.fr"
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="lieu">
                    Commune ou code postal
                  </label>
                  <input
                    id="lieu"
                    name="lieu"
                    required
                    placeholder="94000"
                    className={`mt-2 ${field}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="type">
                    Type de projet
                  </label>
                  <select id="type" name="type" required defaultValue="" className={`mt-2 ${field}`}>
                    <option value="" disabled>
                      Sélectionner…
                    </option>
                    {TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="delai">
                    Démarrage souhaité
                  </label>
                  <select
                    id="delai"
                    name="delai"
                    required
                    defaultValue=""
                    className={`mt-2 ${field}`}
                  >
                    <option value="" disabled>
                      Sélectionner…
                    </option>
                    {DELAIS.map((delai) => (
                      <option key={delai} value={delai}>
                        {delai}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={label} htmlFor="message">
                  Votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Surface, niveaux, état de l’existant, plans disponibles…"
                  className={`mt-2 resize-y ${field}`}
                />
              </div>

              <label className="flex items-start gap-3 text-[12px] leading-[1.5] text-black/60">
                <input
                  type="checkbox"
                  name="consentement"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-black"
                />
                J’accepte que mes informations soient utilisées pour être recontacté au sujet de ma
                demande. Elles ne sont ni revendues ni transmises à des tiers.
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-dark px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-gold transition-colors hover:bg-black"
              >
                Envoyer ma demande
                <ArrowUpRight size={16} />
              </button>

              <p className="text-[12px] text-black/50" aria-live="polite">
                {sent
                  ? 'Votre logiciel de messagerie s’est ouvert avec la demande pré-remplie : il ne reste qu’à l’envoyer.'
                  : `Le formulaire ouvre votre messagerie avec la demande déjà rédigée. Vous préférez appeler ? 07 81 41 00 81.`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
