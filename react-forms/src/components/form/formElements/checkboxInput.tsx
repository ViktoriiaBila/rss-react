import React from 'react';

export function CheckboxInput(props: ICheckboxInputProps): JSX.Element {
  return (
    <div>
      <label htmlFor={props.name}>
        <p>
          {props.title}
          {props.error && <span> * {props.errorMessage}</span>}
        </p>
        <input
          type={props.type}
          name={props.name}
          checked={props.checked}
          onChange={(event) => props.onChange(event)}
        />
      </label>
    </div>
  );
}
