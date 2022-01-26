import '../App.css'
import ddThumb from '../images/d&d-thumb.png'
import ProjectCard from './ProjectCard'
import {Routes, Route} from 'react-router-dom'
import ProjectList from './ProjectList'

function Projects({screenWidth}) {
    // const runeTradeVid = <video width="500" controls>
    //                         <source src={runeTradeDemo} type="video/mp4"/>
    //                     </video>

    const runetradeDemo = "https://www.youtube.com/embed/QKCvQ8hZCig"
    const dictionaryDemo = "https://www.youtube.com/embed/QzK3UfEkYXI"
    const deckBuildingDemo = "https://www.youtube.com/embed/YPVNzigMX6Y"

    return(
            <div className="projects">            
                <h1>Projects</h1>
                <Routes>
                    <Route path='/' element={<ProjectList screenWidth={screenWidth}/>} />
                    <Route path='runetrade' element={<ProjectCard title={"RuneTrade"} link={"https://runetrade.herokuapp.com/"} demoLink={runetradeDemo} githubLink={"https://github.com/ScottDonnan/traderune"} screenWidth={screenWidth} />} />
                    <Route path='dictionary' element={<ProjectCard title={"Dictionary App"} link={"https://dictionary-thesaurus.herokuapp.com/"} demoLink={dictionaryDemo} githubLink={"https://github.com/ScottDonnan/dictionary-thesaurus"} githubBackendLink={"https://github.com/ScottDonnan/phase-2-project-dictionary-backend"} screenWidth={screenWidth} />} />
                    <Route path='deckbuilder' element={<ProjectCard title={"Deck Builder App"} demoLink={deckBuildingDemo} githubLink={"https://github.com/ScottDonnan/phase-3-project-frontend"} githubBackendLink={"https://github.com/ScottDonnan/phase-3-project-backend"} screenWidth={screenWidth} />} />
                    <Route path='dandd' element={<ProjectCard title={"Dungeons & Dragons Monster Compendium"} githubLink={"https://github.com/ScottDonnan/monster-project"} siteThumb={ddThumb} screenWidth={screenWidth}/> }/>
                </Routes>
            </div>
    )
}

export default Projects