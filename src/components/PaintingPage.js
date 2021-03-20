import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedPainting } from '../actions/paintingActions'


class PaintingPage extends Component {

     componentDidCatch(){
         console.log("I'm in the painting page")
     }


    render(){
        return (
            <div>
                <h1>Painting Page</h1>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        setSelectedPainting: (id) => dispatch(setSelectedPainting(id))

    }
}

export default connect(null, mapDispatchToProps)(PaintingPage)