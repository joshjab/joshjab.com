import React, {Component} from 'react';
import Image from 'react-bootstrap/Image'

import './About.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); return true;});
    return images;
  }

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));


export default class About extends Component {
    render() {
        return (
            <div>
                <div class="clearfix">
                    <div className="photo">
                        <Image className="photoImage" src={images['profile.png']} roundedCircle/>
                        <h1 className="aboutName">Joshua Jablonowski</h1>
                    </div> 
                    <h1 className="aboutHeader">About Me</h1>
                    <h6 className="aboutSub">I'm a Software Engineer from Hunstville, AL</h6>
                    <p className="aboutText">I enjoy the challenge of a good engineering problem while
                                            learning about new technologies. I graduated with a degree 
                                            from Auburn University in Electrical Engineering, and use
                                            both my knowledge of software and hardware to create unique solutions.
                                            I currently specialize in software defined radio applications in the realm of cybersecurity,
                                            but have a wide range of interests in other fields as well. See my Projects and Blog for more!
                    </p>
                </div> 
                <div className="picturesSection">
                    <p></p>
                </div>
            </div>       
        );
    }
}