import React from 'react';
import { Link } from 'react-router-dom'

const Favorite = (props) => { 

    

    return ( 
        
        <div className="col-sm-4">
            <div key={props.favorite.id} className="card" style={{width: 324}}> 
                <h2 className="card-title"><b>{props.favorite.title}</b></h2>
                <img className="card-img" key={props.favorite.image} src={props.favorite.image} alt="favorite" width="300"/>
                <h4 className="card-text">{props.favorite.artist? props.favorite.artist : null }</h4><br></br>
                <Link to={`/paintings/${props.favorite.id}`}><button className="btn btn-primary">More Details</button></Link><br></br>
                <p><button className="btn btn-secondary" onClick={()=>props.removeFavorite(props.favorite.id)}>Remove</button></p>
            </div>
        </div>
    )
}

export default Favorite  