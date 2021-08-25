import React from 'react';

export function Select(props: ISelectProps): JSX.Element {
  const options = props.options.map((option) => <option>{option}</option>);

  return (
    <div>
      <label htmlFor={props.name}>
        <p>{props.title}</p>
        <select
          name={props.name}
          value={props.value}
          onChange={(event) => props.onChange(event)}
        >
          {options}
        </select>
      </label>
    </div>
  );
}
