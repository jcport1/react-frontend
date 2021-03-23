import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedPainting, unsetPainting, addFavorite } from '../actions/paintingActions'

class PaintingPage extends Component {

     componentDidMount(){

        const id = this.props.match.params.id 
        this.props.setSelectedPainting(id)
     }

     componentWillUnmount(){
         this.props.unsetPainting()
     }


    render(){ 

        return ( 

            <div className="container" align="center"> 

            <div className="card" style={{width: 500}}> 
                <div className="card-body">
                <h2 className="card-title">{this.props.painting.title}</h2>
                <img className="card-img-top"key={this.props.painting.primaryimageurl} src={this.props.painting.primaryimageurl} alt="painting" width="300"/>
                <h4 className="card-text">Artist: {this.props.painting.people? this.props.painting.people[0].name : null}</h4>
                <h4 className="card-text">Century: {this.props.painting.century}</h4>
                <h4 className="card-text">Culture: {this.props.painting.culture}</h4>
                <h3 className="card-text">Physical Description</h3>
                <h4 className="card-text">Medium: {this.props.painting.medium}</h4>
                <h4 className="card-text">Dimensions: {this.props.painting.dimensions}</h4>
                <p><button className="btn btn-secondary" onClick={() => this.props.addFavorite(this.props.painting)}>Add to Favorites</button></p>
                <button className="btn btn-primary" onClick={this.props.history.goBack}>Go Back</button>
                </div>
            </div>
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