import React, { useState } from 'react';
import { Form } from './form';
import { CardsField } from './cardsField';

export function Wrapper(): JSX.Element {
  const [formValues, setFormValues] = useState<Array<IFormValue> | null>(null);

  return (
    <div className="wrapper">
      <Form setFormValues={setFormValues} />
      {formValues ? <CardsField formValues={formValues} /> : ''}
    </div>
  );
}
