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

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

export default class HatSelector extends Component {
    render() {
        return (
            <div className="hatSelector">
                <Container fluid>
                    <Row>
                    <Col xs={2} className="leftBrainHats">
                        <p>Test</p>
                    </Col>
                    <Col xs={4} className="leftBrainImage">
                        {/* <Image src={images['left.png']} fluid/> */}
                    </Col>
                    <Col xs={4} className="rightBrainImage">
                        {/* <Image src={images['right.png']} fluid/> */}
                    </Col>
                    <Col xs={2} className="rightBrainHats">
                        <p>Test</p>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}