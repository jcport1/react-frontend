import './App.css';
import React, { Component } from 'react'
import PaintingPage from './components/PaintingPage';
import PaintingsContainer from './containers/PaintingsContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import About from "./components/About";
import { fetchPaintings, fetchFavorites } from './actions/paintingActions';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount(){ 
 
    this.props.fetchPaintings()
    this.props.fetchFavorites()
  
  } 

  render() {
      return (
        <div className="App">
        <NavBar />
        <h1 className="display-3">Art Explorer</h1><br></br>
        <Switch>
          <Route path="/paintings/:id" component={PaintingPage}/>
          <Route path="/paintings" component={PaintingsContainer} />
          <Route path="/favorites" component={FavoritesContainer}/>
          <Route path="/about" component={About}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {

  return {  
      fetchPaintings: () => dispatch(fetchPaintings()),
      fetchFavorites: () => dispatch(fetchFavorites())
    }
}

export default connect(null, mapDispatchToProps)(App);
