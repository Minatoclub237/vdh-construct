import { useState } from 'react';
import { ArrowRight, ChevronDown, Mail, MessageCircle, Phone } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';
import TexteRevele from '@/components/ui/TexteRevele';
import { T, lien } from '@/lib/i18n';
import SpotlightBorder from '@/components/ui/SpotlightBorder';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type CategoryKey = 'budget' | 'chantier' | 'garanties';
type Canal = 'tel' | 'mail' | 'whatsapp' | 'page';

const TEL = '+32493083344';
const WA = 'https://wa.me/32493083344';
const MAIL = 'info@vdhamenagements.be';

// Le routage des appels a l'action ne depend PAS de la langue : meme ordre
// d'objections dans chaque dictionnaire, donc meme canal a chaque position.
const CANAUX: Record<CategoryKey, { canal: Canal; ancre?: string }[]> = {
  budget: [
    { canal: 'mail' },
    { canal: 'page', ancre: '#contact' },
    { canal: 'mail' },
    { canal: 'whatsapp' },
    { canal: 'page', ancre: '#contact' },
  ],
  chantier: [
    { canal: 'tel' },
    { canal: 'mail' },
    { canal: 'whatsapp' },
    { canal: 'tel' },
    { canal: 'page', ancre: '#chantier' },
  ],
  garanties: [
    { canal: 'tel' },
    { canal: 'tel' },
    { canal: 'page', ancre: '#contact' },
    { canal: 'page', ancre: '#realisations' },
    { canal: 'mail' },
  ],
};

const CATEGORIES: CategoryKey[] = ['budget', 'chantier', 'garanties'];

// Destination reelle du CTA : appel, e-mail pre-rempli, WhatsApp ou ancre interne.
// Le sujet et le corps du mail viennent du dictionnaire, donc traduits.
function destination(
  categorie: CategoryKey,
  idx: number,
  item: { sujet?: string; corps?: string },
): string {
  const { canal, ancre } = CANAUX[categorie][idx];
  if (canal === 'tel') return `tel:${TEL}`;
  if (canal === 'whatsapp') return WA;
  if (canal === 'mail') {
    if (!item.sujet) return `mailto:${MAIL}`;
    const q = `subject=${encodeURIComponent(item.sujet)}&body=${encodeURIComponent(item.corps ?? '')}`;
    return `mailto:${MAIL}?${q}`;
  }
  return lien(ancre ?? '#contact');
}

function IconeCanal({ canal }: { canal: Canal }) {
  const taille = 14;
  if (canal === 'tel') return <Phone size={taille} aria-hidden />;
  if (canal === 'mail') return <Mail size={taille} aria-hidden />;
  if (canal === 'whatsapp') return <MessageCircle size={taille} aria-hidden />;
  return <ArrowRight size={taille} aria-hidden />;
}

export default function Faq() {
  const t = T();
  const [active, setActive] = useState<CategoryKey>('budget');

  return (
    <section id="faq" className="relative z-[3] w-full bg-background font-inter py-16 sm:py-24">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                {t.faq.kicker}
              </span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <TexteRevele
                as="h2"
                texte={t.faq.titre}
                accent={t.faq.titreAccent}
                className="mt-5 font-octosquares font-bold uppercase tracking-[-0.01em] leading-[1.02] text-foreground text-[clamp(1.8rem,4.5vw,3.2rem)]"
              />
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="max-w-sm">
            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
              {t.faq.intro}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col gap-4 lg:h-full">
            <div className="lg:flex-1">
              <SpotlightBorder
                radius="2xl"
                size={280}
                className="flex flex-col gap-1 p-2 sm:p-3 lg:sticky lg:top-24"
              >
                {CATEGORIES.map((cle) => {
                  const isActive = cle === active;
                  return (
                    <SpotlightBorder
                      key={cle}
                      as="button"
                      type="button"
                      radius="full"
                      size={200}
                      intensity={0.4}
                      onClick={() => setActive(cle)}
                      className={
                        isActive
                          ? 'w-full text-center px-5 py-3 text-sm transition-colors bg-landing-surface border border-white/10 text-foreground'
                          : 'w-full text-center px-5 py-3 text-sm transition-colors border border-transparent text-foreground/60 hover:text-foreground'
                      }
                    >
                      {t.faq.categories[cle]}
                    </SpotlightBorder>
                  );
                })}
              </SpotlightBorder>
            </div>

            <SpotlightBorder radius="2xl" size={360} className="mt-8 lg:mt-0 p-2 sm:p-3">
              <SpotlightBorder
                radius="2xl"
                size={260}
                intensity={0.4}
                className="border border-white/10 bg-landing-surface p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{t.faq.reserveTitre}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {t.faq.reserveTexte}
                </p>
                <a
                  href="mailto:info@vdhamenagements.be"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-foreground hover:text-foreground/80"
                >
                  {t.faq.reserveCta} <span aria-hidden>→</span>
                </a>
              </SpotlightBorder>
            </SpotlightBorder>
          </div>

          <SpotlightBorder radius="2xl" size={360} className="p-2 sm:p-3">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {t.faq.objections[active].map((item, idx) => (
                <FadeUp key={`${active}-${idx}`} delay={0.08 * idx}>
                  <AccordionItem
                    value={`${active}-${idx}`}
                    className="relative rounded-2xl border border-white/10 bg-landing-surface px-6 [&[data-state=open]]:bg-landing-surface-hover"
                  >
                    <AccordionTrigger className="py-7 text-left text-sm sm:text-base font-medium text-foreground hover:no-underline [&>svg]:hidden">
                      <span className="flex-1 pr-4">{item.q}</span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-foreground/70 transition-transform duration-200 group-data-[state=open]:rotate-180">
                        <ChevronDown size={16} />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col items-start pb-7 text-sm leading-relaxed text-foreground/60">
                      <p>{item.a}</p>
                      <a
                        href={destination(active, idx, item)}
                        {...(CANAUX[active][idx].canal === 'whatsapp'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.07em] text-dark transition-colors hover:bg-white"
                      >
                        <IconeCanal canal={CANAUX[active][idx].canal} />
                        {item.cta}
                      </a>
                    </AccordionContent>
                  </AccordionItem>
                </FadeUp>
              ))}
            </Accordion>
          </SpotlightBorder>
        </div>
      </div>
    </section>
  );
}
