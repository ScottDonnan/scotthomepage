import '../App.css'
import {useState} from 'react'

function About({screenWidth, show, setShow, goToSection, linkEl}) {
    // const skills = useRef(null)
    // let tracker = window.scrollY
    // const start = -0.5 * window.innerWidth - 730
    // const [positions, setPositions] = useState(0)
    // const [animate, setAnimate] = useState("hidden")
    const [position, setPosition] = useState('title')
    const [view, setView] = useState({height: '100vh'})

    let aboutId;
    if (screenWidth > 800) {
        aboutId = 'about-large'
    } else {
        aboutId = 'about-small'
    }

    // function handleClick() {
    //     if (animate === "hidden") {
    //         setAnimate('skills-animate')
    //     } else if (animate === "skill-list") {
    //         setAnimate("skills-animate")
    //     } else {
    //         setAnimate("skill-list")
    //     }
    // }


    window.addEventListener('scroll', handleScroll)
    function handleScroll() {
        setShow(true)
        setPosition('title-top')
        setView(null)
    }


    // function handleScroll() {
    //     let direction;
    //     if (window.scrollY >= tracker) {
    //         tracker = window.scrollY
    //         direction = 'down'
    //     } else {
    //         tracker = window.scrollY
    //         direction = 'up'
    //     }

    //     if(direction === 'down' && positions - (start/30) <= (start/30)) {
    //         console.log(positions, (start / 30), direction)
    //         setPositions((prev) => prev - (start / 30))
    //         window.removeEventListener('scroll', handleScroll)
    //     } 
    // }

    const description = <div className="about-div" id="description">
                            <h3>About Me</h3>
                            <p>Hi I'm Scott Donnan, a full stack developer with a diverse professional background.  I've spent over 10 years in business management, hospitality, retail, and music performance.  I have experience working with Ruby on Rails, JavaScript, and React.  My passion is creating new programs and solutions centered on improving customer experiences through technology.</p>
                            <p>Most recently I worked with an amazing group of people for Apple on the retail team.  I was promoted through a host of positions performing job duties that included store scheduling, inventory management, technical support, and sales.  I am always striving to do the best work of my life, help others, and learn something I didn't know yesterday.  Over the years I have cultivated a host of skills including:</p>
                            
                            <p>If you're interested in working together or just want to connect, give me a shout.  My info is down at the bottom!</p>
                        </div> 
                        
    // const skillList = <div ref={skills}>
    //                         <ul className={animate}>
    //                             <li>JavaScript</li>
    //                             <li>React</li>
    //                             <li>Ruby on Rails</li>
    //                             <li>SQL</li>
    //                             <li>ActiveRecord</li>
    //                             <li>Teamwork</li>
    //                             <li>Communication</li>
    //                             <li>Business Administration</li>
    //                             <li>Scheduling</li>
    //                             <li>Kronos</li>
    //                         </ul>
    //                     </div>

    return(
            <div id={aboutId} style={view}>
                <div className="about-div" id={position}>
                    <div id="name">
                        <h1>Scott Donnan</h1>
                    </div>
                    <p>Full Stack Developer | MBA</p>
                </div>
                {show ? description : null}
                {/* <button id='skills-button' onClick={handleClick}>Skills</button> */}
                {/* {show ? skillList : null} */}
            </div>
    )
}

export default About