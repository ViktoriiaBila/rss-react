import React from 'react';

export function BtnSubmit(props: IBtnSubmitProps): JSX.Element {
  return (
    <div className={`form__btn-submit__container`}>
      {props.disabled ? (
        <input
          className={`form__btn-submit btn btn-primary`}
          type="submit"
          value="submit"
          onClick={props.onClick}
          disabled
        />
      ) : (
        <input
          className={`form__btn-submit btn btn-primary`}
          type="submit"
          value="submit"
          onClick={props.onClick}
        />
      )}
    </div>
  );
}
