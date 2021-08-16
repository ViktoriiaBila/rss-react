import React from 'react';
import { Card } from './card';
import './cardsField.scss';

interface ICardsItem {
  imgSrc: string;
  imgAlt: string;
  title: string;
  author: string;
  tags: Array<string>;
  likes: number;
  views: number;
}

interface ICardsProps {
  cards: Array<ICardsItem>;
}

export function CardsField(props: ICardsProps): JSX.Element {
  const cards = props.cards
    .sort(() => Math.random() - 0.5)
    .map((card) => {
      return (
        <Card
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          title={card.title}
          author={card.author}
          tags={card.tags}
          likes={card.likes}
          views={card.views}
        />
      );
    });

  return <div className="cardsField_wrapper">{cards}</div>;
}
