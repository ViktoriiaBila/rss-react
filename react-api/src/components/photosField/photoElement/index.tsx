import React from 'react';

export function PhotoElement(props: IPhotoElementProps): JSX.Element {
  return (
    <div>
      <img src={props.url} alt={props.alt} />
      <p>{props.owner}</p>
      <p>{props.title}</p>
    </div>
  );
}
