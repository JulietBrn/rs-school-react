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
