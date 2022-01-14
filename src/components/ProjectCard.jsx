function ProjectCard({title, demoLink, githubLink, demoVid, screenWidth}) {
    
    return(
        <div>
            <a href={demoLink}>{title}</a>
            <a href={githubLink}>Github</a>
            {screenWidth >= 1464 ? demoVid : <p>put small picture here</p>}
        </div>
    )
}

export default ProjectCard