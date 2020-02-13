import React from 'react';
import ReactDOM from 'react-dom'
import {Container, Row, Col, Image, Navbar, Nav} from 'react-bootstrap'
import Profile from "../cropped_profile.jpg"
import HeaderImage from "../back2.gif"

const styles = {
    headerContainer: {
        backgroundImage: `url(${HeaderImage})`
    }
};

class Header extends React.Component {
    render() {
        return (
            <div>
                <Container style={styles.headerContainer} fluid>
                    <br /><br /><br /><br />
                    
                    <Row>
                        <Col></Col>
                        <Col md={3}>
                            <Image src={Profile} roundedCircle responsive />
                            <br /><br /><br /><br />
                            <h1>Joshua Jablonowski</h1>
                            <br /><br /><br /><br />
                        </Col>
                        <Col></Col>
                    </Row>


                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        )
    }
}

export default Header;