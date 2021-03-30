import React, { Component } from 'react';
import Paintings from '../components/Paintings'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'

class PaintingsContainer extends Component {

       

    render() { 
         
        return (
            <div>
                    <SearchBar />
                    <Paintings paintings={this.props.paintings} isInFavorites={this.isInFavorites}/>
            </div>
        )
    }
}



const mapStateToProps = (state) => { 

    return {
        paintings: state.paintings.paintings, 
        loading: state.paintings.loading,
        favorites: state.favorites.favorites 
    }
}

export default connect(mapStateToProps)(PaintingsContainer)