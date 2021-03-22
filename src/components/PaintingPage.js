import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedPainting, unsetPainting, addFavorite } from '../actions/paintingActions'

class PaintingPage extends Component {

     componentDidMount(){
          
         console.log("I'm in the painting page") 
         const id = this.props.match.params.id 
         this.props.setSelectedPainting(id)
     }

     componentWillUnmount(){
         this.props.unsetPainting()
     }


    render(){ 

        return ( 

            <div> 
                <h2>{this.props.painting.title}</h2>
                <img key={this.props.painting.primaryimageurl} src={this.props.painting.primaryimageurl} alt="painting" width="300"/>
                <h4>Artist: {this.props.painting.people? this.props.painting.people[0].name : null}</h4>
                <h4>Century: {this.props.painting.century}</h4>
                <h4>Culture: {this.props.painting.culture}</h4>
                <h3>Physical Description</h3>
                <h4>Medium: {this.props.painting.medium}</h4>
                <h4>Dimensions: {this.props.painting.dimensions}</h4>
                <button onClick={this.props.history.goBack}>Go Back</button>
                <p><button onClick={() => this.props.addFavorite(this.props.painting)}>Add to Favorites</button></p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
 
    return {
        painting: state.paintings.selectedPainting
    }

}

const mapDispatchToProps = (dispatch) => {

    return {

        setSelectedPainting: (id) => dispatch(setSelectedPainting(id)),
        unsetPainting: () => dispatch(unsetPainting()),
        addFavorite: (painting) => dispatch(addFavorite(painting)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaintingPage)