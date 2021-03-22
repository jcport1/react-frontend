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

        default:
            return state;

    }

}

export default manageFavorite