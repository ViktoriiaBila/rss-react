import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { axiosInstance } from '../../services/api';
import { APIKEY } from '../../shared/constants/apiKey';
import { ESortValues } from '../../shared/constants/sortValues';
import './searchForm.scss';

export function SearchForm(props: ISearchFormProps): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [emptySearchBar, setEmptySearchBar] = useState<boolean>(true);

  const clickCrossBtnHandler = () => {
    setSearchValue('');
    setEmptySearchBar(true);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    if (value) {
      setEmptySearchBar(false);
    } else {
      setEmptySearchBar(true);
    }
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setIsLoading(true);
    try {
      const response: AxiosResponse<GET200_Photos> = await axiosInstance.get(
        `?method=flickr.photos.search&api_key=${APIKEY}&text=${searchValue}&extras=owner_name&sort=${props.sort}&per_page=${props.perPage}&page=${props.page}&format=json&nojsoncallback=1`,
      );
      props.setPages(String(response.data.photos.pages));
      props.setPhotos(response.data.photos.photo);
    } catch (error) {
      console.error(error);
    } finally {
      props.setIsLoading(false);
    }
  };

  return (
    <form className="searchForm" onSubmit={submitHandler}>
      <label className="searchForm__label" htmlFor="searchBar">
        <input
          className="searchForm__input"
          type="text"
          name="searchBar"
          value={searchValue}
          onChange={changeHandler}
          autoComplete="off"
          placeholder="write something..."
        />
      </label>
      {!emptySearchBar ? (
        <button
          className="searchForm__crossBtn"
          type="button"
          onClick={clickCrossBtnHandler}
        >
          <div className="searchForm__crossBtn__icon"></div>
        </button>
      ) : null}
      <button className="searchForm__submitBtn" type="submit">
        <div className="searchForm__submitBtn__icon"></div>
      </button>
    </form>
  );
}
