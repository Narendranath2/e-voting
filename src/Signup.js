import React from 'react'
import './App.css'
import { Form, Button, Col } from 'react-bootstrap'
import Vote from './Vote'
function Signup() {
    return (
        <div>
            <Form style={{padding:20}}>
                <Form.Row style={{paddingBottom:20}}>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Form.Row>
                <Form.Row style={{paddingBottom:20}}>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>Email</Form.Label>
                        <Form.Control placeholder="Email" />
                    </Col>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>Mobile</Form.Label>
                        <Form.Control placeholder="Mobile" />
                    </Col>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>Country</Form.Label>
                        <Form.Control placeholder="Country" />
                    </Col>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>City</Form.Label>
                        <Form.Control placeholder="City" />
                    </Col>
                </Form.Row>
                <Form.Row style={{paddingBottom:20}}>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>Adhaar Id</Form.Label>
                        <Form.Control placeholder="Adhaar Id" />
                    </Col>
                    <Col>
                        <Form.Label style={{ fontWeight: "bold" }}>Voter Id</Form.Label>
                        <Form.Control placeholder="Voter Id" />
                    </Col>
                </Form.Row>
                <Form.Row style={{ textAlign: "center", marginLeft: "45%"}}>
                    <Button type="submit" variant="success" style={{width: 150, fontSize:20}}>Submit</Button>
                </Form.Row>
            </Form>
        </div>
    );
}

export default Signup;
