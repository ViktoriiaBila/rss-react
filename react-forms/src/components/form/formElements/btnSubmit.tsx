import React from 'react';

export function BtnSubmit(props: IBtnSubmitProps): JSX.Element {
  return (
    <div>
      <input type="submit" value="submit" onClick={props.onClick} />
    </div>
  );
}
