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
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100 w-40">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">

            <Row className="justify-content-center align-items-center">
              <Col xs={4}>
                <div>
                  <p>
                    Имя:
                    {user?.username}
                  </p>
                  <p>
                    Почта:
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
          </div>
        </div>
      </div>

    </section>
  );
}
