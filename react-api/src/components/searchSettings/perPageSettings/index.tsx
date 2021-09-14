import React from 'react';

export function PerPageSettings(props: IPerPageSettings): JSX.Element {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.setPerPage(value);
  };
  return (
    <label className="searchSettingsForm__label" htmlFor="perPage">
      <span className="searchSettingsForm__label__title">
        Choose a number of photos to return per page
      </span>
      <input
        className="searchSettingsForm__input"
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
