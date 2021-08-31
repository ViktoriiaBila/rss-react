import React, { useState } from 'react';
import { Header } from './header';
import { Form } from './form';
import { CardsField } from './cardsField';

export function Wrapper(): JSX.Element {
  const [formValues, setFormValues] = useState<Array<IFormValue> | null>(null);

  return (
    <div className="wrapper">
      <Header />
      <Form setFormValues={setFormValues} />
      <CardsField formValues={formValues} />
    </div>
  );
}
