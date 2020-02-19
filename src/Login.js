import React from 'react'
import './App.css'
import img from './login-back.svg'
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    
    login(email, password) {
        // have to do an api call
        this.props.history.push('/vote');
    }

    render() {
        return (
            <div>
                <img src={img} style={{ position: "fixed", marginLeft: "30%", width: "70vw" }} alt="Group of people"></img>
                <div>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label style={{ marginLeft: "10vw", fontSize: "1.5vw", fontWeight: "bold", letterSpacing: 0.3, marginTop: "10vw" }}>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" style={{ width: "20vw", marginLeft: "10vw", fontSize: "1vw" }} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label style={{ marginLeft: "10vw", fontSize: "1.5vw", fontWeight: "bold", letterSpacing: 0.3 }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" style={{ width: "20vw", marginLeft: "10vw", fontSize: "1vw"}} />
                        </Form.Group>
                        <Button variant="dark" onSubmit={this.login} type="submit" style={{ width: "10vw", marginLeft: "10vw", fontWeight: "bold", fontSize: "1.3vw", backgroundColor: "black", color: "#FFC74D", marginTop: 20 }}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);