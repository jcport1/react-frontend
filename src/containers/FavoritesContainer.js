import React, { Component } from 'react';
import Favorites from '../components/Favorites'
import { connect } from 'react-redux'
import { fetchFavorites } from '../actions/paintingActions'


class FavoritesContainer extends Component {

    componentDidMount(){
        this.props.fetchFavorites()
    }

    render(){  
        return (
            <div>
                <h1>Favorites</h1>
                <button onClick={this.props.history.goBack}>Go Back</button>
                <Favorites favorites={this.props.favorites}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        favorites: state.favorites.favorites 
    }
}

export default connect(mapStateToProps, { fetchFavorites })(FavoritesContainer); 