import React from 'react';

export function CardItem(props: ICardItemProps): JSX.Element {
  return (
    <div className="cardsField__card__item">
      <h3 className="cardsField__card__item__title">{props.title}</h3>
      <p className="cardsField__card__item__text">{props.text}</p>
    </div>
  );
}
