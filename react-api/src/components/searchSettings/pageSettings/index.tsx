import React from 'react';

export function PageSettings(props: IPageSettings): JSX.Element {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.setPage(value);
  };
  return (
    <label htmlFor="page">
      Choose page
      <input
        type="number"
        name="page"
        value={props.page}
        min="1"
        max={props.pages}
        onChange={changeHandler}
      />
    </label>
  );
}
