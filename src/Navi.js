import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class Navi extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if (this.props.fromLogin === "true") {
            return (
                <div>
                    <Navbar style={{ backgroundColor: "#000000" }} variant="dark" expand="lg">
                        <Link to={'/'}>
                            <Navbar.Brand style={{ fontSize: "3vw", fontWeight: "bold", letterSpacing: 1 }}>Z-Voting</Navbar.Brand>
                        </Link>
                        <Nav className="ml-auto">
                            <Nav.Item className="Login-btn">
                                <Link to='/signup'>
                                    <Button variant="warning" style={{ margin: 5 }}>Create new account</Button>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </div>
            );
        } else if (this.props.fromSignup === "true") {
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
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </div>
            );
        } else {
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
                                    <Button variant="warning" style={{ margin: 5 }}>Create new account</Button>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                </div>
            );
        }
    }
}

export default Navi;

