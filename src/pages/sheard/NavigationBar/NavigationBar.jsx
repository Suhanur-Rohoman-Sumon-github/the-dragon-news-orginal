import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provaider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"><Link to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#Career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user &&  <FaUserCircle style={{ fontSize: '40px' }} />}
                                {user ? <Button variant="dark">log out</Button> :
                                    <Link to={'/login'}>
                                        <Button variant="dark">login</Button>
                                    </Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;