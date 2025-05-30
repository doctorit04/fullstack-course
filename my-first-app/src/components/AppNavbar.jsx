import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';

function AppNavbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ตรวจสอบ token จาก localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                 <NavDropdown title="Admin Action" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/alluser">All User</NavDropdown.Item>
                  <NavDropdown.Item href="/adduser">Add User</NavDropdown.Item>
                  <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/separated">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Button variant="outline-light" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
