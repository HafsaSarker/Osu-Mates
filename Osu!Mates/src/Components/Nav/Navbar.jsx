import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
    return (
        <nav >
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/create"><h3>Create a mate</h3></Link>
            <Link to="/gallery"><h3>Mates Gallery</h3></Link>
        </nav>
    )
}