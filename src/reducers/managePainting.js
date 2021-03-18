const managePainting = ( state = {
    paintings: [], loading: false }, action) => {

    switch(action.type){

        case "START_ADDING_PAINTINGS_REQUEST":
             
            return {
                ...state,
                paintings: [...state.paintings],
                loading: true}

        case "GOT_PAINTINGS":
         
            return {
                ...state, 
                paintings: action.payload, 
                loading: false}

        default:
            return state;
    }
}

export default managePainting