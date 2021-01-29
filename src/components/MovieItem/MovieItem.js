import { useDispatch } from "react-redux"

export default function MovieItem({ movie }) {
    const dispatch = useDispatch()
    const handleClick = () => {
        console.log(movie.id)
        dispatch({ type: 'MOVIE_DETAIL', payload: movie.id })
    }
    return (
        <div >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={handleClick} />
        </div>
    )
}