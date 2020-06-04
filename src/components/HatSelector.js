import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import './HatSelector.css';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return true;});
    return images;
  }

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

export default class HatSelector extends Component {
    render() {
        return (
            <div className="hatSelector">
                <Container fluid>
                    <Row>
                        <Col >
                            <Image src={images['profile.png']} roundedCircle className="profileImage"/>
                        </Col>
                    </Row>
                    <Row>
                        <h2>Joshua Jablonowski</h2>
                    </Row>
                </Container>
            </div>
        );
    }
}