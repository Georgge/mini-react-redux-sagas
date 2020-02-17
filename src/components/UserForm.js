import React, { useState } from 'react';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

function UserForm({
  onSubmit
}) {
  const initialState = { firstName: '', lastName: '' };
  const [state, setState] = useState(initialState);

  const handleSubmit = event => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(state);
      setState(initialState);
    }
  };

  const handleChange = ({ target }) => setState(s => ({ ...s, [target.name]: target.value }));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>FirstName</Label>
        <Input
          onChange={handleChange}
          value={state.firstName}
          name="firstName"
        />
      </FormGroup>
      <FormGroup>
        <Label>LastName</Label>
        <Input
          onChange={handleChange}
          value={state.lastName}
          name="lastName"
        />
      </FormGroup>
      <FormGroup>
        <Button block type="submit" color="primary">Create</Button>
      </FormGroup>
    </Form>
  );
}

export default UserForm;
