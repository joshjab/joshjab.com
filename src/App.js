import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import profile from './profile.png'
import pilot from './img/pilot.jpg'

function App() {
  return (
    <div className="Home">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>Joshua Jablonowski</Navbar.Brand>
        <Nav className="mr-auto justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    <div className="HomeContent">
      <Container fluid >
        <Row className="section">
          <Col></Col>
          <Col className=" rounded shadow Home-header-card">
            <Row className="centerUp">
              <Image src={profile} roundedCircle className="Home-img"></Image>
            </Row>
            <Row className="centerUp">
              <header className="Home-header">Joshua Jablonowski</header>
            </Row>
            <Row className="centerUp">
              <header className="Home-header2">Engineer, Husband, Serial Hobbyist</header>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="HomeCarousel">
          <Col></Col>
          <Col>
          <Carousel>
            <Carousel.Item>
              <img src={pilot}></img>
              <Carousel.Caption>
                <h3>Piloting</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pilot}></img>
              <Carousel.Caption>
                <h3>Web Design</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pilot}></img>
              <Carousel.Caption>
                <h3>Software Defined Radio</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={pilot}></img>
              <Carousel.Caption>
                <h3>Virtual Reality Development</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
    </div>
        
  );
}

export default App;
