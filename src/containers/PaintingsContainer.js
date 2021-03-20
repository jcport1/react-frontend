import React, { Component } from 'react';
import Paintings from '../components/Paintings'
import { connect } from 'react-redux'
// import { fetchPaintings } from '../actions/paintingActions'

class PaintingsContainer extends Component {

    // componentDidMount(){ 
    //     this.props.fetchPaintings() 
    //  }

    render() { 
        return (
            <div> 
                <Paintings paintings={this.props.paintings}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        paintings: state.paintings, 
        loading: state.loading 
    }
}

// const mapDispatchToProps = (dispatch) => {

//     return {  
//         fetchPaintings: () => dispatch(fetchPaintings())}
// }

export default connect(mapStateToProps, null)(PaintingsContainer)