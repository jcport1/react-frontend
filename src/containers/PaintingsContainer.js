import React, { Component } from 'react';
import Paintings from '../components/Paintings'
import SearchBar from '../components/SearchBar'
import { connect } from 'react-redux'

class PaintingsContainer extends Component {

    state = {
        filteredSearch: ""
    }

    handleSearch = (e) => {
        this.setState({
            filteredSearch: e.target.value
        })
    }

    filteredPaintings = () => {
        return this.props.paintings.filter(painting => {
            return painting.title.toLowerCase().includes(this.state.filteredSearch.toLowerCase())
        })
    }

   
    addLikes = (id) => {
         
        const painting = this.props.paintings.find((p) => id === p.id)

        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({likes: painting.likes + 1})
        }
        fetch(`http://localhost:3000/paintings/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            this.setState((prevState) => {
                const idx = prevState.paintings.findIndex((p) => json.id = p.id)
                return {
                    paintings: [...prevState.paintings.slice(0, idx), json, ...prevState.paintings.slice(idx + 1)]
                }
            })
        })
           
    }


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
                    <input label="Filter Paintings:" placeholder="Enter painting name" onChange={this.handleSearch}/>
                    <Paintings paintings={this.filteredPaintings()} isInFavorites={this.isInFavorites} addLike = {this.addLikes}/>
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