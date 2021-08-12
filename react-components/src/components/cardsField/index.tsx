import React from 'react';
import { Card } from './card';
import './cardsField.scss';

export function CardsField(): JSX.Element {
  return (
    <div className="cardsField_wrapper">
      <Card />
    </div>
  );
}
