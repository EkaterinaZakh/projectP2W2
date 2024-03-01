import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function InitiativeCardAccount({ initiative, deleteHandler }) {
  return (



    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{initiative.name}</Card.Title>
        <Card.Text>{initiative.description}</Card.Text>
        <a href={`/account/edit/${initiative.id}`}>
          <Button className="btn btn-primary gov-btn mb-3">
            Редактировать
          </Button>
        </a>
        <div></div>
        <Button variant="danger" onClick={() => deleteHandler(initiative.id)}>
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}
