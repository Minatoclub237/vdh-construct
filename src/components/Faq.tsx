import { useState } from 'react';
import { ArrowRight, ChevronDown, Mail, MessageCircle, Phone } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';
import TexteRevele from '@/components/ui/TexteRevele';
import SpotlightBorder from '@/components/ui/SpotlightBorder';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type CategoryKey = 'budget' | 'chantier' | 'garanties';

const categories: { key: CategoryKey; label: string }[] = [
  { key: 'budget', label: 'Prix & devis' },
  { key: 'chantier', label: 'Délais & chantier' },
  { key: 'garanties', label: 'Confiance & méthode' },
];

type Canal = 'tel' | 'mail' | 'whatsapp' | 'page';
type Objection = { q: string; a: string; cta: string; href: string; canal: Canal };

const TEL = '+32493083344';
const WA = 'https://wa.me/32493083344';
const MAIL = 'info@vdhamenagements.be';
const ecrire = (sujet: string, corps: string) =>
  `mailto:${MAIL}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

// Objections réelles entendues en rendez-vous, pas des questions de façade.
// Chaque réponse se termine par un appel à l'action différent.
const faqs: Record<CategoryKey, Objection[]> = {
  budget: [
    {
      q: 'Votre devis est plus cher qu’un autre.',
      a: "Regardez ce qu’il contient. Une terrasse posée sur un sol mal préparé bouge au premier hiver : le devis chiffre le décaissement, l’évacuation des terres, l’empierrement, le géotextile et la pente d’évacuation. Comparez les postes un par un plutôt que les totaux, c’est là que l’écart s’explique.",
      cta: 'Faire comparer votre devis poste par poste',
      href: ecrire(
        'Comparaison de devis',
        'Bonjour, je vous joins le devis reçu ailleurs. Pouvez-vous me dire ce qu’il contient et ce qu’il ne contient pas ?\n\nMon projet : ',
      ),
      canal: 'mail',
    },
    {
      q: 'Je n’ai aucune idée du budget pour ce que je veux.',
      a: "C’est le moment de nous appeler, pas plus tard. On passe voir le terrain, on mesure, et vous repartez avec une fourchette au mètre carré et la liste de ce qui fera réellement varier le prix. La visite et le devis sont gratuits.",
      cta: 'Demander une visite gratuite',
      href: '#contact',
      canal: 'page',
    },
    {
      q: 'Est-ce que le prix peut encore bouger en cours de route ?',
      a: "Ce qui est décrit au devis est le prix de ce qui est décrit au devis. Si le terrain révèle autre chose — une dalle enfouie, une conduite, un sol instable — on s’arrête, on vous montre, et rien n’est engagé avant votre accord.",
      cta: 'Nous soumettre votre terrain',
      href: ecrire(
        'Mon terrain',
        'Bonjour, voici quelques photos de mon terrain et ce que j’aimerais y faire :\n\n',
      ),
      canal: 'mail',
    },
    {
      q: 'Mon chantier est trop petit pour vous intéresser.',
      a: "Non. Une bordure à reprendre, un parterre à refaire, quelques mètres de pavé : on prend aussi les petites interventions, pas seulement les aménagements complets. C’est souvent comme ça que commencent les chantiers plus longs.",
      cta: 'Décrire votre petite intervention',
      href: WA,
      canal: 'whatsapp',
    },
    {
      q: 'L’évacuation des terres, c’est en supplément ?',
      a: "Elle est au devis, parce que c’est un vrai poste : un décaissement de terrasse sort plusieurs mètres cubes qu’il faut charger et évacuer. Un devis qui n’en parle pas vous la fera payer à la fin.",
      cta: 'Faire chiffrer le terrassement',
      href: '#contact',
      canal: 'page',
    },
  ],
  chantier: [
    {
      q: 'Combien de temps mon jardin va-t-il rester en chantier ?',
      a: "La durée dépend de la surface, de l’accès et de la météo — nous préférons vous la donner après avoir vu le terrain plutôt que d’annoncer un délai au hasard au téléphone. Vous l’avez par écrit avec le devis, avant de vous engager.",
      cta: 'Fixer la visite pour caler le planning',
      href: `tel:${TEL}`,
      canal: 'tel',
    },
    {
      q: 'Je ne suis là que le samedi.',
      a: "Nous travaillons du lundi au samedi, de 8h à 18h. La visite comme le chantier peuvent donc se caler sur un samedi si c’est le seul jour où vous êtes disponible.",
      cta: 'Proposer un samedi',
      href: ecrire(
        'Disponible le samedi',
        'Bonjour, je ne suis disponible que le samedi. Quels samedis vous conviennent pour une visite ?\n\n',
      ),
      canal: 'mail',
    },
    {
      q: 'Mon terrain est en pente, c’est jouable ?',
      a: "C’est une bonne partie de notre travail : murs de soutènement, paliers, escaliers extérieurs et reprise des niveaux. Une pente se gère par le terrassement et le drainage avant de parler de revêtement.",
      cta: 'Nous parler de votre dénivelé',
      href: WA,
      canal: 'whatsapp',
    },
    {
      q: 'Il faudra une mini-pelle et vous n’en avez pas.',
      a: "Le terrassement que nous réalisons se fait sans mini-pelle : nous le disons franchement plutôt que de le découvrir sur place. Pour un gros volume, on vous l’annonce dès la visite et on cale la solution avec vous avant tout devis.",
      cta: 'Faire évaluer le volume à terrasser',
      href: `tel:${TEL}`,
      canal: 'tel',
    },
    {
      q: 'Je vais retrouver de la boue et des gravats partout.',
      a: "Les abords sont rendus praticables en fin de journée et les déblais regroupés, pas étalés sur la pelouse. L’accès aux matériaux fait partie des points qu’on repère à la visite, justement pour limiter les dégâts autour.",
      cta: 'Voir comment nous organisons l’accès',
      href: '#chantier',
      canal: 'page',
    },
  ],
  garanties: [
    {
      q: 'On ne trouve presque aucun avis sur vous en ligne.',
      a: "C’est exact, et nous n’allons pas prétendre le contraire : l’entreprise est jeune et n’a pas encore d’avis publiés. Ce qui est vérifiable, en revanche, l’est : sur TrustUp.be, notre profil affiche un TrustScore de 8,9/10, avec l’historique du gérant et la santé financière vérifiés et aucune dette sociale ou fiscale. Et surtout, nous pouvons vous montrer un chantier.",
      cta: 'Visiter un chantier en cours',
      href: `tel:${TEL}`,
      canal: 'tel',
    },
    {
      q: 'Je ne vous connais pas, qui êtes-vous exactement ?',
      a: "Jordan Vanderheyden, à Engis, rue Nouvelle Route. Ce n’est pas une plate-forme qui sous-traite : c’est l’artisan qui vient à la visite qui suit ensuite votre chantier. Nous intervenons dans un rayon d’environ 20 km, à Engis, Flémalle et Seraing.",
      cta: 'Parler directement à Jordan',
      href: `tel:${TEL}`,
      canal: 'tel',
    },
    {
      q: 'Et si le résultat ne ressemble pas à ce que j’avais en tête ?',
      a: "On valide avec vous sur le terrain ce qui ne se corrige plus après : les niveaux, les pentes, le tracé des bordures et le calepinage. Ces points sont montrés et confirmés avant la pose, quand les changer ne coûte encore rien.",
      cta: 'Préparer votre projet avec nous',
      href: '#contact',
      canal: 'page',
    },
    {
      q: 'Vous faites du jardin ou de la maçonnerie ?',
      a: "Les deux, et c’est justement le but : un extérieur réussi demande de la maçonnerie sous les plantes. Nous faisons le terrassement, les murs de soutènement, les abris de jardin, le pavage et les terrasses, mais aussi les plantations, les parterres et l’entretien.",
      cta: 'Voir nos réalisations',
      href: '#realisations',
      canal: 'page',
    },
    {
      q: 'Je veux juste un conseil, pas encore des travaux.',
      a: "Le premier échange sert à ça : savoir si votre idée est faisable, dans quel ordre s’y prendre et quel ordre de grandeur prévoir. Sans devis à signer et sans relance.",
      cta: 'Poser votre question',
      href: ecrire(
        'Une question avant de me lancer',
        'Bonjour, avant d’aller plus loin j’aimerais savoir :\n\n',
      ),
      canal: 'mail',
    },
  ],
};

function IconeCanal({ canal }: { canal: Canal }) {
  const taille = 14;
  if (canal === 'tel') return <Phone size={taille} aria-hidden />;
  if (canal === 'mail') return <Mail size={taille} aria-hidden />;
  if (canal === 'whatsapp') return <MessageCircle size={taille} aria-hidden />;
  return <ArrowRight size={taille} aria-hidden />;
}

export default function Faq() {
  const [active, setActive] = useState<CategoryKey>('budget');

  return (
    <section id="faq" className="relative z-[3] w-full bg-background font-inter py-16 sm:py-24">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <div className="mb-14 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <FadeUp delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full bg-landing-surface border border-white/10 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
                Questions fréquentes
              </span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <TexteRevele
                as="h2"
                texte="Ce qu’on nous dit avant"
                accent="de signer."
                className="mt-5 font-octosquares font-bold uppercase tracking-[-0.01em] leading-[1.02] text-foreground text-[clamp(1.8rem,4.5vw,3.2rem)]"
              />
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="max-w-sm">
            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
              Les questions qu’on nous pose vraiment avant de signer, avec des réponses
              vérifiables. Si la vôtre n’y est pas, posez-la.
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
                {categories.map((category) => {
                  const isActive = category.key === active;
                  return (
                    <SpotlightBorder
                      key={category.key}
                      as="button"
                      type="button"
                      radius="full"
                      size={200}
                      intensity={0.4}
                      onClick={() => setActive(category.key)}
                      className={
                        isActive
                          ? 'w-full text-center px-5 py-3 text-sm transition-colors bg-landing-surface border border-white/10 text-foreground'
                          : 'w-full text-center px-5 py-3 text-sm transition-colors border border-transparent text-foreground/60 hover:text-foreground'
                      }
                    >
                      {category.label}
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
                <h3 className="text-lg font-semibold text-foreground">Une réserve à lever ?</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  Posez la question qui vous retient. C’est Jordan qui répond, pas un
                  standard téléphonique.
                </p>
                <a
                  href="mailto:info@vdhamenagements.be"
                  className="mt-6 inline-flex items-center gap-1 text-sm text-foreground hover:text-foreground/80"
                >
                  Nous écrire <span aria-hidden>→</span>
                </a>
              </SpotlightBorder>
            </SpotlightBorder>
          </div>

          <SpotlightBorder radius="2xl" size={360} className="p-2 sm:p-3">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {faqs[active].map((item, idx) => (
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
                        href={item.href}
                        {...(item.canal === 'whatsapp'
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.07em] text-dark transition-colors hover:bg-white"
                      >
                        <IconeCanal canal={item.canal} />
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
