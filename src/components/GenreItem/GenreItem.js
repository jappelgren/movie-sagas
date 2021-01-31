import { useEffect, useState } from 'react'
import { Chip } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'

export default function GenreItem({ genre, setNewMovie, newMovie }) {
    //selected is state to see if an individual genre tag has been clicked or not on the add movie page.
    const [selected, setSelected] = useState(false)
    const dispatch = useDispatch()
    const genresArray = useSelector(state => state.genresArray)
    
    // on click of a genre that tag is sent to redux to be added to an array of all selected genre tags.
    //that reducer is then used to set the genre in the newMovie object in the addMovie component.
    const handleGenreSelect = () => {
        console.log(genre)
        setSelected(!selected)
        addGenre()
        setGenresToNewMovie()
    }
    //if a tag has been clicked it is set to true, and dispatches that tag to Redux, if clicked again it will be set to false
    // and the genre will be removed from the array in Redux
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
        //Ternary in the div sets class, which affects the tags appearance on the page.
        <div className={`genre-chip ${selected ? "genre-chip-selected" : ""}`} onClick={handleGenreSelect} >{genre.name}</div >

    )
}