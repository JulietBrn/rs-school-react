import type { Card } from '../../types/card';
import { CardItem } from '../card/CardItem';

export default function CardList({ data }: { data: Card[] }) {
  return (
    <ul className="grid xl:grid-cols-2">
      {data.map((card: Card, index: number) => {
        return (
          <CardItem
            key={index}
            name={card.name}
            url={card.url}
            abilities={card.abilities}
          />
        );
      })}
    </ul>
  );
}
