import React from 'react';
import './cardFooter.scss';

const cardFooterItem = {
  likes: 'likes',
  views: 'views',
};

interface ICardFooterItemProps {
  item: string;
  value: number;
}

interface ICardFooterProps {
  likes: number;
  views: number;
}

function CardFooterItem(props: ICardFooterItemProps): JSX.Element {
  return (
    <div className={`cardsField_card_footer_${props.item}`}>
      <div className={`cardsField_card_footer_${props.item}_icon`}></div>
      <span className={`cardsField_card_footer_${props.item}_value`}>
        {props.value}
      </span>
    </div>
  );
}

export function CardFooter(props: ICardFooterProps): JSX.Element {
  return (
    <footer className="cardsField_card_footer">
      <CardFooterItem item={cardFooterItem.likes} value={props.likes} />
      <CardFooterItem item={cardFooterItem.views} value={props.views} />
    </footer>
  );
}
