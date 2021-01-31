import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import GenreItem from "../GenreItem/GenreItem";
import React from 'react'

export default function AddMovie() {
    const [newMovie, setNewMovie] = useState({ title: '', poster: '', description: '', genre: [] })
    const [randomIndex, setRandomIndex] = useState(0)

    const history = useHistory()
    const genres = useSelector(state => state?.genres)
    const dispatch = useDispatch()

    const backgroundFileNames = ['btk.jpg', 'td.jpeg', 'parasite.png', 'fitzcarraldo.jpg', 'zatoichi.jpeg']

    const randomBackground = () => {
        setRandomIndex(Math.floor(Math.random() * ((backgroundFileNames.length) - 0) + 0))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({ type: 'ADD_NEW_MOVIE', payload: newMovie })
        console.log(newMovie)
        setNewMovie({ title: '', poster: '', description: '', genre: [] })
        dispatch({ type: 'FETCH_MOVIES' });
        history.push('/')
    }

    const handleClick = () => {
        history.push('/')
    }

    const handleChange = (event) => {
        setNewMovie({ ...newMovie, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
        randomBackground()
    }, [])


    return (
        <div
            className="form-card-container"
            style={{
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