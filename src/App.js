import './App.css';
import PaintingsContainer from './containers/PaintingsContainer'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App">
      <h1>Art Explorer</h1>
      <SearchBar />
      <PaintingsContainer />
    </div>
  );
}

export default App;
