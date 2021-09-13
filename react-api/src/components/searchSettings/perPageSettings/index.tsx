import React from 'react';

export function PerPageSettings(props: IPerPageSettings): JSX.Element {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.setPerPage(value);
  };
  return (
    <label htmlFor="perPage">
      Choose a number of photos to return per page
      <input
        type="number"
        name="perPage"
        value={props.perPage}
        min="5"
        max="500"
        step="5"
        onChange={changeHandler}
      />
    </label>
  );
}
