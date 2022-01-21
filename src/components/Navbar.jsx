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
                <a href="#" onClick={(e) => goToSection(aboutEl, e)}>About</a>
                <a href="#" onClick={(e) => goToSection(projectsEl, e)}>Projects</a>
                {/* <a href='#' onClick={(e) => goToSection(educationEl, e)}>Education</a> */}
                <a href="#" onClick={(e) => goToSection(linkEl, e)}>Links</a>
            </ul>
        </nav>
    )
}

export default Navbar