
function ProjectListCard({title, pageThumb}) {
    return(
        <div className="project-list-card">
            <h1>{title}</h1>
            <img src={pageThumb} alt="project thumbnail"/>
        </div>
    )
}

export default ProjectListCard