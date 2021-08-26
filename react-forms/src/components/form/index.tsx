import React, { useState } from 'react';
import { countryNames } from '../../shared/constants';
import {
  EFormElementErrorMessage,
  EFormElementNames,
  EFormElementTitle,
  EFormElementType,
} from '../../shared/formElementsData';
import { validateFunction } from '../../shared/validation';
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
  });

  const validateFirstName = (value: string) => {
    setErrors((state) => ({
      ...state,
      firstName: validateFunction.text(value),
    }));
  };
  const validateLastName = (value: string) => {
    setErrors((state) => ({
      ...state,
      lastName: validateFunction.text(value),
    }));
  };
  const validateEmail = (value: string) => {
    setErrors((state) => ({
      ...state,
      email: validateFunction.email(value),
    }));
  };
  const validateBirthDate = (value: string) => {
    setErrors((state) => ({
      ...state,
      birthDate: validateFunction.date(value),
    }));
  };
  const validateCountry = (value: string) => {
    setErrors((state) => ({
      ...state,
      country: validateFunction.country(value),
    }));
  };
  const validateMessageText = (value: string) => {
    setErrors((state) => ({
      ...state,
      messageText: validateFunction.messageText(value),
    }));
  };
  const validateAgree = (value: boolean) => {
    setErrors((state) => ({
      ...state,
      agree: !value,
    }));
  };

  const validate = (name: string, value: string | boolean) => {
    if (name === EFormElementNames.firstName)
      validateFirstName(value as string);
    if (name === EFormElementNames.lastName) validateLastName(value as string);
    if (name === EFormElementNames.email) validateEmail(value as string);
    if (name === EFormElementNames.birthDate)
      validateBirthDate(value as string);
    if (name === EFormElementNames.country) validateCountry(value as string);
    if (name === EFormElementNames.messageText)
      validateMessageText(value as string);
    if (name === EFormElementNames.agree) validateAgree(value as boolean);
  };

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

    validate(name, value);
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
        error={errors.firstName}
        errorMessage={EFormElementErrorMessage.firstName}
      />
      <DataInput
        title={EFormElementTitle.lastName}
        type={EFormElementType.text}
        name={EFormElementNames.lastName}
        value={formValue.lastName}
        onChange={formElementChangeHandler}
        error={errors.lastName}
        errorMessage={EFormElementErrorMessage.lastName}
      />
      <DataInput
        title={EFormElementTitle.email}
        type={EFormElementType.text}
        name={EFormElementNames.email}
        value={formValue.email}
        onChange={formElementChangeHandler}
        error={errors.email}
        errorMessage={EFormElementErrorMessage.email}
      />
      <DataInput
        title={EFormElementTitle.birthDate}
        type={EFormElementType.date}
        name={EFormElementNames.birthDate}
        value={formValue.birthDate}
        onChange={formElementChangeHandler}
        error={errors.birthDate}
        errorMessage={EFormElementErrorMessage.birthDate}
      />
      <Select
        title={EFormElementTitle.country}
        name={EFormElementNames.country}
        value={formValue.country}
        onChange={formElementChangeHandler}
        options={countryNames}
        error={errors.country}
        errorMessage={EFormElementErrorMessage.country}
      />
      <DataInput
        title={EFormElementTitle.messageText}
        type={EFormElementType.text}
        name={EFormElementNames.messageText}
        value={formValue.messageText}
        onChange={formElementChangeHandler}
        error={errors.messageText}
        errorMessage={EFormElementErrorMessage.messageText}
      />
      <CheckboxInput
        title={EFormElementTitle.agree}
        type={EFormElementType.checkbox}
        name={EFormElementNames.agree}
        checked={formValue.agree}
        onChange={formElementChangeHandler}
        error={errors.agree}
        errorMessage={EFormElementErrorMessage.agree}
      />
      <BtnSubmit
        onClick={() => {
          validateFirstName(formValue.firstName);
          validateLastName(formValue.lastName);
          validateEmail(formValue.email);
          validateBirthDate(formValue.birthDate);
          validateCountry(formValue.country);
          validateMessageText(formValue.messageText);
          validateAgree(formValue.agree);
        }}
      />
    </form>
  );
}
