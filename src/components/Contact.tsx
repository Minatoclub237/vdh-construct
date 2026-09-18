import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import TexteRevele from '@/components/ui/TexteRevele';
import { T } from '@/lib/i18n';

const EMAIL = 'info@vdhamenagements.be';

// Les listes du formulaire viennent du dictionnaire.

export default function Contact() {
  const t = T();
  const [sent, setSent] = useState(false);

  // Pas de backend sur cette maquette : la demande part dans le client mail
  // du visiteur, déjà rédigée.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? '').trim();

    const corps = [
      `${t.contact.champNom} : ${get('nom')}`,
      `${t.contact.champEmail} : ${get('email')}`,
      `${t.contact.champTel} : ${get('telephone')}`,
      `Commune ou code postal : ${get('lieu')}`,
      `${t.contact.champProjet} : ${get('type')}`,
      `Démarrage souhaité : ${get('delai')}`,
      '',
      `${t.contact.champDescription} :`,
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
              {t.contact.kicker}
            </p>
            <TexteRevele
              as="h2"
              texte={t.contact.titre}
              accent={t.contact.titreAccent}
              accentClass="text-gold-dark"
              className="mt-4 font-octosquares font-bold uppercase leading-[0.95] text-[clamp(2rem,5vw,3.4rem)]"
            />
            <p className="mt-5 max-w-[30rem] text-[14px] sm:text-[15px] leading-[1.6] text-black/70">
              Décrivez votre projet en quelques lignes. Jordan vous rappelle pour convenir d’une
              visite sur place, mesurer le terrain et vous remettre un devis gratuit.
            </p>

            <div className="mt-10 flex flex-col divide-y divide-dashed divide-neutral-300 border-y border-dashed border-neutral-300">
              <a
                href="tel:+32493083344"
                className="flex items-center gap-3 py-4 text-[15px] transition-colors hover:text-gold-dark"
              >
                <Phone size={17} className="shrink-0 text-gold-dark" />
                +32 493 08 33 44
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
                Lundi – samedi, 8h – 18h · Dimanche fermé
              </p>
              <p className="flex items-center gap-3 py-4 text-[15px] text-black/70">
                <MapPin size={17} className="shrink-0 text-gold-dark" />
                {t.contact.zone}
              </p>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {t.contact.puces.map((item) => (
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
                    {t.contact.champNom}
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    required
                    autoComplete="name"
                    placeholder={t.contact.placeholderNom}
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="telephone">
                    {t.contact.champTel}
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="0470 12 34 56"
                    className={`mt-2 ${field}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="email">
                    {t.contact.champEmail}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="marie.dupont@email.be"
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={label} htmlFor="lieu">
                    {t.contact.champLieu}
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
                    {t.contact.champProjet}
                  </label>
                  <select id="type" name="type" required defaultValue="" className={`mt-2 ${field}`}>
                    <option value="" disabled>
                      {t.contact.selectionner}
                    </option>
                    {t.contact.projets.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={label} htmlFor="delai">
                    {t.contact.champDelai}
                  </label>
                  <select
                    id="delai"
                    name="delai"
                    required
                    defaultValue=""
                    className={`mt-2 ${field}`}
                  >
                    <option value="" disabled>
                      {t.contact.selectionner}
                    </option>
                    {t.contact.delais.map((delai) => (
                      <option key={delai} value={delai}>
                        {delai}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={label} htmlFor="message">
                  {t.contact.titreProjet}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t.contact.placeholderDescription}
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
                {t.contact.consentement}
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-dark px-7 py-4 text-[13px] font-medium uppercase tracking-[0.07em] text-gold transition-colors hover:bg-black"
              >
                {t.contact.envoyer}
                <ArrowUpRight size={16} />
              </button>

              <p className="text-[12px] text-black/50" aria-live="polite">
                {sent
                  ? 'Votre logiciel de messagerie s’est ouvert avec la demande pré-remplie : il ne reste qu’à l’envoyer.'
                  : `Le formulaire ouvre votre messagerie avec la demande déjà rédigée. Vous préférez appeler ? +32 493 08 33 44.`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
