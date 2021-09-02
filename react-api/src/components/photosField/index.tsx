import React from 'react';
import { PhotoElement } from './photoElement';

const sizeSuffix = 'q';

export function PhotosField(props: IPhotosFieldProps): JSX.Element {
  return (
    <div>
      {props.photos
        ? props.photos.map((photo, index: number) => (
            <PhotoElement
              key={index}
              url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${sizeSuffix}.jpg`}
              alt={`photo-${photo.id}`}
              owner={photo.owner}
              title={photo.title}
            />
          ))
        : []}
    </div>
  );
}
