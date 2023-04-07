import './ReadCrew.css';
import { Link } from 'react-router-dom';
import CrewCard from '../../Components/Crew/CrewCard';

export default function ReadCrew({crews, setAllCrews}) {
    return (
        <div className="gallery">
            <h1>Your osu!Mates Gallery:</h1>

            {crews && crews.length > 0 ? 
            (
                <CrewCard />
            ) :
            (
                <div className='empty-gallery'>
                    <h4>You haven't made an osu!Mate yet!</h4>
                    <Link to="/create">
                        <button className='primary-btn'>Create one here!</button>
                    </Link>
                </div>
            )}

            
            
        </div>
    )
}