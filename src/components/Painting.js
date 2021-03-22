import React from 'react';
import { Link } from 'react-router-dom'

const Painting = (props) => { 
 

    return ( 

        <div className="card" style={{width: 324}}>
        <div className="card-body">
            <h2 className="card-title"><b>{props.painting.title}</b></h2>
            <img className="card-img" key={props.painting.primaryimageurl} src={props.painting.primaryimageurl} alt="painting" width="300"/>
            <p><h4>{props.painting.artist? props.painting.artist : null }</h4></p>
            <Link to={`/paintings/${props.painting.id}`}><button className="btn btn-primary">More Details</button></Link>
        </div> 
        </div>
    )
}

export default Painting  