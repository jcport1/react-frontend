export default function managePainting(state = {
    paintings: [],
}, action) {

    switch(action.type){

        case "GOT_PAINTINGS":

        return {...state, toys:action.payload}



        default:
            return state;
    }
}