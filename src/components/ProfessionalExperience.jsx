import ExperienceCard from "./ExperienceCard"
import '../App.css'

function ProfessionalExperience() {
    
    const appleExperience = {
        "company": "Apple",
        "roles": [
            {
                "name": "Schedule Planner",
                "location": "Houston, TX",
                "year": "2017-2021",
                "description": "Managed employee schedules for over 100 employees including time off requests, payroll allocation, Genius Bar appointments, and Today at Apple workshops",
                "bullets": ["Exceeded scheduling guidance by accurately executing a scheduling strategy that resulted in decreased customer wait times, increased appointment availability, and an improved customer experience", "Collaborated closely with leadership to anticipate sales, new product launches, and employee onboarding", "Utilized Kronos scheduling technology on a daily basis to administer employee schedules significantly improving our employee Net Promoter Score", "Effectively allocated payroll resources from quarter to quarter while maintaining usage within 2%(+/-) of budget"],
            },
            {
                "name": "Genius Room Administrator",
                "location": "Houston, TX",
                "year": "2014-2017",
                "description": "Coordinated all Mac and iPhone repairs to ensure timely completion and managed repair component inventory",
                "bullets": ["Maintained accurate accounting of over 700 unique inventory items using SAP", "Achieved and consistently maintained 99+% accuracy on service inventory over multiple Inventory Audits", "Demonstrated skill in time-management, communication, and attention to detail resulting in promotion to Schedule Planner, a newly created company wide position"]
            }
        ]
    }
    
    console.log(appleExperience)

    return(
        <div className="main-section">
            <div className="prof-exp">
                <h1>Professional Experience</h1>
                {appleExperience.roles.map((role, index) => <ExperienceCard key={index} company={appleExperience.company} name={role.name} location={role.location} year={role.year} description={role.description} bullets={role.bullets}/>)}
            </div>
        </div>
    )
}

export default ProfessionalExperience