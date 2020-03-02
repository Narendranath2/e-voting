import React from 'react'
import axios from 'axios';
import './App.css'
import img from './login-back.svg'
import { Form, Button, Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import Vote from './Vote';
import Navi from './Navi';
import loader from './loader.webp'
import {Link} from 'react-router-dom'
class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loggedIn: false,
            currentuserVoterId: "",
            currentuserFirstName: "",
            isLoading: false,
            resData: ""
        }
    }

    async login() {
        console.log(this.state);
        this.setState({
            isLoading: true
        });
        const res = await axios.post('https://nameless-castle-69274.herokuapp.com/login', {
            username: this.state.username,
            password: this.state.password,
        });
        let response = JSON.parse(JSON.stringify(res));
        console.log(response);
        this.setState({
            resData: response['data']
        });
        if (response['data'] !== "Invalid details") {
            localStorage.setItem("loginStatus",true);
            var strs = response['data'].split(" ");
            this.setState({
                loggedIn: true,
                currentuserVoterId: strs[0],
                currentuserFirstName: strs[1],
            });
        }
        this.setState({
            isLoading: false
        });
    }

    render() {
        let resBanner;
        resBanner = <p style={{ marginLeft: "10%", marginTop: "1%", color: "red", fontSize: 20 }}>{this.state.resData}</p>
        let loglo;
        if (this.state.isLoading === true) {
            loglo = <img src={loader} style={{ width: "10%", marginLeft: "10%" }} alt="loading"></img>;
        } else {
            loglo = <Button variant="dark" onClick={() => {
                this.login()
            }} style={{ width: "10vw", marginLeft: "10vw", fontWeight: "bold", fontSize: "1.3vw", backgroundColor: "black", color: "#FFC74D", marginTop: 20 }}>
                Login
            </Button>
        }
        if (localStorage.getItem('loginStatus') === "true") {
            return (
                <div>
                    <Navbar style={{ backgroundColor: "#000000" }} variant="dark" expand="lg">
                        <Link to={'/'}>
                            <Navbar.Brand style={{ fontSize: "3vw", fontWeight: "bold", letterSpacing: 1 }}>Z-Voting</Navbar.Brand>
                        </Link>
                        <Nav className="ml-auto">
                            <Nav.Item className="Login-btn">
                                    <Button variant="warning" style={{ margin: 5 }} onClick={()=>{
                                        localStorage.setItem('loginStatus',false);
                                        this.setState({
                                            loggedIn: false,
                                            resData: ""
                                        });
                                    }}>Logout</Button>
                            </Nav.Item>
                        </Nav>
                    </Navbar>
                    <Vote voterId={this.state.currentuserVoterId}></Vote>
                </div>
            );

        } else {
            return (
                <div>
                    <Navi fromLogin="true"></Navi>
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
                            {loglo}
                            {resBanner}
                        </Form>
                    </div>
                </div>
            );
        }
    }
}

export default withRouter(Login);