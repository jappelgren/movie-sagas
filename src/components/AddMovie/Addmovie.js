import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Chip, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import { select } from "redux-saga/effects";
import GenreItem from "../GenreItem/GenreItem";

export default function AddMovie() {
    const [newMovie, setNewMovie] = useState({ title: '', poster: '', description: '', genre: [] })

    const history = useHistory()
    const genres = useSelector(state => state?.genres)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newMovie)
        setNewMovie({ title: '', poster: '', description: '', genre: [] })
    }

    const handleClick = () => {
        history.push('/')
    }

    const handleChange = (event) => {
        setNewMovie({ ...newMovie, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, [])


    return (
        <form onSubmit={handleSubmit}>
            <input required name="title" type="text" value={newMovie.title} onChange={handleChange} />
            <input required name="poster" type="text" value={newMovie.poster} onChange={handleChange} />
            <textarea required name="description" value={newMovie.description} onChange={handleChange} />
            <div className="genre-container">
                {genres?.map((genre) => (
                    <GenreItem key={`g${genre.id}`} genre={genre} />
                ))}
            </div>
            <button onClick={handleClick}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    )
}