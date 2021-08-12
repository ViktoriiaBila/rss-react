import React from 'react';
import './styles/styles.scss';

export function App(): JSX.Element {
  return (
    <div className="mainContainer">
      <SearchBar />
      <CardsField />
    </div>
  );
}

export function SearchBar(): JSX.Element {
  return (
    <div className="searchBar_wrapper">
      <div className="searchBar_icon"></div>
      <input
        className="searchBar_input"
        type="search"
        placeholder="Write something here..."
      />
    </div>
  );
}

export function CardsField(): JSX.Element {
  return (
    <div className="cardsField_wrapper">
      <Card />
    </div>
  );
}

export function Card(): JSX.Element {
  return (
    <div className="cardsField_card">
      <CardImg />
      <CardInfo />
      <CardFooter />
    </div>
  );
}

export function CardImg(): JSX.Element {
  return (
    <div className="cardsField_card_img_wrapper">
      <img className="cardsField_card_img" src="" alt="" />
    </div>
  );
}

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
