import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CrewStats.css'

export default function CrewStats({crews}) {
    let {id} = useParams();
    let num = parseInt(id);

    const viewStat = crews.filter((crew) => 
        crew.id === num
    )[0]

    return (
        <>
            {viewStat && 
                <div className="single-crew-stats">
                    <h2>osu!Mate: {viewStat.name}</h2>
                    
                    <h2>Stats:</h2>
                    <h4>Country Ranking: #{viewStat.country_ranking}</h4>
                    <h4>Hit Accuracy: {viewStat.hit_accuracy}%</h4>
                    <h4>Color: {viewStat.color}</h4>

                    {viewStat.hit_accuracy > 80 ? 
                    (
                        <div className="verdict">
                            <p>this one's a keeper!</p>
                            <img src="../good.jpg"/>
                        </div>
                        
                    )
                    :
                    (
                        <div className="verdict">
                            <img src="../bad.jpg"/>
                            <p>You may want to find a better mate, this one has terrible aim</p>         
                        </div>
                    )}
                    <Link to={'/edit/' + viewStat.id}>
                        <button className='primary-btn'>Edit osu!Mate</button>
                    </Link>
                    
                </div>
            }
            

        </>
    )
}