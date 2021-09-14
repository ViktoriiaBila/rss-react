import React from 'react';
import { validatePageValue } from '../../../shared/function/validate';

export function PageSettings(props: IPageSettings): JSX.Element {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.setPage(value);
    props.setErrorPage(validatePageValue(value, props.pages));
  };
  return (
    <label className="searchSettingsForm__label" htmlFor="page">
      <span className="searchSettingsForm__label__title">Choose page</span>
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
        onChange={changeHandler}
      />
      {props.errorPage ? (
        <span className="searchSettingsForm__error">invalid value</span>
      ) : null}
    </label>
  );
}
