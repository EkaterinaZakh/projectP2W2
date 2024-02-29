import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
// import ProfilePicEdit from '../ui/ProfilePicEdit';
import Loader from '../HOC/Loader';
import InitiativeCard from '../../ui/InitiativeCard';

export default function AccountPage({ allInitiatives }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    axios('/api/auth', { signal })
      .then((res) => setUser(res.data))
      .catch(console.log);

    return () => controller.abort();
  }, []);
  console.log(user);
  return (
    <Row className="justify-content-center align-items-center">
      <Loader loading={!user}>
        <Col xs={4}>
          {/* <ProfilePicEdit user={user} /> */}
        </Col>
        <Col xs={8}>
          <Row>
            <Col xs={12}>
              <p>
                Name:
                {user?.username}
              </p>
            </Col>
            <Col xs={12}>
              <p>
                Email:
                {user?.email}
              </p>
            </Col>
            <Col xs={12}>
              <p>
                Total tweets:
                {user?.totalTweets}
              </p>
            </Col>
            <Col xs={12}>
              {allInitiatives.map((initiative) => (
                <InitiativeCard key={initiative.id} initiative={initiative} />
              ))}
            </Col>
          </Row>
        </Col>
      </Loader>
    </Row>
  );
}
