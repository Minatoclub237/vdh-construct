import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const RADII = {
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
} as const;

export function spotlightMaskStyle(size = 280, intensity = 0.6): CSSProperties {
  return {
    background: `radial-gradient(${size}px circle at var(--spot-x, -200px) var(--spot-y, -200px), rgba(255,255,255,${intensity}), rgba(255,255,255,0) 60%)`,
    padding: '1px',
    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  };
}

// Suit le curseur sur tout le document : chaque conteneur écrit ses propres
// --spot-x / --spot-y, relatives à sa boîte.
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return ref;
}

type Props = {
  as?: ElementType;
  radius?: keyof typeof RADII;
  size?: number;
  intensity?: number;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  type?: 'button';
  id?: string;
};

export default function SpotlightBorder({
  as: Tag = 'div',
  radius = '2xl',
  size = 280,
  intensity = 0.6,
  className,
  children,
  ...rest
}: Props) {
  const ref = useSpotlight<HTMLElement>();

  return (
    <Tag ref={ref} className={cn('relative', RADII[radius], className)} {...rest}>
      <span
        aria-hidden
        className={cn('pointer-events-none absolute inset-0', RADII[radius])}
        style={spotlightMaskStyle(size, intensity)}
      />
      {children}
    </Tag>
  );
}
