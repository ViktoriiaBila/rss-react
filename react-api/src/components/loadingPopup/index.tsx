import React from 'react';
import './loadingPopup.scss';

export function LoadingPopup(): JSX.Element {
  return (
    <div className="loadingPopup__container">
      <div className="loadingPopup">
        <p className="loadingPopup__text">loading...</p>
      </div>
    </div>
  );
}
