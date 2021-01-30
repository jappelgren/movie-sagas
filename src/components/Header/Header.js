import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <h1>The Movies Saga!</h1>
            <nav>
                <Link to="/add">Add New Movie</Link>
            </nav>
        </header>
    )
}