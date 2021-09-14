import React from 'react';

export function PerPageSettings(props: IPerPageSettingsProps): JSX.Element {
  return (
    <label className="searchSettingsForm__label" htmlFor="perPage">
      <span className="searchSettingsForm__label__title">
        Choose a number of photos to return per page
      </span>
      <input
        className={
          props.errorPerPage
            ? 'searchSettingsForm__input error'
            : 'searchSettingsForm__input'
        }
        type="number"
        name="perPage"
        value={props.perPage}
        min="5"
        max="500"
        step="5"
        onChange={props.onChange}
      />
      {props.errorPerPage ? (
        <span className="searchSettingsForm__error">invalid value</span>
      ) : null}
    </label>
  );
}
