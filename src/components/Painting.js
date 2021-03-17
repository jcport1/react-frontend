import React from 'react';


const Painting = (props) => { 
    
    console.log(props)
    return (  
        <div>
        <h2>{props.painting.title}</h2>
        <img key={props.painting.url} src={props.painting.url} alt="painting" width="300"/>
        <h4>{props.painting.artist}</h4>
        </div>
    )


}

export default Painting  