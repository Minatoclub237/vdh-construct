import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react';

const IMAGES = [
  '/chantier/1.webp',
  '/chantier/2.webp',
  '/chantier/3.webp',
  '/chantier/4.webp',
  '/chantier/5.webp',
  '/chantier/6.webp',
];

const SPEED = 0.8;
const DECAY = 0.95;

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const velocity = useRef(0);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  // Défilement continu + inertie, en rAF (pas d'animation CSS : le glisser
  // doit pouvoir reprendre la main à tout moment).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);

      if (!dragging.current) {
        if (Math.abs(velocity.current) > 0.1) {
          offset.current += velocity.current;
          velocity.current *= DECAY;
        } else {
          velocity.current = 0;
          offset.current -= SPEED;
        }
      }

      const half = track.scrollWidth / 2;
      if (half > 0) {
        if (offset.current <= -half) offset.current += half;
        if (offset.current > 0) offset.current -= half;
      }

      track.style.transform = `translate3d(${offset.current}px, 0, 0)`;
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    velocity.current = 0;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offset.current;
    lastX.current = e.clientX;
    lastTime.current = performance.now();
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.classList.add('cursor-grabbing');
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const now = performance.now();
    const dt = now - lastTime.current || 16;
    // Clamp : sur un pointeur très rapide, dt peut tomber à 1 ms et lancer
    // la bande à plusieurs centaines de px par frame.
    const raw = ((e.clientX - lastX.current) / dt) * 16;
    velocity.current = Math.max(-80, Math.min(80, raw));
    lastX.current = e.clientX;
    lastTime.current = now;
    offset.current = dragStartOffset.current + (e.clientX - dragStartX.current);
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false;
    e.currentTarget.classList.remove('cursor-grabbing');
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <section className="relative py-4 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-10 h-[80px] sm:h-[100px]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 0H1440V50C1440 50 1200 100 720 100C240 100 0 50 0 50V0Z" fill="white" />
        </svg>
      </div>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="flex w-max gap-3 sm:gap-4 py-4 select-none cursor-grab"
        style={{ willChange: 'transform' }}
      >
        {[...IMAGES, ...IMAGES].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="w-60 h-80 sm:w-80 sm:h-[32rem] flex-shrink-0 rounded-2xl overflow-hidden"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[80px] sm:h-[100px]">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 100H1440V50C1440 50 1200 0 720 0C240 0 0 50 0 50V100Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
