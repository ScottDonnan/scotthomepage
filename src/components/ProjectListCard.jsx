import {Link} from 'react-router-dom'

function ProjectListCard({title, pageThumb}) {
    return(
        <div className="project-list-card">
            <h1>{title}</h1>
            <img src={pageThumb}/>
        </div>
    )
}

export default ProjectListCard