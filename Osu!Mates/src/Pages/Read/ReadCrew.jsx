import './ReadCrew.css';
import { Link } from 'react-router-dom';
export default function ReadCrew() {
    return (
        <div className="gallery">
            <h1>Your osu!Mates Gallery:</h1>
            <h4>You haven't made an osu!Mate yet!</h4>
            <Link to="/create">
                <button className='primary-btn'>Create one here!</button>
            </Link>
            
        </div>
    )
}