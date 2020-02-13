import React from 'react'
import './App.css'
import img1 from './block.png'
import img2 from './bootstrap.png'
import img3 from './springboot.png'
import { Button, Navbar, Nav, Carousel, Table, Card } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Carousel style={{ textAlign: "center" }}>
                <Carousel.Item style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 90%)", height: 500 }}>
                    <Carousel.Caption>
                        <h1 style={{ fontSize: 70, marginBottom: 100 }}>Increase in security and reliability of elections</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 90%)", height: 500 }}>
                    <Carousel.Caption>
                        <h1 style={{ fontSize: 70, marginBottom: 100 }}>No ambiguity in interpreting unlike paper ballots</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ backgroundColor: "#000000", backgroundImage: "linear-gradient(315deg, #000000 0%, #414141 90%)", height: 500 }}>
                    <Carousel.Caption>
                        <h1 style={{ fontSize: 70, marginBottom: 100 }}>verification without relying on third-parties</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h1 className="App" style={{ marginTop: 50, marginBottom: 50 }}>Technology Stack Used</h1>
            <Table borderless>
                <tr>
                    <td>
                        <Card style={{ width: '16rem' }} onClick={()=>window.open("https://reactjs.org/", "_blank")}>
                            <Card.Img variant="top" src="./logo512.png" />
                        </Card>
                    </td>
                    <td>
                        <Card style={{ width: '16rem' }} onClick={()=>window.open("https://en.wikipedia.org/wiki/Blockchain", "_blank")}>
                            <Card.Img variant="top" src={img1} />
                        </Card>
                    </td>
                    <td>
                        <Card style={{ width: '15rem' }} onClick={()=>window.open("https://getbootstrap.com/", "_blank")}>
                            <Card.Img variant="top" src={img2} />
                        </Card>
                    </td>
                    <td>
                        <Card style={{ width: '16rem' }} onClick={()=>window.open("https://spring.io/projects/spring-boot", "_blank")}>
                            <Card.Img variant="top" src={img3} />
                        </Card>
                    </td>
                </tr>
            </Table>

            <Navbar style={{ backgroundColor: "#000000" }} variant="dark" expand="lg">
                <Navbar.Brand style={{ fontSize: 20 }}>Copyright © 2020 Rooster Games</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Item style={{ color: "white", marginTop: 10, marginRight: 10 }}>email: narendranathgoparaju@gmail.com</Nav.Item>
                    <Nav.Item className="Login-btn">
                        <Button variant="warning" style={{ margin: 2 }} onClick={() => window.open("https://github.com/Narendranath2/e-voting", "_blank")}>Support</Button>
                    </Nav.Item>

                </Nav>
            </Navbar>
        </div>
    );
}

export default Home;


