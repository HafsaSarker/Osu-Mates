import { useParams } from 'react-router-dom'
import './EditCrew.css'
import { useState } from 'react';
import { supabase } from '../../client';

export default function EditCrew({crews}) {
    
    const {id} = useParams();
    let num = parseInt(id);

    const crewToUpdate = crews.filter((crew) => 
    crew.id === num
    )[0]

    const [editCrew, setEditCrew] = useState(crewToUpdate);
    
    function handleChange(event){
        const {name, value} = event.target;

        setEditCrew((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleCrewUpdate(event) {
        event.preventDefault();

        await supabase 
            .from('mates')
            .update({
                name: editCrew.name,
                country_ranking: editCrew.country_ranking,
                hit_accuracy: editCrew.hit_accuracy,
                color: editCrew.color 
            })
            .eq('id', id);

        alert('Successfully updated :D');
        window.location = "/gallery";
    }

    function handleDelete() {
        //stuff
    }

    return (
        <>
            {editCrew && 
                <div className="EditCrew">
                <h1>Update your osu!Mate</h1>
                <img src='/create.webp' />
    
                <div className="currStat">
                    <h3>Current Stats: </h3>
                    <div className="info">
                        <h4>Name: {crewToUpdate.name}, Rank: #{crewToUpdate.country_ranking}, Accuracy: {crewToUpdate.hit_accuracy}%</h4>
                    </div>
                </div>
    
                <div className="form" onSubmit={handleCrewUpdate}>
                    <form className='edit-crew-form'>
                        <label>
                            Name:
                            <input
                            type="text"
                            name='name'
                            value={editCrew.name}
                            onChange={handleChange}
                        />
                        </label>
                        
                        <label>
                            Country Ranking:
                            <input 
                            type="text"
                            name='country_ranking'
                            value={editCrew.country_ranking}
                            onChange={handleChange}
                        />
                        </label>
                        
                        <label>
                            Hit accuracy (%):
                            <input 
                            type="number"
                            name='hit_accuracy'
                            value={editCrew.hit_accuracy}
                            onChange={handleChange}
                        />
                        </label>
                       
                        <label>
                            Crew color:
                            <select value={editCrew.color} onChange={handleChange} name='color'>
                                <option value="blue">blue</option>
                                <option value="purple">purple</option>
                                <option value="pink">pink</option>
                                <option value="green">green</option>
                                <option value="orange">orange</option>
                            </select>
                        </label>
                        
                        <div className="btn-container">
                            <button className='primary-btn'>Update Mate</button>
    
                            <button className='primary-btn' type='button' onClick={handleDelete}>Delete Mate</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            }
        </>
        
    )
}
