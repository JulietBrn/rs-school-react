export type Card = {
  name: string;
  url: string;
  abilities?: ability[];
};

type ability = {
  ability: {
    name: string;
    url: string;
  };
};

export type CardItemArray = Array<Card>;

export type ResultsProps = {
  data: Array<Card>;
  isLoading?: boolean;
  error?: string | null;
};
