// const nullPainting = {
//  id: null,
//  title: "",
//  image: "",
//  artist: "",
//  century: "",
//  culture: "",
//  medium: "",
//  dimensions: ""
// }
const managePainting = ( state = {
    paintings: [], 
    selectedPainting: [],
    loading: false }, action) => {

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
        
        case "SET_SEARCHED_PAINTINGS":   
            return {
                ...state,
                paintings: action.payload
            }
        
        case "SET_SELECTED_PAINTING":
             
            return {
                ...state, 
                selectedPainting: action.payload
            }

        default:
            return state;
    }
}

export default managePainting