// components/SpotlightEffect.tsx
'use client';

const deterministicRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export function SpotlightEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {['pricing', 'cta', 'features'].map((_, i) => {
        const seed = i * 1000;
        return (
          <div 
            key={i}
            className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/5 to-transparent spotlight-animation"
            style={{
              clipPath: `circle(10% at ${deterministicRandom(seed) * 80 + 10}% ${deterministicRandom(seed + 1) * 80 + 10}%)`,
              animationDelay: `${deterministicRandom(seed + 2) * 5}s`,
              opacity: 0.3
            }}
          />
        );
      })}
    </div>
  );
}