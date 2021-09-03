import React from 'react';

export function PhotoElement(props: IPhotoElementProps): JSX.Element {
  return (
    <tr className="photoField__photoElement">
      <td className="photoField__photoElement__photo">
        <img
          className="photoField__photoElement__photo__img"
          src={props.url}
          alt={props.alt}
        />
      </td>
      <td className="photoField__photoElement__owner">{props.owner}</td>
      <td className="photoField__photoElement__title">{props.title}</td>
    </tr>
  );
}
