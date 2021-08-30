import React from 'react';

export function CheckboxInput(props: ICheckboxInputProps): JSX.Element {
  return (
    <div className="form__element__container">
      <label className="form__element__label" htmlFor={props.name}>
        <input
          className={`form__element__input-${props.name}`}
          type={props.type}
          name={props.name}
          checked={props.checked}
          onChange={(event) => props.onChange(event)}
        />
        <p className={`form__element__title ${props.name}`}>
          {props.title}
          {props.error && <span> * {props.errorMessage}</span>}
        </p>
      </label>
    </div>
  );
}
