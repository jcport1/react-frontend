import './App.css';
import React, { Component } from 'react'
import PaintingPage from './components/PaintingPage';
import PaintingsContainer from './containers/PaintingsContainer';
import SearchBar from './components/SearchBar';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchPaintings } from './actions/paintingActions'

class App extends Component {

  componentDidMount(){ 
    this.props.fetchPaintings() 
  } 

  render() {
      console.log(this.state)
      return (
        <div className="App">
        <h1>Art Explorer</h1>
        <SearchBar />
        <Switch>
          <Route path="/paintings/:id" component={PaintingPage}/>
          <Route path="/paintings" component={PaintingsContainer} />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {

  return {  
      fetchPaintings: () => dispatch(fetchPaintings())}
}

export default connect(null, mapDispatchToProps)(App);
