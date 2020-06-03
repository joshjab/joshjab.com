import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import resume from '../img/Joshua_Jablonowski.pdf'
import Button from 'react-bootstrap/Button'

import './FeaturedWorks.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default class FeaturedWorks extends Component {
    render() {
        return (
            <div className="featuredWorks">
            <Container fluid>
                <h6>Engineer, Husband, Serial Hobbyist</h6>
                <Row>
                    <Col xs={1} md={2}></Col>
                    <Col xs={10} md={8}>
                    <Button href={resume} variant="dark" block>Download My Resume</Button>
                    </Col>
                    <Col xs={1} md={8}></Col>
                </Row>
                <Row className="aboutMe" fluid>
                    <p>Currently working with Trideum Corporation as a Software Engineer at Redstone Arsenal.</p>
                </Row>
                <Row fluid>
                    <p><strong>My latest work</strong></p>
                </Row>     
                <Row className="latest">
                    <Card className="cardLink">
                        <Card.Img className="cardImage" variant="top" src={images['icon_tx.png']} />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="cardLink">
                        <Card.Img className="cardImage" variant="top" src={images['icon_tx.png']} />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="cardLink">
                        <Card.Img  className="cardImage" variant="top" src={images['icon_tx.png']} />
                        <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        </Card.Body>
                    </Card>
                </Row>   
            </Container>
        </div>
            );
        }
    }