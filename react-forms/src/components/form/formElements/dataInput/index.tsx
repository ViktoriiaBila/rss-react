import React from 'react';

export function DataInput(props: IDataInputProps): JSX.Element {
  return (
    <div className="form__element__container">
      <label className="form__element__label" htmlFor={props.name}>
        <p className="form__element__title">{props.title}</p>
        <div className="form__element__input__container">
          <input
            className={`form__element__input ${props.name}`}
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={(event) => props.onChange(event)}
            autoComplete={props.autoComplete ? 'on' : 'off'}
          />
        </div>
      </label>
      {props.error && (
        <span className="form__element__mistake"> * {props.errorMessage}</span>
      )}
    </div>
  );
}
