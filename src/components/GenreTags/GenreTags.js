export default function GenreTags({ movieObj }) {
    
    return (movieObj &&
        movieObj?.array_agg?.map((genre) => (
            <div>
                <button>{genre}</button>
            </div>
        )))



}