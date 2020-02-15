import React from 'react'
import './App.css'
import img from './bck.png'
import { Form, Button, Navbar, Nav } from 'react-bootstrap';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    login(email, password) {
        // have to do an api call
        return true;
    }

    render() {
        return (
            <div>
                <img src={img} style={{ width: "100%"}}></img>
                <div>
                    <Form style={{ top: "40%",bottom: "50%", position: "absolute" }}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label style={{ width: 300, marginLeft: "40%", fontSize: 20, fontWeight: "bold", letterSpacing: 0.3 }}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{ width: 350, marginLeft: "40%" }} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label style={{ width: 300, marginLeft: "40%", fontSize: 20, fontWeight: "bold", letterSpacing: 0.3 }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{ width: 350, marginLeft: "40%" }} />
                        </Form.Group>
                        <Button variant="dark" type="submit" style={{ width: 350, marginLeft: "40%", fontWeight: "bold", fontSize: 20, backgroundColor: "black", color: "#FFC74D", marginTop: 20 }}>
                            Login
                        </Button>
                    </Form>
                </div>
                <Navbar style={{ backgroundColor: "#000000" }} variant="dark" expand="lg">
                <Navbar.Brand style={{ fontSize: 20 }}>Copyright © 2020 Rooster Games</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Item style={{ color: "white", marginTop: 10, marginRight: 10 }}>Email: narendranathgoparaju@gmail.com</Nav.Item>
                    <Nav.Item className="Login-btn">
                        <Button variant="warning" style={{ margin: 2 }} onClick={() => window.open("https://github.com/Narendranath2/e-voting", "_blank")}>Support</Button>
                    </Nav.Item>

                </Nav>
            </Navbar>
            </div>
        );
    }

}

export default Login;