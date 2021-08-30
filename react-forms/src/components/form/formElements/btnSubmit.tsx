import React from 'react';

export function BtnSubmit(props: IBtnSubmitProps): JSX.Element {
  return (
    <div className={`form__btn-submit__container`}>
      <input
        className={`form__btn-submit`}
        type="submit"
        value="submit"
        onClick={props.onClick}
      />
    </div>
  );
}
