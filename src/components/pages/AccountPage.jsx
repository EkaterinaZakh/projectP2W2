import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import InitiativeCardAccount from '../../ui/InitiativeCardAccount';

export default function AccountPage({ user, userInitiatives }) {
  const [allInitiatives, setAllInitiatives] = useState(userInitiatives);
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`/api/account/${id}`);
      setAllInitiatives((prev) => prev.filter((el) => el.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row className="justify-content-center align-items-center">
      <Col xs={4}>
        <div>
          <p>
            Name:
            {user?.username}
          </p>
          <p>
            Email:
            {user?.email}
          </p>
        </div>
      </Col>
      <Col xs={8}>
        <Row>
          <Col xs={12}>
            {allInitiatives.map((initiative) => (
              <InitiativeCardAccount
                key={initiative.userId}
                initiative={initiative}
                deleteHandler={deleteHandler}
                // editHandler={editHandler}
              />
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
