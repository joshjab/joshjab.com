import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'

import HatSelector from './components/HatSelector'
import FeaturedWorks from './components/FeaturedWorks'
import './App.css';

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
        </Nav>
        <Nav>
          <Nav.Item>
            <Nav.Link className="navLink" href="mailto:joshjab@gmail.com" ><img src={images['mail_icon.png']} className="navLinkImage"/></Nav.Link>
            <Nav.Link  className="navLink" href="https://www.linkedin.com/in/joshua-jablonowski/" ><img src={images['linkedin_icon.png']} className="navLinkImage"/></Nav.Link>  
          </Nav.Item> 
        </Nav> 
        </Navbar.Collapse>      
      </Navbar>
      <HatSelector />
      <FeaturedWorks />
      <div className="footer">
        <Container fluid>
          <Row className="footer">
            <Col xs={7} sm={3} md={3}>
              <p>&#169; Joshua Jablonowski</p>
            </Col>  
            <Col xs={5} sm={9} md={9}>
              <Button href="#" variant="dark" className="topButton">^</Button>
            </Col>
          </Row>
         </Container>
      </div>
    </div>  
  );
}

export default App;
