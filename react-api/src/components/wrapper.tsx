import React, { useState } from 'react';
import { PhotosField } from './photosField';
import { SearchForm } from './searchBar';

export function Wrapper(): JSX.Element {
  const [photos, setPhotos] = useState<Array<Photo> | null>(null);

  return (
    <div>
      <SearchForm setPhotos={setPhotos} />
      <PhotosField photos={photos} />
    </div>
  );
}
