import {Link} from 'react-router-dom'

function ProjectCard({title, link, demoLink, githubLink, githubBackendLink, demoVid, screenWidth, siteThumb}) {
    
    return(
        <div>
            <a href={link}>{title}</a>
            <a href={githubLink}>Github</a>
            { githubBackendLink ? <a href={githubBackendLink}>Backend</a> : null }
            { screenWidth >= 1464 ? demoVid : <img src={siteThumb} /> }
            {demoLink ? <iframe width="640" height="480" src={demoLink}/> : null }
            <Link to="/">ALL PROJECTS</Link>
        </div>
    )
}

export default ProjectCard