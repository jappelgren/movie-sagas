import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export default function MovieItem({ movie }) {
    const [showTitle, setTitleShow] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    //handleClick directs user to details page and makes sure that page has the details
    // of the movie that was clicked.
    const handleClick = () => {
        console.log(movie.id)
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id })
        history.push('/details')
    }
    return (
        <div className="card" key={`A${movie.id}`}>
            {showTitle && (
                <h3
                // onMouseLeave and onMouseEnter are used for conditional rendering
                // mouse over a movie poster and it will display the title on top of it
                // move out and it will disappear
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