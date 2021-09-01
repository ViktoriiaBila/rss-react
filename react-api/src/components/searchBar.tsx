import React, { useState } from 'react';

export function SearchForm(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <label htmlFor="searchBar">
        <input
          type="search"
          name="searchBar"
          value={searchValue}
          onChange={(event) => changeHandler(event)}
        />
      </label>
      <input type="submit" value="search" />
    </form>
  );
}
