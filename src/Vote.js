import React from 'react';
import axios from 'axios';
import './App.css';
import party1 from './tdp.jpg';
import party2 from './ysrcp.png';
import party3 from './bjp.jpg';
import party4 from './amadmi.png';
import party5 from './trs.png';
import party6 from './janasena.png';
import party7 from './loksatta.jpg';
import party8 from './prajasanthi.png';
import { Button, Row, Col, Card, Alert } from 'react-bootstrap';
class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            variants: ["dark", "dark", "dark", "dark", "dark", "dark", "dark", "dark"],
            disabled: [false, false, false, false, false, false, false, false],
            loading: false,
            response: {},
            modalShow: false,
            setModalShow: false
        }
    }
    async postVote() {
        this.setState({
            loading: true
        })
        //candidate id to be posted
        var candId;
        for (var i = 0; i < this.state.disabled.length; i++) {
            if (this.state.disabled[i] === false) {
                candId = i + 1;
                break;
            }
        }
        const res = await axios.post('http://nameless-castle-69274.herokuapp.com/addVote', {
            voterName: "React.JS ES6",
            voterId: "996",
            candidateId: candId
        });
        let response = JSON.parse(JSON.stringify(res));
        this.setState({setModalShow:true});
        console.log(response["status"]);
        if (response["status"] !== null) {
            this.setState({
                loading: false,
                response
            });
        }

    }

    render() {
        let mAlert = null;
        if (this.state.response["data"] === "Successfully voted") {
            mAlert = <Alert variant="success">
                Successfully voted
          </Alert>
        } else if (this.state.response["data"] === "Already Voted") {
            mAlert = <Alert variant="warning">
                Already voted
          </Alert>
        }
        return (
            <div align="center">
                <Row style={{ marginTop: 10 }}>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party1} />
                            <Card.Body>
                                <Card.Title>TDP</Card.Title>
                                <Card.Text>
                                    Telugu desam party
                                </Card.Text>
                                <Button variant={this.state.variants[0]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[0] === "success") {
                                        variantsCopy[0] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[0] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 0)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[0]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party2} />
                            <Card.Body>
                                <Card.Title>YSRCP</Card.Title>
                                <Card.Text>
                                    Yuvajana Sramika Rythu Congress
                                </Card.Text>
                                <Button variant={this.state.variants[1]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[1] === "success") {
                                        variantsCopy[1] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[1] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 1)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[1]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party3} />
                            <Card.Body>
                                <Card.Title>BJP</Card.Title>
                                <Card.Text>
                                    Bharatiya janatha party
                                </Card.Text>
                                <Button variant={this.state.variants[2]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[2] === "success") {
                                        variantsCopy[2] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[2] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 2)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[2]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party4} />
                            <Card.Body>
                                <Card.Title>AAP</Card.Title>
                                <Card.Text>
                                    Aam admi party
                                </Card.Text>
                                <Button variant={this.state.variants[3]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[3] === "success") {
                                        variantsCopy[3] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[3] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 3)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[3]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{}}>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party5} />
                            <Card.Body>
                                <Card.Title>TRS</Card.Title>
                                <Card.Text>
                                    Telangana rashtra party
                                </Card.Text>
                                <Button variant={this.state.variants[4]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[4] === "success") {
                                        variantsCopy[4] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[4] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 4)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[4]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party6} />
                            <Card.Body>
                                <Card.Title>JSP</Card.Title>
                                <Card.Text>
                                    Janasena party
                                </Card.Text>
                                <Button variant={this.state.variants[5]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[5] === "success") {
                                        variantsCopy[5] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[5] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 5)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[5]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party7} />
                            <Card.Body>
                                <Card.Title>LSP</Card.Title>
                                <Card.Text>
                                    Lok satta party
                                </Card.Text>
                                <Button variant={this.state.variants[6]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[6] === "success") {
                                        variantsCopy[6] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[6] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 6)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[6]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3} style={{ padding: 10 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={party8} />
                            <Card.Body>
                                <Card.Title>PSP</Card.Title>
                                <Card.Text>
                                    Praja santhi party
                                </Card.Text>
                                <Button variant={this.state.variants[7]} onClick={() => {
                                    let variantsCopy = JSON.parse(JSON.stringify(this.state.variants));
                                    let disabledCopy = JSON.parse(JSON.stringify(this.state.disabled));
                                    var i;
                                    if (this.state.variants[7] === "success") {
                                        variantsCopy[7] = "dark";
                                        for (i = 0; i < 8; i++) {
                                            disabledCopy[i] = false;
                                        }
                                    } else {
                                        variantsCopy[7] = "success";
                                        for (i = 0; i < 8; i++) {
                                            if (i !== 7)
                                                disabledCopy[i] = true;
                                        }
                                    }
                                    this.setState({
                                        variants: variantsCopy
                                    });
                                    this.setState({
                                        disabled: disabledCopy
                                    })
                                }} disabled={this.state.disabled[7]}>Vote</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div style={{ align: "center" }}>
                    <Button variant="success" onClick={() => {
                        this.postVote();
                    }} style={{ fontSize: 20, marginTop: 30, marginBottom: 20 }}>Finalize Vote</Button>
                </div>
                {mAlert}
            </div>
        );
    }

}

export default Vote;