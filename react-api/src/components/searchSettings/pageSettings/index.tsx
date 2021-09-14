import React from 'react';

export function PageSettings(props: IPageSettingsProps): JSX.Element {
  return (
    <label className="searchSettingsForm__label" htmlFor="page">
      <span className="searchSettingsForm__label__title">
        Choose page (max page is {props.pages})
      </span>
      <input
        className={
          props.errorPage
            ? 'searchSettingsForm__input error'
            : 'searchSettingsForm__input'
        }
        type="number"
        name="page"
        value={props.page}
        min="1"
        max={props.pages}
        onChange={props.onChange}
      />
      {props.errorPage ? (
        <span className="searchSettingsForm__error">invalid value</span>
      ) : null}
    </label>
  );
}
