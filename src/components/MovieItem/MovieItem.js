import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function MovieItem({ movie }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        console.log(movie.id)
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id })
        history.push('/details')
    }
    return (
        <div className="card" key={`A${movie.id}`}>
            <h3 className="movie-title">{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={handleClick} />
        </div>
    )
}