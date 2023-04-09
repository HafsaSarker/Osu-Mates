import { Link } from "react-router-dom"
import {FiMoreVertical} from 'react-icons/fi'
import './CrewCard.css'

export default function CrewCard({id, name, country_ranking, hit_accuracy, color}) {
    return (
        <div className={`card + ${color}`}>
            <div className="icon">
                <Link to={"/edit/"+id}>
                    <span><FiMoreVertical /></span>
                </Link>
            </div>
            <Link to={'/stats/' + id}>
                <div className="stats">
                    <h3>Name: {name}</h3>
                    <img src="/profile.png"/>
                    <h4>Country Ranking: #{country_ranking}</h4>
                    <h4>Hit Accuracy: {hit_accuracy}%</h4>
                    <h4>Color: {color}</h4>
                </div>
            </Link>
        </div>
    )
}