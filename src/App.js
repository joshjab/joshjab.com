import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import './App.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return true;});
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
            <Nav.Link className="navLink" href="mailto:joshjab@gmail.com" ><img src={images['mail_icon.png']} className="navLinkImage" alt="Mail"/></Nav.Link>
            <Nav.Link  className="navLink" href="https://www.linkedin.com/in/joshua-jablonowski/" ><img src={images['linkedin_icon.png']} className="navLinkImage" alt="LinkedIn"/></Nav.Link>  
          </Nav.Item> 
        </Nav> 
        </Navbar.Collapse>      
      </Navbar>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>   
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
