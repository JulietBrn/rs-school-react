// export type Card = {
//   name: string;
//   effect_entries: Array<{ effect: string }>;
// };

export type Card = {
  name: string;
  url: string;
};

export type CardItemArray = Array<Card>;

export type ResultsProps = {
  data: Array<Card>;
  isLoading?: boolean;
  error?: string | null;
};
