import React from 'react';
import { Link } from 'react-router-dom'

const Painting = (props) => { 
 

    return ( 

        <div>
            <h2><b>{props.painting.title}</b></h2>
            <img key={props.painting.primaryimageurl} src={props.painting.primaryimageurl} alt="painting" width="300"/>
            <p><h4>{props.painting.artist? props.painting.artist : null }</h4></p>
            <Link to={`/paintings/${props.painting.id}`}><button>More Details</button></Link>
        </div>
    )
}

export default Painting  