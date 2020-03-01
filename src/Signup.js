import React, { Component } from 'react';
import './App.css';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import Navi from './Navi';
import loader from './loader.webp'
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            voterId: "",
            firstName: "",
            lastName: "",
            phone: "",
            adharId: "",
            email: "",
            country: "",
            city: "",
            password: "",
            response: {},
            loading: false,
            showBanner: false
        }
    }

    async registerUser() {
        this.setState({
            loading: true,
        });
        console.log(this.state);
        const res = await axios.post('https://nameless-castle-69274.herokuapp.com/register', {
            voterId: this.state.voterId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            adharId: this.state.adharId,
            email: this.state.email,
            country: this.state.country,
            city: this.state.city,
            password: this.state.password
        });
        var response = JSON.parse(JSON.stringify(res));
        console.log(response);
        if (response["data"] === "Successfully registered") {
            this.setState({
                response,
                showBanner: true,
                alertType: "success"
            });
        } else if (response["data"] === "Already registered") {
            this.setState({
                response,
                showBanner: true,
                alertType: "warning"
            });
        } else {
            this.setState({
                response,
                showBanner: true,
                alertType: "danger"
            });
        }
        await setTimeout(() => {
            console.log("Banner display time"); this.setState({
                showBanner: false
            });
        }, 1500);
        this.setState({
            loading: false,
        });
        console.log(res);
    }

    render() {
        let loglo;
        if (this.state.loading === true) {
            loglo = <img src={loader} style={{ width: "10%", marginLeft: "5%" }} alt="loading"></img>;
        } else {
            loglo = <Button onClick={() => { this.registerUser() }} variant="warning" style={{ width: 150, fontSize: 20, fontWeight: "bold"}}>Submit</Button>
        }
        let mBanner = null;
        if (this.state.showBanner === true) {
            mBanner = <Alert variant={this.state.alertType} style={{ textAlign: "center" }}>
                {this.state.response["data"]}
            </Alert>;
        }
        return (
            <div>
                <Navi fromSignup="true"></Navi>
                <Form style={{ padding: 20 }}>
                    <Form.Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>First Name</Form.Label>
                            <Form.Control placeholder="First name" name="fName" onChange={(f) => {
                                this.setState({
                                    firstName: f.target.value
                                })
                            }
                            } />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" onChange={(f) => {
                                this.setState({
                                    lastName: f.target.value
                                })
                            }} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                            <Form.Control placeholder="Email" onChange={(f) => {
                                this.setState({
                                    email: f.target.value
                                })
                            }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Mobile</Form.Label>
                            <Form.Control placeholder="Mobile" onChange={(f) => {
                                this.setState({
                                    phone: f.target.value
                                })
                            }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                            <Form.Control placeholder="Password" type="password" onChange={(f) => {
                                this.setState({
                                    password: f.target.value
                                })
                            }} />
                        </Col>

                    </Form.Row>
                    <Form.Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Country</Form.Label>
                            <Form.Control placeholder="Country" onChange={(f) => {
                                this.setState({
                                    country: f.target.value
                                })
                            }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>City</Form.Label>
                            <Form.Control placeholder="City" onChange={(f) => {
                                this.setState({
                                    city: f.target.value
                                })
                            }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Adhaar Id</Form.Label>
                            <Form.Control placeholder="Adhaar Id" onChange={(f) => {
                                this.setState({
                                    adharId: f.target.value
                                })
                            }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Voter Id</Form.Label>
                            <Form.Control placeholder="Voter Id" onChange={(f) => {
                                this.setState({
                                    voterId: f.target.value
                                })
                            }} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ textAlign: "center", marginLeft: "45%" }}>
                        {loglo}
                    </Form.Row>
                </Form>
                {mBanner}
            </div>
        );
    }
}

export default Signup;
