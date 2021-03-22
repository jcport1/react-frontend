import React from 'react';
import { Link } from 'react-router-dom'

const Favorite = (props) => { 
 

    return ( 

        <div>
            <h2><b>{props.favorite.title}</b></h2>
            <img key={props.favorite.image} src={props.favorite.image} alt="favorite" width="300"/>
            <p><h4>{props.favorite.artist? props.favorite.artist : null }</h4></p>
            <Link to={`/paintings/${props.favorite.id}`}><button>More Details</button></Link>
            <p><button onClick={()=>props.removeFavorite(props.id)}>Remove</button></p>
        </div>
    )
}

export default Favorite  