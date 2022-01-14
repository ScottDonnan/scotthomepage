function EducationCard({name, location, degree}) {
    return(
        <div>
            <h3>{name}</h3>
            <p>{location}</p>
            <p>{degree}</p>
        </div>
    )
}

export default EducationCard