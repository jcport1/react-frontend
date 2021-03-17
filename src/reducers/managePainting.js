export default function managePainting(state = {
    paintings: [], loading: false
}, action) {

    switch(action.type){

        case "GOT_PAINTINGS":

            return {...state, paintings:action.payload, loading: false}

        case "LOADING":
             
            return {...state, loading: true}

        default:
            return state;
    }
}