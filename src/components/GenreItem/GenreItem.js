import { useState } from 'react'
import { Chip } from '@material-ui/core'
import { useDispatch } from 'react-redux'

export default function GenreItem({ genre }) {
    const [selected, setSelected] = useState(false)
    const dispatch = useDispatch()
    // 
    const handleGenreSelect = () => {
        console.log(genre)
        setSelected(!selected)
        addGenre()

    }

    const addGenre = () => {
        if (!selected) {
            dispatch({ type: 'ADD_GENRE_TO_NEW_MOVIE', payload: genre.id })
        } else {
            dispatch({ type: 'REMOVE_GENRE_FROM_NEW_MOVIE', payload: genre.id })
        }

    }

    return (

        <div className={`genre-chip ${selected ? "genre-chip-selected" : ""}`} onClick={handleGenreSelect} >{genre.name}</div >

    )
}