import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedPainting } from '../actions/paintingActions'
import { Link } from 'react-router-dom'


class PaintingPage extends Component {

     componentDidMount(){
         console.log("I'm in the painting page")
         const id = this.props.match.params.id
         this.props.setSelectedPainting(id)
     }

    render(){
        return (
            <div>
                <h2>{this.props.painting.title}</h2>
                <img key={this.props.painting.image} src={this.props.painting.image} alt="painting" width="300"/>
                <h4>Artist: {this.props.painting.artist}</h4>
                <h4>Century: {this.props.painting.century}</h4>
                <h4>Culture: {this.props.painting.culture}</h4>
                <h3>Physical Description</h3>
                <h4>Medium: {this.props.painting.medium}</h4>
                <h4>Dimensions: {this.props.painting.dimensions}</h4>
                <button onClick={this.props.history.goBack}>Go Back</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        painting: state.selectedPainting
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        setSelectedPainting: (id) => dispatch(setSelectedPainting(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaintingPage)