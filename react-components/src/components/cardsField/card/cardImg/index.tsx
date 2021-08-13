import React from 'react';
import './cardImg.scss';

interface ICardImgProps {
  imgSrc: string;
  imgAlt: string;
}

export function CardImg(props: ICardImgProps): JSX.Element {
  return (
    <div className="cardsField_card_img_wrapper">
      <img
        className="cardsField_card_img"
        src={`./assets/img/${props.imgSrc}`}
        alt={props.imgAlt}
      />
    </div>
  );
}
