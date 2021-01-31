import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Redirect } from "react-router-dom"

export default function MovieDetails() {

    //movieObj is an object... with all the selected movies... data.
    //Optional chaining is used to make sure the object has the data it needs before th page
    //tries to render elements based off of that data.
    const movieObj = useSelector(state => state?.details)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }

    //These two use effect statements store the data in localStorage on load, and
    // then recall that data on refresh if it exists.  This allows the user to refresh
    // and not be greeted with a blank page.
    useEffect(() => {
        const movieDetails = localStorage.getItem("movie-object");
        if (movieDetails) {
            dispatch({ type: 'SET_DETAILS', payload: JSON.parse(movieDetails) })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("movie-object", JSON.stringify(movieObj))
    })
    return (
        <div className="details-container">
            <div className="image-title-container">
                <h1>{movieObj?.title}</h1>
                <img src={movieObj?.poster} />
                <div className="genre-container" >
                    {movieObj?.array_agg?.map((genre) => (
                        <div key={genre} className="genre-chip-display">{genre}</div>
                    ))}
                </div>
            </div>
            <div className="description-container">
                <div className="description-text">
                    <p>{movieObj?.description}</p>
                </div>
                <div className="back-btn">
                    <button onClick={handleClick}>Back to List</button>
                </div>
            </div>
        </div>
    )
}