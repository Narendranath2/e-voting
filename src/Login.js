import React from 'react'
import axios from 'axios';
import './App.css'
import img from './login-back.svg'
import { Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Vote from './Vote';
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loggedIn: false,
            currentuserVoterId: "",
            currentuserFirstName: ""
        }
    }


    async login() {
        console.log(this.state);
        const res = await axios.post('https://nameless-castle-69274.herokuapp.com/login', {
            username: this.state.username,
            password: this.state.password,
        });
        let response = JSON.parse(JSON.stringify(res));
        console.log(response);

        if (response['data'] !== "Invalid details") {
            var strs = response['data'].split(" ");
            this.setState({
                loggedIn: true,
                currentuserVoterId: strs[0],
                currentuserFirstName: strs[1]
            });
        }
    }

    render() {
        if (this.state.loggedIn === true) {
            return (
                <div>
                    <Vote voterId={this.state.currentuserVoterId}></Vote>
                </div>
            );
            
        } else {
            return (
                <div>
                    <img src={img} style={{ position: "fixed", marginLeft: "40%", width: "54vw", marginTop: "2%" }} alt="Group of people"></img>
                    <div>
                        <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{ marginLeft: "10vw", fontSize: "1.5vw", fontWeight: "bold", letterSpacing: 0.3, marginTop: "10vw" }}>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" style={{ width: "20vw", marginLeft: "10vw", fontSize: "1vw" }} onChange={(f) => {
                                    this.setState({
                                        username: f.target.value
                                    });
                                }} />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label style={{ marginLeft: "10vw", fontSize: "1.5vw", fontWeight: "bold", letterSpacing: 0.3 }}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" style={{ width: "20vw", marginLeft: "10vw", fontSize: "1vw" }} onChange={(f) => {
                                    this.setState({
                                        password: f.target.value
                                    });
                                }} />
                            </Form.Group>
                            <Button variant="dark" onSubmit={this.login} onClick={() => {
                                this.login()
                            }} style={{ width: "10vw", marginLeft: "10vw", fontWeight: "bold", fontSize: "1.3vw", backgroundColor: "black", color: "#FFC74D", marginTop: 20 }}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Login);