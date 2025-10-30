import { useState } from "react";

interface Logo {
  name: string;
  url: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  title: string;
}

export default function LogoCarousel({ logos, title }: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  const displayLogos = [...logos, ...logos];

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-secondary uppercase tracking-wide">
        {title}
      </h3>

      <div
        className="relative overflow-hidden bg-white rounded-xl border border-secondary/10 py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-8 px-4 transition-none ${
            isPaused ? "" : "animate-scroll"
          }`}
          style={{
            animation: isPaused ? "none" : "scroll 40s linear infinite",
          }}
        >
          {displayLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-16 flex items-center justify-center group cursor-pointer"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="h-12 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
