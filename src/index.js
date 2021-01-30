import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', fetchMovieDetails)
    yield takeEvery('FETCH_GENRES', fetchGenres)
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

function* fetchMovieDetails(action) {
    try {
        const movieDeets = yield axios.get(`/api/movie/${action.payload}`)
        console.log('It"s me Austin', movieDeets.data[0])
        yield put({ type: 'SET_DETAILS', payload: movieDeets.data[0] })
    } catch (err) {
        console.log(err)
    }
}

function* fetchGenres() {
    try {
        const genres = yield axios.get('/api/genre')
        console.log(genres.data)
        yield put({ type: 'SET_GENRES', payload: genres.data })
    } catch (err) {
        console.log(err)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload
        default:
            return state
    }
}

const genresArray = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GENRE_TO_NEW_MOVIE':
            return [...state, action.payload]
        case 'REMOVE_GENRE_FROM_NEW_MOVIE':
            return state.filter((id) => id !== action.payload)
        default:
            return state
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
        genresArray
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
