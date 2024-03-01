import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function InitiativeCard({ initiative, deleteHandler }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{initiative.name}</Card.Title>
        <Card.Text>{initiative.description}</Card.Text>
        <Button variant="danger" onClick={() => deleteHandler(initiative.id)}>
          Удалить
        </Button>
        <a href={`/account/edit/${initiative.id}`}>
          <Button variant="danger">
            Редактировать
          </Button>
        </a>
      </Card.Body>
    </Card>
  );
}
