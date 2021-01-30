import { useSelector } from "react-redux"
import { useHistory, Redirect } from "react-router-dom"

export default function MovieDetails() {
    const movieObj = useSelector(state => state?.details)
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div>
            <h1>{movieObj?.title}</h1>
            <img src={movieObj?.poster} />
            {movieObj?.array_agg?.map((genre) => (
                <div key={genre}>
                    <button>{genre}</button>
                </div>
            ))}
            <p>{movieObj?.description}</p>
            <button onClick={handleClick}>Back to List</button>
        </div>
    )
}