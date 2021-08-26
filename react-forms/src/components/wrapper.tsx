import React, { useState } from 'react';
import { Form } from './form';

export function Wrapper(): JSX.Element {
  const [formValues, setFormValues] = useState<Array<object> | null>(null);

  return (
    <div>
      <Form setFormValues={setFormValues} />
    </div>
  );
}
