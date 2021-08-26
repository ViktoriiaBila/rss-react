import React, { useState } from 'react';
import { countryNames } from '../../shared/constants';
import {
  EFormElementNames,
  EFormElementTitle,
  EFormElementType,
} from '../../shared/formElementsData';
import { BtnSubmit } from './formElements/btnSubmit';
import { CheckboxInput } from './formElements/checkboxInput';
import { DataInput } from './formElements/dataInput';
import { Select } from './formElements/select';

export function Form({ setFormValues }: IFormProps): JSX.Element {
  const [formValue, setformValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    country: '',
    messageText: '',
    agree: false,
    notify: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    birthDate: false,
    country: false,
    messageText: false,
    agree: false,
    notify: false,
  });

  const formElementChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { type, name } = event.target;
    const value =
      type !== EFormElementType.checkbox
        ? event.target.value
        : (event as React.ChangeEvent<HTMLInputElement>).target.checked;

    setformValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!Object.values(errors).find((error) => error === true)) {
      setFormValues((state) =>
        state !== null ? [...state, formValue] : [formValue],
      );
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <DataInput
        title={EFormElementTitle.firstName}
        type={EFormElementType.text}
        name={EFormElementNames.firstName}
        value={formValue.firstName}
        onChange={formElementChangeHandler}
      />
      <DataInput
        title={EFormElementTitle.lastName}
        type={EFormElementType.text}
        name={EFormElementNames.lastName}
        value={formValue.lastName}
        onChange={formElementChangeHandler}
      />
      <DataInput
        title={EFormElementTitle.email}
        type={EFormElementType.text}
        name={EFormElementNames.email}
        value={formValue.email}
        onChange={formElementChangeHandler}
      />
      <DataInput
        title={EFormElementTitle.birthDate}
        type={EFormElementType.date}
        name={EFormElementNames.birthDate}
        value={formValue.birthDate}
        onChange={formElementChangeHandler}
      />
      <Select
        title={EFormElementTitle.country}
        name={EFormElementNames.country}
        value={formValue.country}
        onChange={formElementChangeHandler}
        options={countryNames}
      />
      <DataInput
        title={EFormElementTitle.messageText}
        type={EFormElementType.text}
        name={EFormElementNames.messageText}
        value={formValue.messageText}
        onChange={formElementChangeHandler}
      />
      <CheckboxInput
        title={EFormElementTitle.agree}
        type={EFormElementType.checkbox}
        name={EFormElementNames.agree}
        checked={formValue.agree}
        onChange={formElementChangeHandler}
      />
      <BtnSubmit />
    </form>
  );
}
