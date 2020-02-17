import React from 'react'
import './App.css'
import img1 from './block.png'
import img2 from './bootstrap.png'
import img3 from './springboot.png'
import { Button, Navbar, Nav, Carousel, Row, Col, Card, Container } from 'react-bootstrap';
function Home() {
    return (
        <div style={{ overflowX: "hidden", overflowY: "auto" }}>
            <Carousel style={{ position: "relative", width: "100vw", height: "32vw" }}>
                <Carousel.Item style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 90%)", height: "32vw" }}>
                    <Carousel.Caption>
                        <h1 style={{ fontSize: "5vw", marginBottom: "7vw" }}>Increase in security and reliability of elections</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 90%)", height: "32vw" }}>
                    <Carousel.Caption>
                        <h1 style={{ fontSize: "5vw", marginBottom: "7vw" }}>No ambiguity in interpreting unlike paper ballots</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 90%)", height: "32vw" }}>
                    <Carousel.Caption>
                        <h1 style={{ fontSize: "5vw", marginBottom: "7vw" }}>verification without relying on third-parties</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1 className="App" style={{ marginTop: 50, marginBottom: 50, fontSize: "45px", textAlign:"center" }}>Technology Stack Used</h1>
            <div align="center">
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '16rem' }} onClick={() => window.open("https://reactjs.org/", "_blank")}>
                            <Card.Img variant="top" src="./logo512.png" />
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '16rem' }} onClick={() => window.open("https://en.wikipedia.org/wiki/Blockchain", "_blank")}>
                            <Card.Img variant="top" src={img1} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '16rem' }} onClick={() => window.open("https://getbootstrap.com/", "_blank")}>
                            <Card.Img variant="top" src={img2} />
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                        <Card style={{ width: '16rem' }} onClick={() => window.open("https://spring.io/projects/spring-boot", "_blank")}>
                            <Card.Img variant="top" src={img3} />
                        </Card>
                    </Col>
                </Row>
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

export default Home;


