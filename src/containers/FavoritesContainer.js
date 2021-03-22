import React, { Component } from 'react';
import Favorites from '../components/Favorites'
import { connect } from 'react-redux'
import { fetchFavorites, removeFavorite } from '../actions/paintingActions'


class FavoritesContainer extends Component {

    componentDidMount(){
        this.props.fetchFavorites()
    }

    render(){  
 
        return (
            <div>
                <h1>Favorites</h1>
                <button onClick={this.props.history.goBack}>Go Back</button>
                <Favorites favorites={this.props.favorites} removeFavorite={this.props.removeFavorite} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        favorites: state.favorites.favorites 
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        fetchFavorites: () => dispatch(fetchFavorites()),
        removeFavorite: (id) => dispatch(removeFavorite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer); 