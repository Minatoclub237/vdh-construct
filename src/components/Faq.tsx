import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';
import SpotlightBorder from '@/components/ui/SpotlightBorder';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type CategoryKey = 'budget' | 'chantier' | 'garanties';

const categories: { key: CategoryKey; label: string }[] = [
  { key: 'budget', label: 'Prix & budget' },
  { key: 'chantier', label: 'Délais & chantier' },
  { key: 'garanties', label: 'Garanties & confiance' },
];

type Objection = { q: string; a: string; cta: string };

// Objections réelles entendues en rendez-vous, pas des questions de façade.
// Chaque réponse se termine par un appel à l'action différent.
const faqs: Record<CategoryKey, Objection[]> = {
  budget: [
    {
      q: 'Votre devis est plus cher que les autres.',
      a: "Souvent parce qu'il est complet. Nous chiffrons ce que d'autres laissent en « à prévoir » : évacuation des déblais, reprise en sous-œuvre, protections, remise en état. Comparez les postes un par un plutôt que les totaux : c'est là que l'écart s'explique, et c'est aussi là que se cachent les rallonges de fin de chantier.",
      cta: 'Faire comparer votre devis ligne à ligne',
    },
    {
      q: "Comment être sûr qu'il n'y aura pas de dépassement ?",
      a: "Le montant est ferme. Aucun travail supplémentaire n'est engagé sans un avenant écrit que vous signez avant exécution. Vous recevez une situation de travaux à chaque étape : vous voyez ce qui est fait, ce qui reste, et ce qui a été payé.",
      cta: 'Voir un exemple de situation de travaux',
    },
    {
      q: "Je n'ai pas encore de budget arrêté.",
      a: "C'est le bon moment pour nous appeler, pas le mauvais. À partir de vos plans ou même d'un croquis, nous donnons une fourchette au mètre carré et les postes qui feront réellement varier le prix. Sans frais et sans engagement.",
      cta: 'Obtenir une estimation sous 48 h',
    },
    {
      q: 'Vous demandez un acompte trop important.',
      a: "L'échéancier suit l'avancement réel du chantier, pas la signature. Chaque appel de fonds correspond à une étape constatée sur place. Vous ne payez jamais des travaux qui n'ont pas commencé.",
      cta: 'Recevoir notre échéancier type',
    },
    {
      q: 'Je ne peux pas tout financer en une fois.',
      a: "Le chantier peut être découpé en phases livrables, chacune utilisable avant d'engager la suivante. Nous fournissons également les pièces dont votre banque a besoin pour monter votre dossier.",
      cta: 'Parler du phasage avec un conducteur de travaux',
    },
  ],
  chantier: [
    {
      q: 'Les chantiers prennent toujours du retard.',
      a: "Un planning daté vous est remis avant le démarrage, avec les jalons et les interventions des autres corps d'état. Vous avez un point d'avancement chaque semaine, et vous êtes prévenu au premier aléa — pas trois semaines après.",
      cta: 'Demander le planning type d’un chantier',
    },
    {
      q: 'Qui sera réellement sur mon chantier ?',
      a: "Vous connaissez les intervenants avant l'ouverture du chantier : la liste vous est remise, sous-traitants compris, avec leurs attestations. Un seul interlocuteur reste votre référent du premier coup de pelle à la réception.",
      cta: 'Demander la liste des intervenants',
    },
    {
      q: 'Je ne peux pas quitter les lieux pendant les travaux.',
      a: "Nous travaillons en site occupé : phasage pièce par pièce, protections, cloisonnement anti-poussière et accès préservés. Cela demande une visite technique en amont pour caler le déroulé avec vous.",
      cta: 'Organiser une visite technique',
    },
    {
      q: "Et si on découvre un problème une fois les murs ouverts ?",
      a: "On arrête, on diagnostique, on chiffre. Vous recevez un devis complémentaire avant toute reprise, avec les solutions possibles et leur impact sur le planning. Rien n'est engagé sans votre accord écrit.",
      cta: 'Nous soumettre votre cas particulier',
    },
    {
      q: 'Le bruit, la poussière et les voisins m’inquiètent.',
      a: "Horaires respectés, benne évacuée régulièrement, nettoyage en fin de journée et information des riverains avant les phases bruyantes. Les abords sont rendus praticables chaque soir.",
      cta: 'Consulter nos règles de chantier',
    },
  ],
  garanties: [
    {
      q: 'Qui me dit que vous serez encore là dans dix ans ?',
      a: "La garantie décennale ne repose pas sur notre longévité mais sur notre assureur : elle vous couvre dix ans même si l'entreprise disparaît. Nos attestations à jour vous sont remises avant tout acompte — exigez-les de toutes les entreprises que vous consultez.",
      cta: 'Recevoir nos attestations d’assurance',
    },
    {
      q: "Rien ne me garantit la qualité de l'exécution.",
      a: "La réception de travaux, si. Vous listez vos réserves, elles sont levées avant le solde, et le procès-verbal signé fait foi. S'y ajoute la garantie de parfait achèvement : un an pendant lequel tout désordre signalé est repris à nos frais.",
      cta: 'Comprendre la réception de travaux',
    },
    {
      q: 'Et si le résultat ne correspond pas à ce que j’imaginais ?',
      a: "C'est un problème de préparation, pas de finitions. Les points sensibles — niveaux, réservations, implantations — sont validés avec vous sur le chantier avant d'être coulés, quand les corriger ne coûte encore rien.",
      cta: 'Poser votre question à un conducteur de travaux',
    },
    {
      q: 'On trouve très peu d’avis sur vous en ligne.',
      a: "C'est exact, et nous préférons des références vérifiables à des étoiles. Nous vous ouvrons un chantier en cours pour que vous jugiez sur pièce : propreté, méthode, tenue des délais. C'est plus parlant qu'une note.",
      cta: 'Visiter un chantier en cours',
    },
    {
      q: 'Je veux un conseil, pas encore engager des travaux.',
      a: "Le premier échange sert à cela : comprendre la faisabilité, les contraintes structurelles et l'ordre de grandeur. Sans devis à signer, sans relance commerciale.",
      cta: 'Prendre 15 minutes avec nous',
    },
  ],
};

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
                Objections fréquentes
              </span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h2 className="mt-5 font-octosquares font-bold uppercase tracking-[-0.01em] leading-[1.02] text-foreground text-[clamp(1.8rem,4.5vw,3.2rem)]">
                Ce qu’on nous dit avant
                <br className="hidden sm:block" /> de signer.
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.3} className="max-w-sm">
            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
              Les vraies réserves entendues en rendez-vous, avec des réponses vérifiables. Si la
              vôtre n’y est pas, posez-la : nous y répondrons aussi franchement.
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
                  Posez la question qui vous retient. Un conducteur de travaux vous répond, sans
                  passer par un commercial.
                </p>
                <a
                  href="mailto:sasbuilding360@gmail.com"
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
                    <AccordionContent className="pb-7 text-sm text-foreground/60 leading-relaxed">
                      {item.a}
                      <a
                        href="#contact"
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.07em] text-dark transition-colors hover:bg-white"
                      >
                        {item.cta}
                        <span aria-hidden>→</span>
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
