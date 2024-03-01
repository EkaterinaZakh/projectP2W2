import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import InitiativeCard from '../../ui/InitiativeCard';

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
  // const editHandler = async (e, id) => {
  //   const updateInitiative = Object.fromEntries(new FormData(e.target));
  //   const response = await axios(`/account/edit/${id}`, updateInitiative);
  //   if (response.status === 200) {
  //     const newInitiative = await response.json();
  //     // eslint-disable-next-line max-len
  //     setAllInitiatives((prev) => prev.map((initiative) => (initiative.id === id ? newInitiative : initiative)));
  //   }
  // };
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
              <InitiativeCard
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
