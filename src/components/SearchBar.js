import React, { Component } from 'react'

class SearchBar extends Component {

    // state = {

    //     query: ""
    // }

    render(){
        return (

            <div>
                <form>
                    <label>Enter Culture: </label>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        ) 
    }
}

export default SearchBar