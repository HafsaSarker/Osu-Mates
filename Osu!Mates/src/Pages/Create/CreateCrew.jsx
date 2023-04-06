import './CreateCrew.css'

export default function CreateCrew() {
    return (
        <div className="createCrew">
            <h1>Create a new osu!Mate</h1>
            <img src='../../../public/create.webp' />

            <div className="form">
                <form className='create-crew-form'>
                    <label>
                        Name:
                        <input
                        type="text"
                        placeholder='funnyBunny'
                    />
                    </label>
                    
                    <label>
                        Country Ranking:
                        <input 
                        type="text"
                        placeholder='245,823'
                    />
                    </label>
                    
                    <label>
                        Hit accuracy (%):
                        <input 
                        type="number"
                        placeholder='95.56'
                    />
                    </label>
                   
                    <label>
                        Crew color:
                        <select>
                            <option value="null">-select-</option>
                            <option value="blue">blue</option>
                            <option value="purple">purple</option>
                            <option value="pink">pink</option>
                            <option value="green">green</option>
                            <option value="yellow">yellow</option>
                        </select>
                    </label>
                    
                    <button className='primary-btn'>Create Mate</button>
                </form>
            </div>
        </div>
    )
}