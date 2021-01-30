import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/Addmovie'
import Header from '../Header/Header';

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
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
