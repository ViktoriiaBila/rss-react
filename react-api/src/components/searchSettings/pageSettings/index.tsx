import React from 'react';

export function PageSettings(props: IPageSettings): JSX.Element {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.setPage(value);
  };
  return (
    <label className="searchSettingsForm__label" htmlFor="page">
      <span className="searchSettingsForm__label__title">Choose page</span>
      <input
        className="searchSettingsForm__input"
        type="number"
        name="page"
        value={props.page}
        min="1"
        max={props.pages}
        onChange={changeHandler}
      />
    </label>
  );
}
