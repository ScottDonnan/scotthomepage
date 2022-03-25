
function Navbar({goToSection, aboutEl, projectsEl, linkEl, educationEl, screenWidth, show}) {

    let navClass;
    if (screenWidth > 900) {
        navClass = 'nav-list-large'
    } else {
        navClass = 'nav-list-small'
    }

    const navigation = <ul>
                            <button href="#" onClick={(e) => goToSection(aboutEl, e)}>ABOUT</button>
                            <button href="#" onClick={(e) => goToSection(projectsEl, e)}>PROJECTS</button>
                            {/* <a href='#' onClick={(e) => goToSection(educationEl, e)}>Education</a> */}
                            <button href="#" onClick={(e) => goToSection(linkEl, e)}>CONTACT</button>
                        </ul>

    return(
        <nav id={navClass}>
            {show ? navigation : null}
        </nav>
    )
}

export default Navbar