import React, { useState } from 'react';
import { LoadingPopup } from './loadingPopup';
import { PhotosField } from './photosField';
import { SearchForm } from './searchForm';

export function Wrapper(): JSX.Element {
  const [photos, setPhotos] = useState<Array<Photo> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <SearchForm setPhotos={setPhotos} setIsLoading={setIsLoading} />
      {photos ? <PhotosField photos={photos} /> : ''}
      {isLoading ? <LoadingPopup /> : ''}
    </div>
  );
}
