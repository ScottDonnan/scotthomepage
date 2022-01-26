import '../App.css'
import {useRef} from 'react'

function About({screenWidth}) {
    const about = useRef(null)

    let aboutId;
    if (screenWidth > 800) {
        aboutId = 'about-large'
    } else {
        aboutId = 'about-small'
    }

    return(
        // <div ref={about} className="main-section">
            <div ref={about} id={aboutId}>
                <div>
                    <h1>Scott Donnan</h1>
                    <p>Full Stack Developer | MBA</p>
                    {/* <img src={scott}/> */}
                </div>
                <div>
                    <h3>About Me</h3>
                    <p>Hi I'm Scott Donnan, a full stack developer with a diverse professional background.  I've spent over 10 years in business management, hospitality, retail, and music performance.  I have experience working with Ruby on Rails, JavaScript, and React.  My passion is creating new programs and solutions centered on improving customer experiences through technology.  I am dedicated to continuous growth, development, and sustainability.</p>
                    <p>If you're interested in working together or just want to connect, give me a shout.  My info is down at the bottom!</p>
                </div>
            </div>
        // </div>
    )
}

export default About