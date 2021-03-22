import React from 'react';
import Favorite from './Favorite'

const Favorites = (props) => { 

    const favorites = props.favorites.map((favorite) => <Favorite key={favorite.id} favorite={favorite}/>)
 
    return ( 
        
        <div>
                {favorites}
        </div>
    )
}

export default Favorites 