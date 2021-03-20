const url = "http://localhost:3000/paintings"

export const setPaintings = (paintings) => (
    {type: "GOT_PAINTINGS", payload: paintings})

export const fetchPaintings = (query) => {

    return (dispatch) => {

        dispatch({type: "START_ADDING_PAINTINGS_REQUEST"})
        fetch(url)
        .then(res => res.json())
        .then(json => {   
            dispatch(setPaintings(json))
        })
    } 
}