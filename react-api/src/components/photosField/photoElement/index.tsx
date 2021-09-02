import React from 'react';

export function PhotoElement(props: IPhotoElementProps): JSX.Element {
  return (
    <div className="photoField__photoElement">
      <div className="photoField__photoElement__photo__container">
        <img
          className="photoField__photoElement__photo"
          src={props.url}
          alt={props.alt}
        />
      </div>
      <div className="photoField__photoElement__text">
        <p className="photoField__photoElement__text__owner">{props.owner}</p>
        <div className="photoField__photoElement__text__hr"></div>
        <p className="photoField__photoElement__text__title">{props.title}</p>
      </div>
    </div>
  );
}
