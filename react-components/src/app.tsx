import React from 'react';
import './styles/styles.scss';
import { SearchBar } from './components/searchBar';
import { CardsField } from './components/cardsField';

export function App(): JSX.Element {
  return (
    <div className="mainContainer">
      <SearchBar />
      <CardsField />
    </div>
  );
}
