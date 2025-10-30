import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Card {
  id: string;
  title: string;
  description: string;
  image: string;
  details: string;
}

interface CardSliderProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
  direction?: "left" | "right";
}

export default function CardSlider({ cards, onCardClick, direction = "right" }: CardSliderProps) {
  const [isPaused, setIsPaused] = useState(false);

  const displayCards = [...cards, ...cards, ...cards];

  return (
    <div className="space-y-6">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex gap-8 px-4"
          style={{
            animation: isPaused ? "none" : `${direction === "left" ? "slideLeft" : "slideRight"} 60s linear infinite`,
          }}
        >
          {displayCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="flex-shrink-0 w-96 cursor-pointer group"
              onClick={() => onCardClick(card)}
            >
              <div
                className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {card.description}
                  </p>
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        onCardClick(card);
                      }}
                      className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                    >
                      More Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes slideRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100% / 3));
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
      `}</style>
    </div>
  );
}
