
const manageFavorite = ( state = {
    favorites: []

}, action) => {

    switch(action.type){

        case "GOT_FAVORITES":
            return {
                ...state,
                favorites: action.payload 
            }
        
        case "ADD_FAVORITE":

        return {
            ...state, 
            favorites: [...state.favorites, action.payload]  
        }

        case "REMOVE_FAVORITE":

            const favorites = state.favorites.filter(favorite => favorite.id !== action.id)

        return {
            ...state, favorites 
        }

        default:
            return state;

    }

}

export default manageFavorite