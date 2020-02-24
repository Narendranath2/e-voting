import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Navi() {
    //
    return (
        <div>
            <Navbar style={{ backgroundColor: "#000000" }} variant="dark" expand="lg">
                <Link to={'/'}>
                    <Navbar.Brand style={{ fontSize: "3vw", fontWeight: "bold", letterSpacing: 1 }}>Z-Voting</Navbar.Brand>
                </Link>
                <Nav className="ml-auto">
                    <Nav.Item className="Login-btn">
                        <Link to='/login'>
                            <Button variant="danger" style={{ margin: 5 }}>Login</Button>
                        </Link>
                        <Link to='/signup'>
                            <Button variant="warning" style={{ margin: 5 }}>Sign up</Button>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navi;

