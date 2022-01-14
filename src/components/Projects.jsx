import '../App.css'
import demo from '../videos/RuneTradeDemo.mp4'

function Projects() {
    return(
        <div className="main-section">
            <div className="projects">            
                <h1>Projects</h1>
                <div>
                    <a href="https://runetrade.herokuapp.com/">RuneTrade</a>
                    <video width="500" controls>
                        <source src={demo} type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <a>Plant Project</a>
                </div>
                <div>
                    <a>Hearthstone Deck Builder</a>
                </div>
                <div>
                    <a>React-tionary</a>
                </div>
                <div>
                    <a>Dungeons & Dragons Monster Compendium</a>
                </div>
            </div>
        </div>
    )
}

export default Projects