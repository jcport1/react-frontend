import React from 'react';


const Painting = (props) => { 
    
    console.log(props) 
    return (  
        <div>
        <h2>{props.painting.title}</h2>
        <img key={props.painting.primaryimageurl} src={props.painting.primaryimageurl} alt="painting" width="300"/>
        <h4>{props.painting.people[0].name}</h4>
        </div>
    )


}

export default Painting  