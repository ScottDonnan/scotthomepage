import {useEffect} from 'react'

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
                <button href="#" onClick={(e) => goToSection(aboutEl, e)}>ABOUT</button>
                <button href="#" onClick={(e) => goToSection(projectsEl, e)}>PROJECTS</button>
                {/* <a href='#' onClick={(e) => goToSection(educationEl, e)}>Education</a> */}
                <button href="#" onClick={(e) => goToSection(linkEl, e)}>CONTACT</button>
            </ul>
        </nav>
    )
}

export default Navbar