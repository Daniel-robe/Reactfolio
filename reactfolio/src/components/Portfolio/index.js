import React from 'react';

import nearEarthObjects from '../../assets/nearEarthObjects.png'
import whatChaListen from '../../assets/WhatchaListening2.PNG'

function Portfolio(props) {
    return (
        <div>
            <h3> My Work </h3>
            <img src={nearEarthObjects} id="workImg"></img>
            <figcaption> <a href="https://a-speece.github.io/Space-Weather-App/index.html">Near Earth Objects</a> </figcaption>

            <img src={whatChaListen} id="workImg"></img>
            <figcaption> <a href="https://morning-earth-98178.herokuapp.com/">Whatcha Listening 2</a> </figcaption>
        </div>
    )
}

export default Portfolio;