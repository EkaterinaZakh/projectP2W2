import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function EditPage({ oneInitiative }) {
  const editHandler = async (e, id) => {
    const updateInitiative = Object.fromEntries(new FormData(e.target));
    const response = await axios.patch(`/api/account/edit/${id}`, {
      name: updateInitiative.get('name'),
      description: updateInitiative.get('description'),
    });
    if (response.status === 200) {
      window.location.href = '/account';
    //   const newInitiative = await response.json();
    }
  };

  return (
    <Form onSubmit={editHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Инициатива</Form.Label>
        <Form.Control type="text" name="name" defaultValue={oneInitiative.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" defaultValue={oneInitiative.description} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Подтвердить изменения
      </Button>
    </Form>
  );
}
