import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import profile from './profile.png'
import pilot from './img/pilot.jpg'
import auburn from './img/auburn.png'
import trideum from './img/trideum.png'

function App() {
  return (
    <div className="Home">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand className="navStyle">Joshua Jablonowski</Navbar.Brand>
          <NavDropdown className="navStyle">
          <NavDropdown.Item href="#home">Home</NavDropdown.Item>
          <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
          <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
          <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
          </NavDropdown>
          
      </Navbar>
    <div className="HomeContent">
      <Container fluid >
        <Row className="section">
          <Col></Col>
          <Col className="rounded shadow Home-header-card" xs={8}>
            <Row>
              <Col xs={3} sm={3}>
                <Image src={trideum} className="Home-side-img2"></Image>
              </Col>
              <Col xs={6} sm={6}>
                <Image src={profile} roundedCircle className="Home-img"></Image>
              </Col>
              <Col xs={3} sm={3}>
                <Image src={auburn} className="Home-side-img"></Image>
              </Col>
            </Row>
            <Row className="centerUp">
              <header className="Home-header">Joshua Jablonowski</header>
            </Row> 
            <Row className="centerUp">
              <header className="Home-header2">Engineer, Husband, Serial Hobbyist</header>
            </Row>
            <Row className="centerUp">
              <header className="Home-header-intro">
                Currently working with <a href="https://www.trideum.com/">Trideum Corporation</a> as a Software Engineer at Redstone Arsenal.
              </header>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="HomeCarousel">
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
        </Row>
      </Container>
    </div>
    </div>
        
  );
}

export default App;
