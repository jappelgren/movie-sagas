import { Link, useHistory } from "react-router-dom";

export default function Header() {
    const history = useHistory()
    return (
        <header>
            <img className="logo" src="images/logo-rounded.png" alt="Logo for the SAGA movie database" onClick={() => history.push('/')} />
            <nav>
                <Link to="/add">ADD A MOVIE
                {/* I load svgs directly into the JSX like this so I am able to use svg manipulating css properties like fill. 
                    Which are not available if you load an svg file with an <img> tag. */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        {/* The path tag inside an svg tag is the shape of the svg. They are like coordinates.
                        Read more about how paths work here https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths */}
                        <path d="M19.5 14c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 
                        4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-8.498 
                        2h-7.502v-8h10v.032c1.872-1.203 4.113-1.319 
                        6-.53v-11.502h-22v22h14.82c-.553-.576-1.006-1.251-1.318-2zm4.498-18h2v2h-2v-2zm0 
                        4h2v2h-2v-2zm-12-4h10v8h-10v-8zm-2 
                        18h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                    </svg>
                </Link>
            </nav>
        </header>
    )
}