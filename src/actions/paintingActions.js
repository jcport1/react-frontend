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

export const searchedPaintings = (query) => { 
    return (dispatch) => {
        dispatch({type: "START_ADDING_PAINTINGS_REQUEST"})
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                query: query 
            })
        }
        fetch("http://localhost:3000/search/", configObj)
        .then(res => res.json())
        .then(searchResults => {

            dispatch({
                type: "SET_SEARCHED_PAINTINGS",
                payload: searchResults.map(painting => ({id: painting.id, title: painting.title, image: painting.primaryimageurl, artist: painting.people[0].name, century: painting.century, culture: painting.culture, medium: painting.medium, dimensions: painting.dimensions}))
            }) 
         
        })
    } 
}

export const setSelectedPainting = (id) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/painting/${id}`)
        .then(res => res.json())
        .then(painting => {

            dispatch({
                type: "SET_SELECTED_PAINTING",
                payload: painting["records"][0]
            })
        })
    }
}
