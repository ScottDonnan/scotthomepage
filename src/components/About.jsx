import '../App.css'
import scott from '../images/IMG_4311.jpeg'
import {useRef} from 'react'

function About({screenWidth, goToSection, linkEl}) {
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
                <div className="about-div">
                    <div id="name">
                        <h1>Scott Donnan</h1>
                    </div>
                    <p>Full Stack Developer | MBA</p>
                </div>
                <div className="about-div" id="description">
                    <h3>About Me</h3>
                    <p>Hi I'm Scott Donnan, a full stack developer with a diverse professional background.  I've spent over 10 years in business management, hospitality, retail, and music performance.  I have experience working with Ruby on Rails, JavaScript, and React.  My passion is creating new programs and solutions centered on improving customer experiences through technology.</p>
                    <p>Most recently I worked with an amazing group of people for Apple on the retail team.  I was promoted through a host of positions performing job duties that included store scheduling, inventory management, technical support, and sales.  I am always striving to do the best work of my life, help others, and learn something I didn't know yesterday.  Over the years I have cultivated a host of skills including:</p>
                    <ul className="skill-list">
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Ruby on Rails</li>
                        <li>SQL</li>
                        <li>ActiveRecord</li>
                        <li>Teamwork</li>
                        <li>Communication</li>
                        <li>Business Administration</li>
                        <li>Scheduling</li>
                        <li>Kronos</li>
                    </ul>
                    <p>If you're interested in working together or just want to connect, give me a shout.  My info is down at the bottom!</p>
                    <button onClick={(e) => goToSection(linkEl, e)}>Connect</button>
                </div>
                {/* <img id="about-pic" src={scott} alt="portrait of Scott Donnan"/> */}
            </div>
        // </div>
    )
}

export default About