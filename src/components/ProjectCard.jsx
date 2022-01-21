import {Link} from 'react-router-dom'

function ProjectCard({title, link, demoLink, githubLink, githubBackendLink, demoVid, screenWidth, siteThumb}) {
    
    return(
        <div className="project-card">
            <a href={link}>{title}</a>
            <a href={githubLink}>Github</a>
            { githubBackendLink ? <a href={githubBackendLink}>Backend</a> : null }
            { screenWidth >= 640 ? <iframe id="large-frame" width="640" height="480" src={demoLink}/> : <iframe id="small-frame" src={demoLink}/> }
            {/* {demoLink ? <iframe width="640" height="480" src={demoLink}/> : null } */}
            <Link to="/">ALL PROJECTS</Link>
        </div>
    )
}

export default ProjectCard