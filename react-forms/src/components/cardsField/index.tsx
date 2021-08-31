import React from 'react';
import { Card } from './card';
import './cardsField.scss';

export function CardsField(props: ICardsFieldProps): JSX.Element {
  const cards =
    props.formValues !== null
      ? props.formValues.map((card) => (
          <Card
            firstName={card.firstName}
            lastName={card.lastName}
            email={card.email}
            birthDate={card.birthDate}
            country={card.country}
            messageText={card.messageText}
          />
        ))
      : [];
  return <div className="cardsField">{cards}</div>;
}
