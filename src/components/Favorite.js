import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Favorite extends Component { 

    state = {
        
        count: 0
    }

    handleUpVote = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1 
        }))
    }



render(){

    return ( 
        
        <div className="col-sm-4">
            <div className="card" style={{width: 324}}> 
                <h2 className="card-title"><b>{this.props.favorite.title}</b></h2>
                <img className="card-img" key={this.props.favorite.image} src={this.props.favorite.image} alt="favorite" width="300"/>
                <h4 className="card-text">{this.props.favorite.artist? this.props.favorite.artist : null }</h4><br></br>
                <Link to={`/paintings/${this.props.favorite.id}`}><button className="btn btn-primary">More Details</button></Link><br></br>
                <p><button className="btn btn-secondary" onClick={()=>this.props.removeFavorite(this.props.favorite.id)}>Remove</button></p>
                <p><button onClick={this.handleUpVote}>Upvote</button></p>
                <p>{this.state.count}</p>
            </div>
        </div>
    )
}
   
  

}

export default Favorite  