import React from 'react';
import { Link } from 'react-router-dom'

const Painting = (props) => { 
 

    return ( 

        <div className="col-sm-4">
            <div className="card" style={{width: 324}}>
                <div className="card-body">
                    <h2 className="card-title"><b>{props.painting.title}</b></h2>
                    <img className="card-img" key={props.painting.primaryimageurl} src={props.painting.primaryimageurl} alt="painting" width="300"/>
                    <h4 className="card-text">{props.painting.artist? props.painting.artist : null }</h4>
                    <h4 className="card-text">Likes: 0 </h4>
                    <Link to={`/paintings/${props.painting.id}`}><button className="btn btn-primary">More Details</button></Link>
                    <p><button onClick={(e) => props.addLike(props.painting.id)} className="btn btn-primary">Like &lt;3</button></p>
                </div> 
            </div>
        </div>
    )
}

export default Painting  