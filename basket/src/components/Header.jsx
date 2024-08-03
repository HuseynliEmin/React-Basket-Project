import React,{ useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import Context  from '../context/Context'
const Header = () => {
    const { cartCount } = useContext(Context);
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Mini E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Products</Nav.Link>
                            <Nav.Link as={Link} to='/basket'>Basket</Nav.Link>
                            <Nav.Link as={Link} to='/form'>Form</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} style={{ position: 'relative' }}>
                                <span
                                        style={{
                                            position: 'absolute',
                                            top: '-1px',
                                            right: '-7px',
                                            backgroundColor: 'red',
                                            color: 'white',
                                            borderRadius: '50%',
                                            padding: '0.2em 0.6em',
                                            fontSize: '0.75em',
                                        }}
                                    >
                                       {cartCount}
                                    </span>
                            </Nav.Link>
                            <Nav.Link as={Link} to='/basket'> <FaCartShopping /></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header