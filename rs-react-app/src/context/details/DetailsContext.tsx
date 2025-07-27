import { createContext, useState } from 'react';
import type { Card } from '../../types/card';

type DetailsContextType = {
  isDetailsShown: boolean;
  selectedCard: Card | null;
  showDetails: (card: Card) => void;
  hideDetails: () => void;
};

const DetailsContext = createContext<DetailsContextType>({
  isDetailsShown: false,
  selectedCard: null,
  showDetails: () => {},
  hideDetails: () => {},
});

const DetailsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  function showDetails(card: Card) {
    setIsDetailsShown(true);
    setSelectedCard(card);
  }

  function hideDetails() {
    setIsDetailsShown(false);
    setSelectedCard(null);
  }

  return (
    <DetailsContext.Provider
      value={{
        isDetailsShown,
        showDetails,
        hideDetails,
        selectedCard,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
};

export { DetailsProvider, DetailsContext };
