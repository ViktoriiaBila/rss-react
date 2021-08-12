import React from 'react';
import './searchBar.scss';

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
