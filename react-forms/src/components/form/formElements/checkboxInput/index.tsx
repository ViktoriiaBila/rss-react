import React from 'react';

export function CheckboxInput(props: ICheckboxInputProps): JSX.Element {
  return (
    <div
      className={`form__element-check__container ${
        props.switch ? 'form-check form-switch' : 'form-check'
      }`}
    >
      <label
        className="form__element-check__label form-check-label"
        htmlFor={props.name}
      >
        <input
          className={`form__element-check__input-${props.name} form-check-input`}
          type={props.type}
          name={props.name}
          checked={props.checked}
          onChange={(event) => props.onChange(event)}
        />
        <p className={`form__element-check__title ${props.name}`}>
          {props.title}
        </p>
      </label>
      {props.error && (
        <span className="form__element-check__mistake">
          {' '}
          * {props.errorMessage}
        </span>
      )}
    </div>
  );
}
