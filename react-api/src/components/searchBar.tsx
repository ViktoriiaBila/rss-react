import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { axiosInstance } from '../services/api';
import { APIKEY } from '../shared/constants/apiKey';

export function SearchForm(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [photos, setPhotos] = useState<Array<Photo> | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200_Photos> = await axiosInstance.get(
        `?method=flickr.photos.search&api_key=${APIKEY}&text=${searchValue}&per_page=20&page=1&format=json&nojsoncallback=1`,
      );
      setPhotos(response.data.photos.photo);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="searchBar">
          <input
            type="text"
            name="searchBar"
            value={searchValue}
            onChange={changeHandler}
          />
        </label>
        <input type="submit" value="search" />
      </form>
      {isLoading ? <div className="loadingPopup">loading...</div> : ''}
    </div>
  );
}
