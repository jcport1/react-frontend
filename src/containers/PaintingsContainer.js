import React, { Component } from 'react';
import Paintings from '../components/Paintings'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'

class PaintingsContainer extends Component {


    sortPaintings = () => {

       let alphaPaintings =  this.props.paintings.sort(function(a, b) {
            let nameA = a.title.toUpperCase()
            let nameB = b.title.toUpperCase()
            if (nameA < nameB){
                return -1
            }
            if (nameA > nameB){
                return 1
            }
            return 0 
        })

        this.setState({
            paintings: alphaPaintings
        })
    }

       

    render() { 
         
        return (
            <div>
                    <SearchBar />
                    <p><button onClick={() => this.sortPaintings()} className="btn btn-primary">Sort</button></p>
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