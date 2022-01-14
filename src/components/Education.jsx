import EducationCard from "./EducationCard"

function Education() {
    const educationObj = [
        {'name': "Baylor University", 'location': "Waco, TX", 'degree': "Bachaelor or Music"}, 
        {'name': "Flatiron School", 'location': "Virtual", 'degree': "Software Engineering Certification"},
        {'name': "University of Houston, Bauer College of Business", 'location': "Houston, TX", 'degree': "Master or Business Administration"}
    ]
    
    return(
        <div className="main-section">
            <div id="education">
                <h1>Education</h1>
                {educationObj.map(school => <EducationCard name={school.name} location={school.location} degree={school.degree}/>)}
            </div>
        </div>
    )
}

export default Education