import React from 'react';


const Paintings = (props) => { 

   return (
       <div>
       {props.paintings.map(painting => <img key={painting.url} src={painting.url} alt="painting"/>)}
       </div>
   )
}

export default Paintings 