import React from 'react';
import './header.scss';

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__filter">
        <h2 className="header__title">Send us your feedback</h2>
      </div>
    </header>
  );
}
