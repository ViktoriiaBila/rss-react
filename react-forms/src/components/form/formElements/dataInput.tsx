import React from 'react';

export function DataInput(props: IDataInputProps): JSX.Element {
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
          value={props.value}
          onChange={(event) => props.onChange(event)}
        />
      </label>
    </div>
  );
}
