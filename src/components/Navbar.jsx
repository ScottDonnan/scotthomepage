import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Navbar({goToSection, aboutEl, projectsEl, linkEl, educationEl}) {
    useEffect(() => {
        function handleScroll() {
          console.log("scrollin")
        }
    
        window.addEventListener('scroll', handleScroll)
      })

    return(
        <nav id='nav'>
            <ul>
                <a href="#" onClick={(e) => goToSection(aboutEl, e)}>ABOUT</a>
                <a href="#" onClick={(e) => goToSection(projectsEl, e)}>PROJECTS</a>
                {/* <a href='#' onClick={(e) => goToSection(educationEl, e)}>Education</a> */}
                <a href="#" onClick={(e) => goToSection(linkEl, e)}>CONTACT</a>
            </ul>
        </nav>
    )
}

export default Navbar