import React from 'react'
import './App.css'
import img1 from './blockchain.png';
import img3 from './logo512.png';
import img2 from './springboot.png';
import { Button, Navbar, Nav, Carousel, Image, Table } from 'react-bootstrap';

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
                        <h1 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>Blockchain</h1><br></br>
                        <h3 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>A blockchain is a decentralized, distributed, and oftentimes public, digital ledger that is used to record transactions across many computers so that any involved record cannot be altered retroactively, without the alteration of all subsequent blocks.</h3>
                        <br></br><br></br>
                        <h3 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>It works with Blocks, where as spreadsheet works with “rows” and “columns”. A block in a blockchain is a collection of data. Blockchain is a distributed ledger, which simply means that a ledger is spread across the network among all peers in the network, and each peer holds a copy of the complete ledger.</h3>
                    </td>
                    <td><Image src={img1} rounded /></td>
                </tr>
            </Table>
            <Table borderless>
                <tr>
                    <td>
                        <h1 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>Spring Boot</h1><br></br>
                        <h3 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>Spring Boot is a lightweight framework that takes most of the work out of configuring Spring-based applications. In this tutorial, you'll learn how to use Spring Boot's starters, opinions, and executable JAR file structure to quickly create Spring-based applications that “just run.”</h3>
                        <br></br><br></br>
                        <h3 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>Spring Boot is an open source Java-based framework used to create a Micro Service. It is developed by Pivotal Team. It is easy to create a stand-alone and production ready spring applications using Spring Boot.</h3>
                    </td>
                    <td><Image src={img2} rounded style={{ marginTop: 100 }} /></td>
                </tr>
            </Table>
            <Table borderless>
                <tr>
                    <td>
                        <h1 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>React Js</h1><br></br>
                        <h3 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. It's used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.</h3>
                        <br></br><br></br>
                        <h3 style={{ marginLeft: 50, marginRight: 50, textAlign: "justify" }}>React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser. React's virtual browser acts like an agent between the developer and the real browser.</h3>
                    </td>
                    <td><Image src={img3} rounded style={{ width: 500, height: 500 }} /></td>
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


