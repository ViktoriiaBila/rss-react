import React, { useState } from 'react';
import './form.scss';
import { countryNames, defaultCountryOption } from '../../shared/constants';
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
import { Header } from '../header';

export function Form({ setFormValues }: IFormProps): JSX.Element {
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    country: defaultCountryOption,
    messageText: '',
    agree: false,
    notify: true,
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

    setFormValue((state) => ({
      ...state,
      [name]: value,
    }));

    validate(name, value);
  };

  const NoErrors = () => {
    return !Object.values(errors).find((error) => error === true);
  };

  const reset = () => {
    setFormValue({
      firstName: '',
      lastName: '',
      email: '',
      birthDate: '',
      country: defaultCountryOption,
      messageText: '',
      agree: false,
      notify: true,
    });
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (NoErrors()) {
      setFormValues((state) =>
        state !== null ? [...state, formValue] : [formValue],
      );
      reset();
    }
  };

  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <Header />
      <DataInput
        title={EFormElementTitle.firstName}
        type={EFormElementType.text}
        name={EFormElementNames.firstName}
        value={formValue.firstName}
        onChange={formElementChangeHandler}
        error={errors.firstName}
        errorMessage={EFormElementErrorMessage.firstName}
        autoComplete={true}
      />
      <DataInput
        title={EFormElementTitle.lastName}
        type={EFormElementType.text}
        name={EFormElementNames.lastName}
        value={formValue.lastName}
        onChange={formElementChangeHandler}
        error={errors.lastName}
        errorMessage={EFormElementErrorMessage.lastName}
        autoComplete={true}
      />
      <DataInput
        title={EFormElementTitle.email}
        type={EFormElementType.text}
        name={EFormElementNames.email}
        value={formValue.email}
        onChange={formElementChangeHandler}
        error={errors.email}
        errorMessage={EFormElementErrorMessage.email}
        autoComplete={true}
      />
      <DataInput
        title={EFormElementTitle.birthDate}
        type={EFormElementType.date}
        name={EFormElementNames.birthDate}
        value={formValue.birthDate}
        onChange={formElementChangeHandler}
        error={errors.birthDate}
        errorMessage={EFormElementErrorMessage.birthDate}
        autoComplete={true}
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
        autoComplete={false}
      />
      <CheckboxInput
        title={EFormElementTitle.agree}
        type={EFormElementType.checkbox}
        name={EFormElementNames.agree}
        checked={formValue.agree}
        onChange={formElementChangeHandler}
        error={errors.agree}
        errorMessage={EFormElementErrorMessage.agree}
        switch={false}
      />
      <CheckboxInput
        title={EFormElementTitle.notify}
        type={EFormElementType.checkbox}
        name={EFormElementNames.notify}
        checked={formValue.notify}
        onChange={formElementChangeHandler}
        error={false}
        errorMessage={''}
        switch={true}
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
        disabled={!NoErrors()}
      />
    </form>
  );
}
