import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img className="logo" src="images/logo-rounded.png" alt="" />
            <nav>
                <Link to="/add">Add New Movie</Link>
            </nav>
        </header>
    )
}