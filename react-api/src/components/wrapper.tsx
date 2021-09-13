import React, { useState } from 'react';
import { ESortValues } from '../shared/constants/sortValues';
import { LoadingPopup } from './loadingPopup';
import { PhotosField } from './photosField';
import { SearchForm } from './searchForm';
import { SearchSettings } from './searchSettings';

export function Wrapper(): JSX.Element {
  const [photos, setPhotos] = useState<Array<Photo> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sort, setSort] = useState<string>(ESortValues.datePostedDesc);
  const [page, setPage] = useState<string>('1');
  const [perPage, setPerPage] = useState<string>('5');
  const [pages, setPages] = useState<string>('1');

  return (
    <div className="wrapper">
      <SearchForm
        setPhotos={setPhotos}
        setIsLoading={setIsLoading}
        sort={sort}
        page={page}
        perPage={perPage}
        setPages={setPages}
      />
      <SearchSettings
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
        pages={pages}
      />
      {photos ? <PhotosField photos={photos} /> : ''}
      {isLoading ? <LoadingPopup /> : ''}
    </div>
  );
}
