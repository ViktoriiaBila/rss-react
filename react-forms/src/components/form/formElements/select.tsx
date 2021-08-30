import React from 'react';
import { defaultCountryOption } from '../../../shared/constants';

export function Select(props: ISelectProps): JSX.Element {
  const options = props.options.map((option) => <option>{option}</option>);

  return (
    <div className="form__element__container">
      <label className="form__element__label" htmlFor={props.name}>
        <p className="form__element__title">
          {props.title}
          {props.error && <span> * {props.errorMessage}</span>}
        </p>
        <div className="form__element__select__container">
          <select
            className="form__element__select"
            name={props.name}
            value={props.value}
            onChange={(event) => props.onChange(event)}
          >
            <option>{defaultCountryOption}</option>
            {options}
          </select>
        </div>
      </label>
    </div>
  );
}
