import { Link } from "react-router-dom"

const NavBar = () => {

    return (
        <div className="nav">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/text">Ask a Question</Link>
            <Link className="link" to="/search">Find an Image</Link>
            <Link className="link" to="/create">Create a Image</Link>
        </div>
    )
}

export default NavBar