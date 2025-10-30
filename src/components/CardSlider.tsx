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
}

export default function CardSlider({ cards, onCardClick }: CardSliderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handleNextCard = () => {
    setRotation((prev) => (prev + 1) % cards.length);
  };

  const handlePrevCard = () => {
    setRotation((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const visibleCards = [];
  for (let i = 0; i < 3; i++) {
    visibleCards.push(cards[(rotation + i) % cards.length]);
  }

  return (
    <div className="space-y-6">
      <div
        className="relative h-[500px] lg:h-[600px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full h-full perspective">
          {visibleCards.map((card, index) => {
            const zIndex = index === 0 ? 30 : index === 1 ? 20 : 10;
            const opacity = index === 0 ? 1 : index === 1 ? 0.7 : 0.4;
            const scale = index === 0 ? 1 : index === 1 ? 0.9 : 0.8;
            const yOffset = index === 0 ? 0 : index === 1 ? 40 : 80;

            return (
              <div
                key={card.id}
                className="absolute w-full max-w-sm transition-all duration-500 ease-out cursor-pointer group"
                style={{
                  zIndex,
                  opacity,
                  transform: `translateY(${yOffset}px) scale(${scale})`,
                  left: "50%",
                  marginLeft: "-200px",
                }}
                onClick={() => index === 0 && onCardClick(card)}
              >
                <div
                  className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
                    index === 0 ? "group-hover:shadow-2xl group-hover:border-2" : ""
                  }`}
                  style={{
                    boxShadow:
                      index === 0
                        ? "0 20px 60px rgba(0,0,0,0.15)"
                        : "0 10px 30px rgba(0,0,0,0.1)",
                    borderColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (index === 0) {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(59, 130, 246, 0.5)";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 30px rgba(59, 130, 246, 0.3), 0 20px 60px rgba(0,0,0,0.2)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index === 0) {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "transparent";
                      (e.currentTarget as HTMLElement).style.boxShadow =
                        "0 20px 60px rgba(0,0,0,0.15)";
                    }
                  }}
                >
                  {/* Image Area - 3/4 */}
                  <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Text Area - 1/4 */}
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
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevCard}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden lg:flex"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNextCard}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden lg:flex"
        >
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setRotation(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === rotation % cards.length
                ? "bg-primary w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
