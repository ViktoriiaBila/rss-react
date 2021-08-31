import React from 'react';
import { Card } from './card';

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
      : [
          <Card
            firstName="test"
            lastName="test"
            email="test"
            birthDate="test"
            country="test"
            messageText="testtesttesttesttesttesttesttest testtesttesttesttesttesttesttest testtesttesttesttesttesttesttest testtesttesttesttesttesttest testtesttesttesttest testtesttesttesttesttesttesttest"
          />,
        ];
  return <div>{cards}</div>;
}
