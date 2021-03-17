import React from 'react';
import Painting from './Painting'


const Paintings = (props) => { 

    const paintings = props.paintings.map((painting) => <Painting painting={painting}/>)

   return (
       <div>
       {paintings}
       </div>
   )
}

export default Paintings 