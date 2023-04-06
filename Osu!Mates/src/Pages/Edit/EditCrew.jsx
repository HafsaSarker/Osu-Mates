import './EditCrew.css'

export default function EditCrew() {
    return (
        <div className="EditCrew">
            <h1>Update your osu!Mate</h1>
            <img src='../../../public/create.webp' />

            <div className="currStat">
                <h3>Current osu!Mate Info: </h3>
                <div className="info">
                    <h4>Name: funnyBunny, Rank: 234,435, Accuracy: 95.56%</h4>
                </div>
            </div>

            <div className="form">
                <form className='edit-crew-form'>
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
                    
                    <div className="btn-container">
                        <button className='primary-btn'>Update Mate</button>

                        <button className='primary-btn'>Delete Mate</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
