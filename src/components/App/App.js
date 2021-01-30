import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/Addmovie'

function App() {


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Link to="/add">Add New Movie</Link>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route component={MovieDetails} path="/details" />
        <Route component={AddMovie} path="/add" />
      </Router>
    </div>
  );
}


export default App;
