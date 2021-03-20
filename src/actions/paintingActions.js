const url = "http://localhost:3000/paintings/"

export const setPaintings = (paintings) => (
    {type: "GOT_PAINTINGS", payload: paintings})

export const fetchPaintings = () => { 
    return (dispatch) => {
        dispatch({type: "START_ADDING_PAINTINGS_REQUEST"})
        fetch(url)
        .then(res => res.json())
        .then(json => {   
            dispatch(setPaintings(json))
        })
    } 
}

export const setSelectedPainting = (id) => {

    return (dispatch) => {
        fetch(url + id)
        .then(res => res.json())
        .then(painting => {
            dispatch({
                type: "SET_SELECTED_PAINTING",
                payload: painting 
            })
        })
    }
}
