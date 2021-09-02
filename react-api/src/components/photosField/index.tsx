import React from 'react';
import { PhotoElement } from './photoElement';
import './photoField.scss';

const sizeSuffix = 'q';

export function PhotosField(props: IPhotosFieldProps): JSX.Element {
  return (
    <div className="photoField">
      {props.photos.map((photo, index: number) => (
        <PhotoElement
          key={index}
          url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSuffix}.jpg`}
          alt={`photo-${photo.id}`}
          owner={photo.owner}
          title={photo.title}
        />
      ))}
    </div>
  );
}
