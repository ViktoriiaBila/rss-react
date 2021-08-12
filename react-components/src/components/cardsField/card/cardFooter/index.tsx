import React from 'react';
import './cardFooter.scss';

export function CardFooter(): JSX.Element {
  return (
    <footer className="cardsField_card_footer">
      <div className="cardsField_card_footer_likes">
        <div className="cardsField_card_footer_likes_icon"></div>
        <span className="cardsField_card_footer_likes_value"></span>
      </div>

      <div className="cardsField_card_footer_views">
        <div className="cardsField_card_footer_views_icon"></div>
        <span className="cardsField_card_footer_views_value"></span>
      </div>
    </footer>
  );
}
