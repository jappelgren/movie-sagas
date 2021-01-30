import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Chip, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from "react-redux"

export default function AddMovie() {
    const [newMovie, setNewMovie] = useState({ title: '', poster: '', description: '', genre: [] })
    const history = useHistory()
    const genres = useSelector(state => state)
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
        dispatch({ type: 'GET_GENRES' })
    }, [])


    return (
        <form onSubmit={handleSubmit}>
            <input required name="title" type="text" value={newMovie.title} onChange={handleChange} />
            <input required name="poster" type="text" value={newMovie.poster} onChange={handleChange} />
            <textarea required name="description" value={newMovie.description} onChange={handleChange} />
            <Paper component="ul">
                { }
            </Paper>

            <button onClick={handleClick}>Cancel</button>
            <button type="submit">Submit</button>
        </form>
    )
}