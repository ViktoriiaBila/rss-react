import React from 'react';
import { PhotoElement } from './photoElement';
import './photoField.scss';

const sizeSuffix = 'q';

export function PhotosField(props: IPhotosFieldProps): JSX.Element {
  return (
    <table className="photoField">
      <tr className="photoField__photoElement main">
        <td className="photoField__photoElement__photo">image</td>
        <td className="photoField__photoElement__owner">owner</td>
        <td className="photoField__photoElement__title">title</td>
      </tr>
      <tbody>
        {props.photos.map((photo, index: number) => (
          <PhotoElement
            key={index}
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSuffix}.jpg`}
            alt={`photo-${photo.id}`}
            owner={photo.owner}
            title={photo.title}
          />
        ))}
      </tbody>
    </table>
  );
}
