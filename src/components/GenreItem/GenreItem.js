import { useEffect, useState } from 'react'
import { Chip } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

export default function GenreItem({ genre, setNewMovie, newMovie }) {
    const [selected, setSelected] = useState(false)
    const dispatch = useDispatch()
    const genresArray = useSelector(state => state.genresArray)
    // 
    const handleGenreSelect = () => {
        console.log(genre)
        setSelected(!selected)
        addGenre()
        setGenresToNewMovie()
    }

    const addGenre = () => {
        if (!selected) {
            dispatch({ type: 'ADD_GENRE_TO_NEW_MOVIE', payload: genre.id })

        } else {
            dispatch({ type: 'REMOVE_GENRE_FROM_NEW_MOVIE', payload: genre.id })
        }
    }

    const setGenresToNewMovie = () => {
        setNewMovie({ ...newMovie, genre: genresArray })
    }

    useEffect(() => {
        setGenresToNewMovie()
    }, [genresArray])


    return (

        <div className={`genre-chip ${selected ? "genre-chip-selected" : ""}`} onClick={handleGenreSelect} >{genre.name}</div >

    )
}