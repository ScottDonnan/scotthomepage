import '../App.css'
import runeTradeDemo from '../videos/RuneTradeDemo.mp4'
import deckBuildingDemo from '../videos/Deck Building App.mov'
import dectionaryDemo from '../videos/Dictionary Demo.mov'
import {useEffect, useState} from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
            console.log(screenWidth)
        }
        window.addEventListener('resize', handleResize)
    })
    
    let vid;
    if(screenWidth >= 1464) {
        vid = <video width="500" controls>
                        <source src={runeTradeDemo} type="video/mp4"/>
                    </video>
    } else {
        vid = <p>put small picture here</p>
    }  

    
    return(
        <div className="main-section">
            <div className="projects">            
                <h1>Projects</h1>
                <div id="project-container">
                    <ProjectCard title={"RuneTrade"} demoLink={"https://runetrade.herokuapp.com/"} githubLink={""} demoVid={vid}/>
                    <ProjectCard title={"Deck Builder App"}/>
                    <ProjectCard title={"Dictionary App"}/>
                    <ProjectCard title={"Dungeons & Dragons Monster Compendium"}/>
                    {/* <div>
                        <a>React-tionary</a>
                        <a>Github</a>
                        {vid}
                    </div>
                    <div>
                        <a>Dungeons & Dragons Monster Compendium</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Projects