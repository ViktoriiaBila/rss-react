import React from 'react';

export function CardItem(props: ICardItemProps): JSX.Element {
  return (
    <div className="card__item">
      <h3 className="card__item__title">{props.title}</h3>
      <p className="card__item__text">{props.text}</p>
    </div>
  );
}
