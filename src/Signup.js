import React, { Component } from 'react';
import './App.css';
import { Form, Button, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAlert: false,
            voterId: "",
            firstName: "",
            lastName: "",
            phone: "",
            adharId: "",
            email: "",
            country: "",
            city: "",
            password: "",
            response:{},
            loading:false
        }
    }

    async registerUser(event) {
        this.setState({
            loading: true
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
        this.setState({
            response
        });
        console.log(res);
    }

    render() {
        let mAlert;
        if (this.state.showAlert === true) {
            mAlert = <Alert variant={this.state.alertType} style={{ textAlign: "center" }}>
                This is a alert—check it out!
                    </Alert>;
        }
        return (
            <div>
                <Form style={{ padding: 20 }}>
                    <Form.Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>First Name</Form.Label>
                            <Form.Control placeholder="First name" name="fName" onChange={(f) => {
                                this.setState({
                                    firstName:f.target.value
                                })
                            }
                            } />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Last Name</Form.Label>
                            <Form.Control placeholder="Last name" onChange={(f) => { this.setState({
                                    lastName:f.target.value
                                }) }} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                            <Form.Control placeholder="Email" onChange={(f) => { this.setState({
                                    email:f.target.value
                                }) }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Mobile</Form.Label>
                            <Form.Control placeholder="Mobile" onChange={(f) => { this.setState({
                                    phone:f.target.value
                                }) }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                            <Form.Control placeholder="Password" type="password" onChange={(f) => { this.setState({
                                    password:f.target.value
                                }) }} />
                        </Col>

                    </Form.Row>
                    <Form.Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Country</Form.Label>
                            <Form.Control placeholder="Country" onChange={(f) => { this.setState({
                                    country:f.target.value
                                }) }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>City</Form.Label>
                            <Form.Control placeholder="City" onChange={(f) => { this.setState({
                                    city:f.target.value
                                }) }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Adhaar Id</Form.Label>
                            <Form.Control placeholder="Adhaar Id" onChange={(f) => { this.setState({
                                    adharId:f.target.value
                                }) }} />
                        </Col>
                        <Col>
                            <Form.Label style={{ fontWeight: "bold" }}>Voter Id</Form.Label>
                            <Form.Control placeholder="Voter Id" onChange={(f) => { this.setState({
                                    voterId:f.target.value
                                }) }} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{ textAlign: "center", marginLeft: "45%" }}>
                        <Button onClick={() => { this.registerUser() }} variant="success" style={{ width: 150, fontSize: 20 }}>Submit</Button>
                    </Form.Row>
                </Form>
                {mAlert}
            </div>
        );
    }
}

export default Signup;
