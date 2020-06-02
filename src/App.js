import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import resume from './img/Joshua_Jablonowski.pdf'
import HatSelector from './components/HatSelector'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

function App() {
  return (
    <div>
      <Navbar collapseOnSelect className="color-nav" variant="dark" expand="sm">
        <Navbar.Brand href="#home">
          <img src={images['icon_tx.png']}
          className="brandLogo"
          alt="JoshJab Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
          <Nav.Link href="#contact">Mail</Nav.Link>
          <Nav.Link href="#contact">LinkedIn</Nav.Link>      
        </Nav>
        </Navbar.Collapse>      
      </Navbar>
      <HatSelector />
      <div className="featuredWorks">
        <Container fluid>
          <h6>Engineer, Husband, Serial Hobbyist</h6>
          <Row>
            <Col xs={1} md={2}></Col>
            <Col xs={10} md={8}>
              <Button href={resume} variant="info" block>Download My Resume</Button>
            </Col>
            <Col xs={1} md={8}></Col>
          </Row>
          <Row className="aboutMe">
            <p>Blah blah blah text text</p>
          </Row>
          <br/>
          <Row>
            <p>My latest:</p>
          </Row>     
          <Row className="latest">
              <Col>
                <p>Card here</p>
              </Col>
              <Col>
                <p>Card here</p>
              </Col>
              <Col>
                <p>Card here</p>
              </Col>
          </Row>   
        </Container>
      </div>
      <div className="footer">
        <Container fluid>
          <Row className="footer">
            <Col xs={8}>
              <p>&#169; Joshua Jablonowski</p>
            </Col>  
            <Col xs={4}>
              <Button href="#" variant="dark" className="topButton">^</Button>
            </Col>
          </Row>
         </Container>
      </div>
    </div>  
  );
}

export default App;
