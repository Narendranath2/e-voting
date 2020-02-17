import React from 'react'
import './App.css'
import party1 from './tdp.jpg'
import party2 from './ysrcp.png'
import party3 from './bjp.jpg'
import party4 from './amadmi.png'
import party5 from './trs.png'
import party6 from './janasena.png'
import party7 from './loksatta.jpg'
import party8 from './prajasanthi.png'
import { Form, Button, Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
class Vote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            variants: ["dark", "dark", "dark", "dark", "dark", "dark", "dark", "dark"],
            disabled: [false, false, false, false, false, false, false, false]
        }
    }

    postVote() {
        // have to do an api call
        return true;
    }

    render() {
        return (
            <div align="center">
                <Row style={{marginTop:20}}>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party1} />
                            <Card.Body>
                                <Card.Title>TDP</Card.Title>
                                <Card.Text>
                                    Telugu desam party
                                </Card.Text>
                                <Button variant={this.state.variants[0]} onClick={() => {
                                    if (this.state.variants[0] == "success") {
                                        this.state.variants[0] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[0] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 0)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[0]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party2} />
                            <Card.Body>
                                <Card.Title>YSRCP</Card.Title>
                                <Card.Text>
                                    Yuvajana Sramika Rythu Congress
                                </Card.Text>
                                <Button variant={this.state.variants[1]} onClick={() => {
                                    if (this.state.variants[1] == "success") {
                                        this.state.variants[1] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[1] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 1)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[1]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party3} />
                            <Card.Body>
                                <Card.Title>BJP</Card.Title>
                                <Card.Text>
                                    Bharatiya janatha party
                                </Card.Text>
                                <Button variant={this.state.variants[2]} onClick={() => {
                                    if (this.state.variants[2] == "success") {
                                        this.state.variants[2] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[2] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 2)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[2]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party4} />
                            <Card.Body>
                                <Card.Title>AAP</Card.Title>
                                <Card.Text>
                                    Aam admi party
                                </Card.Text>
                                <Button variant={this.state.variants[3]} onClick={() => {
                                    if (this.state.variants[3] == "success") {
                                        this.state.variants[3] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[3] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 3)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[3]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{marginTop:20}}>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party5} />
                            <Card.Body>
                                <Card.Title>TRS</Card.Title>
                                <Card.Text>
                                    Telangana rashtra party
                                </Card.Text>
                                <Button variant={this.state.variants[4]} onClick={() => {
                                    if (this.state.variants[4] == "success") {
                                        this.state.variants[4] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[4] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 4)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[4]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party6} />
                            <Card.Body>
                                <Card.Title>JSP</Card.Title>
                                <Card.Text>
                                    Janasena party
                                </Card.Text>
                                <Button variant={this.state.variants[5]} onClick={() => {
                                    if (this.state.variants[5] == "success") {
                                        this.state.variants[5] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[5] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 5)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[5]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party7} />
                            <Card.Body>
                                <Card.Title>LSP</Card.Title>
                                <Card.Text>
                                    Lok satta party
                                </Card.Text>
                                <Button variant={this.state.variants[6]} onClick={() => {
                                    if (this.state.variants[6] == "success") {
                                        this.state.variants[6] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[6] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 6)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[6]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party8} />
                            <Card.Body>
                                <Card.Title>PSP</Card.Title>
                                <Card.Text>
                                    Praja santhi party
                                </Card.Text>
                                <Button variant={this.state.variants[7]} onClick={() => {
                                    if (this.state.variants[7] == "success") {
                                        this.state.variants[7] = "dark";
                                        for (var i = 0; i < 8; i++) {
                                            this.state.disabled[i] = false;
                                        }
                                    } else {
                                        this.state.variants[7] = "success";
                                        for (var i = 0; i < 8; i++) {
                                            if (i != 7)
                                                this.state.disabled[i] = true;
                                        }
                                    }
                                    this.setState(this.state.variants);
                                    this.setState(this.state.disabled);
                                }} disabled={this.state.disabled[7]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div align="center">
                    <Button variant="success" type="submit" style={{ fontSize: 20, marginTop: 30, marginBottom: 20 }}>Finalize Vote</Button>
                </div>
            </div>
        );
    }

}

export default Vote;