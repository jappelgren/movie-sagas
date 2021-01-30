import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function MovieItem({ movie }) {
    const [showTitle, setTitleShow] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        console.log(movie.id)
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id })
        history.push('/details')
    }
    return (
        <div className="card" key={`A${movie.id}`}>
            {showTitle && (
                <h3
                    onMouseLeave={() => setTitleShow(false)}
                    onMouseEnter={() => setTitleShow(true)}
                    onClick={handleClick}
                    className="movie-title"
                >{movie.title}
                </h3>
            )}
            <img
                onMouseLeave={() => setTitleShow(false)}
                onMouseEnter={() => setTitleShow(true)}
                src={movie.poster}
                alt={movie.title}
                onClick={handleClick} />

        </div>
    )
}