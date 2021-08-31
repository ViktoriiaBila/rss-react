import React from 'react';
import { ECardElementsData } from '../../../shared/cardData';
import { CardItem } from './cardItem';

export function Card(props: ICardProps): JSX.Element {
  return (
    <div>
      <div className="card__personaData">
        <CardItem title={ECardElementsData.firstName} text={props.firstName} />
        <CardItem title={ECardElementsData.lastName} text={props.lastName} />
        <CardItem title={ECardElementsData.email} text={props.email} />
        <CardItem title={ECardElementsData.birthDate} text={props.birthDate} />
        <CardItem title={ECardElementsData.country} text={props.country} />
      </div>
      <div className="card__feedback">
        <CardItem
          title={ECardElementsData.messageText}
          text={props.messageText}
        />
      </div>
    </div>
  );
}
