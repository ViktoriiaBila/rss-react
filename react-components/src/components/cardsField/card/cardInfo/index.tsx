import React from 'react';
import './cardInfo.scss';

export function CardInfo(): JSX.Element {
  return (
    <div className="cardsField_card_info">
      <div className="cardsField_card_info_title"></div>
      <div className="cardsField_card_info_author">
        by <span className="authorName"></span>
      </div>
      <div className="cardsField_card_info_hr"></div>
      <div className="cardsField_card_info_tegs">
        <span className="cardsField_card_info_tegs_item"></span>
      </div>
    </div>
  );
}
