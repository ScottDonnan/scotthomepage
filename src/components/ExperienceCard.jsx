function ExperienceCard({company, location, year, name, description, bullets}) {
    return(
        <div>
            <h3>{company}</h3>
            <p>{location}</p>
            <p>{year}</p>
            <p>{name}</p>
            <p>{description}</p>
            <ul>
                {bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    )
}

export default ExperienceCard