import deckBuilderThumb from '../images/deck-builder-thumb.png'
import dictionaryThumb from '../images/dictionary-thumb.png'
import runetradeThumb from '../images/runetrade-thumb.png'
import ddThumb from '../images/d&d-thumb.png'
import ProjectListCard from "./ProjectListCard"
import {Link} from 'react-router-dom'

function ProjectList({screenWidth}) {
    let projectsClass;
    if (screenWidth > 900) {
        projectsClass = 'project-list-large'
    } else {
        projectsClass = 'project-list-small'
    }

    return (
        <div id={projectsClass}>
            <Link to="runetrade">
                <ProjectListCard title={"RuneTrade"} pageThumb={runetradeThumb} projectLink={"runetrade"}/>
            </Link>
            <Link to="dictionary">
                <ProjectListCard title={"Dictionary"} pageThumb={dictionaryThumb}/>
            </Link>
            <Link to="deckbuilder">
                <ProjectListCard title={"Hearthstone Deck Builder"} pageThumb={deckBuilderThumb}/>
            </Link>
            <Link to="dandd">
                <ProjectListCard title={"Dungeons & Dragons Monster Compendium"} pageThumb={ddThumb}/>
            </Link>
        </div>
    )
}

export default ProjectList