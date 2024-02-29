import React from 'react';
import {
  Button, Container, Nav, Navbar,
} from 'react-bootstrap';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandler = async () => {
    try {
      if (user) {
        const res = await axios.get('/api/auth/logout');
        if (res.status === 200) {
          window.location.href = '/';
        }
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between">
      <Container>
        <Navbar.Brand>{user ? `Добро пожаловать, ${user.name}` : 'Добро пожаловать, гость'}</Navbar.Brand>
        <Navbar.Brand href="/" className="text-center">Домашняя страница</Navbar.Brand>
        <Nav className="me-auto">
          {user ? (
            <>
              <Nav.Link href="/addinitiative">Создать инициативу</Nav.Link>
              <Nav.Link href="/account">Личный кабинет</Nav.Link>
              <Nav.Link as={Button} onClick={logoutHandler}>Выйти</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/auth/login">Войти</Nav.Link>
              <Nav.Link href="/auth/signup">Зарегистрироваться</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
