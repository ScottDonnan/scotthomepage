import '../App.css'
import scott from '../images/IMG_4311.jpeg'

function About() {
    return(
        <div className="main-section">
            <div className="about">
                <div>
                    <h1>Scott Donnan</h1>
                    <p>Full Stack Developer | MBA</p>
                </div>
                <div>
                    <h3>Summary</h3>
                    <p>Hi I'm Scott Donnan, a full stack developer with a diverse professional background.  I've spent over 10 years in business management, hospitality, retail, and music performance.  I have experience working with Ruby on Rails, JavaScript, and React.  My passion is creating new programs and solutions centered on improving customer experiences through technology.  I am dedicated to continuous growth, development, and sustainability.</p>
                    <p>If you're interested in working together or just want to connect, give me a shout.  My info is down at the bottom!</p>
                </div>
                <img src={scott}/>
            </div>
        </div>
    )
}

export default About