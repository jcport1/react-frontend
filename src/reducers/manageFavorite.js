const manageFavorite = ( state = {
    favorites: []

}, action) => {

    switch(action.type){
        
        case "ADD_FAVORITE":

        return {
            ...state, 
            favorites: action.payload 
            
        }
        default:
            return state;

    }

}

export default manageFavorite