import React from 'react';
import { CardImg } from './cardImg';
import { CardInfo } from './cardInfo';
import { CardFooter } from './cardFooter';
import './card.scss';

export function Card(): JSX.Element {
  return (
    <div className="cardsField_card">
      <CardImg />
      <CardInfo />
      <CardFooter />
    </div>
  );
}
