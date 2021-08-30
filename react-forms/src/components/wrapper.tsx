import React, { useState } from 'react';
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

export function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header__filter">
        <h2 className="header__title">Send us your feedback</h2>
      </div>
    </header>
  );
}
