import React from 'react';
import { CardImg } from './cardImg';
import { CardInfo } from './cardInfo';
import { CardFooter } from './cardFooter';
import './card.scss';

interface ICardsItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  author: string;
  tags: Array<string>;
  likes: number;
  views: number;
}

export function Card(props: ICardsItemProps): JSX.Element {
  return (
    <div className="cardsField_card">
      <CardImg imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
      <CardInfo title={props.title} author={props.author} tags={props.tags} />
      <CardFooter likes={props.likes} views={props.views} />
    </div>
  );
}
