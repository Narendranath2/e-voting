import React from 'react'
import './App.css'
import { Form } from 'react-bootstrap';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    login(email,password){
        // have to do an api call
        return true;
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </div>
        );
    }

}

export default Login;