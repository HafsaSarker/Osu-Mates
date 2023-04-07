import { useState } from 'react'
import { supabase } from '../../client'
import './CreateCrew.css'

export default function CreateCrew() {
    const [newCrew, setNewCrew] = useState({
        name: "",
        country_ranking: "",
        hit_accuracy: null,
        color: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNewCrew((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('mates')
            .insert({
                    name: newCrew.name, 
                    country_ranking: newCrew.country_ranking, 
                    hit_accuracy: newCrew.hit_accuracy,
                    color: newCrew.color
                })
            .select();

        alert('Success! You have now created an osu!Mate : )');
    }

    return (
        <div className="createCrew">
            <h1>Create a new osu!Mate</h1>
            <img src='./create.webp' />

            <div className="form">
                <form className='create-crew-form' onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                        type="text"
                        name='name'
                        onChange={handleChange}
                        placeholder='funnyBunny'
                    />
                    </label>
                    
                    <label>
                        Country Ranking:
                        <input 
                        onChange={handleChange}
                        name='country_ranking'
                        type="text"
                        placeholder='245,823'
                    />
                    </label>
                    
                    <label>
                        Hit accuracy (%):
                        <input 
                        onChange={handleChange}
                        name='hit_accuracy'
                        type="float"
                        placeholder='95.56'
                    />
                    </label>
                   
                    <label>
                        Mate color:
                        <select 
                            name='color' 
                            onChange={handleChange}
                        >
                            <option value="null">-select-</option>
                            <option value="blue">blue</option>
                            <option value="purple">purple</option>
                            <option value="pink">pink</option>
                            <option value="green">green</option>
                            <option value="orange">orange</option>
                        </select>
                    </label>
                    
                    <button className='primary-btn'>Create Mate</button>
                </form>
            </div>
        </div>
    )
}