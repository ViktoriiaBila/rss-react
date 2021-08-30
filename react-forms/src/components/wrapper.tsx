import React, { useState } from 'react';
import { Header } from './header';
import { Form } from './form';

export function Wrapper(): JSX.Element {
  const [formValues, setFormValues] = useState<Array<object> | null>(null);

  return (
    <div className="wrapper">
      <Header />
      <Form setFormValues={setFormValues} />
    </div>
  );
}
