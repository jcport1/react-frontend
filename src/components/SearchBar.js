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
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                    <label className="navbar-brand">Search: </label>
                    <input class="form-control mr-sm-2" type="text" onChange={this.handleOnChange} value={this.state.query}/>
                    <input className="btn btn-outline-success my-2 my-sm-0" type="submit"/>
                    </form>
                </nav>
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