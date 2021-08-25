import React, { useState } from 'react';
import { Form } from './form';

export function Wrapper(): JSX.Element {
  const [formValues, setFormValues] = useState();

  return (
    <div>
      <Form />
    </div>
  );
}
