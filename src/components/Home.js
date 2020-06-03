import React, {Component} from 'react';

import HatSelector from './HatSelector'
import FeaturedWorks from './FeaturedWorks'

export default class Home extends Component {
    render() {
        return (
            <div>
                <HatSelector />
                <FeaturedWorks />
            </div>       
        );
    }
}

