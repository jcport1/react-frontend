
export const setPaintings = (paintings) => (
    {type: "GOT_PAINTINGS", payload: paintings})

export const fetchPaintings = () => {

    return (dispatch) => {

        dispatch({type: "START_ADDING_PAINTINGS_REQUEST"})
        fetch("https://api.harvardartmuseums.org/object?classification=26&culture=Dutch&apikey=1d2099ee-3f1e-46ff-bd4c-71d7ef213836")
        .then(res => res.json())
        .then(json => {   
            dispatch(setPaintings(json.records))
        })
    } 
}