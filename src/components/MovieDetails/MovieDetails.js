import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export default function MovieDetails() {
    const movieObj = useSelector(state => state.details)
    console.log(movieObj)
    const history = useHistory()
    const handleClick = () => {
        history.push('/')
    }
    return (
        <div>
            { movieObj &&
                (
                    <>
                        <h1>{movieObj.title}</h1>
                        <img src={movieObj.poster} />
                        <p>{movieObj.description}</p>
                        <button onClick={handleClick}>Back to List</button>
                    </>
                )
            }
        </div >
    )
}