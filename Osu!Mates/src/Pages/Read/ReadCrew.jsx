import './ReadCrew.css';
import { Link } from 'react-router-dom';
import CrewCard from '../../Components/Crew/CrewCard';
import { supabase } from '../../client';
import { useEffect } from 'react';

export default function ReadCrew({crews, setAllCrews}) {
    useEffect(() => {
        const fetchCrews = async () => {
            const {data} = await supabase
                .from('mates')
                .select()
                .order('created_at', { ascending:true })

            setAllCrews(data);
            // console.log(data);
        } 
        fetchCrews();
    }, [crews])
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