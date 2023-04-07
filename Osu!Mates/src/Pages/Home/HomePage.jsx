import logo from '/logo.png';
import './HomePage.css'
export default function HomePage() {
    return (
        <div className='homePage'>
            <h1>Welcome to osu!Mate Creator!</h1>
            <h3>A place to create your very own set of osu!Mates to play multi mode with</h3>
            <img src={logo}/>
        </div>
    )
}