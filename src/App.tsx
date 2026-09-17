import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ScrollStage from '@/components/ScrollStage';
import Realisations from '@/components/Realisations';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Le hero reste en place pendant que la section suivante glisse par-dessus :
// il s'efface légèrement sur la hauteur d'un écran.

export default function App() {
  const heroRangeRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const featuresStackRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const raw = window.scrollY / Math.max(1, window.innerHeight);
      setFade(raw < 0 ? 0 : raw > 1 ? 1 : raw);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Recouvrement : la section blanche se fige, la suivante glisse par-dessus.
  // `sticky bottom:0` ne déclenche pas cet effet — il faut poser
  // top = min(0, hauteurFenêtre − hauteurSection) et le recalculer.
  useEffect(() => {
    const el = featuresStackRef.current;
    if (!el) return;

    const place = () => {
      el.style.top = `${Math.min(0, window.innerHeight - el.offsetHeight)}px`;
    };

    place();
    const observer = new ResizeObserver(place);
    observer.observe(el);
    window.addEventListener('resize', place);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', place);
    };
  }, []);

  const scrollToStage = () => {
    const el = stageRef.current;
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  return (
    <main className="relative">
      <div ref={heroRangeRef} className="relative z-0 h-screen supports-[height:100svh]:h-[100svh]">
        <div
          className="sticky top-0 h-screen supports-[height:100svh]:h-[100svh] overflow-hidden"
          style={{
            opacity: 1 - fade * 0.4,
            transform: `scale(${1 - fade * 0.04})`,
          }}
        >
          <Hero onAdvance={scrollToStage} />
        </div>
      </div>

      <div ref={stageRef} className="relative z-10">
        <ScrollStage />
      </div>

      <div ref={featuresStackRef} className="sticky z-0">
        <Features />
      </div>

      <Realisations />

      <Faq />

      <Contact />

      <Footer />
    </main>
  );
}
