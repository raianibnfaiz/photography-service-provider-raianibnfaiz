import { signOut } from 'firebase/auth';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    }
    return (

        <header>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand href="/">
                        <img src="https://cdn-icons-png.flaticon.com/512/4478/4478878.png" height="30px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/home">Home</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                            {user ?
                                <button className='btn btn-warning' onClick={handleLogout}>logout</button>
                                :
                                <Nav.Link eventKey={2} href="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;