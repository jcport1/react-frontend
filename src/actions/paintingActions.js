const url = "http://localhost:3000/paintings_index/"

// export const setPaintings = (paintings) => (
//     {type: "GOT_PAINTINGS", payload: paintings})

export const fetchPaintings = () => { 
    return (dispatch) => {
        dispatch({type: "START_ADDING_PAINTINGS_REQUEST"})
        fetch(url)
        .then(res => res.json())
        .then(paintings => {  
            dispatch({
                type: "GOT_PAINTINGS",
                payload: paintings["records"]
            })
             
        })
    } 
}

export const searchedPaintings = (query) => { 
    return (dispatch) => {
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
                payload: searchResults.map(painting => ({id: painting.id, title: painting.title, primaryimageurl: painting.primaryimageurl, century: painting.century, culture: painting.culture, medium: painting.medium, dimensions: painting.dimensions}))
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

export const unsetPainting = () => ({type:"UNSET_PAINTING"})

export const addFavorite = (painting) => {

    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                painting: painting 
            })
        }
        fetch("http://localhost:3000/painting", configObj)
        .then(res => res.json())
        .then(savedPainting => {
            dispatch({
                type:"ADD_FAVORITE", payload: savedPainting
            })
        })
        alert("Added to favorites!")
    }
}

export const fetchFavorites = () => { 
    return (dispatch) => {
        fetch("http://localhost:3000/paintings")
        .then(res => res.json())
        .then(favorites => {  
            dispatch({
                type: "GOT_FAVORITES",
                payload: favorites 
            }) 
        })
    }
}

export const removeFavorite = (id) => { 
    return (dispatch) => {
        const configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
        fetch(`http://localhost:3000/paintings/${id}`, configObj)
        .then(res => res.json())
            dispatch({
                type: "REMOVE_FAVORITE", id
            }) 
    }
}


 

    

