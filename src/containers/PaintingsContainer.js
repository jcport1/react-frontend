import React, { Component } from 'react';
import Paintings from '../components/Paintings'
import {connect} from 'react-redux'
import { fetchPaintings } from '../actions/paintingActions'

class PaintingsContainer extends Component {


    // state = {

    //     paintings: []
    // }

    // fetchPaintings = (query = "Dutch") => {

    //     fetch(`https://api.harvardartmuseums.org/object?classification=26&culture=${query}&apikey=1d2099ee-3f1e-46ff-bd4c-71d7ef213836`) 
    //     .then(resp => resp.json()) 
    //     .then(({records}) => {  
    //         this.setState({
    //             paintings: records.map(painting => ({url: painting.primaryimageurl, title: painting.title, artist: painting.people[0].name}))
    //         })
    //         console.log(this.state)  

    //     })
    // }

    render() {
        return (

            <div> 
            <Paintings paintings={this.props.paintings} />
            </div>
        )
    }

    componentDidMount(){
       this.props.fetchPaintings() 
    }

}

const mapStateToProps = (state) => {  

    return {
        paintings: state.paintings, 
        loading: state.loading 
    }
}

const mapDispatchToProps = (dispatch) => {

    return {  
        fetchPaintings: (query = "French") => dispatch(fetchPaintings(query))}
}

export default connect(mapStateToProps, mapDispatchToProps)(PaintingsContainer)