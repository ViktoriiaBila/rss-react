import React, { useState } from 'react';
import { initialSearchSettings } from '../shared/constants/initialSearchSettings';
import { LoadingPopup } from './loadingPopup';
import { PhotosField } from './photosField';
import { SearchForm } from './searchForm';
import { SearchSettings } from './searchSettings';

export function Wrapper(): JSX.Element {
  const [photos, setPhotos] = useState<Array<Photo> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchSettings, setSearchSettings] = useState<SearchSettings>(
    initialSearchSettings,
  );

  return (
    <div className="wrapper">
      <SearchForm
        setPhotos={setPhotos}
        setIsLoading={setIsLoading}
        searchSettings={searchSettings}
        setSearchSettings={setSearchSettings}
      />
      <SearchSettings
        searchSettings={searchSettings}
        setSearchSettings={setSearchSettings}
      />
      {photos ? <PhotosField photos={photos} /> : ''}
      {isLoading ? <LoadingPopup /> : ''}
    </div>
  );
}
