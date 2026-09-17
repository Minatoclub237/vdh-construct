import Marquee from '@/components/Marquee';
import { useInView } from '@/components/scroll/Reveal';


const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Secteurs', href: '#secteurs' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'FAQ', href: '#faq' },
];

export default function Features() {
  const { ref, inView } = useInView<HTMLElement>();
  const anim = (cls: string) => (inView ? cls : 'opacity-0');

  return (
    <section id="secteurs" ref={ref} className="relative min-h-screen w-full bg-white font-inter p-2 sm:p-3">
      <div
        className={`relative border border-neutral-200 rounded-sm p-1 sm:p-1 min-h-[calc(100vh-1rem)] sm:min-h-[calc(100vh-1.5rem)] ${anim(
          'animate-border-draw'
        )}`}
        style={{ animationDelay: '100ms' }}
      >
        <div className={`absolute -top-0.5 -left-0.5 w-1 h-1 bg-dark ${anim('animate-fade-in')}`} style={{ animationDelay: '500ms' }} />
        <div className={`absolute -top-0.5 -right-0.5 w-1 h-1 bg-dark ${anim('animate-fade-in')}`} style={{ animationDelay: '600ms' }} />
        <div className={`absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-dark ${anim('animate-fade-in')}`} style={{ animationDelay: '700ms' }} />
        <div className={`absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-dark ${anim('animate-fade-in')}`} style={{ animationDelay: '800ms' }} />

        <div
          className={`border border-dashed border-neutral-200 rounded-sm flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-2.5rem)] ${anim(
            'animate-border-draw'
          )}`}
          style={{ animationDelay: '200ms' }}
        >
          <nav className="relative z-30 flex items-center justify-between px-5 sm:px-8 lg:px-12 border-b border-dashed border-neutral-200 min-h-[4rem] sm:min-h-[5.5rem]">
            <div className={`flex items-center gap-2 sm:gap-3 ${anim('animate-fade-up')}`} style={{ animationDelay: '350ms' }}>
              <LogoMark />
              <span className="font-octosquares font-medium text-lg sm:text-[22px] text-black tracking-tight">
                Building360
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-5 py-2.5 bg-black/5 rounded-sm text-[13px] font-medium uppercase tracking-[0.07em] text-black hover:bg-black/10 transition-colors ${anim(
                    'animate-fade-up'
                  )}`}
                  style={{ animationDelay: `${450 + i * 70}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className={`hidden md:inline-flex px-6 py-3.5 bg-dark rounded-sm text-white text-[13px] font-medium uppercase tracking-[0.07em] hover:bg-black transition-colors ${anim(
                'animate-fade-up'
              )}`}
              style={{ animationDelay: '750ms' }}
            >
              Demander un devis
            </a>
          </nav>

          <div className="flex-1 flex flex-col px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
            <h2
              className={`font-octosquares font-bold text-black uppercase leading-[1.05] text-center text-[clamp(1.4rem,4.5vw,3.2rem)] max-w-[48rem] mx-auto ${anim(
                'animate-fade-up'
              )}`}
              style={{ animationDelay: '500ms' }}
            >
              Une couverture évolutive conçue pour un secteur en mouvement
            </h2>

            <div className="-mx-5 sm:-mx-8 lg:-mx-12 mt-6 sm:mt-8">
              <Marquee />
            </div>

            <p
              className={`mt-8 sm:mt-10 lg:mt-12 text-center text-black text-[10px] sm:text-[11px] font-semibold uppercase leading-[1.6] tracking-[0.05em] max-w-[26rem] mx-auto pb-4 ${anim(
                'animate-fade-up'
              )}`}
              style={{ animationDelay: '1100ms' }}
            >
              Nous offrons une assurance fiable qui permet aux professionnels de décider en confiance et de se développer sans hésiter.
            </p>

            <div
              className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 ${anim(
                'animate-fade-up'
              )}`}
              style={{ animationDelay: '1200ms' }}
            >
              <a
                href="#contact"
                className="text-black text-[11px] font-semibold uppercase tracking-[0.05em] underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors"
              >
                Prendre rendez-vous
              </a>
              <a
                href="#realisations"
                className="text-black text-[11px] font-semibold uppercase tracking-[0.05em] underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-900 transition-colors"
              >
                Voir nos chantiers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <rect x="16" y="2" width="18" height="15" rx="1" transform="rotate(45 16 2)" fill="#080808" />
      <rect x="10" y="8" width="12" height="15" rx="1" transform="rotate(45 10 8)" fill="#080808" />
    </svg>
  );
}
