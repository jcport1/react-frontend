import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchPaintings } from '../actions/paintingActions'

class SearchBar extends Component {

    state = {

        query: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchPaintings(this.state.query)
         
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
        fetchPaintings: (query) => dispatch(fetchPaintings(query))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar)