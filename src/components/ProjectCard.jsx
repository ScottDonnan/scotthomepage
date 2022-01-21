function ProjectCard({title, link, demoLink, githubLink, githubBackendLink, demoVid, screenWidth, siteThumb}) {
    
    return(
        <div>
            <a href={link}>{title}</a>
            { demoLink ? <a href={demoLink}>Demo</a> : null }
            <a href={githubLink}>Github</a>
            { githubBackendLink ? <a href={githubBackendLink}>Backend</a> : null }
            { screenWidth >= 1464 ? demoVid : <img src={siteThumb} /> }
        </div>
    )
}

export default ProjectCard