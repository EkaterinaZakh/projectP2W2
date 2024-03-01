import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function EditPage({ oneInitiative }) {
  const editHandler = async (e, id) => {
    e.preventDefault();
    const updateInitiative = Object.fromEntries(new FormData(e.target));
    console.log(updateInitiative);
    console.log(id);
    const response = await axios.patch(`/api/account/edit/${id}`, updateInitiative);
    if (response.status === 200) {
      window.location.href = '/account';
      //   const newInitiative = await response.json();
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <Form onSubmit={(e) => editHandler(e, oneInitiative.id)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Название</Form.Label>
            <Form.Control type="text" name="name" defaultValue={oneInitiative.name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Описание</Form.Label>
            <Form.Control type="text" name="description" defaultValue={oneInitiative.description} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Подтвердить изменения
          </Button>
        </Form>
      </div>
    </section>
  );
}
