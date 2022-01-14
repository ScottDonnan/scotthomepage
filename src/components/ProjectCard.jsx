function ProjectCard({title, demoLink, githubLink, demoVid}) {
    return(
        <div>
            <a href={demoLink}>{title}</a>
            <a href={githubLink}>Github</a>
            {demoVid}
        </div>
    )
}

export default ProjectCard