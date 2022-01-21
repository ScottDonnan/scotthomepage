import '../App.css'
import runeTradeDemo from '../videos/RuneTradeDemo.mp4'
import deckBuildingDemo from '../videos/Deck Building App.mov'
import dectionaryDemo from '../videos/Dictionary Demo.mov'
import deckBuilderThumb from '../images/deck-builder-thumb.png'
import {useEffect, useState} from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const runeTradeVid = <video width="500" controls>
                            <source src={runeTradeDemo} type="video/mp4"/>
                        </video>
    
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', handleResize)
    }) 

    return(
        <div className="main-section">
            <div className="projects">            
                <h1>Projects</h1>
                <div id="project-container">
                    <ProjectCard title={"RuneTrade"} link={"https://runetrade.herokuapp.com/"} demoLink={"https://drive.google.com/file/d/1Vny6HgpKgiQVFQOFlHf09zIubKAAHTUJ/view?usp=sharing"} githubLink={"https://github.com/ScottDonnan/traderune"} demoVid={runeTradeVid} screenWidth={screenWidth} siteThumb={deckBuilderThumb}/>
                    <ProjectCard title={"Deck Builder App"} demoLink={"https://drive.google.com/file/d/1iX1pzU66mTGpyzd2kyDtX-rFN2UIaJ-m/view?usp=sharing"} githubLink={"https://github.com/ScottDonnan/phase-3-project-frontend"} githubBackendLink={"https://github.com/ScottDonnan/phase-3-project-backend"}/>
                    <ProjectCard title={"Dictionary App"} link={"https://dictionary-thesaurus.herokuapp.com/"} demoLink={"https://drive.google.com/file/d/1hoCL4HC74nOjrJstKOhBY7JK1rmQDe09/view?usp=sharing"} githubLink={"https://github.com/ScottDonnan/dictionary-thesaurus"} githubBackendLink={"https://github.com/ScottDonnan/phase-2-project-dictionary-backend"}/>
                    <ProjectCard title={"Dungeons & Dragons Monster Compendium"} githubLink={"https://github.com/ScottDonnan/monster-project"}/>
                </div>
            </div>
        </div>
    )
}

export default Projects