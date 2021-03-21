import React, { Component } from 'react'
import {connect} from 'react-redux'
import { searchedPaintings } from '../actions/paintingActions'

class SearchBar extends Component {

    state = {
        query: ""
    }

    handleSubmit = (event) => {

        event.preventDefault()
        this.props.searchedPaintings(this.state.query)
        this.setState({
            query: ""
        })
         
    }

    handleOnChange = (event) => {

        this.setState({
            query: event.target.value 
        })

    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search: </label>
                    <input type="text" onChange={this.handleOnChange} value={this.state.query}/>
                    <input type="submit"/>
                </form>
            </div>
        ) 
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        searchedPaintings: (query) => dispatch(searchedPaintings(query))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)