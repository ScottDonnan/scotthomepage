import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Navbar({goToSection, aboutEl, projectsEl, linkEl, educationEl, screenWidth}) {
    
    useEffect(() => {
        function handleScroll() {
          console.log("scrollin")
        }
    
        window.addEventListener('scroll', handleScroll)
      })

      let navClass;
      if (screenWidth > 800) {
          navClass = 'nav-list-large'
      } else {
          navClass = 'nav-list-small'
      }

    return(
        <nav id={navClass}>
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