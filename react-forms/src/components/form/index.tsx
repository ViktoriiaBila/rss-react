import React, { useState } from 'react';
import { countryNames } from '../../shared/constants';
import {
  EFormElementNames,
  EFormElementTitle,
  EFormElementType,
} from '../../shared/formElementsData';
import { DataInput } from './formElements/dataInput';
import { Select } from './formElements/select';

export function Form(): JSX.Element {
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

  const formElementChangeHandler = () => {};

  return (
    <form>
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
    </form>
  );
}
