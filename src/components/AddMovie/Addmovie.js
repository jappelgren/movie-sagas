import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import GenreItem from "../GenreItem/GenreItem";
import React from 'react'

export default function AddMovie() {
    //state stores new movie data.
    const [newMovie, setNewMovie] = useState({ title: '', poster: '', description: '', genre: [] })
    //state that stores the index of the random background displayed on add movie page.
    const [randomIndex, setRandomIndex] = useState(0)

    const history = useHistory()
    const genres = useSelector(state => state?.genres)
    const dispatch = useDispatch()
    //an array of filenames that are used in the random backgrounds on add movie page.
    const backgroundFileNames = ['btk.jpg', 'td.jpeg', 'td.jpeg', 'parasite.png', 'fitzcarraldo.jpg', 'zatoichi.jpeg', 'tr.jpg']

    //the function of choosing the random background index.
    const randomBackground = () => {
        setRandomIndex(Math.floor(Math.random() * ((backgroundFileNames.length) - 0) + 0))
    }

    //handleSubmit sends the newMovie state to Redux, it also resets the inputs (maybe unnecessarily), fetches the 
    //movies including the new entry and directs the user to the movieList page.
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD_NEW_MOVIE', payload: newMovie })
        setNewMovie({ title: '', poster: '', description: '', genre: [] })
        dispatch({ type: 'FETCH_MOVIES' });
        history.push('/')
    }

    //cancel button sends user back to movie list.
    const handleClick = () => {
        history.push('/')
    }

    //handleChange creates a new object with the new data from whatever input is being typed in.
    //It uses the name attribute from the input being typed to set the appropriate key value pair.
    const handleChange = (event) => {
        setNewMovie({ ...newMovie, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
        //added randomBackground in use effect so the background doesn't change every time a 
        //keystroke occurs in an input.
        randomBackground()
    }, [])


    return (
        <div
            className="form-card-container"
            style={{
                // random background is selected based off of the number selected by the randomBackground function.
                backgroundImage: `url(images/random-bkg/${backgroundFileNames[randomIndex]})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            <div className="form-card">
                <form className="add-form" onSubmit={handleSubmit}>
                    <div className="title-input-container">
                        <div className="input-label">
                            TITLE
                        </div>
                        <input required name="title" type="text" value={newMovie.title} onChange={handleChange} />
                    </div>
                    <div className="title-input-container">
                        <div className="input-label">POSTER URL</div>
                        <input required name="poster" type="text" value={newMovie.poster} onChange={handleChange} />
                    </div>
                    <div className="title-textarea-container">
                        <div className="text-area-label">MOVIE DESCRIPTION</div>
                        <textarea rows="5" cols="33" required name="description" value={newMovie.description} onChange={handleChange} />

                    </div>
                    <div className="genre-container">
                        {genres?.map((genre) => (
                            <GenreItem key={`g${genre.id}`} genre={genre} setNewMovie={setNewMovie} newMovie={newMovie} />
                        ))}
                    </div>
                    <div className="button-container">
                        <button onClick={handleClick}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}