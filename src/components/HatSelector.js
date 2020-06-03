import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import './HatSelector.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default class HatSelector extends Component {
    render() {
        return (
            <div className="hatSelector">
                <Container fluid>
                    <Row></Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Image src={images['cropped_profile.jpg']} roundedCircle className="profileImage"/>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                            <h2>Joshua Jablonowski</h2>
                        </Col>
                        <Col xs={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}