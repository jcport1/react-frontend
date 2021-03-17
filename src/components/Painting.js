import React from 'react';


const Painting = (props) => {
     
    return ( 
        <div>
        <h1>Title</h1>
        <img key={props.painting.url} src={props.painting.url} alt="painting" width="300"/>
        </div>
    )


}

export default Painting  